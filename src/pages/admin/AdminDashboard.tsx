import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Save, Newspaper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminDashboard = () => {
  const [isActive, setIsActive] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    const token = sessionStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    // Load current modal settings
    loadModalSettings();
  }, [navigate]);

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

  const handleSave = async () => {
    setIsSaving(true);
    const token = sessionStorage.getItem('adminToken');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manage-modal`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            action: 'update',
            isActive,
            title,
            content,
            token,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Speichern');
      }

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

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminUsername');
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
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="modal">Modal-Einstellungen</TabsTrigger>
              <TabsTrigger value="news" onClick={() => navigate('/admin/news')}>
                <Newspaper className="w-4 h-4 mr-2" />
                Nachrichten
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
                    <Textarea
                      id="content"
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
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;