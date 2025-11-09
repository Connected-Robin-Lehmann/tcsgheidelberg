import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  Users,
  Target,
  Heart,
  Award,
  BookOpen,
} from "lucide-react";

const TennisschuleSeiboldDE = () => {
  const schwerpunkte = [
    "Training für Einsteiger und Wiedereinsteiger",
    "Taktik in Einzel und Doppel",
    "Mental-Training",
  ];

  const qualifikationen = [
    "Staatl. gepr. Tennislehrer (VDT/DTB)",
    "Cardio Tennis Trainer (VDT/DTB/PTR)",
    "Ausbilder für staatl. gepr. Tennislehrer (VDT/DTB)",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Erfahrung & Kompetenz
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Tennisschule Manfred Seibold
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breitensport und Vereinsintegration - Tennis lernen mit Spaß und
              System
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Unsere Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Die Tennisschule Manfred Seibold mit ihrem erfahrenen Coach
                    trainiert vorwiegend Neueinsteiger, Hobbyspieler und den
                    Seniorenbereich, veranstaltet Einführungskurse und
                    Tenniscamps.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Sie gibt den Schülern gleich von Anfang an die Möglichkeit,
                    ins Vereinsleben reinzuschnuppern, um anschließend Mitglied
                    werden zu können und bei sportlicher Begabung, auch in einer
                    der Mannschaften zu spielen.
                  </p>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      Unser Ziel
                    </h3>
                  </div>
                  <p className="leading-relaxed">
                    Das Ziel ist es, den Spaß am Tennisspielen zu entdecken, und
                    den Breitensport zu wecken und zu fördern. Tennis soll für
                    jeden zugänglich und erlebbar werden - unabhängig vom Alter
                    oder der sportlichen Vorerfahrung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manfred Seibold Profile */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Manfred Seibold - Ihr erfahrener Coach
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-xl font-bold text-tennis-black">
                      Qualifikationen
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {qualifikationen.map((qualifikation, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-tennis-yellow rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 font-medium text-sm">
                          {qualifikation}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-xl font-bold text-tennis-black">
                      Schwerpunkte
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {schwerpunkte.map((schwerpunkt, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-tennis-black rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 font-medium text-sm">
                          {schwerpunkt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Kontakt & Terminvereinbarung
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center">
                    <Phone className="h-5 w-5 text-tennis-yellow mr-3" />
                    <span className="font-semibold">0171-4557538</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-5 w-5 text-tennis-yellow mr-3" />
                    <span className="font-semibold">
                      seibold-tennis@t-online.de
                    </span>
                  </div>
                </div>
                <div className="mt-6 bg-tennis-yellow/20 rounded-lg p-4">
                  <p className="text-sm font-medium">
                    Trainingstermine nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Training Focus */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-tennis-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-tennis-black" />
              </div>
              <h3 className="text-xl font-bold text-tennis-black mb-4">
                Einsteiger & Wiedereinsteiger
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Speziell entwickelte Programme für Tennis-Neulinge und alle, die
                nach einer Pause wieder einsteigen möchten. Schritt für Schritt
                zum Erfolg.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-tennis-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-tennis-yellow" />
              </div>
              <h3 className="text-xl font-bold text-tennis-black mb-4">
                Taktik & Strategie
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Lernen Sie die richtige Taktik für Einzel und Doppel.
                Strategisches Denken und cleveres Spiel machen den Unterschied
                aus.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-tennis-yellow to-tennis-yellow/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-tennis-black" />
              </div>
              <h3 className="text-xl font-bold text-tennis-black mb-4">
                Mental-Training
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Die mentale Stärke ist entscheidend. Konzentration,
                Selbstvertrauen und der richtige Umgang mit Druck werden gezielt
                trainiert.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-tennis-black mb-6">
                Unsere Philosophie
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 border-l-4 border-tennis-yellow">
                  <h4 className="font-bold text-tennis-black mb-3">
                    Vereinsintegration
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Von Anfang an ermöglichen wir das Schnuppern im
                    Vereinsleben. Tennis ist ein Gemeinschaftssport - bei uns
                    finden Sie schnell Anschluss.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-l-4 border-tennis-yellow">
                  <h4 className="font-bold text-tennis-black mb-3">
                    Breitensport fördern
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Tennis für alle - das ist unser Motto. Egal ob Hobby oder
                    ambitionierter Sport, wir finden für jeden den passenden
                    Weg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-tennis-black rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-tennis-yellow mr-3" />
              <h3 className="text-xl font-bold text-tennis-yellow">
                Wichtiger Hinweis
              </h3>
            </div>
            <p className="leading-relaxed">
              Nach ersten Schnupperstunden ist (u.a. aus Versicherungsgründen)
              eine formale Mitgliedschaft beim TC Schwarz-Gelb Heidelberg e.V.
              Voraussetzung zum Training auf der Anlage des Vereins.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TennisschuleSeiboldDE;
