
CREATE POLICY "Public read modal-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'modal-images');

CREATE POLICY "Admins insert modal-images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'modal-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update modal-images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'modal-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete modal-images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'modal-images' AND public.has_role(auth.uid(), 'admin'));
