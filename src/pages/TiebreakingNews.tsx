
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, Utensils, Mail } from 'lucide-react';

const TiebreakingNews = () => {
  const newsItems = [
    {
      title: "Schwarz-Gelb(e) TieBreaking No. 2/2025",
      date: "26.06.2025",
      content: "Sommerfest und Mitgliederversammlung kombiniert"
    },
    {
      title: "Schwarz-Gelb(e) TieBreaking No. 1/2025",
      date: "22.03.2025",
      content: "Saisoneröffnung und neue Gastronomie"
    }
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
                Vereinsnachrichten
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Tiebreaking News
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aktuelle Nachrichten und wichtige Informationen aus unserem Verein
            </p>
          </div>

          {/* Latest News - No. 2/2025 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-tennis-black">
                  Schwarz-Gelb(e) TieBreaking No. 2/2025
                </h2>
                <div className="flex items-center text-tennis-black">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">26.06.2025</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Liebe Mitglieder und Freunde unseres Vereins,</strong>
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  zur Mitte der Saison gibt es für unsere Mitglieder und Freunde unseres Vereins wieder 
                  das ganz besondere jährliche Club-Highlight!
                </p>

                {/* Sommerfest Announcement */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Sommerfest am 19.07.2025
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Wir feiern unser Sommerfest am <strong>Samstag 19.07.2025 ab 17.00h</strong> auf unserer 
                    Clubterrasse. Es gibt zu Beginn auch Live-Musik und wir verbinden das zugleich mit der 
                    Mitgliederversammlung!
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Alle langjährigen oder neuen Vereinsmitglieder, die Lust und Spaß am Wiedersehen in 
                    geselliger Runde bei sommerlichem Ambiente haben, sind willkommen! Unsere Sommerfeste 
                    sind schließlich legendär und es wird an Speisen und leckeren Drinks nicht mangeln.
                  </p>
                </div>

                {/* Mitgliederversammlung */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    Mitgliederversammlung um 17.00h
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Wir laden hiermit formal alle Mitglieder zu unserer ordentlichen Mitgliederversammlung 
                    am <strong>Samstag 19.07.2025 um 17.00h</strong> im Club ein.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Neben den formalen Punkten zu Beginn wird insbesondere das Jahr 2024 im Mittelpunkt 
                    der Berichte des Vorstands und die neue Vorstandswahl stehen.
                  </p>
                  <div className="bg-tennis-yellow/20 rounded-xl p-4">
                    <h4 className="font-bold text-tennis-yellow mb-2">Wichtige Abstimmungspunkte:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Anpassung der Satzung</li>
                      <li>Neue Beitragsordnung gültig ab 2026</li>
                      <li>Einmal-Umlage für 2025 über EUR 45,- (altersunabhängig)</li>
                    </ul>
                  </div>
                </div>

                {/* Restaurant News */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Utensils className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Unser neuer Restaurantpächter – Pasquale DiMauro
                    </h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-tennis-yellow mb-4">
                    <h4 className="font-bold text-tennis-black mb-2">Willkommen bei „La Trattoria"!</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <em>"Ab April 2026 übernehmen mein Team und ich die Gastronomie des Tennisclubs Schwarz-Gelb!"</em>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Mein Name ist Pasquale Dimauro. Ich bin ein erfahrener Gastronom mit Leidenschaft und 
                      Tradition und manche kennen mich vielleicht schon. Ich freue mich, Sie mit 30 Jahren 
                      erfolgreicher Tätigkeit in der Gastronomie, zukünftig mit italienischer Herzlichkeit 
                      und Küche zu verwöhnen.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <h5 className="font-bold text-tennis-black mb-2">Sommer 2025 (begrenzt)</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Wochenenden: kleines Speisenangebot</li>
                        <li>• Mi-Fr: 18:00-21:00 Uhr geöffnet</li>
                        <li>• Mo-Di: geschlossen</li>
                      </ul>
                    </div>
                    <div className="bg-tennis-yellow/20 rounded-xl p-4">
                      <h5 className="font-bold text-tennis-black mb-2">Ab April 2026</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Vollbetrieb "La Trattoria"</li>
                        <li>• Italienische Küche & Pizza</li>
                        <li>• Private Events möglich</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-tennis-yellow/10 rounded-xl p-6">
                  <p className="text-gray-700 font-medium">
                    Mit sportlichen Grüssen<br />
                    <strong>Vorstand TC Schwarz-Gelb Heidelberg e.V.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous News - No. 1/2025 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="bg-gray-100 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Schwarz-Gelb(e) TieBreaking No. 1/2025
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">22.03.2025</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>Liebe Mitglieder und Freunde unseres Vereins,</strong>
                </p>
                <p className="text-gray-700 mb-6">
                  seit längerem melden wir uns wieder mit den neuesten und spannenden Informationen rund 
                  um unseren Verein. Diesmal gibt es viele Neuigkeiten!
                </p>

                {/* Key Updates */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-tennis-black mb-3">Plätze bald geöffnet</h4>
                    <p className="text-gray-700 text-sm">
                      Die sanierten Außenplätze werden voraussichtlich ab nächste Woche bespielbar sein. 
                      BERK, Plätze 1-4 und 10 stehen dann zur Verfügung.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-tennis-black mb-3">Umkleiden renoviert</h4>
                    <p className="text-gray-700 text-sm">
                      Die Renovierung der Umkleiden und Nebenräume ist abgeschlossen. Das Ergebnis ist 
                      wunderbar - schauen Sie sich die Details an!
                    </p>
                  </div>
                </div>

                {/* Important Dates */}
                <div className="bg-tennis-yellow/10 rounded-xl p-6">
                  <h4 className="font-bold text-tennis-black mb-4">Wichtige Termine 2025</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>30.04.</strong> - 80er/90er Party</li>
                        <li>• <strong>03.05.</strong> - Beginn Medenrunde</li>
                        <li>• <strong>04.05.</strong> - Saisoneröffnung mit Blümchenturnier</li>
                        <li>• <strong>07.06.-21.06.</strong> - Tenniscamp Kroatien</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>19.07.</strong> - Mitgliederversammlung + Sommerfest</li>
                        <li>• <strong>30.07.-03.08.</strong> - Schwarz Gelb Cup 2025</li>
                        <li>• <strong>07.10.</strong> - Saisonabschluss Doppel-Turnier</li>
                        <li>• <strong>21.11.</strong> - Thanksgiving Pute-Essen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TiebreakingNews;
