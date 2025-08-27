import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Mannschaften = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unsere Mannschaften 2024
          </h1>
          {/* <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden mit allen wichtigen Terminen und
            Neuigkeiten unseres Vereins
          </p> */}
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Statistics Card */}
            <div className="flex max-w-full justify-evenly">
              <Card
                className={`border-tennis-yellow border-4 hover:shadow-lg transition-all duration-300`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center text-tennis-black">
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        Mannschaften insgesamt
                      </span>
                    </div>
                  </div>

                  <h3 className="text-6xl font-bold text-tennis-black mb-2">
                    28
                  </h3>
                </div>
              </Card>
              <Card
                className={`border-tennis-yellow border-4 hover:shadow-lg transition-all duration-300`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center text-tennis-black">
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        Jugend-Mannschaften
                      </span>
                    </div>
                  </div>

                  <h3 className="text-6xl font-bold text-tennis-black mb-2">
                    16
                  </h3>
                </div>
              </Card>
            </div>

            {/* Description */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Auch in 2024 schicken wir als TC Schwarz-Gelb Heidelberg e.V.
                insgesamt{" "}
                <span className="font-semibold text-primary">
                  28 Mannschaften
                </span>{" "}
                in die Sommersaison, davon{" "}
                <span className="font-semibold text-accent">
                  16 Jugend-Mannschaften
                </span>
                , um sich mit den anderen Teams zu messen. Wir bieten also auch
                in dieser Hinsicht unseren Mitgliedern attraktiven
                Mannschaftssport in zahlreichen Leistungs- und Altersklassen.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-6">
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
            </div>

            {/* Team Categories */}
            <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Mannschaften
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="/jugend"
                  className="group p-6 rounded-lg border-4 border-tennis-yellow/25 hover:border-tennis-yellow/40 transition-all hover:shadow-lg items-center flex justify-center"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground transition-colors">
                      Jugend
                    </h4>
                  </div>
                </a>

                <a
                  href="/damen"
                  className="group p-6 rounded-lg border-4 border-tennis-yellow/25 hover:border-tennis-yellow/40 transition-all hover:shadow-lg items-center flex justify-center"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground transition-colors">
                      Damen
                    </h4>
                  </div>
                </a>

                <a
                  href="/herren"
                  className="group p-6 rounded-lg border-4 border-tennis-yellow/25 hover:border-tennis-yellow/40 transition-all hover:shadow-lg items-center flex justify-center"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground transition-colors">
                      Herren
                    </h4>
                  </div>
                </a>

                <a
                  href="/senioren"
                  className="group p-6 rounded-lg border-4 border-tennis-yellow/25 hover:border-tennis-yellow/40 transition-all hover:shadow-lg items-center flex justify-center"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-foreground transition-colors">
                      Senioren
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mannschaften;
