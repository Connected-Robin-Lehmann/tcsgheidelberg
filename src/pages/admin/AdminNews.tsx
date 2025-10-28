import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { Plus, Pencil, Trash2, X, FileText, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
  const [existingMedia, setExistingMedia] = useState<NewsMedia[]>([]);
  const [filePreviewUrls, setFilePreviewUrls] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link"],
      ["clean"],
    ],
  };

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
      const files = Array.from(e.target.files);
      setUploadedFiles(files);
      
      // Create preview URLs for images
      const urls = files.map(file => {
        if (file.type.startsWith('image/')) {
          return URL.createObjectURL(file);
        }
        return '';
      });
      setFilePreviewUrls(urls);
    }
  };

  const removeUploadedFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    const newUrls = filePreviewUrls.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setFilePreviewUrls(newUrls);
  };

  const loadExistingMedia = async (newsItemId: string) => {
    try {
      const { data, error } = await supabase
        .from("news_media")
        .select("*")
        .eq("news_item_id", newsItemId);

      if (error) throw error;
      setExistingMedia(data || []);
    } catch (error: any) {
      console.error("Error loading media:", error);
    }
  };

  const getMediaUrl = (filePath: string) => {
    const { data } = supabase.storage.from("news-media").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const convertFilesToBase64 = async (files: File[]) => {
    return Promise.all(
      files.map(async (file) => {
        return new Promise<{ name: string; type: string; base64: string }>(
          (resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              resolve({
                name: file.name,
                type: file.type,
                base64: reader.result as string,
              });
            };
            reader.readAsDataURL(file);
          }
        );
      })
    );
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

      // Convert any uploaded files to base64
      const base64Files =
        uploadedFiles.length > 0
          ? await convertFilesToBase64(uploadedFiles)
          : [];

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
              files: base64Files,
              token,
            }),
          }
        );

        const result = await response.json();
        if (!response.ok) throw new Error(result.error);

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
              files: base64Files,
              token,
            }),
          }
        );

        const result = await response.json();
        if (!response.ok) throw new Error(result.error);

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
    setFilePreviewUrls([]);
    setExistingMedia([]);
    setEditingItem(null);
  };

  const openEditDialog = async (item: NewsItem) => {
    setEditingItem(item);
    setFormData({
      category: item.category,
      date: item.date,
      title: item.title,
      content: item.content,
    });
    await loadExistingMedia(item.id);
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
                    <div className="mt-2 border rounded-md">
                      <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={(value) =>
                          setFormData({ ...formData, content: value })
                        }
                        modules={modules}
                        className="bg-background"
                        placeholder="Nachrichteninhalt eingeben..."
                      />
                    </div>
                  </div>

                  {existingMedia.length > 0 && (
                    <div>
                      <Label>Vorhandene Medien</Label>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {existingMedia.map((media) => (
                          <div
                            key={media.id}
                            className="relative border rounded-lg p-3 bg-accent/50"
                          >
                            {media.file_type.startsWith('image/') ? (
                              <img
                                src={getMediaUrl(media.file_path)}
                                alt="Media"
                                className="w-full h-24 object-cover rounded"
                              />
                            ) : (
                              <div className="flex items-center gap-2 h-24">
                                <FileText className="h-8 w-8 text-primary" />
                                <span className="text-sm truncate">
                                  {media.file_path.split('/').pop()}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="files">Neue Bilder/Dateien hinzufügen</Label>
                    <Input
                      id="files"
                      type="file"
                      multiple
                      accept="image/*,.pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="mt-2"
                    />
                    {uploadedFiles.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mt-3">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="relative border rounded-lg p-3 bg-accent/50"
                          >
                            <Button
                              variant="ghost"
                              size="icon"
                              className="absolute top-1 right-1 h-6 w-6"
                              onClick={() => removeUploadedFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                            {file.type.startsWith('image/') ? (
                              <>
                                <img
                                  src={filePreviewUrls[index]}
                                  alt={file.name}
                                  className="w-full h-24 object-cover rounded"
                                />
                                <p className="text-xs text-muted-foreground mt-1 truncate">
                                  {file.name}
                                </p>
                              </>
                            ) : (
                              <div className="flex items-center gap-2 h-24">
                                <FileText className="h-8 w-8 text-primary" />
                                <span className="text-sm truncate">{file.name}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
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
