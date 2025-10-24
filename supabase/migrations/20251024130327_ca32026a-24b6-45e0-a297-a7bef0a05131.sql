-- Add policies for news_items management (temporarily allow all authenticated users to manage)
-- In production, you should restrict this to admin users only

CREATE POLICY "Authenticated users can insert news items"
ON public.news_items
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update news items"
ON public.news_items
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete news items"
ON public.news_items
FOR DELETE
TO authenticated
USING (true);

-- Add policies for news_media management
CREATE POLICY "Authenticated users can insert news media"
ON public.news_media
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update news media"
ON public.news_media
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete news media"
ON public.news_media
FOR DELETE
TO authenticated
USING (true);

-- Storage policies for uploading to news-media bucket
CREATE POLICY "Authenticated users can upload news media"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'news-media');

CREATE POLICY "Authenticated users can update news media"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'news-media');

CREATE POLICY "Authenticated users can delete news media"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'news-media');