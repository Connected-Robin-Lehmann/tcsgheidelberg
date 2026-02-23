import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  CreditCard,
  MessageCircle,
  Globe,
  CalendarDays,
  Utensils,
} from "lucide-react";

const TiebreakingNewsDE = () => {
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

          {/* Latest News - No. 1/2026 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-tennis-black">
                  Schwarz-Gelb(e) TieBreaking No. 1/2026
                </h2>
                <div className="flex items-center text-tennis-black">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Februar 2026</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Liebe Mitglieder,</strong>
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  wir hoffen, das neue Jahr hat gut für Euch gestartet und es
                  gelingt Euch, über die kalte Jahreszeit fit und gesund zu
                  bleiben. Der neue Vorstand hat bereits mit Ausklang des alten
                  Jahres seine Arbeit aufgenommen und eine Übergabe aller
                  Aufgaben und Themen von Frank Schöneborn vorbereitet, so dass
                  wir positiver Dinge in das neue Jahr starten konnten.
                </p>

                {/* Mitgliedsbeitrag */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Einzug des Mitgliedsbeitrags – Februar 2026
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Planmäßig werden die fälligen Mitgliedsbeiträge im Laufe des
                    Februars im Lastschriftverfahren eingezogen. Aus
                    Kostengründen und der Umwelt zuliebe verzichten wir zukünftig
                    auf den Versand der Rechnungen in Papierform. Die neuen
                    Mitgliedsbeiträge, die im Oktober 2025 auf unserer
                    Mitgliederversammlung beschlossen wurden, findet ihr in
                    unserer{" "}
                    <a
                      href="/der-club/beitragsordnung"
                      className="text-tennis-yellow hover:underline font-semibold"
                    >
                      Beitragsordnung
                    </a>
                    .
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Mitglieder, von denen uns kein SEPA-Lastschriftmandat
                    vorliegt, erhalten die Rechnung weiterhin in Papierform,
                    wodurch sich die Bearbeitungsgebühr von 25€ begründet. Sofern
                    diese Mitglieder auf das Lastschriftverfahren umstellen
                    möchten, schreibt uns bitte eine Mail mit eurer
                    Bankverbindung an{" "}
                    <a
                      href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                      className="text-tennis-yellow hover:underline font-semibold"
                    >
                      mitgliederservice@schwarzgelb-heidelberg.de
                    </a>
                    . Die Umstellung nehmen wir dann im nächsten Jahr vor, für
                    2026 sind die Rechnungen bereits erstellt.
                  </p>
                </div>

                {/* WhatsApp News */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      WhatsApp News vom Vorstand
                    </h3>
                  </div>
                  <p className="leading-relaxed mb-4">
                    Wir möchten euch vor allem während der Sommermonate, wenn das
                    Vereinsleben wieder aktiver wird, immer auf dem Laufenden
                    halten und bieten euch dazu eine WhatsApp Gruppe an.
                  </p>
                  <p className="leading-relaxed">
                    Wenn Ihr regelmäßig informiert werden und nichts verpassen
                    wollt, dann tretet bitte der WhatsApp Gruppe bei. Wichtige
                    Infos schicken wir natürlich in regelmäßigen Abständen
                    weiterhin per E-Mail via unseren TieBreaking News.
                  </p>
                </div>

                {/* Neue Webseite */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <Globe className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Vorabankündigung: Neue Webseite – März 2026
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Wir haben schon fleißig an einer neuen Webseite gearbeitet,
                    so dass unser Verein in einem „neuen Look" erscheinen kann.
                    Hier planen wir, Euch einen stets aktuellen und
                    übersichtlichen Einblick in alles zu geben, was die
                    Mitglieder suchen und wissen müssen. Wir planen, die Webseite
                    ab Anfang März freizuschalten – schaut doch dann einfach mal
                    vorbei und gebt uns gerne Rückmeldung.
                  </p>
                </div>

                {/* Termine 2026 */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Termine 2026
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Hier schon mal ein erster Einblick in die nächsten
                    anstehenden Termine:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        07.04. – 10.04. – Osterferien Tenniscamp
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Tenniscamp für Kinder in den Osterferien.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        26.04. – Tag der offenen Tür & Saisoneröffnung
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Mit Blümchenturnier.
                      </p>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        30.05. – 06.06. – Pfingstferien Tenniscamp
                      </h5>
                      <p className="text-gray-700 text-sm">
                        Tenniscamp in Veli Lošinj (Anmeldeschluss 15.02.).
                      </p>
                    </div>
                  </div>
                </div>

                {/* La Trattoria */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Utensils className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Hinweis: Die neue <em>„La Trattoria"</em>
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Im April 2026 eröffnet die neue <em>„La Trattoria"</em> im
                    Tennisclub Schwarz-Gelb ihre Türen. Freut Euch auf
                    authentische italienische Küche, erlesene Weine und ein
                    liebevoll neu gestaltetes Restaurant mit gemütlichem
                    Biergarten.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Auch Events und Feiern können künftig in besonderem Ambiente
                    gebucht werden. Pasquale Dimauro und sein Team freuen sich
                    darauf, Euch zu genussvollen Stunden willkommen zu heißen.
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/images/la-trattoria-coming-soon.png"
                      alt="La Trattoria – Coming Soon April 2026"
                      className="w-full object-contain"
                    />
                  </div>
                </div>

                <div className="text-center bg-tennis-yellow/10 rounded-xl p-6">
                  <p className="text-gray-700 font-medium">
                    Schöne Grüße,
                    <br />
                    <strong>Euer Vorstandsteam</strong>
                  </p>
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

export default TiebreakingNewsDE;
