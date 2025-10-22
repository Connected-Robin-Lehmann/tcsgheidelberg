import React from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const NewsHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Aktuelle Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Die wichtigsten Neuigkeiten aus unserem Verein
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-tennis-yellow border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-tennis-black to-gray-800 p-8 md:w-1/3 flex items-center justify-center">
              <Newspaper className="w-24 h-24 text-tennis-yellow" />
            </div>
            <div className="p-8 md:w-2/3">
              <div className="inline-block bg-tennis-yellow/20 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-semibold text-tennis-black">Wichtige Nachricht</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Willkommen beim TC Schwarz-Gelb Heidelberg
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Entdecken Sie die neuesten Nachrichten, Turniere und Veranstaltungen unseres Vereins. 
                Bleiben Sie auf dem Laufenden mit allen wichtigen Informationen rund um den Tennisclub.
              </p>
              <Link 
                to="/aktuelles"
                className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Alle Nachrichten
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default NewsHighlight;
