import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Info, ExternalLink } from "lucide-react";

const SpielberichtsbogenDE = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Mannschaftssport
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Spielberichtsbogen
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offizielle Formulare für Ihre Mannschaftsspiele
            </p>
          </div>

          {/* Main Download Card */}
          <Card className="border-4 border-tennis-yellow/30 shadow-2xl mb-8">
            <CardHeader className="bg-tennis-yellow">
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center gap-3">
                <FileText className="h-7 w-7" />
                Spielberichtsbogen Download
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-gray-700 text-lg">
                  Hier können Sie den offiziellen Spielberichtsbogen für Ihre 
                  Mannschaftsspiele herunterladen. Der Spielberichtsbogen muss bei 
                  jedem Mannschaftsspiel ausgefüllt und von beiden Mannschaftsführern 
                  unterschrieben werden.
                </p>

                <div className="bg-tennis-yellow/10 rounded-xl p-6 border-l-4 border-tennis-yellow">
                  <h3 className="font-bold text-tennis-black mb-3 flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Wichtige Hinweise
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-tennis-yellow font-bold">•</span>
                      Der Bogen muss vollständig und leserlich ausgefüllt werden
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tennis-yellow font-bold">•</span>
                      Beide Mannschaftsführer müssen unterschreiben
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tennis-yellow font-bold">•</span>
                      Nach dem Spiel: Ergebnis direkt online eintragen oder an Sportwart senden
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-tennis-yellow font-bold">•</span>
                      Bei Auswärtsspielen: Foto vom unterschriebenen Bogen machen
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-8 py-6 text-lg flex-1"
                    onClick={() =>
                      window.open(
                        "https://www.btv-tennis.de/sport/downloads/spielbericht.pdf",
                        "_blank"
                      )
                    }
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Spielberichtsbogen (BTV)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="border-tennis-yellow/20">
            <CardContent className="p-6">
              <h3 className="font-bold text-tennis-black mb-4 text-xl">
                Weitere Ressourcen
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://www.btv-tennis.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-tennis-yellow/10 transition-colors group"
                >
                  <ExternalLink className="h-5 w-5 text-tennis-yellow group-hover:text-tennis-black" />
                  <div>
                    <span className="font-semibold text-tennis-black">Badischer Tennis Verband</span>
                    <p className="text-sm text-gray-600">Offizielle Downloads und Informationen</p>
                  </div>
                </a>
                <a
                  href="/mannschaften/mannschaftsfuehrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-tennis-yellow/10 transition-colors group"
                >
                  <FileText className="h-5 w-5 text-tennis-yellow group-hover:text-tennis-black" />
                  <div>
                    <span className="font-semibold text-tennis-black">Mannschaftsführer Info</span>
                    <p className="text-sm text-gray-600">Checkliste und Aufgaben</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpielberichtsbogenDE;
