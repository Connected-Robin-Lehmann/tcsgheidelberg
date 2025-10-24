-- Create news_items table
CREATE TABLE public.news_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.news_items ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view news items
CREATE POLICY "Anyone can view news items"
ON public.news_items
FOR SELECT
USING (true);

-- Create news_media table for storing media references
CREATE TABLE public.news_media (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  news_item_id UUID NOT NULL REFERENCES public.news_items(id) ON DELETE CASCADE,
  file_path TEXT NOT NULL,
  file_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.news_media ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view news media
CREATE POLICY "Anyone can view news media"
ON public.news_media
FOR SELECT
USING (true);

-- Create trigger for automatic timestamp updates on news_items
CREATE TRIGGER update_news_items_updated_at
BEFORE UPDATE ON public.news_items
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for news media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('news-media', 'news-media', true);

-- Storage policies for news-media bucket
CREATE POLICY "News media are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'news-media');

-- Create index for better performance
CREATE INDEX idx_news_items_date ON public.news_items(date DESC);
CREATE INDEX idx_news_items_category ON public.news_items(category);
CREATE INDEX idx_news_media_news_item ON public.news_media(news_item_id);