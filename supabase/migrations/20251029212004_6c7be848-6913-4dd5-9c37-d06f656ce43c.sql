-- Allow anyone to upload to the editor-images folder in news-media bucket
CREATE POLICY "Allow uploads to editor-images folder"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'news-media' 
  AND (storage.foldername(name))[1] = 'editor-images'
);

-- Allow anyone to update files in editor-images folder
CREATE POLICY "Allow updates to editor-images folder"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'news-media' 
  AND (storage.foldername(name))[1] = 'editor-images'
);