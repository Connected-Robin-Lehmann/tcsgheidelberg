-- Create page_status table
CREATE TABLE public.page_status (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name TEXT NOT NULL,
  page_path TEXT NOT NULL UNIQUE,
  implemented BOOLEAN NOT NULL DEFAULT true,
  finalized BOOLEAN NOT NULL DEFAULT false,
  translated BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.page_status ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view page status"
ON public.page_status
FOR SELECT
USING (true);

CREATE POLICY "Admins can update page status"
ON public.page_status
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert page status"
ON public.page_status
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Add trigger for updated_at
CREATE TRIGGER update_page_status_updated_at
BEFORE UPDATE ON public.page_status
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial data for implemented pages
INSERT INTO public.page_status (page_name, page_path, implemented, finalized, translated) VALUES
('Startseite', '/', true, true, true),
('Der Club', '/der-club', true, true, true),
('Tradition', '/tradition', true, true, true),
('Vorstand', '/vorstand', true, true, true),
('Tennisplätze', '/tennisplaetze', true, true, false),
('Mitgliedschaft', '/mitgliedschaft', true, true, false),
('Beitragsordnung', '/beitragsordnung', true, true, false),
('Satzung', '/satzung', true, true, false),
('Platzordnung', '/platzordnung', true, true, false),
('Förderverein', '/foerderverein', true, true, false),
('Sponsoring', '/sponsoring', true, true, false),
('Training', '/training', true, true, false),
('Tennisschule PTS Kukaras', '/tennisschule-pts-kukaras', true, true, false),
('Tennisschule Seibold', '/tennisschule-seibold', true, true, false),
('Unsere Trainer', '/unsere-trainer', true, true, false),
('Mannschaften', '/mannschaften', true, true, false),
('Jugend', '/jugend', true, true, false),
('Regelwerk', '/regelwerk', true, true, false),
('Turniere', '/turniere', true, true, false),
('Rhein-Neckar Open', '/rhein-neckar-open', true, true, false),
('Schwarz-Gelb Cup', '/schwarz-gelb-cup', true, true, false),
('Aktuelles', '/aktuelles', true, true, false),
('Nachrichten', '/nachrichten', true, true, false),
('Pressemeldungen', '/pressemeldungen', true, true, false),
('Veranstaltungen', '/veranstaltungen', true, true, false),
('Ansprechpartner', '/ansprechpartner', true, true, false),
('Projekte', '/projekte', true, true, false),
('Crowdfunding', '/crowdfunding', true, true, false),
('Tennis Info Heft', '/tennis-info-heft', true, true, false),
('Tiebreaking News', '/tiebreaking-news', true, true, false),
('Gastronomie', '/gastronomie', true, true, true),
('FAQ', '/faq', true, true, false),
('Impressum', '/impressum', true, true, false),
('Datenschutz', '/datenschutz', true, true, false);