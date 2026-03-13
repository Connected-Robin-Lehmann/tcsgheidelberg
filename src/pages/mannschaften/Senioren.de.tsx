import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Users, Trophy, Star } from "lucide-react";

const SeniorenDE = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Senioren-Mannschaften
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Erfahrung, Leidenschaft und Teamgeist – Tennis kennt kein Alter
          </p>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Damen 60 Feature Article */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Star className="w-6 h-6 text-tennis-black" />
              </div>
              <span className="bg-tennis-yellow text-tennis-black px-3 py-1 rounded-full text-sm font-bold">
                NEU 2026
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Premiere mit Power: Die neuen Damen 60 des TC Schwarz-Gelb Heidelberg
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Mit Beginn der Saison 2026 betritt eine neue Mannschaft die Bühne des 
                TC Schwarz-Gelb Heidelberg – und sie bringt jede Menge Erfahrung, Spielfreude 
                und Teamgeist mit: Unsere Damen-60-Mannschaft feiert ihre Premiere im Wettspielbetrieb!
              </p>
              
              <p>
                Was lange als lose Idee begann, ist nun ein echtes Team mit klaren Zielen geworden. 
                Spielerinnen, die seit Jahren – teils seit Jahrzehnten – unserem Verein die Treue halten, 
                haben sich zusammengeschlossen, um ihre Leidenschaft für den Tennissport künftig auch 
                wieder offiziell in der Medenrunde zu zeigen. Der Schritt zur eigenen Damen-60-Mannschaft 
                war dabei nur konsequent.
              </p>
              
              <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-tennis-black mb-3">
                  Erfahrung trifft Begeisterung
                </h3>
                <p>
                  Die neue Mannschaft vereint alles, was erfolgreiches Mannschaftstennis ausmacht: 
                  Routine aus unzähligen Matches, taktisches Verständnis, mentale Stärke – und vor 
                  allem große Lust auf Wettkampf. Viele der Spielerinnen haben in früheren Jahren 
                  bereits in Damen- oder Altersklassenmannschaften gespielt oder spielen noch aktiv. 
                  Nun bringen sie ihr Können und ihre Gelassenheit gemeinsam auf den Platz.
                </p>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Starke Gemeinschaft auf und neben dem Platz
                </h3>
                <p>
                  Dabei geht es nicht nur um Punkte und Tabellenplätze – ebenso wichtig sind der 
                  Zusammenhalt und die Freude an gemeinsamen Spieltagen.
                </p>
              </div>
              
              <p>
                Der Verein freut sich sehr über dieses neue Team und wünscht den Damen 60 für ihre 
                erste Saison viel Erfolg, verletzungsfreie Spiele und vor allem viele schöne gemeinsame 
                Momente auf dem Platz.
              </p>
              
              <p className="text-xl font-bold text-tennis-black text-center py-4">
                Herzlich willkommen in der Medenrunde 2026 – Damen 60! 🎾
              </p>
            </div>
          </Card>

          {/* nuLiga Link */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Alle Senioren-Mannschaften
            </h3>
            <p className="text-white mb-6">
              Die Mitglieder und Ergebnisse unserer Senioren-Mannschaften finden Sie
              auf der Seite des Badischen Tennisverbandes:
            </p>
            <a
              href="https://baden.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=33129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              nuLiga TC Schwarz-Gelb Heidelberg
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white">
                Ansprechpartnerin für alle Senioren-Mannschaften: <a href="mailto:katharina.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-yellow hover:underline font-semibold">Katharina Kukaras</a>
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeniorenDE;
