-- Remove the old storage policies
DROP POLICY IF EXISTS "Authenticated users can upload news media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update news media" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete news media" ON storage.objects;

-- Allow public read access to news-media bucket
CREATE POLICY "News media are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'news-media');

-- Remove media management policies
DROP POLICY IF EXISTS "Authenticated users can insert news media" ON public.news_media;
DROP POLICY IF EXISTS "Authenticated users can update news media" ON public.news_media;
DROP POLICY IF EXISTS "Authenticated users can delete news media" ON public.news_media;