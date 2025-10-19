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

const Index = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Show dialog on mount, but respect if user has dismissed it in this session
    const hasSeenDialog = sessionStorage.getItem('hasSeenMemberDialog');
    if (!hasSeenDialog) {
      setShowDialog(true);
    }
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

      <Dialog open={showDialog} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-tennis-black">
              <span className="underline">Mitgliederversammlung am 19.10.2025 in Heidelberg-Kirchheim (Gasthaus Goldene Rose)</span>
            </DialogTitle>
            <DialogDescription className="text-left space-y-4 pt-4">
              <p className="font-semibold text-tennis-black">
                Die Vorstandswahl findet statt und weitere wichtige Beschlüsse werden auf der nächsten Mitgliederversammlung am 19.10.25 ab 17.00h (Heidelberg-Kirchheim, Gasthaus Goldene Rose (Hegenichstr. 10){' '}
                <a 
                  href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/09/Einladung-zur-ordentlichen-Mitgliederversammlung-2025-19-Oktober-2025.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 underline inline-flex items-center gap-1 hover:text-red-700"
                >
                  Einladung und Tagesordnung hier (pdf)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>

              <p className="font-semibold text-tennis-black">
                Trotz der allseits bekannten Inflation der letzten Jahre und den erheblichen Kostensteigerungen, die wir auch als Verein stemmen mussten und nach wie vor müssen, ist die aktuell geltende Beitragsordnung seit 2021 (!!!) Jahren unverändert geblieben. Wir konnten entgegen dem allgemein Trend Beitragserhöhungen lange aufschieben. Ab 2026 ist nun auch bei uns eine der Kostenentwicklung entsprechende adäquate Anpassung der Beiträge an die Situation unvermeidlich.
              </p>

              <p className="font-semibold text-tennis-black">
                Alle Mitglieder ab 16 Jahren sind willkommen und können abstimmen!
              </p>

              <p className="font-semibold text-tennis-black">
                Der Vorstand
              </p>

              <div className="space-y-2 pt-2">
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
    </div>
  );
};

export default Index;
