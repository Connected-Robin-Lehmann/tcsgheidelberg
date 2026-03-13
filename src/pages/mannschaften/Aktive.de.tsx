import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Target } from "lucide-react";

const AktiveDE = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aktive Mannschaften
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Unsere Damen- und Herren-Mannschaften im Wettspielbetrieb
          </p>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Damen Section */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Target className="w-6 h-6 text-tennis-black" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Damen-Mannschaften
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>Unser Aushängeschild: Die Damen 1 spielen aktuell in der Badenliga, hatten sich aber zwischenzeitlich sogar bis in die <strong>2. Bundesliga</strong> hochgespielt.</p>
              <p>Daneben haben wir weitere Damen-Mannschaften in verschiedenen Alters- und Spielklassen, die den Mannschaftssport bei Schwarz-Gelb leben.</p>
            </div>
          </Card>

          {/* Herren Section */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Users className="w-6 h-6 text-tennis-black" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Herren-Mannschaften
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                Unsere Herren-Mannschaften sind in verschiedenen Spielklassen vertreten 
                und bieten für jeden Spieler die passende Herausforderung – vom ambitionierten 
                Wettkampftennis bis zum geselligen Mannschaftsspiel.
              </p>
            </div>
          </Card>

          {/* Ansprechpartnerin */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                Ansprechpartnerin für alle Aktiven Mannschaften ist Katharina Kukaras (<a href="mailto:katharina.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-yellow hover:underline font-semibold">katharina.kukaras@schwarzgelb-heidelberg.de</a>).
              </p>
            </div>
          </Card>

          {/* nuLiga Link */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Alle Aktiven-Mannschaften
            </h3>
            <p className="text-white mb-6">
              Die Mitglieder und Ergebnisse unserer Damen- und Herren-Mannschaften 
              finden Sie auf der Seite des Badischen Tennisverbandes:
            </p>
            <a
              href="https://baden.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=33129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              
              nuLiga TC Schwarz-Gelb Heidelberg
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                
              </svg>
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>);

};

export default AktiveDE;