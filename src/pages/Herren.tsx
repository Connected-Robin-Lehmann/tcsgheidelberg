import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Herren = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Herren-Mannschaften
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Unsere Herren-Teams in der Medenrunde
          </p>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 border-tennis-yellow border-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Herren-Mannschaften 2024
              </h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Unsere Herren-Mannschaften gehören zum traditionellen Aushängeschild 
                des TC Schwarz-Gelb Heidelberg e.V. Mit verschiedenen Teams in 
                unterschiedlichen Spielklassen bieten wir jedem Spieler die Möglichkeit, 
                am Mannschaftssport teilzunehmen.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-8">
                Bemerkenswert ist, dass Boris Becker in den Jahren 1983 und 1984 für 
                unseren Tennisclub Schwarz-Gelb Heidelberg spielte, bevor er 1985 
                sensationell als jüngster Wimbledonsieger in die Geschichte einging.
              </p>

              <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                  Mehr Informationen
                </h3>
                <p className="text-white mb-6">
                  Die Mitglieder und Ergebnisse unserer Herren-Mannschaften finden Sie
                  auf der Seite des Badischen Tennisverbandes:
                </p>
                <a
                  href="https://baden.liga.nu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Baden Tennis Verband
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Herren;
