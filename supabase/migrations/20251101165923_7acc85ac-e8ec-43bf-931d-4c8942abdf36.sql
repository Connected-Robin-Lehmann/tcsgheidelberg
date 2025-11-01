-- Create app_role enum for role-based access control
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table to store user roles
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Update news_items RLS policies to require admin role
DROP POLICY IF EXISTS "Authenticated users can insert news items" ON public.news_items;
DROP POLICY IF EXISTS "Authenticated users can update news items" ON public.news_items;
DROP POLICY IF EXISTS "Authenticated users can delete news items" ON public.news_items;

CREATE POLICY "Admins can insert news items"
ON public.news_items
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update news items"
ON public.news_items
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete news items"
ON public.news_items
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Update news_media RLS policies to require admin role
DROP POLICY IF EXISTS "Authenticated users can insert news media" ON public.news_media;
DROP POLICY IF EXISTS "Authenticated users can update news media" ON public.news_media;
DROP POLICY IF EXISTS "Authenticated users can delete news media" ON public.news_media;

CREATE POLICY "Admins can insert news media"
ON public.news_media
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update news media"
ON public.news_media
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete news media"
ON public.news_media
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Update modal_settings RLS to require admin role for modifications
CREATE POLICY "Admins can update modal settings"
ON public.modal_settings
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Make news-media bucket private and add proper policies
UPDATE storage.buckets SET public = false WHERE id = 'news-media';

-- Drop existing storage policies
DROP POLICY IF EXISTS "Allow editor image uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow editor image updates" ON storage.objects;

-- Create secure storage policies
CREATE POLICY "Admins can upload to news-media"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'news-media'
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can update news-media files"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'news-media'
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can delete news-media files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'news-media'
  AND public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Public can view news-media files"
ON storage.objects
FOR SELECT
USING (bucket_id = 'news-media');

-- Drop the insecure admin_users table
DROP TABLE IF EXISTS public.admin_users CASCADE;