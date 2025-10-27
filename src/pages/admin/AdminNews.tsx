import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  content: string;
}

interface NewsMedia {
  id: string;
  news_item_id: string;
  file_path: string;
  file_type: string;
}

const AdminNews = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    category: "Turnier",
    date: new Date().toISOString().split("T")[0],
    title: "",
    content: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }
    loadNewsItems();
  }, [navigate]);

  const loadNewsItems = async () => {
    try {
      const { data, error } = await supabase
        .from("news_items")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      setNewsItems(data || []);
    } catch (error: any) {
      toast({
        title: "Fehler beim Laden",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const uploadFiles = async (newsItemId: string) => {
    if (uploadedFiles.length === 0) return;

    for (const file of uploadedFiles) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${newsItemId}/${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("news-media")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase.from("news_media").insert({
        news_item_id: newsItemId,
        file_path: fileName,
        file_type: file.type,
      });

      if (insertError) throw insertError;
    }
  };

  const handleSave = async () => {
    try {
      if (!formData.title || !formData.content) {
        toast({
          title: "Fehler",
          description: "Bitte füllen Sie alle Pflichtfelder aus",
          variant: "destructive",
        });
        return;
      }

      const token = sessionStorage.getItem("adminToken");

      if (editingItem) {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manage-news`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
              }`,
            },
            body: JSON.stringify({
              action: "update",
              newsId: editingItem.id,
              newsItem: formData,
              token,
            }),
          }
        );

        const result = await response.json();
        if (!response.ok) throw new Error(result.error);

        await uploadFiles(editingItem.id);

        toast({
          title: "Erfolgreich aktualisiert",
          description: "Die Nachricht wurde aktualisiert",
        });
      } else {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manage-news`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${
                import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
              }`,
            },
            body: JSON.stringify({
              action: "create",
              newsItem: formData,
              token,
            }),
          }
        );

        const result = await response.json();
        if (!response.ok) throw new Error(result.error);

        await uploadFiles(result.data.id);

        toast({
          title: "Erfolgreich erstellt",
          description: "Die Nachricht wurde erstellt",
        });
      }

      setIsDialogOpen(false);
      resetForm();
      loadNewsItems();
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Möchten Sie diese Nachricht wirklich löschen?")) return;

    try {
      const token = sessionStorage.getItem("adminToken");
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manage-news`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
            }`,
          },
          body: JSON.stringify({
            action: "delete",
            newsId: id,
            token,
          }),
        }
      );

      const result = await response.json();
      if (!response.ok) throw new Error(result.error);

      toast({
        title: "Erfolgreich gelöscht",
        description: "Die Nachricht wurde gelöscht",
      });
      loadNewsItems();
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      category: "Turnier",
      date: new Date().toISOString().split("T")[0],
      title: "",
      content: "",
    });
    setUploadedFiles([]);
    setEditingItem(null);
  };

  const openEditDialog = (item: NewsItem) => {
    setEditingItem(item);
    setFormData({
      category: item.category,
      date: item.date,
      title: item.title,
      content: item.content,
    });
    setIsDialogOpen(true);
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center py-20">
          <p className="text-lg text-muted-foreground">Lädt...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-tennis-black">
                Nachrichten verwalten
              </h1>
              <p className="text-muted-foreground mt-2">
                Erstellen, bearbeiten und löschen Sie Nachrichten
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={openCreateDialog} className="btn-hero">
                  <Plus className="w-4 h-4 mr-2" />
                  Neue Nachricht
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingItem ? "Nachricht bearbeiten" : "Neue Nachricht"}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="category">Kategorie</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) =>
                        setFormData({ ...formData, category: value })
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Turnier">Turnier</SelectItem>
                        <SelectItem value="Spiel">Spiel</SelectItem>
                        <SelectItem value="Veranstaltung">
                          Veranstaltung
                        </SelectItem>
                        <SelectItem value="Allgemein">Allgemein</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="date">Datum</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="title">Titel</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="mt-2"
                      placeholder="Nachrichtentitel"
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Inhalt</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      className="mt-2 min-h-[200px]"
                      placeholder="Nachrichteninhalt"
                    />
                  </div>

                  <div>
                    <Label htmlFor="files">Bilder/Dateien</Label>
                    <Input
                      id="files"
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="mt-2"
                    />
                    {uploadedFiles.length > 0 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {uploadedFiles.length} Datei(en) ausgewählt
                      </p>
                    )}
                  </div>

                  <Button onClick={handleSave} className="w-full btn-hero">
                    {editingItem ? "Aktualisieren" : "Erstellen"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-tennis-yellow text-tennis-black text-sm font-semibold rounded">
                        {item.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("de-DE")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-tennis-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => openEditDialog(item)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminNews;
