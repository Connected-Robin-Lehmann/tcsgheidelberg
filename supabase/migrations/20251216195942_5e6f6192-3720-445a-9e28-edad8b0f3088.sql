-- Create storage bucket for tennis info hefte
INSERT INTO storage.buckets (id, name, public)
VALUES ('tennis-info-hefte', 'tennis-info-hefte', true);

-- Allow public read access to tennis-info-hefte bucket
CREATE POLICY "Anyone can view tennis info hefte"
ON storage.objects
FOR SELECT
USING (bucket_id = 'tennis-info-hefte');

-- Allow admins to upload tennis info hefte
CREATE POLICY "Admins can upload tennis info hefte"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'tennis-info-hefte' AND has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to update tennis info hefte
CREATE POLICY "Admins can update tennis info hefte"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'tennis-info-hefte' AND has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to delete tennis info hefte
CREATE POLICY "Admins can delete tennis info hefte"
ON storage.objects
FOR DELETE
USING (bucket_id = 'tennis-info-hefte' AND has_role(auth.uid(), 'admin'::app_role));