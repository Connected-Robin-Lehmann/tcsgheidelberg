import { useState, useMemo } from "react";
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
import Header from "@/components/Header";

interface NewsItem {
  id: string;
  title: string;
  date: Date;
  category: "tournament" | "match" | "club" | "general";
  excerpt: string;
  content: string;
  author?: string;
}

// Beispiel-Nachrichten
const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Erfolgreicher Auftakt beim Rhein-Neckar-Open 2025",
    date: new Date(2025, 4, 15),
    category: "tournament",
    excerpt:
      "Unser Turnier war ein voller Erfolg mit über 100 Teilnehmern aus der Region.",
    content:
      "Das diesjährige Rhein-Neckar-Open bot spannende Matches und faire Wettkämpfe...",
    author: "Turnierleitung",
  },
  {
    id: "2",
    title: "Herren 1 steigt in die Regionalliga auf",
    date: new Date(2025, 4, 10),
    category: "match",
    excerpt:
      "Nach einem spannenden Finale gegen TC Mannheim sichern sich unsere Herren den Aufstieg.",
    content: "Mit einem 6:3 Sieg im entscheidenden Match...",
    author: "Mannschaftsführer",
  },
  {
    id: "3",
    title: "Neue Clubanlage feierlich eröffnet",
    date: new Date(2025, 3, 20),
    category: "club",
    excerpt:
      "Die modernisierten Tennisplätze wurden im Beisein von Oberbürgermeister Dr. Würzner eingeweiht.",
    content:
      "Nach monatelanger Renovierung erstrahlen unsere Plätze in neuem Glanz...",
    author: "Vorstand",
  },
  {
    id: "4",
    title: "Jugendcamp in den Sommerferien",
    date: new Date(2025, 3, 5),
    category: "general",
    excerpt:
      "Anmeldungen für unser beliebtes Tenniscamp sind ab sofort möglich.",
    content: "Vom 1. bis 5. August bieten wir wieder unser Jugendcamp an...",
    author: "Jugendwart",
  },
  {
    id: "5",
    title: "Damen 1 gewinnen Schwarz-Gelb-Cup",
    date: new Date(2025, 2, 28),
    category: "tournament",
    excerpt: "Heimsieg beim traditionellen Vereinsturnier.",
    content: "In einem packenden Finale setzten sich unsere Damen durch...",
    author: "Turnierleitung",
  },
  {
    id: "6",
    title: "Mitgliederversammlung 2025",
    date: new Date(2025, 2, 15),
    category: "club",
    excerpt: "Einladung zur ordentlichen Mitgliederversammlung am 20. April.",
    content:
      "Liebe Mitglieder, wir laden herzlich zur diesjährigen Mitgliederversammlung ein...",
    author: "Vorstand",
  },
];

const categoryLabels = {
  tournament: "Turniere",
  match: "Spielberichte",
  club: "Vereinsnachrichten",
  general: "Allgemeines",
};

const categoryIcons = {
  tournament: Trophy,
  match: Users,
  club: Newspaper,
  general: Calendar,
};

export default function Nachrichten() {
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Extrahiere verfügbare Monate
  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    newsItems.forEach((item) => {
      const monthKey = format(item.date, "yyyy-MM");
      months.add(monthKey);
    });
    return Array.from(months).sort().reverse();
  }, []);

  // Filtere Nachrichten
  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const monthMatch =
        selectedMonth === "all" ||
        format(item.date, "yyyy-MM") === selectedMonth;
      const categoryMatch =
        selectedCategory === "all" || item.category === selectedCategory;
      return monthMatch && categoryMatch;
    });
  }, [selectedMonth, selectedCategory]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "tournament":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300";
      case "match":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
      case "club":
        return "bg-green-500/10 text-green-700 dark:text-green-300";
      case "general":
        return "bg-purple-500/10 text-purple-700 dark:text-purple-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

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
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
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
                const Icon = categoryIcons[item.category];
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
                          {categoryLabels[item.category]}
                        </span>
                        <time className="text-sm text-muted-foreground">
                          {format(item.date, "dd. MMM yyyy", { locale: de })}
                        </time>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      {item.author && (
                        <CardDescription className="text-xs">
                          von {item.author}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {item.excerpt}
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
    </div>
  );
}
