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
  const [isLoading, setIsLoading] = useState(true);
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => {
                const Icon = categoryIcons[item.category] || Newspaper;
                return (
                  <Card
                    key={item.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
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
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {item.content}
                      </p>
                      <Button variant="outline" className="w-full">
                        Weiterlesen
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
