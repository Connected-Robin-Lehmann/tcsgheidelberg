import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Target, Heart } from "lucide-react";

const MannschaftenDE = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere Mannschaften 2026
          </h1>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Season Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Winter Season */}
              <Card className="border-tennis-yellow border-2 hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-4 text-center">
                    ❄️ Winter 2025/2026
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Jugend</span>
                      <span className="font-bold text-tennis-black text-xl">9</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Aktive</span>
                      <span className="font-bold text-tennis-black text-xl">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Senioren</span>
                      <span className="font-bold text-tennis-black text-xl">3</span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Gesamt</span>
                      <span className="font-bold text-tennis-black text-2xl">19</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Summer Season */}
              <Card className="border-tennis-yellow border-2 hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-4 text-center">
                    ☀️ Sommer 2026
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Jugend</span>
                      <span className="font-bold text-tennis-black text-xl">14</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Aktive</span>
                      <span className="font-bold text-tennis-black text-xl">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Senioren</span>
                      <span className="font-bold text-tennis-black text-xl">6</span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Gesamt</span>
                      <span className="font-bold text-tennis-black text-2xl">27</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Description */}
            <Card className="p-8 border-tennis-yellow border-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Mannschaftssport bei Schwarz-Gelb
              </h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Im Jahr 2026 schicken wir als TC Schwarz-Gelb Heidelberg e.V.
                bis zu{" "}
                <span className="font-semibold text-tennis-black">
                  27 Mannschaften
                </span>{" "}
                in die Saison, davon{" "}
                <span className="font-semibold text-tennis-black">
                  14 Jugend-Mannschaften
                </span>
                . Wir bieten unseren Mitgliedern attraktiven
                Mannschaftssport in zahlreichen Leistungs- und Altersklassen.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-8">
                Somit findet bei uns jeder Tennisspieler schnell seine passende
                Mannschaft. Die regelmäßig stattfindenden internen
                Mannschaftstrainings sind für die gute Stimmung und
                Aufgeschlossenheit gegenüber Neuen überaus bekannt und im
                Anschluss finden sich unsere SpielerInnen gern auch in
                entspannter Runde am Clubhaus ein. Dort ist stets für
                ausreichend Getränke gesorgt, so dass viele Sommerabende auf der
                gemütlichen Terrasse unseres Restaurants ausklingen.
              </p>

              <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                  Sie wollen mehr erfahren?
                </h3>
                <p className="text-white mb-6">
                  Die Mitglieder und Ergebnisse unserer Mannschaften finden Sie
                  auf der Seite des Badischen Tennisverbandes:
                </p>
                <a
                  href="https://baden.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=33129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  nuLiga TC Schwarz-Gelb Heidelberg
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

            {/* Team Categories */}
            <Card className="p-8 border-tennis-yellow border-2">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Unsere Mannschaftskategorien
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="/mannschaften/jugend"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Trophy className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Jugend
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      14 Teams
                    </p>
                  </div>
                </a>

                <a
                  href="/mannschaften/aktive"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Target className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Aktive</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Damen 1-4 & Herren 1-3
                    </p>
                  </div>
                </a>

                <a
                  href="/mannschaften/senioren"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Heart className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Senioren
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      6 Teams
                    </p>
                  </div>
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

export default MannschaftenDE;
