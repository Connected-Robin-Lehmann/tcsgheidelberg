import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Save, Newspaper, ListChecks, ImagePlus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminStatus from './AdminStatus';
import type { Session } from '@supabase/supabase-js';

const AdminDashboard = () => {
  const [isActive, setIsActive] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<{ name: string; url: string }[]>([]);
  const contentRef = React.useRef<HTMLTextAreaElement>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check authentication and admin role
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/admin/login');
        return;
      }

      // Verify admin role
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .single();

      if (roleError || !roleData) {
        toast({
          title: 'Zugriff verweigert',
          description: 'Sie haben keine Admin-Berechtigung',
          variant: 'destructive',
        });
        await supabase.auth.signOut();
        navigate('/admin/login');
        return;
      }

      setSession(session);
      loadModalSettings();
      loadUploadedImages();
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/admin/login');
      } else {
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const loadModalSettings = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('modal_settings')
        .select('*')
        .limit(1)
        .single();

      if (error) throw error;

      if (data) {
        setIsActive(data.is_active);
        setTitle(data.title);
        setContent(data.content);
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

  const loadUploadedImages = async () => {
    const { data, error } = await supabase.storage
      .from('modal-images')
      .list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });
    if (error || !data) return;
    const files = data.filter((f) => f.name && !f.name.startsWith('.'));
    const withUrls = await Promise.all(
      files.map(async (f) => {
        const { data: signed } = await supabase.storage
          .from('modal-images')
          .createSignedUrl(f.name, 60 * 60 * 24 * 365 * 10);
        return { name: f.name, url: signed?.signedUrl ?? '' };
      })
    );
    setUploadedImages(withUrls.filter((i) => i.url));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast({ title: 'Datei zu groß', description: 'Max. 5 MB erlaubt', variant: 'destructive' });
      return;
    }
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      toast({ title: 'Falsches Format', description: 'Nur JPG, PNG oder WebP', variant: 'destructive' });
      return;
    }
    setIsUploading(true);
    try {
      const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const safe = file.name.replace(/\.[^.]+$/, '').replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
      const path = `${Date.now()}-${safe}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from('modal-images')
        .upload(path, file, { cacheControl: '3600', upsert: false });
      if (upErr) throw upErr;
      const { data: signed, error: signErr } = await supabase.storage
        .from('modal-images')
        .createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
      if (signErr || !signed) throw signErr ?? new Error('Signed URL fehlgeschlagen');
      insertAtCursor(`\n<img src="${signed.signedUrl}" alt="" class="w-full rounded-lg my-4" />\n`);
      toast({ title: 'Bild eingefügt', description: 'Vergessen Sie nicht zu speichern.' });
      await loadUploadedImages();
    } catch (err: any) {
      toast({ title: 'Upload fehlgeschlagen', description: err.message, variant: 'destructive' });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const insertAtCursor = (snippet: string) => {
    const ta = contentRef.current;
    if (!ta) {
      setContent((c) => c + snippet);
      return;
    }
    const start = ta.selectionStart ?? content.length;
    const end = ta.selectionEnd ?? content.length;
    const next = content.slice(0, start) + snippet + content.slice(end);
    setContent(next);
    requestAnimationFrame(() => {
      ta.focus();
      const pos = start + snippet.length;
      ta.setSelectionRange(pos, pos);
    });
  };

  const handleDeleteImage = async (name: string) => {
    if (!confirm(`Bild "${name}" wirklich löschen? Verweise im Inhalt müssen Sie selbst entfernen.`)) return;
    const { error } = await supabase.storage.from('modal-images').remove([name]);
    if (error) {
      toast({ title: 'Löschen fehlgeschlagen', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Bild gelöscht' });
    await loadUploadedImages();
  };

  const handleSave = async () => {
    if (!session) return;

    setIsSaving(true);
    try {
      const { data, error } = await supabase.functions.invoke('manage-modal', {
        body: {
          action: 'update',
          isActive,
          title,
          content,
        },
      });

      if (error) throw error;

      toast({
        title: 'Erfolgreich gespeichert',
        description: 'Die Modal-Einstellungen wurden aktualisiert',
      });
    } catch (error: any) {
      toast({
        title: 'Fehler',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: 'Abgemeldet',
      description: 'Sie wurden erfolgreich abgemeldet',
    });
    navigate('/admin/login');
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-tennis-black">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Verwaltung der Website-Inhalte
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="btn-hero-outline"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Abmelden
            </Button>
          </div>

          <Tabs defaultValue="modal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="modal">Modal-Einstellungen</TabsTrigger>
              <TabsTrigger value="news" onClick={() => navigate('/admin/news')}>
                <Newspaper className="w-4 h-4 mr-2" />
                Nachrichten
              </TabsTrigger>
              <TabsTrigger value="status">
                <ListChecks className="w-4 h-4 mr-2" />
                Status
              </TabsTrigger>
            </TabsList>

            <TabsContent value="modal">
              <Card className="p-8">
                <div className="space-y-6">
                  {/* Modal Activation Toggle */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <Label htmlFor="modal-active" className="text-lg font-semibold">
                        Modal aktivieren
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Zeigt das Modal auf der Startseite an
                      </p>
                    </div>
                    <Switch
                      id="modal-active"
                      checked={isActive}
                      onCheckedChange={setIsActive}
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title">Titel</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-2"
                      placeholder="Modal-Titel"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <Label htmlFor="content">Inhalt (HTML)</Label>
                    <div className="mt-2 mb-3 p-3 border border-dashed rounded-lg bg-gray-50 space-y-3">
                      <div className="flex items-center gap-3 flex-wrap">
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="modal-image-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={isUploading}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <ImagePlus className="w-4 h-4 mr-2" />
                          {isUploading ? 'Lädt hoch...' : 'Bild hochladen & einfügen'}
                        </Button>
                        <span className="text-xs text-muted-foreground">
                          JPG, PNG oder WebP – max. 5 MB. Wird an der Cursor-Position eingefügt.
                        </span>
                      </div>
                      {uploadedImages.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-2">
                            Hochgeladene Bilder ({uploadedImages.length})
                          </p>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                            {uploadedImages.map((img) => (
                              <div key={img.name} className="relative group border rounded overflow-hidden bg-white">
                                <img src={img.url} alt={img.name} className="w-full h-20 object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
                                  <Button
                                    type="button"
                                    size="sm"
                                    variant="secondary"
                                    className="h-7 px-2 text-xs"
                                    onClick={() => insertAtCursor(`\n<img src="${img.url}" alt="" class="w-full rounded-lg my-4" />\n`)}
                                  >
                                    Einfügen
                                  </Button>
                                  <Button
                                    type="button"
                                    size="sm"
                                    variant="destructive"
                                    className="h-7 w-7 p-0"
                                    onClick={() => handleDeleteImage(img.name)}
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <Textarea
                      id="content"
                      ref={contentRef}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="mt-2 min-h-[300px] font-mono text-sm"
                      placeholder="Modal-Inhalt (HTML)"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Sie können HTML-Tags verwenden: &lt;p&gt;, &lt;strong&gt;, &lt;a&gt;, etc.
                    </p>
                  </div>

                  {/* Preview */}
                  <div>
                    <Label>Vorschau</Label>
                    <div 
                      className="mt-2 p-4 bg-white border rounded-lg prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </div>

                  {/* Save Button */}
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="w-full btn-hero"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {isSaving ? 'Speichert...' : 'Änderungen speichern'}
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="status">
              <AdminStatus />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
