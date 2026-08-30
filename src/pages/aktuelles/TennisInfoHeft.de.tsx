import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { tennisInfoHefte, getDownloadUrl } from '@/data/tennisInfoHefte';
import PdfThumbnail from '@/components/PdfThumbnail';
import PdfViewerModal from '@/components/PdfViewerModal';

const TennisInfoHeftDe = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const handleDownload = (fileName: string) => {
    if (!fileName) {
      alert('Diese Ausgabe ist noch nicht verfügbar.');
      return;
    }
    const url = getDownloadUrl(fileName);
    window.open(url, '_blank');
  };

  const handlePreview = (fileName: string, title: string) => {
    if (!fileName) return;
    setSelectedPdf({ url: getDownloadUrl(fileName), title });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unser Club-Heft TennisInfo
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In guter Tradition drucken wir für unsere Mitglieder, Freunde und Sponsoren alle 2 Jahre ein sehr umfangreiches Clubmagazin. Darin berichten wir in erster Linie über die sportlichen Erfolge und stellen umfassend unsere Mannschaften und Jugendarbeit vor.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Darüber hinaus gibt das Heft einen Einblick in alle Entwicklungen im Club und im Vorstand sowie über aktuelle Projekte etwa im Bereich der Infrastruktur. Das gedruckte Heft erhalten alle Sponsoren automatisch nach Erscheinen postalisch. Mitglieder können sich ein Exemplar der gedruckten TennisInfo im Verein (Garage) abholen. Natürlich kann das aktuelle Heft, aber auch historische Ausgaben untenstehend als PDF-Download bezogen werden.
            </p>
          </div>

          {/* Hefte Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tennisInfoHefte.map((heft) => (
              <div
                key={heft.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* PDF Cover Preview - clickable */}
                <div 
                  className="cursor-pointer"
                  onClick={() => handlePreview(heft.fileName, heft.titleDe)}
                >
                  <PdfThumbnail 
                    pdfUrl={getDownloadUrl(heft.fileName)} 
                    year={heft.year} 
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">{heft.titleDe}</h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handlePreview(heft.fileName, heft.titleDe)}
                      className="flex-1"
                      variant="outline"
                      disabled={!heft.fileName}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ansehen
                    </Button>
                    <Button
                      onClick={() => handleDownload(heft.fileName)}
                      className="flex-1"
                      variant={heft.fileName ? 'default' : 'outline'}
                      disabled={!heft.fileName}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Ältere Ausgaben werden nach und nach digitalisiert und hier zur Verfügung gestellt.
            </p>
          </div>
        </div>
      </main>
      <Footer />

      {/* PDF Viewer Modal */}
      <PdfViewerModal
        pdfUrl={selectedPdf?.url || ''}
        title={selectedPdf?.title || ''}
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
      />
    </div>
  );
};

export default TennisInfoHeftDe;
