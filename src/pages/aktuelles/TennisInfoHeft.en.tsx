import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { tennisInfoHefte, getDownloadUrl } from '@/data/tennisInfoHefte';

const TennisInfoHeftEn = () => {
  const handleDownload = (fileName: string, title: string) => {
    if (!fileName) {
      alert('This issue is not yet available.');
      return;
    }
    const url = getDownloadUrl(fileName);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tennis Info Booklets
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here you can find all issues of our Tennis Info booklets for download.
              Learn more about current club news, tournaments, and events.
            </p>
          </div>

          {/* Booklets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tennisInfoHefte.map((heft) => (
              <div
                key={heft.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* PDF Icon/Preview */}
                <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-primary mx-auto mb-2" />
                    <span className="text-2xl font-bold text-foreground">{heft.year}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">{heft.titleEn}</h3>
                  <Button
                    onClick={() => handleDownload(heft.fileName, heft.titleEn)}
                    className="w-full"
                    variant={heft.fileName ? 'default' : 'outline'}
                    disabled={!heft.fileName}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {heft.fileName ? 'Download' : 'Coming soon'}
                  </Button>
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
    </div>
  );
};

export default TennisInfoHeftEn;
