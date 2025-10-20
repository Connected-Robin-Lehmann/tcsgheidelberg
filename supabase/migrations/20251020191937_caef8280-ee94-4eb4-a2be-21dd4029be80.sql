-- Create table for modal settings
CREATE TABLE public.modal_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.modal_settings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read modal settings (public facing)
CREATE POLICY "Anyone can view modal settings"
ON public.modal_settings
FOR SELECT
USING (true);

-- Create table for admin users
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Only admins can read admin users (we'll check this in the application layer)
CREATE POLICY "No direct access to admin users"
ON public.admin_users
FOR ALL
USING (false);

-- Insert default modal content
INSERT INTO public.modal_settings (title, content, is_active) VALUES (
  'Mitgliederversammlung am 19.10.2025 in Heidelberg-Kirchheim (Gasthaus Goldene Rose)',
  '<p><strong>Die Vorstandswahl findet statt und weitere wichtige Beschlüsse werden auf der nächsten Mitgliederversammlung am 19.10.25 ab 17.00h (Heidelberg-Kirchheim, Gasthaus Goldene Rose (Hegenichstr. 10)</strong></p>
<p><strong>Trotz der allseits bekannten Inflation der letzten Jahre und den erheblichen Kostensteigerungen, die wir auch als Verein stemmen mussten und nach wie vor müssen, ist die aktuell geltende Beitragsordnung seit 2021 (!!!) Jahren unverändert geblieben. Wir konnten entgegen dem allgemein Trend Beitragserhöhungen lange aufschieben. Ab 2026 ist nun auch bei uns eine der Kostenentwicklung entsprechende adäquate Anpassung der Beiträge an die Situation unvermeidlich.</strong></p>
<p><strong>Alle Mitglieder ab 16 Jahren sind willkommen und können abstimmen!</strong></p>
<p><strong>Der Vorstand</strong></p>',
  true
);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_modal_settings_updated_at
BEFORE UPDATE ON public.modal_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();