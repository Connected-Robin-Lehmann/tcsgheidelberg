import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventSection from '@/components/EventSection';
import VideoSection from '@/components/VideoSection';
import StatsSection from '@/components/StatsSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    // Load modal settings from database
    const loadModalSettings = async () => {
      const { data, error } = await supabase
        .from('modal_settings')
        .select('*')
        .limit(1)
        .single();

      if (data && !error) {
        setModalTitle(data.title);
        setModalContent(data.content);
        setIsModalActive(data.is_active);

        // Check if dialog has been shown in this session
        const hasSeenDialog = sessionStorage.getItem('hasSeenMemberDialog');
        if (!hasSeenDialog && data.is_active) {
          setShowDialog(true);
        }
      }
    };

    loadModalSettings();
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('hasSeenMemberDialog', 'true');
    setShowDialog(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventSection />
      <StatsSection />
      <VideoSection />
      <SponsorsSection />
      <Footer />

      {isModalActive && (
        <Dialog open={showDialog} onOpenChange={(open) => !open && handleClose()}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-tennis-black">
                <span className="underline" dangerouslySetInnerHTML={{ __html: modalTitle }} />
              </DialogTitle>
              <DialogDescription className="text-left space-y-4 pt-4">
                <div 
                  className="prose prose-sm max-w-none [&_p]:text-tennis-black [&_p]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: modalContent }}
                />

                <div className="space-y-2 pt-2">
                  <p className="text-tennis-black">
                    <a 
                      href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/09/Einladung-zur-ordentlichen-Mitgliederversammlung-2025-19-Oktober-2025.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-600 underline inline-flex items-center gap-1 hover:text-red-700 font-semibold"
                    >
                      Einladung und Tagesordnung hier (pdf)
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </p>

                  <p className="text-tennis-black">
                    Variante 1:{' '}
                    <a 
                      href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/06/Beitragsordnung-ab-2026-komplett-Vorschlag-zur-Abstimmung.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 underline font-semibold inline-flex items-center gap-1 hover:text-blue-900"
                    >
                      Vorschlag für neue Beitragsordnung des „alten Vorstands"
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </p>

                  <p className="text-tennis-black">
                    Variante 2:{' '}
                    <a 
                      href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/10/Beitragserhoehung-Variante-2-mit-Arbeit-upload-final.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 underline font-semibold inline-flex items-center gap-1 hover:text-blue-900"
                    >
                      Vorschlag für neue Beitragordnung der Mitgliederarbeitsgruppe (mit Abstimmung auch über Arbeitseinsatz)
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </p>

                  <p className="text-tennis-black">
                    Abstimmung über{' '}
                    <a 
                      href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/06/Satzung-TC-Schwarzgelb-Heidelberg-e.V.-Entwurf-ab-Okt-2025.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 underline font-semibold inline-flex items-center gap-1 hover:text-blue-900"
                    >
                      geplante Satzungsänderungen
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </p>

                  <p className="text-tennis-black">
                    Vorlage für{' '}
                    <a 
                      href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/09/Vollmachtsvorlage-MV-19-10-2025.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-800 underline font-semibold inline-flex items-center gap-1 hover:text-blue-900"
                    >
                      Vollmacht bei Abwesenheit
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
