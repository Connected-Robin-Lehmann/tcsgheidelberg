import { useState, useMemo, useEffect } from "react";
import { Calendar, Trophy, Newspaper, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  created_at: string;
}

interface NewsMedia {
  id: string;
  news_item_id: string;
  file_path: string;
  file_type: string;
}

const categoryLabels: Record<string, string> = {
  Turnier: "Turniere",
  Spiel: "Spielberichte",
  Veranstaltung: "Veranstaltungen",
  Allgemein: "Allgemeines",
};

const categoryIcons: Record<string, any> = {
  Turnier: Trophy,
  Spiel: Users,
  Veranstaltung: Calendar,
  Allgemein: Newspaper,
};

export default function Nachrichten() {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [newsMedia, setNewsMedia] = useState<Record<string, NewsMedia[]>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadNewsItems();
  }, []);

  const loadNewsItems = async () => {
    try {
      const { data, error } = await supabase
        .from('news_items')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setNewsItems(data || []);

      // Load media for all news items
      if (data && data.length > 0) {
        const { data: mediaData, error: mediaError } = await supabase
          .from('news_media')
          .select('*')
          .in('news_item_id', data.map(item => item.id));

        if (mediaError) throw mediaError;

        // Group media by news_item_id
        const mediaByNewsItem: Record<string, NewsMedia[]> = {};
        mediaData?.forEach((media) => {
          if (!mediaByNewsItem[media.news_item_id]) {
            mediaByNewsItem[media.news_item_id] = [];
          }
          mediaByNewsItem[media.news_item_id].push(media);
        });

        setNewsMedia(mediaByNewsItem);
      }
    } catch (error: any) {
      toast({
        title: 'Fehler beim Laden',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Extrahiere verfügbare Monate
  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    newsItems.forEach((item) => {
      const monthKey = format(new Date(item.date), "yyyy-MM");
      months.add(monthKey);
    });
    return Array.from(months).sort().reverse();
  }, [newsItems]);

  // Filtere Nachrichten
  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const monthMatch =
        selectedMonth === "all" ||
        format(new Date(item.date), "yyyy-MM") === selectedMonth;
      const categoryMatch =
        selectedCategory === "all" || item.category === selectedCategory;
      return monthMatch && categoryMatch;
    });
  }, [selectedMonth, selectedCategory, newsItems]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Turnier":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300";
      case "Spiel":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
      case "Veranstaltung":
        return "bg-green-500/10 text-green-700 dark:text-green-300";
      case "Allgemein":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getMediaUrl = (filePath: string) => {
    const { data } = supabase.storage.from('news-media').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const openNewsDialog = (item: NewsItem) => {
    setSelectedNews(item);
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-20">
          <p className="text-lg text-muted-foreground">Lädt Nachrichten...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nachrichten</h1>
            <p className="text-xl text-muted-foreground">
              Aktuelle Berichte von Turnieren, Spielen und Vereinsgeschehen
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filtern nach:</span>
            </div>

            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Monat wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Monate</SelectItem>
                {availableMonths.map((month) => (
                  <SelectItem key={month} value={month}>
                    {format(new Date(month + "-01"), "MMMM yyyy", {
                      locale: de,
                    })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Kategorie wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Alle Kategorien</SelectItem>
                {Object.keys(categoryLabels).map((key) => (
                  <SelectItem key={key} value={key}>
                    {categoryLabels[key]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(selectedMonth !== "all" || selectedCategory !== "all") && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedMonth("all");
                  setSelectedCategory("all");
                }}
              >
                Filter zurücksetzen
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <Newspaper className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">
                Keine Nachrichten gefunden
              </h3>
              <p className="text-muted-foreground">
                Versuchen Sie, die Filter anzupassen.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNews.map((item) => {
                const Icon = categoryIcons[item.category] || Newspaper;
                const media = newsMedia[item.id] || [];
                const firstImage = media.find(m => m.file_type.startsWith('image/'));
                
                return (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <span
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                                item.category
                              )}`}
                            >
                              <Icon className="h-3 w-3" />
                              {categoryLabels[item.category] || item.category}
                            </span>
                            <time className="text-sm text-muted-foreground">
                              {format(new Date(item.date), "dd. MMM yyyy", { locale: de })}
                            </time>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground mb-4">
                            {item.content.length > 150
                              ? `${item.content.substring(0, 150)}...`
                              : item.content}
                          </p>
                          <Button 
                            variant="outline" 
                            onClick={() => openNewsDialog(item)}
                          >
                            Weiterlesen
                          </Button>
                        </div>
                        {firstImage && (
                          <div className="w-32 h-32 flex-shrink-0">
                            <img
                              src={getMediaUrl(firstImage.file_path)}
                              alt={item.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedNews && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      selectedNews.category
                    )}`}
                  >
                    {categoryIcons[selectedNews.category] && (
                      (() => {
                        const Icon = categoryIcons[selectedNews.category];
                        return <Icon className="h-3 w-3" />;
                      })()
                    )}
                    {categoryLabels[selectedNews.category] || selectedNews.category}
                  </span>
                  <time className="text-sm text-muted-foreground">
                    {format(new Date(selectedNews.date), "dd. MMMM yyyy", { locale: de })}
                  </time>
                </div>
                <DialogTitle className="text-3xl font-bold">
                  {selectedNews.title}
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {selectedNews.content}
                </p>

                {newsMedia[selectedNews.id] && newsMedia[selectedNews.id].length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Bilder und Dateien</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {newsMedia[selectedNews.id].map((media) => {
                        if (media.file_type.startsWith('image/')) {
                          return (
                            <div key={media.id} className="rounded-lg overflow-hidden">
                              <img
                                src={getMediaUrl(media.file_path)}
                                alt="News media"
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          );
                        } else {
                          return (
                            <div key={media.id} className="p-4 border rounded-lg">
                              <a
                                href={getMediaUrl(media.file_path)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Datei herunterladen
                              </a>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
