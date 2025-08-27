
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Scale, FileText, Calendar } from 'lucide-react';

const Satzung = () => {
  const satzungPoints = [
    { title: "Vereinszweck", description: "Förderung des Tennis-Sports mit Spaß und Spiel" },
    { title: "Organisation", description: "Struktur des Vereins und der Gremien" },
    { title: "Vorstandsarbeit", description: "Handwerkszeug für die Vereinsführung" },
    { title: "Mitgliedschaft", description: "Rechte und Pflichten der Mitglieder" }
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
                Vereinsregister Mannheim
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Unsere Satzung
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Das Grundgesetz unseres Vereins - Ziele, Zweck und Organisation
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Scale className="h-8 w-8 text-tennis-yellow mr-4" />
                <h2 className="text-3xl font-bold text-tennis-black">
                  Die Verfassung unseres Clubs
                </h2>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Das gemeinsame Ziel haben wir schon: die Förderung des Tennis-Sports, gepaart mit Spaß und 
                  Spiel beim Ausführen unseres Sports. Diesen Zweck haben wir in unserer Vereinssatzung 
                  festgeschrieben.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Auch unser Verein, der als e.V. in das Vereinsregister Mannheim eingetragen ist, braucht eine 
                  schriftliche Satzung. Die Satzung ist die Verfassung des Clubs und quasi „das Grundgesetz" und 
                  spiegelt die Ziele, den Zweck, die Organisation der Vereinsarbeit und der Gremien etc. wieder. 
                  Die Satzung beschreibt insbesondere die Struktur des Vereins und ist das Handwerkszeug unseres 
                  Vorstands bei der Führung unseres Tennis-Vereins.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {satzungPoints.map((point, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <FileText className="h-6 w-6 text-tennis-yellow mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-tennis-black mb-2">{point.title}</h4>
                          <p className="text-gray-600 text-sm">{point.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Living Document */}
              <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Ein lebendiges Dokument
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Auch unsere Satzung ist kein statisches Dokument und gültig für alle Zeiten. So wie unser 
                  Verein lebt, muss auch unsere Satzung im Laufe der Jahre immer angepasst oder aktualisiert 
                  werden.
                </p>
              </div>

              {/* Current Version */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-tennis-yellow mr-3" />
                  <h3 className="text-2xl font-bold text-tennis-yellow">
                    Aktuelle Fassung
                  </h3>
                </div>
                <div className="space-y-4">
                  <p>
                    In der Mitgliederversammlung am <strong>11.10.2020</strong> wurde eine neue Satzung 
                    verabschiedet.
                  </p>
                  <p>
                    Diese wurde am <strong>20.11.2020</strong> vom Registergericht Mannheim eingetragen.
                  </p>
                  <p>
                    Die aktuelle gültige Fassung steht zum Download zur Verfügung.
                  </p>
                </div>
              </div>

              {/* Download Section */}
              <div className="text-center">
                <Button 
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => window.open("https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/11/Satzung-TC-Schwarzgelb-Heidelberg-e.V.-Beschluss-MV-11-Okt-2020-und-Eintragung-20-Nov-2020.pdf", "_blank")}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Satzung herunterladen (PDF)
                </Button>
                <p className="text-gray-600 text-sm mt-4">
                  Beschluss der Mitgliederversammlung vom 11.10.2020
                  <br />
                  Eingetragen am 20.11.2020 beim Registergericht Mannheim
                </p>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <Card className="border-tennis-yellow/20 bg-gray-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Scale className="h-12 w-12 text-tennis-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Rechtliche Grundlage
                </h3>
                <p className="text-gray-700">
                  Als eingetragener Verein (e.V.) im Vereinsregister Mannheim unterliegen wir den gesetzlichen 
                  Bestimmungen des BGB und sind zur Führung einer Satzung verpflichtet. Diese regelt alle 
                  wesentlichen Aspekte unseres Vereinslebens transparent und rechtsverbindlich.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Satzung;
