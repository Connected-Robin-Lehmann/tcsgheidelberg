-- Create storage bucket for club videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('club-videos', 'club-videos', true);

-- Allow public read access
CREATE POLICY "Club videos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'club-videos');

-- Allow authenticated admins to upload
CREATE POLICY "Admins can upload club videos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'club-videos' AND public.has_role(auth.uid(), 'admin'));

-- Allow authenticated admins to update
CREATE POLICY "Admins can update club videos"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'club-videos' AND public.has_role(auth.uid(), 'admin'));

-- Allow authenticated admins to delete
CREATE POLICY "Admins can delete club videos"
ON storage.objects
FOR DELETE
USING (bucket_id = 'club-videos' AND public.has_role(auth.uid(), 'admin'));