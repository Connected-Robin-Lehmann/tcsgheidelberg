import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { tennisInfoHefte, getDownloadUrl } from '@/data/tennisInfoHefte';
import PdfThumbnail from '@/components/PdfThumbnail';
import PdfViewerModal from '@/components/PdfViewerModal';

const TennisInfoHeftEn = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const handleDownload = (fileName: string) => {
    if (!fileName) {
      alert('This issue is not yet available.');
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
              Our Club Magazine TennisInfo
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Following a fine tradition, we print a comprehensive club magazine every 2 years for our members, friends, and sponsors. It primarily reports on sporting achievements and provides an extensive presentation of our teams and youth development.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              Additionally, the booklet offers insights into all developments within the club and board, as well as current projects in areas such as infrastructure. The printed booklet is automatically sent by post to all sponsors upon publication. Members can pick up a printed copy of TennisInfo at the club (garage). Of course, the current issue and historical editions can be downloaded as PDF below.
            </p>
          </div>

          {/* Booklets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tennisInfoHefte.map((heft) => (
              <div
                key={heft.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* PDF Cover Preview - clickable */}
                <div 
                  className="cursor-pointer"
                  onClick={() => handlePreview(heft.fileName, heft.titleEn)}
                >
                  <PdfThumbnail 
                    pdfUrl={getDownloadUrl(heft.fileName)} 
                    year={heft.year} 
                  />
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">{heft.titleEn}</h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handlePreview(heft.fileName, heft.titleEn)}
                      className="flex-1"
                      variant="outline"
                      disabled={!heft.fileName}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
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
              Older issues are being digitized and will be made available here gradually.
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

export default TennisInfoHeftEn;
