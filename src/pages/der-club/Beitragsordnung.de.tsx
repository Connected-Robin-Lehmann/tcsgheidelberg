import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, AlertTriangle, Mail } from "lucide-react";

const BeitragsordnungDE = () => {
  const mitgliedsbeitraege = [
    { type: "Ehepaar / Lebensgemeinschaft (2 Erwachsene mit gleicher Adresse)", annual: "632 €", halfYear: "435 €" },
    { type: "Einzelmitglied Erwachsener über 18 Jahre", annual: "406 €", halfYear: "265 €" },
    { type: "Einzelmitglied Erwachsener in Ausbildung 18-25 Jahre (Nachweispflicht)", annual: "197 €", halfYear: "135 €" },
    { type: "Einzelmitglied Kind unter 14 Jahre", annual: "155 €", halfYear: "110 €" },
    { type: "Einzelmitglied Jugendliche/r 14-18 Jahre", annual: "167 €", halfYear: "115 €" },
    { type: "Trainingsmitgliedschaft (nur Training ohne Platzbuchungsberechtigung)", annual: "135 €", halfYear: "135 €" },
    { type: "Fördermitglied (passive Mitgliedschaft ohne Trainings-/Spielberechtigung)", annual: "75 €", halfYear: "75 €" },
  ];

  const kinderZusatzbeitraege = [
    { type: "Zuschlag für 1. Kind bis 18 Jahre", annual: "48 €", halfYear: "35 €" },
    { type: "Zuschlag für 2. Kind bis 18 Jahre", annual: "24 €", halfYear: "15 €" },
    { type: "Zuschlag ab 3. Kind bis 18 Jahre", annual: "0 €", halfYear: "0 €" },
    { type: "Zuschlag für 1. erwachsenes Kind 18-25 Jahre und in Ausbildung (Nachweispflicht)", annual: "95 €", halfYear: "70 €" },
    { type: "Zuschlag für 2. erwachsenes Kind in Ausbildung (Nachweispflicht)", annual: "48 €", halfYear: "35 €" },
    { type: "Zuschlag ab 3. erwachsenes Kind 18-25 Jahre und in Ausbildung (Nachweispflicht)", annual: "0 €", halfYear: "0 €" },
  ];

  const aufnahmegebuehren = [
    { type: "Aufnahmeantrag in eine aktive Mitgliedschaft, über 25 Jahre", fee: "100 €" },
    { type: "Aufnahmeantrag in eine aktive Mitgliedschaft, unter 25 Jahre", fee: "50 €" },
    { type: "Aufnahmeantrag oder Wechsel zum Fördermitglied", fee: "0 €" },
    { type: "Wiederaufnahme (nach einem Austritt)", fee: "100 €" },
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
                Gültig ab 01.01.2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Beitragsordnung
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle Details zu unseren aktuellen Mitgliedsbeiträgen im Überblick
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Euro className="h-8 w-8 text-tennis-yellow mr-4" />
                <h2 className="text-3xl font-bold text-tennis-black">
                  Mitgliedsbeiträge TC Schwarz-Gelb Heidelberg e.V.
                </h2>
              </div>

              {/* Mitgliedsbeiträge Tabelle */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-tennis-black mb-4 flex items-center">
                  <span className="bg-tennis-yellow text-tennis-black px-3 py-1 rounded-full text-sm mr-3">Sockelbetrag</span>
                  Mitgliedsbeiträge
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Mitgliedsart</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Jahresbeitrag</th>
                        <th className="text-right p-4 font-bold text-tennis-black">bei Eintritt nach 15.07.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mitgliedsbeitraege.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 text-gray-700">{item.type}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.annual}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.halfYear}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kinder Zusatzbeiträge */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Kinder Zusatzbeiträge zum Sockelbetrag für Erwachsene, Ehepaare und Lebensgemeinschaften
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Zusatzbeitrag</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Jahresbeitrag</th>
                        <th className="text-right p-4 font-bold text-tennis-black">bei Eintritt nach 15.07.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kinderZusatzbeitraege.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 text-gray-700">{item.type}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.annual}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.halfYear}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Aufnahmegebühren */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-tennis-black mb-4 flex items-center">
                  <span className="bg-tennis-black text-tennis-yellow px-3 py-1 rounded-full text-sm mr-3">Einmalig</span>
                  Aufnahmegebühr bei Eintritt in den TC Schwarz-Gelb Heidelberg e.V.
                </h3>
                <p className="text-gray-600 mb-4 text-sm">Gebühr je Antrag, unabhängig von der Personenanzahl</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Art des Antrags</th>
                        <th className="text-right p-4 font-bold text-tennis-black">unabhängig vom Eintrittsdatum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {aufnahmegebuehren.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 text-gray-700">{item.type}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fußnoten */}
              <div className="bg-gray-100 rounded-xl p-6 mb-8 text-sm text-gray-600">
                <p className="mb-2">1) Die genannten Preise gelten für ein Kalenderjahr und Beitragszahlung im SEPA Lastschriftverfahren</p>
                <p className="mb-2">2) Bei Zahlung des Beitrags ohne SEPA Lastschriftverfahren wird jedes Jahr zusätzlich eine Bearbeitungsgebühr von 25 € erhoben</p>
                <p>3) Arbeitseinsatz: Mitglieder von 16 bis 65 Jahre, 2 Std. / Jahr. Bei nicht Erbringung werden zum Ende des Kalenderjahres 15 €/ Std. fällig</p>
              </div>

              {/* Important Notes */}
              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">
                      Wichtiger Hinweis
                    </h4>
                    <p className="text-red-700 text-sm">
                      „Probe-" oder „Schnupper"-Mitgliedschaften bieten wir nicht an – es kann aber ein Probetraining bei einer der Tennisschulen{" "}
                      <a href="/training/tennisschule-pts-kukaras" className="font-semibold underline hover:opacity-70 transition-opacity">Kukaras</a>{" "}
                      oder{" "}
                      <a href="/training/tennisschule-seibold" className="font-semibold underline hover:opacity-70 transition-opacity">Seibold</a>{" "}
                      vereinbart werden, siehe unter <a href="/training" className="font-semibold underline hover:opacity-70 transition-opacity">Training</a>.
                    </p>
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
