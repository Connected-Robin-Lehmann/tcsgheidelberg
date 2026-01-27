import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, ClipboardList, Phone, Mail, Calendar, Car, Home, Snowflake, MessageCircle } from "lucide-react";

const MannschaftsfuehrerDE = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Merkzettel
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Mannschaftsführer
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle wichtigen Informationen und Aufgaben für Mannschaftsführer/innen
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mb-12">
            <Button
              className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-8 py-6 text-lg"
              onClick={() =>
                window.open("/downloads/Checkliste_Mannschaftsfuehrer_2025.pdf", "_blank")
              }
            >
              <Download className="h-5 w-5 mr-2" />
              Checkliste als PDF herunterladen
            </Button>
          </div>

          {/* Allgemein Section */}
          <Card className="border-4 border-tennis-yellow/30 shadow-xl mb-8">
            <CardHeader className="bg-tennis-black">
              <CardTitle className="text-2xl font-bold text-tennis-yellow flex items-center gap-3">
                <Users className="h-7 w-7" />
                Allgemein
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Ansprechpartner für andere MF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Kommunikation mit dem Sportwart</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Bekommt alle Bälle für die Saison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Informiert Mannschaft über Spieltermine, sobald diese feststehen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Klärt rechtzeitig die Aufstellung für den Spieltag (z.B. per Doodle Liste, WhatsApp Umfrage, etc.) & informiert alle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Falls MF verhindert ist → Ersatz-MF festlegen & Infos weitergeben</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Spieltage Section */}
          <Card className="border-4 border-tennis-yellow/30 shadow-xl mb-8">
            <CardHeader className="bg-tennis-yellow">
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center gap-3">
                <Calendar className="h-7 w-7" />
                Spieltage
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Vor dem Spiel */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 border-b-2 border-tennis-yellow pb-2">
                  VOR DEM SPIEL
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Heimspiel */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Heimspiel
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Spielbogen & Bälle einpacken</li>
                      <li>• Organisieren, dass jeder aus Heimmannschaft etwas zum Essen/Trinken mitbringt</li>
                      <li>• Restaurant über Spieltag informieren – ca. 1 Woche vorher (nur im Sommer)</li>
                    </ul>
                  </div>

                  {/* Auswärtsspiel */}
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Auswärtsspiel
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Treffpunkt festlegen (am besten mind. 15 min vor Spielbeginn)</li>
                      <li>• Fahrorganisation klären</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Am Spieltag */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 border-b-2 border-tennis-yellow pb-2">
                  AM SPIELTAG
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Heimspiel */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Heimspiel
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bälle mitbringen (6er-Mannschaften: 5 Dosen / 4er-Mannschaften: 3 Dosen)</li>
                      <li>• Spielbogen mitbringen & mit MF der Gegner ausfüllen + unterschreiben</li>
                      <li>• Nach dem Spiel das Ergebnis direkt online eintragen oder an Sportwart schicken</li>
                    </ul>
                  </div>

                  {/* Auswärtsspiel */}
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Auswärtsspiel
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Mit gegnerischen MF Spielbericht ausfüllen</li>
                      <li>• Eintragungen prüfen & unterschreiben</li>
                      <li>• Foto vom unterschriebenen Spielbogen machen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Winterrunde */}
              <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300">
                <h4 className="font-bold text-tennis-black mb-4 flex items-center gap-2">
                  <Snowflake className="h-5 w-5 text-blue-500" />
                  Zusatz Winterrunde
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-tennis-yellow font-bold">•</span>
                    <span>MF bekommt Liste vom Sportwart mit Halleninfos</span>
                  </li>
                  <li className="ml-6 text-gray-600">○ Belag etc. prüfen + in Gruppe kommunizieren</li>
                  <li className="flex items-start gap-2">
                    <span className="text-tennis-yellow font-bold">•</span>
                    <span>MF sammelt Geld für Spieltag ein:</span>
                  </li>
                  <li className="ml-6 text-gray-600">○ 100€ pro Erwachsenenmannschaft</li>
                  <li className="ml-6 text-gray-600">○ 85€ pro Jugendmannschaften U12-U18</li>
                  <li className="ml-6 text-gray-600">○ 65€ bei der U10</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-tennis-yellow/20 bg-tennis-yellow/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-tennis-black mb-6 flex items-center gap-3">
                <MessageCircle className="h-7 w-7 text-tennis-yellow" />
                Bei Fragen
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="bg-tennis-yellow rounded-full p-3">
                    <Phone className="h-6 w-6 text-tennis-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telefon</p>
                    <a href="tel:+4915226564889" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors">
                      +49 152 265 64 889
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="bg-tennis-yellow rounded-full p-3">
                    <Mail className="h-6 w-6 text-tennis-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">E-Mail</p>
                    <a href="mailto:Sportwart@schwarz-gelb.de" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors">
                      Sportwart@schwarz-gelb.de
                    </a>
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

export default MannschaftsfuehrerDE;
