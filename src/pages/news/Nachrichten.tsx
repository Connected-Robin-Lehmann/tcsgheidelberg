import { useState, useMemo, useEffect } from "react";
import { Calendar, Trophy, Newspaper, Users, Filter, FileText, File, Download, LayoutGrid, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
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
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
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
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "Spiel":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "Veranstaltung":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Allgemein":
        return "bg-purple-100 text-purple-800 border border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
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

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('pdf')) return FileText;
    if (fileType.includes('word') || fileType.includes('document')) return FileText;
    return File;
  };

  const getFileName = (filePath: string) => {
    return filePath.split('/').pop() || 'Datei';
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
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nachrichten</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Aktuelle Berichte von Turnieren, Spielen und Vereinsgeschehen
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-tennis-yellow" />
                  <span className="text-sm font-medium text-tennis-black">Filtern nach:</span>
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

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-tennis-black">Ansicht:</span>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-tennis-yellow text-tennis-black hover:bg-tennis-yellow-light" : ""}
                >
                  <LayoutList className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-tennis-yellow text-tennis-black hover:bg-tennis-yellow-light" : ""}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredNews.length === 0 ? (
              <Card className="card-tennis">
                <div className="text-center py-12">
                  <Newspaper className="h-12 w-12 mx-auto mb-4 text-tennis-yellow" />
                  <h3 className="text-xl font-semibold mb-2 text-tennis-black">
                    Keine Nachrichten gefunden
                  </h3>
                  <p className="text-gray-600">
                    Versuchen Sie, die Filter anzupassen.
                  </p>
                </div>
              </Card>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
                {filteredNews.map((item) => {
                  const Icon = categoryIcons[item.category] || Newspaper;
                  const media = newsMedia[item.id] || [];
                  const firstImage = media.find(m => m.file_type.startsWith('image/'));
                  
                  if (viewMode === "grid") {
                    return (
                      <Card
                        key={item.id}
                        className="card-tennis border-t-4 border-t-tennis-yellow flex flex-col h-full"
                      >
                        {firstImage && (
                          <div className="w-full h-48">
                            <img
                              src={getMediaUrl(firstImage.file_path)}
                              alt={item.title}
                              className="w-full h-full object-cover rounded-t-lg"
                            />
                          </div>
                        )}
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                                item.category
                              )}`}
                            >
                              <Icon className="h-3 w-3" />
                              {categoryLabels[item.category] || item.category}
                            </span>
                          </div>
                          <time className="text-xs text-gray-600 mb-2">
                            {format(new Date(item.date), "dd. MMM yyyy", { locale: de })}
                          </time>
                          <h3 className="text-lg font-bold mb-2 text-tennis-black line-clamp-2">{item.title}</h3>
                          <div 
                            className="text-sm text-gray-700 mb-4 line-clamp-3 flex-1"
                            dangerouslySetInnerHTML={{ 
                              __html: DOMPurify.sanitize(
                                item.content.length > 100
                                  ? `${item.content.substring(0, 100)}...`
                                  : item.content
                              ) 
                            }}
                          />
                          <Button 
                            className="bg-tennis-yellow text-tennis-black hover:bg-tennis-yellow-light font-semibold w-full"
                            onClick={() => openNewsDialog(item)}
                          >
                            Weiterlesen
                          </Button>
                        </div>
                      </Card>
                    );
                  }
                  
                  return (
                    <Card
                      key={item.id}
                      className="card-tennis border-l-4 border-l-tennis-yellow"
                    >
                      <div className="p-6">
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
                              <time className="text-sm text-gray-600">
                                {format(new Date(item.date), "dd. MMM yyyy", { locale: de })}
                              </time>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-tennis-black">{item.title}</h3>
                            <div 
                              className="text-gray-700 mb-4 line-clamp-3"
                              dangerouslySetInnerHTML={{ 
                                __html: DOMPurify.sanitize(
                                  item.content.length > 150
                                    ? `${item.content.substring(0, 150)}...`
                                    : item.content
                                ) 
                              }}
                            />
                            <Button 
                              className="bg-tennis-yellow text-tennis-black hover:bg-tennis-yellow-light font-semibold"
                              onClick={() => openNewsDialog(item)}
                            >
                              Weiterlesen
                            </Button>
                          </div>
                          {firstImage && (
                            <div className="w-40 h-40 flex-shrink-0">
                              <img
                                src={getMediaUrl(firstImage.file_path)}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
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
                <div 
                  className="prose prose-sm max-w-none text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: DOMPurify.sanitize(selectedNews.content) 
                  }}
                />

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
                          const FileIcon = getFileIcon(media.file_type);
                          const fileName = getFileName(media.file_path);
                          
                          return (
                            <a
                              key={media.id}
                              href={getMediaUrl(media.file_path)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent transition-colors group"
                            >
                              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                                <FileIcon className="h-8 w-8 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium truncate group-hover:text-primary transition-colors">
                                  {fileName}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {media.file_type.split('/')[1]?.toUpperCase() || 'Datei'}
                                </p>
                              </div>
                              <Download className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
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
