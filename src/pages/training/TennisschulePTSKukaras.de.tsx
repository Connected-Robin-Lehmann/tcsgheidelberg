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
  Download,
  ExternalLink,
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

  const camps2026 = [
    {
      name: "Osterferien Tenniscamp Kinder & Jugendliche",
      datum: "07.04. - 10.04.2026",
      zeit: "9:30-15:30",
    },
    {
      name: "2. Sommerferien Tenniscamp",
      datum: "07.09. - 11.09.2026",
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
              Tennisschule Kukaras
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kukaras Tennis Services GmbH - Nachwuchsförderung auf
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
          {/* Anmeldung Wintertraining 2026/2027 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Anmeldung Wintertraining 2026/2027
              </h2>
            </div>

            <div className="p-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="font-medium text-lg">Liebe Tennisfreunde!</p>

                <p>
                  Ein erfolgreicher und sonniger Sommer neigt sich dem Ende
                  entgegen. Wir freuen uns, euch nach der Sommerpause wiederzusehen
                  und das Wintertraining zu starten.
                </p>

                <p className="font-semibold text-tennis-black">
                  Die Trainingsanmeldung erfolgt wieder über das Online-Portal
                  Sportision.
                </p>

                <div className="bg-tennis-yellow/10 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
                    <img
                      src="/images/sportision-qr-code.png"
                      alt="QR-Code Sportision Anmeldung"
                      className="w-36 h-36"
                    />
                    <div className="text-center md:text-left">
                      <a
                        href="https://www.sportision.de/club/kukaras-professional-tennis-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-tennis-black font-semibold hover:text-tennis-yellow transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        sportision.de/club/kukaras-professional-tennis-1
                      </a>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    Anmeldung mit Gastzugang oder nach Registrierung möglich
                  </p>
                </div>

                <p>
                  Die Anmeldung ist mit einem Gastzugang oder mit einer
                  Registrierung möglich. Ich empfehle eine Registrierung, so könnt
                  ihr gemachte Angaben (bis zum Anmeldeschluss) verändern. Die
                  Registrierung ist kostenlos. Jeder Trainingsteilnehmer muss eine
                  eigene Anmeldung zum Training abschicken. Dies kann jedoch über
                  eine registrierte Person erfolgen.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-tennis-black mb-3">
                    Ablauf der Anmeldung:
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      • Mit dem Anklicken von <strong>Einschreiben</strong> meldet
                      man sich für das Training an. Hier tragt ihr die
                      Trainingswünsche und eure gewünschten Trainingszeiten und -tage
                      ein (möglichst viele!).
                    </li>
                    <li>
                      • <strong>Pflichtangabe sind 6 Häkchen</strong>, sonst wird die
                      Anmeldung nicht angenommen. Bei Buchungen von mehreren
                      Einheiten, bitte pro weiterer Einheit 2 zusätzliche Häkchen
                      setzen (Bsp. 2 Einheiten pro Woche = 8 Häkchen).
                    </li>
                    <li>
                      • Die Uhrzeiten der gemachten Häkchen sind verpflichtend
                      wahrzunehmen, da wir diese für die Erstellung des Planes nutzen.
                    </li>
                    <li>
                      • Bei der Anmeldung zu einem 2er-Training ist es sinnvoll,
                      dass man bereits einen Partner hat, da es nicht immer möglich
                      ist, einen passenden Spieler zu finden. Bitte bei Bemerkungen
                      notieren.
                    </li>
                    <li>
                      • Bei Bemerkungen können auch sonstige Trainingswünsche
                      angegeben werden.
                    </li>
                  </ul>
                </div>

                <p>
                  Das Portal ist leicht zu bedienen. Bei Fragen stehen wir euch
                  gerne zur Verfügung:{" "}
                  <a
                    href="mailto:tennis@kukaras.de"
                    className="text-tennis-black font-semibold hover:text-tennis-yellow transition-colors"
                  >
                    tennis@kukaras.de
                  </a>
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <p className="font-bold text-red-800">
                    Wichtig: Auch die Trainingsteilnehmer, die schon lange in der
                    gleichen Gruppe spielen und sich teilweise nicht mehr
                    offiziell gemeldet haben, müssen sich über dieses Programm
                    anmelden, da die Zuteilung zu den Gruppen über das Programm
                    erfolgt.
                  </p>
                </div>

                {/* Preistabelle */}
                <div className="bg-white rounded-xl border-2 border-tennis-yellow overflow-hidden">
                  <div className="bg-tennis-black p-4">
                    <h4 className="text-lg font-bold text-tennis-yellow text-center">
                      Preise für das Wintertraining Montag–Freitag (inkl. Halle,
                      Licht, Bälle)
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-tennis-yellow/20">
                          <th className="text-left p-4 font-bold text-tennis-black">
                            Trainingsgruppe
                          </th>
                          <th className="text-right p-4 font-bold text-tennis-black">
                            bis 16 Uhr
                          </th>
                          <th className="text-right p-4 font-bold text-tennis-black">
                            ab 16 Uhr
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">4er Gruppe 60 Minuten</td>
                          <td className="p-4 text-right font-semibold">520,00 €</td>
                          <td className="p-4 text-right font-semibold">535,00 €</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">3er Gruppe 60 Minuten</td>
                          <td className="p-4 text-right font-semibold">690,00 €</td>
                          <td className="p-4 text-right font-semibold">710,00 €</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">2er Gruppe 60 Minuten</td>
                          <td className="p-4 text-right font-semibold">1.035,00 €</td>
                          <td className="p-4 text-right font-semibold">
                            1.065,00 €
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">Einzeltraining / Familientraining</td>
                          <td className="p-4 text-right font-semibold">
                            1.950,00 €
                          </td>
                          <td className="p-4 text-right font-semibold">
                            1.990,00 €
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 p-4 text-sm text-gray-600 text-center">
                    Die Preise für das Training an Samstagen und Sonntagen
                    entsprechen den Preisen ab 16 Uhr.
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-tennis-black mb-3">
                    Trainingsorte & Zeitraum:
                  </h4>
                  <p className="mb-2">
                    Das Wintertraining findet in der{" "}
                    <strong>Traglufthalle</strong>, in der{" "}
                    <strong>Teppichhalle (SG)</strong> und in der{" "}
                    <strong>USC-Halle (Neuenheimer Feld)</strong> statt.
                  </p>
                  <p>
                    Das Training beginnt am <strong>21.09.2026</strong> und endet am{" "}
                    <strong>21.03.2027</strong> mit den Osterferien.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-sm">
                  <p className="mb-1">
                    ✅ An Feiertagen findet das Training wie gewohnt statt.
                  </p>
                  <p className="mb-3">
                    ❌ In den Ferien findet <strong>kein</strong> Training statt.
                  </p>
                  <h5 className="font-bold text-tennis-black mb-2">
                    Trainingsfreie Zeiten:
                  </h5>
                  <ul className="space-y-1">
                    <li>• Herbstferien: 25.10. – 01.11.2026</li>
                    <li>• Weihnachtsferien: 20.12.2026 – 10.01.2027</li>
                    <li>• Faschingsferien: 07.02. – 14.02.2027</li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-600">
                    Das Samstagstraining findet am Anfang der Ferien noch statt. Das
                    Sonntagstraining findet am letzten Sonntag nach den Ferien statt.
                  </p>
                </div>

                <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow p-6 rounded-r-lg">
                  <p className="font-bold text-tennis-black text-lg">
                    Anmeldeschluss ist der 15.09.2026.
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Bei einer späteren Anmeldung kann ich keinen Trainingsplatz
                    garantieren, da das Wintertraining schon am 21.09.2026 beginnt.
                  </p>
                </div>

                <p className="font-medium text-center text-lg">
                  Liebe Grüße
                  <br />
                  Alex Kukaras
                </p>
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
                  Tenniscamps 2026
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {camps2026.map((camp, index) => (
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

              {/* Registration Info */}
              <div className="mt-8 bg-tennis-yellow/10 rounded-xl p-6">
                <h4 className="text-lg font-bold text-tennis-black mb-4 text-center">
                  Anmeldung über Sportision
                </h4>
                <p className="text-gray-700 font-medium text-center mb-6">
                  Die Anmeldung erfolgt wieder über unser Online-Portal Sportision:
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                  <img
                    src="/images/sportision-qr-code.png"
                    alt="QR-Code Sportision Anmeldung"
                    className="w-40 h-40"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-gray-700 mb-2">oder per Link:</p>
                    <a
                      href="https://sportision.de/club/kukaras-professional-tennis-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-tennis-black font-semibold hover:text-tennis-yellow transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      sportision.de/club/kukaras-professional-tennis-1
                    </a>
                  </div>
                </div>
                <p className="text-center font-bold text-tennis-black text-lg">
                  Anmeldeschluss ist der 16.03.2026
                </p>
              </div>

              {/* Flyers */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-tennis-black mb-4 text-center">
                  Flyer zu den Feriencamps
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/flyer-ostercamp-2026.jpg"
                      alt="Flyer Ostercamp 2026"
                      className="w-full"
                    />
                    <div className="p-4 text-center">
                      <a
                        href="/downloads/OsterTenniscamps_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-tennis-yellow text-tennis-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Ostercamp Flyer (PDF)
                      </a>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/flyer-sommercamp-2026.jpg"
                      alt="Flyer Sommercamp 2026"
                      className="w-full"
                    />
                    <div className="p-4 text-center">
                      <a
                        href="/downloads/SommerTenniscamps_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-tennis-yellow text-tennis-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Sommercamp Flyer (PDF)
                      </a>
                    </div>
                  </div>
                </div>
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
                Die Traglufthalle ist Eigentum der Tennisschule Kukaras und
                bietet mit zwei Plätzen den Vorteil, dass auch im Winter auf
                Sandplatz trainiert werden kann und es somit weniger Umstellungs-
                und Anpassungsschwierigkeiten vom Freiplatz auf den Hallenplatz
                gibt. Die Traglufthalle kann von unseren Mitgliedern zum freien
                Spiel ohne Trainer nach Verfügbarkeit gegen Gebühr genutzt
                werden.
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
