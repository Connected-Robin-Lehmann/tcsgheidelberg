import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Euro, Users, AlertTriangle, Mail } from "lucide-react";

const BeitragsordnungDE = () => {
  const membershipTypes = [
    { type: "Erwachsene (25-65 Jahre)", rate: "Regulärer Beitrag" },
    { type: "Familien", rate: "Ermäßigter Tarif" },
    { type: "Jugendliche (bis 18 Jahre)", rate: "Ermäßigter Tarif" },
    { type: "Studenten", rate: "Ermäßigter Tarif" },
    { type: "Senioren (ab 65 Jahre)", rate: "Spezieller Tarif" },
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
                Transparente Preise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Beitragsordnung
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle Details zu unseren Mitgliedsbeiträgen im Überblick
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Euro className="h-8 w-8 text-tennis-yellow mr-4" />
                <h2 className="text-3xl font-bold text-tennis-black">
                  Unsere Beitragsstruktur
                </h2>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Hier finden Sie alle Details zu unseren Beiträgen. Für
                  Familien, Jugendliche und Studenten haben wir natürlich auch
                  ermäßigte Tarife. Auch bieten wir im ersten Jahr der Aufnahme
                  bei Eintritt nach dem 15.7. ermäßigte Beträge bis zum
                  Jahresende.
                </p>

                <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Neue Beitragsordnung ab 2021
                  </h3>
                  <p className="text-gray-700">
                    Es gilt eine neue Beitragsordnung ab 2021. Diese wurde von
                    der Mitgliederversammlung am 11.10.2020 beschlossen. Die
                    untenstehende Tabelle zeigt die ab 01.01.2021 geltende
                    Beitragsordnung.
                  </p>
                </div>
              </div>

              {/* Membership Types */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {membershipTypes.map((membership, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-tennis-black">
                            {membership.type}
                          </h4>
                          <p className="text-gray-600">{membership.rate}</p>
                        </div>
                        <Users className="h-6 w-6 text-tennis-yellow" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Important Notes */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">
                        Wichtiger Hinweis
                      </h4>
                      <p className="text-red-700 text-sm">
                        „Probe-" oder „Schnupper"-Mitgliedschaften bieten wir
                        nicht an.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start">
                    <Download className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        Mitgliedsantrag
                      </h4>
                      <p className="text-green-700 text-sm">
                        Die aktuelle gültige Fassung des Mitgliedsantrags steht
                        als Download zur Verfügung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Zahlungsmodalitäten
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Wir empfehlen die Erteilung eines SEPA-Mandats zum
                    Bankeinzug. Andernfalls werden bei Selbstüberweisung gemäß
                    Beitragsordnung zusätzlich <strong>EUR 25,-</strong> als
                    Bearbeitungsgebühr fällig.
                  </p>
                  <p className="font-semibold">
                    Alle Beiträge sind stets in voller Höhe zu entrichten.
                    Ausnahmen von der geltenden Beitragsordnung oder sonstige
                    Vergünstigungen werden keine gewährt.
                  </p>
                </div>
              </div>

              {/* Infrastructure Fee */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Infrastrukturabgabe
                </h3>
                <div className="space-y-4">
                  <p>
                    Im Jahr 2022 werden zusätzlich (gemäß Beschluss der
                    Mitgliederversammlung vom 11.10.2020) einmalig{" "}
                    <strong>EUR 20,-</strong> pro aktivem erwachsenen Mitglied
                    (25-65 Jahre alt) als Infrastrukturabgabe erhoben.
                  </p>
                  <p>
                    Für alle Folgejahre (2023 ff.) entscheidet die
                    Mitgliederversammlung jährlich (konkret auf der
                    Mitgliederversammlung im Vorjahr) auf Antrag in einem
                    Tagesordnungspunkt, ob im Folgejahr überhaupt eine
                    Infrastrukturabgabe erhoben werden soll, und falls ja, über
                    die exakte Höhe des Betrages.
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center mb-8">
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-8 py-4 text-lg"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2021/01/Beitragsordnung-ab-2021-komplett.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Beitragsordnung herunterladen (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Existing Members */}
          <Card className="border-tennis-yellow/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center">
                <Mail className="h-6 w-6 text-tennis-yellow mr-3" />
                Sie sind bereits Mitglied?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Fragen zur Änderung der Mitgliedschaft, zu Beitragsrechnungen
                und zu Änderungen der Stammdaten (etwa Adresse, Email,
                Bankverbindung, Telefonnummer etc.) teilen Sie uns bitte
                ausschließlich mit unter:
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-5 w-5 text-tennis-yellow" />
                <a
                  href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                  className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors text-lg"
                >
                  mitgliederservice@schwarzgelb-heidelberg.de
                </a>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">
                      Wichtige Kündigungsfrist
                    </h4>
                    <p className="text-red-700">
                      Eine Kündigungs- bzw. Austrittserklärung muss dem Vorstand
                      spätestens zum Ablauf des
                      <strong> 30.09. eines jeden Jahres</strong> in Schriftform
                      (Brief oder E-Mail) vorliegen. Eine Toleranz etwa durch
                      Verzögerungen auf dem Postweg etc. ist aus Gründen der
                      Gleichbehandlung aller Mitglieder nicht möglich.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeitragsordnungDE;
