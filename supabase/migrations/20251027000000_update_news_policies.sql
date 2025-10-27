-- Remove old policies that allowed authenticated users to manage news
DROP POLICY IF EXISTS "Authenticated users can insert news items" ON public.news_items;
DROP POLICY IF EXISTS "Authenticated users can update news items" ON public.news_items;
DROP POLICY IF EXISTS "Authenticated users can delete news items" ON public.news_items;

-- Keep the policy that allows anyone to view news items
-- This one stays because we want the news to be publicly readable
-- CREATE POLICY "Anyone can view news items" ON public.news_items FOR SELECT USING (true);

-- Remove media management policies (we'll handle this through edge functions too)
DROP POLICY IF EXISTS "Authenticated users can insert news media" ON public.news_media;
DROP POLICY IF EXISTS "Authenticated users can update news media" ON public.news_media;
DROP POLICY IF EXISTS "Authenticated users can delete news media" ON public.news_media;

-- Keep the policy that allows anyone to view news media
-- CREATE POLICY "Anyone can view news media" ON public.news_media FOR SELECT USING (true);