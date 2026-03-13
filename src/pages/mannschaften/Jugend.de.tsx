import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Trophy, Target, Calendar } from "lucide-react";

const JugendDE = () => {
  const jugendMannschaften = [
    { name: "Midcourt U10.1", kategorie: "U10" },
    { name: "Großfeld U12 grün I", kategorie: "U12" },
    { name: "Großfeld U12 grün II", kategorie: "U12" },
    { name: "Großfeld U12 grün III", kategorie: "U12" },
    { name: "Juniorinnen U12w", kategorie: "U12" },
    { name: "Junioren U12m", kategorie: "U12" },
    { name: "Juniorinnen U15.1w", kategorie: "U15" },
    { name: "Junioren U15.1m", kategorie: "U15" },
    { name: "Juniorinnen U15.2w", kategorie: "U15" },
    { name: "Junioren U15.2m", kategorie: "U15" },
    { name: "Juniorinnen U18.1w", kategorie: "U18" },
    { name: "Junioren U18.1m", kategorie: "U18" },
    { name: "Juniorinnen U18.2w", kategorie: "U18" },
    { name: "Junioren U18.2m", kategorie: "U18" },
  ];

  const kategorien = {
    U10: jugendMannschaften.filter((m) => m.kategorie === "U10"),
    U12: jugendMannschaften.filter((m) => m.kategorie === "U12"),
    U15: jugendMannschaften.filter((m) => m.kategorie === "U15"),
    U18: jugendMannschaften.filter((m) => m.kategorie === "U18"),
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Nachwuchsförderung
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Jugend
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Die Zukunft des Tennis - Kinder- und Jugendförderung mit Tradition
              und Innovation
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-8">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Tradition der Jugendförderung
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Das Kinder- und Jugendtraining und das Mannschaftsspielen
                    bereits in jungen Jahren hat bei uns eine lange Tradition.
                    Unser Verein ist stolz darauf, junge Talente zu fördern und
                    ihnen eine solide tennissportliche Grundlage zu vermitteln.
                    Ansprechpartnerin für alle Vereinsmitglieder bis 18 Jahre ist Karolin Kukaras (<a href="mailto:karolin.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-black underline hover:text-tennis-yellow transition-colors font-medium">karolin.kukaras@schwarzgelb-heidelberg.de</a>).
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-tennis-black rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-tennis-yellow mb-2">
                      14
                    </div>
                    <div className="text-sm font-medium">
                      Jugendmannschaften
                    </div>
                  </div>
                  <div className="bg-tennis-yellow rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-tennis-black mb-2">
                      4
                    </div>
                    <div className="text-sm font-medium text-tennis-black">
                      Altersklassen
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      2026
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Aktuelle Saison
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-tennis-black mb-2">
                      U10-U18
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Altersbereich
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mannschaften Overview */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Unsere Jugendmannschaften 2026
              </h2>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-center mb-8">
                Hier finden Sie die aktuelle Übersicht über alle 14
                Jugendmannschaften unseres TC Schwarz-Gelb Heidelberg e.V. in
                der Sommersaison 2026
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(kategorien).map(([kategorie, mannschaften]) => (
                  <div
                    key={kategorie}
                    className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-tennis-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                        <Trophy className="h-8 w-8 text-tennis-black" />
                      </div>
                      <h3 className="text-xl font-bold text-tennis-black">
                        {kategorie}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {mannschaften.length} Mannschaft
                        {mannschaften.length > 1 ? "en" : ""}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {mannschaften.map((mannschaft, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-3 border border-gray-200 hover:border-tennis-yellow/50 transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-800">
                            {mannschaft.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-tennis-black rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-tennis-yellow mr-3" />
                <h3 className="text-xl font-bold text-tennis-yellow">
                  Für jede Leistungsklasse
                </h3>
              </div>
              <p className="leading-relaxed mb-4">
                Unser Verein bietet für alle Altersgruppen und Leistungsstärken
                die passende Mannschaft. Von den ersten Schritten auf dem
                Midcourt bis hin zu ambitionierten Jugendlichen ist für jeden
                etwas dabei.
              </p>
              <p className="text-tennis-yellow font-medium">
                Interesse? Sprechen Sie unsere Jugendkoordinatorin Karo an!
              </p>
            </div>

            <div className="bg-gradient-to-br from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 border-2 border-tennis-yellow/20">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-tennis-yellow mr-3" />
                <h3 className="text-xl font-bold text-tennis-black">
                  Unsere Philosophie
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wir fördern nicht nur die tennissportlichen Fähigkeiten, sondern
                legen auch großen Wert auf Teamgeist, Fair Play und die
                persönliche Entwicklung unserer Nachwuchstalente.
              </p>
              <p className="text-gray-700 font-medium">
                Training macht Spaß und bringt Erfolg - das ist unser Motto!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JugendDE;
