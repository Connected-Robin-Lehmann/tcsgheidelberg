import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const PlatzordnungDE = () => {
  const playingTimes = [
    {
      type: "Einzel",
      duration: "60 Minuten",
      icon: <Users className="h-5 w-5" />,
    },
    {
      type: "Doppel",
      duration: "120 Minuten",
      icon: <Users className="h-5 w-5" />,
    },
    {
      type: "Bei extremer Auslastung",
      duration: "Stets nur 60 Minuten",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const courtRules = [
    {
      title: "Plätze abziehen",
      description: "Nach dem Spiel mit bereitgestellten Netzen",
      status: "required",
    },
    {
      title: "Linien reinigen",
      description: "Mit Linienbesen säubern",
      status: "required",
    },
    {
      title: "Plätze wässern",
      description: "Vor und nach dem Spielen ausreichend wässern",
      status: "required",
    },
    {
      title: "Sonnenschirme einklappen",
      description: "Nach Verlassen des Platzes",
      status: "required",
    },
    {
      title: "Flaschen entsorgen",
      description: "Keine leeren Flaschen zurücklassen",
      status: "required",
    },
    {
      title: "Abfall vermeiden",
      description: "Mülleimer auf der Anlage nutzen",
      status: "required",
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
                Fair Play
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Platzordnung
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regeln für ein harmonisches Miteinander auf unserer Tennisanlage
            </p>
          </div>

          {/* Intro */}
          <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-12 border-l-4 border-tennis-yellow">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ohne Spiel- und Platzordnung können wir keinen Spaß am Tennisspiel
              haben. Daher haben wir eine Platzordnung erstellt, die verbindlich
              für alle Mitglieder ist.
            </p>
          </div>

          {/* Playing Rights */}
          <Card className="border-tennis-yellow/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center">
                <CheckCircle className="h-6 w-6 text-tennis-yellow mr-3" />
                Spielberechtigung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Spielberechtigt ist jedes Mitglied, das seinen Jahresbeitrag
                ordnungsgemäß und in voller Höhe ggfs. incl. aller Zusatzabgaben
                entrichtet hat.
              </p>
            </CardContent>
          </Card>

          {/* Playing Times */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8 flex items-center">
                <Clock className="h-8 w-8 text-tennis-yellow mr-4" />
                Regel-Spielzeiten
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {playingTimes.map((time, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4 text-tennis-yellow">
                        {time.icon}
                      </div>
                      <h4 className="font-bold text-tennis-black mb-2">
                        {time.type}
                      </h4>
                      <p className="text-gray-600">{time.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Court Reservation */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Digitale Platzbelegung
                </h3>
                <div className="space-y-4">
                  <p>
                    Die Platzbelegung erfolgt mit Hilfe des digitalen
                    Reservierungssystems. Details sind dem Regelwerk des
                    Reservierungssystems zu entnehmen.
                  </p>
                  <p>
                    <strong>Ziel:</strong> Vermeidung von Situationen, dass
                    Mitglieder zur Anlage kommen und dann aufgrund von Belegung
                    nicht spielen können bzw. warten müssen.
                  </p>
                  <p>
                    Es besteht kein Zwang zur Nutzung und freies Spiel ist bei
                    freien Plätzen nach wie vor möglich. Alle bestehenden
                    Reservierungen sind jederzeit „real-time" einsehbar.
                  </p>
                </div>
                <div className="mt-6 bg-tennis-yellow/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-tennis-yellow mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Wichtig:</strong> Existiert eine
                      Reservierung/Buchung, ist der Platz „ohne Diskussion"
                      sofort zu räumen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guest Policy */}
              <div className="bg-red-50 rounded-2xl p-6 mb-8 border-l-4 border-red-400">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Gäste</h4>
                    <p className="text-red-700">
                      Derzeit sind wegen der großen Auslastung der Plätze keine
                      Gäste erlaubt!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After Playing Rules */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8">
                Nach dem Spiel
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {courtRules.map((rule, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-tennis-yellow mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-tennis-black mb-2">
                            {rule.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {rule.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-tennis-yellow/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Besondere Aufmerksamkeit für:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Alle Spieler, Trainer und Eltern</strong> von
                    Kindern/Jugendlichen
                  </li>
                  <li>• Darauf achten, dass Sonnenschirme eingeklappt sind</li>
                  <li>
                    • Keine leeren Flaschen auf oder neben den Spielerbänken
                    zurückbleiben
                  </li>
                  <li>
                    • Kein sonstiger Abfall zurückbleibt (Verpackungen, Tüten
                    etc.)
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-tennis-black">
                  Es befinden sich hinreichend Mülleimer auf der Anlage!
                </p>
              </div>
            </div>
          </div>

          {/* Download and Contact */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-tennis-yellow/20">
              <CardContent className="p-8 text-center">
                <Download className="h-12 w-12 text-tennis-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Vollständige Platzordnung
                </h3>
                <p className="text-gray-600 mb-6">
                  Die komplette Platzordnung als PDF-Dokument
                </p>
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2023/01/Platzordnung-Stand-1.2023.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-4 w-4 mr-2" />
                  PDF herunterladen
                </Button>
              </CardContent>
            </Card>

            <Card className="border-tennis-yellow/20 bg-tennis-black text-white">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="h-12 w-12 text-tennis-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-tennis-yellow mb-4">
                  Bei Konflikten
                </h3>
                <p className="mb-6">
                  In Zweifelsfällen sind anwesende Vorstands-Mitglieder
                  hinzuzuziehen, die dann für die Einhaltung der Spiel- und
                  Platzordnung sorgen.
                </p>
                <p className="text-tennis-yellow font-semibold">
                  Wir bitten dringend um Beachtung im Interesse aller
                  Mitglieder!
                </p>
                <p className="text-sm mt-4">— Der Vorstand —</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatzordnungDE;
