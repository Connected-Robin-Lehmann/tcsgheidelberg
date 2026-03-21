import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, AlertTriangle, Mail, Download } from "lucide-react";

const BeitragsordnungDE = () => {
  const mitgliedsbeitraege = [
    { type: "Ehepaar / Lebensgemeinschaft (2 Erwachsene mit gleicher Adresse)", annual: "632,00 €", halfYear: "435,00 €" },
    { type: 'Erwachsener "Einzelmitglied" (>18)', annual: "406,00 €", halfYear: "265,00 €" },
    { type: 'Erwachsener "Einzelmitglied in Ausbildung" (>18-28 Jahre), Nachweispflicht', annual: "197,00 €", halfYear: "135,00 €" },
    { type: 'Kind "Einzelmitglied" (unter 14 Jahre)', annual: "155,00 €", halfYear: "110,00 €" },
    { type: 'Jugendliche/r "Einzelmitglied" (14 bis 18 Jahre)', annual: "167,00 €", halfYear: "110,00 €" },
    { type: "Fördermitglied (passives Mitglied ohne Spielberechtigung)", annual: "75,00 €", halfYear: "75,00 €" },
  ];

  const kinderZusatzbeitraege = [
    { type: "Zuschlag für 1. erwachsenes Kind (18-28 J. und in Ausbildung), Nachweispflicht", annual: "95,00 €", halfYear: "70,00 €" },
    { type: "Zuschlag für 2. erwachsenes Kind (18-28 J. und in Ausbildung), Nachweispflicht", annual: "48,00 €", halfYear: "30,00 €" },
    { type: "Zuschlag ab 3. erwachsenes Kind (18-28 J. und in Ausbildung), Nachweispflicht", annual: "–", halfYear: "–" },
    { type: "Zuschlag für 1. Kind/Jugendliche/r bis 18 Jahre", annual: "48,00 €", halfYear: "35,00 €" },
    { type: "Zuschlag für 2. Kind/Jugendliche/r bis 18 Jahre", annual: "24,00 €", halfYear: "15,00 €" },
    { type: "Zuschlag ab 3. Kind/Jugendliche/r bis 18 Jahre", annual: "–", halfYear: "–" },
  ];

  const aufnahmegebuehren = [
    { type: 'Aufnahmeantrag in eine "aktive Mitgliedschaft" >25 Jahre alt', fee: "100,00 €" },
    { type: 'Aufnahmeantrag in eine "aktive Mitgliedschaft" <25 Jahre alt', fee: "50,00 €" },
    { type: "Aufnahmeantrag oder Wechsel zum Fördermitglied", fee: "–" },
    { type: '"Wieder"-Aufnahme (nach einem Austritt)', fee: "100,00 €" },
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

              {/* Sockelbeträge */}
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
                        <th className="text-right p-4 font-bold text-tennis-black">bei Eintritt ab 15.07.</th>
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
                  Zuschläge für Kinder zusätzlich zum Sockelbetrag für Erwachsene, Ehepaare und Lebensgemeinschaften
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Zusatzbeitrag</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Jahresbeitrag</th>
                        <th className="text-right p-4 font-bold text-tennis-black">bei Eintritt ab 15.07.</th>
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
                  Eintrittsgebühr
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Fällt bei Eintritt einmalig je Aufnahmevorgang (bzw. Aufnahmeantrag) unabhängig von der Zahl der aufgenommenen Personen an.
                </p>
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
                <p className="mb-2">Die genannten Preise gelten für ein Kalenderjahr und Beitragszahlung mittels SEPA Lastschriftverfahren.</p>
                
                <p>Ab 2026 Arbeitseinsatz (jährlich) von 2 Stunden für Mitglieder ab 16 bis 65 Jahre, bei Nichterbringung werden zum Ende des Kalenderjahres 15,00 €/h fällig.</p>
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


              {/* Download */}
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold p-6 h-auto"
                  onClick={() => window.open("/downloads/Beitragsordnung-2026.pdf", "_blank")}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Beitragsordnung 2026 (PDF)
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
