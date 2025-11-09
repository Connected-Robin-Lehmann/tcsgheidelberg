import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Trophy,
  Users,
  Calendar,
  Target,
  Award,
} from "lucide-react";

const TennisschulePTSKukarasDE = () => {
  const services = [
    "Erstellen von Trainingsprogrammen",
    "Mannschaftstrainings",
    "Einzeltrainings und Gruppentrainings",
    "Regelmäßige Trainingscamps",
    "Trainer- und Spielervermittlung",
    "Tenniskurse",
    "DTB-Tennis-Sportabzeichen",
    "Sparrings-Partner-Vermittlung",
    "Turnierbetreuung",
    "Videoanalyse mit Dartfish-Methode",
    "Mentales Training",
    "Konditionstraining – Plyometrics Methode",
    "Cardio Tennis",
    "Kooperationsmöglichkeiten Schule-Verein",
    "Kostenlose Schlägertests",
    "Bespannungsservice",
  ];

  const camps2025 = [
    {
      name: "Osterferien Tenniscamp Kinder & Jugendliche",
      datum: "14.04.-17.04.2025",
      zeit: "9:30-15:30",
    },
    {
      name: "Osterferien Tennisworkshop Erwachsene",
      datum: "14.04.-17.04.2025",
      zeit: "18:00-20:00",
    },
    {
      name: "2. Osterferien Tenniscamp Kinder & Jugendliche",
      datum: "22.04.-25.04.2025",
      zeit: "9:30-15:30",
    },
    {
      name: "2. Osterferien Tennisworkshop Erwachsene",
      datum: "22.04.-25.04.2025",
      zeit: "18:00-20:00",
    },
    {
      name: "Pfingstferien Tenniscamp Kroatien (Veli Losinj)",
      datum: "07.06.-21.06.2025",
      zeit: "Ganztägig",
    },
    {
      name: "1. Sommerferien Tenniscamp",
      datum: "04.08.-08.08.2025",
      zeit: "Ganztägig",
    },
    {
      name: "2. Sommerferien Tenniscamp",
      datum: "08.09.-12.09.2025",
      zeit: "Ganztägig",
    },
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
                Professionelle Tennisschule
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Tennisschule PTS Kukaras
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kukaras Professional Tennis Services - Nachwuchsförderung auf
              höchstem Niveau
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Tradition der Exzellenz
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Die Jugend- und Nachwuchsarbeit war traditionell immer die
                    Stärke des TC Schwarz-Gelb Heidelberg. Seit 2008 ist mit
                    Alex Kukaras nach sechsjähriger Unterbrechung wieder der
                    Trainer und Koordinator an Bord, der schon in der
                    Vergangenheit bewiesen hat, dass Erfolge kein Zufall sind.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Alex konnte mit Mannschaften und Spielern unzählige Titel
                    erringen. Bezirks-, Badische- und sogar Weltmeisterschaften
                    wurden unter seiner Regie erlangt.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-tennis-black rounded-2xl p-8 text-white">
                    <div className="flex items-center mb-4">
                      <Trophy className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-yellow">
                        Höchste Qualifikation
                      </h4>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Alex besitzt mit der A-Lizenz des Deutschen Tennis Bundes
                      die höchste Lizenz im Tennissport. Wir bieten als Verein
                      in Zusammenarbeit mit der Tennisschule Kukaras damit
                      Nachwuchsarbeit auf höchstem Niveau.
                    </p>
                    <div className="bg-tennis-yellow/20 rounded-lg p-4">
                      <p className="text-sm font-medium">
                        Seit seinem erneuten Engagement hat sich die Zahl der
                        Kinder und Jugendlichen in unserem Club erheblich
                        erhöht.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-black">
                        Für alle Mitglieder
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Selbstverständlich beschränkt sich das Trainingsangebot
                      nicht nur auf Kinder und Jugendliche. Jedes Mitglied bei
                      Schwarz-Gelb kann Trainings individuell buchen oder auch
                      in Gruppentrainings je nach Verfügbarkeit und Eignung
                      einsteigen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aleksandar Kukaras Profile */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Aleksandar Kukaras - Leiter der Tennisschule
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-tennis-black mb-4">
                    Qualifikationen
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      DTB-A-Trainer
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      USPTA Professional 1
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      Serbischer Diplomtrainer
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      Cardio Trainer
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      Plyometrics Trainer
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      "JTFO"-Beauftragter im RP Karlsruhe
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-tennis-black mb-4">
                    Kontakt
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 text-tennis-yellow" />
                      <div>
                        <div>Leisberg 22</div>
                        <div>69124 Heidelberg</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-5 w-5 mr-3 text-tennis-yellow" />
                      <div>
                        <div>Tel/Fax: +49/(0)6221/783881</div>
                        <div>Mobil: +49/(0)172/6644369</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="h-5 w-5 mr-3 text-tennis-yellow" />
                      <span>aleksandar.kukaras@schwarzgelb-heidelberg.de</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-black p-6">
              <h2 className="text-2xl font-bold text-tennis-yellow text-center">
                Programme und Services
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-tennis-yellow/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-800">
                        {service}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Camps 2025 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 text-tennis-black mr-3" />
                <h2 className="text-2xl font-bold text-tennis-black text-center">
                  Tenniscamps 2025
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {camps2025.map((camp, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-tennis-yellow/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-2 md:mb-0">
                        <h4 className="font-bold text-tennis-black">
                          {camp.name}
                        </h4>
                        <p className="text-sm text-gray-600">{camp.zeit}</p>
                      </div>
                      <div className="bg-tennis-yellow/20 px-4 py-2 rounded-lg">
                        <span className="font-semibold text-tennis-black">
                          {camp.datum}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-tennis-yellow/10 rounded-xl p-6">
                <p className="text-gray-700 font-medium text-center">
                  Weitere Informationen u.a. zur Anmeldung stehen bald zum
                  Download zur Verfügung.
                </p>
              </div>
            </div>
          </div>

          {/* Traglufthalle */}
          <div className="bg-tennis-black rounded-3xl p-8 text-white mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                Traglufthalle von Oktober bis April
              </h3>
              <p className="leading-relaxed mb-6">
                Seit vielen Jahren regelmäßig in der Zeit von Anfang Oktober bis
                Anfang April installiert die Tennisschule Kukaras die
                Tragluft-Tennishalle über den Plätzen 7 + 8.
              </p>
              <p className="leading-relaxed mb-6">
                So können unsere Mitglieder auch in der Wintersaison von
                September bis April die Vorteile des Sandplatzspieles genießen.
                Umstellungs- und Anpassungsschwierigkeiten vom Freiplatz auf den
                Hallenplatz gibt es damit nicht mehr.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tennis-yellow/20 rounded-xl p-6">
                <h4 className="font-bold text-tennis-yellow mb-3">
                  Ausstattung
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• 2 Sandplätze in beheizter Halle</li>
                  <li>• Ganzjährige Sandplatz-Erfahrung</li>
                  <li>• Keine Umstellungsprobleme</li>
                </ul>
              </div>
              <div className="bg-tennis-yellow/20 rounded-xl p-6">
                <h4 className="font-bold text-tennis-yellow mb-3">
                  Information & Buchung
                </h4>
                <p className="text-sm mb-2">
                  Alexandar Kukaras
                  <br />
                  Tel: 0172-66 44 369
                  <br />
                  E-Mail: kukaras@t-online.de
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-tennis-yellow mr-3" />
              <h3 className="text-xl font-bold text-tennis-black">
                Wichtiger Hinweis
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nach ersten Schnuppertrainingsstunden ist (u.a. aus
              Versicherungsgründen) eine formale Mitgliedschaft beim TC
              Schwarz-Gelb Heidelberg e.V. Voraussetzung zum Training auf der
              Anlage des Vereins.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TennisschulePTSKukarasDE;
