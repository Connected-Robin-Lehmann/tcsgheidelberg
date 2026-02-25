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
  TreePine,
  Trophy,
  Shirt,
  Eye,
  Sun,
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

          {/* Latest News - No. 2/2026 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-tennis-black">
                  Schwarz-Gelb(e) TieBreaking No. 2/2026
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

                {/* Putzete verschoben */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Putzete verschoben auf 08.03. 💪
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Wir werden die Putzete von diesem Sonntag wegen Baumschnittarbeiten auf den <strong>8.3. (wieder 10:00 Uhr)</strong> verlegen müssen.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bitte meldet Euch möglichst unter{" "}
                    <a
                      href="mailto:tennis@schwarzgelb-heidelberg.de"
                      className="text-tennis-yellow hover:underline font-semibold"
                    >
                      tennis@schwarzgelb-heidelberg.de
                    </a>{" "}
                    an, damit wir mit der Anzahl an Mitgliedern planen können. Es steht einiges an Aufgaben an, daher freuen wir uns über eine rege Teilnahme.
                  </p>
                </div>

                {/* Brennholz */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Sun className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Brennholz abzuholen 🙂
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Das Brennholz ist noch abzuholen – first come, first serve!
                  </p>
                  <div className="rounded-xl overflow-hidden shadow-lg max-w-md">
                    <img
                      src="/images/aktuelles/brennholz-abholung.png"
                      alt="Brennholz zur Abholung auf der Anlage"
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                {/* Tennisschuhe */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <Shirt className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Tennisschuhe aus der Herrenumkleide
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    In der Herrenumkleide lagen jede Menge (meist sehr alte) Tennisschuhe, die das Team letzte Woche in die Garage gebracht hat. Bitte holt diese noch vor Beginn der Sommersaison ab, wenn Ihr diese noch braucht.
                  </p>
                </div>

                {/* Tennissichtung */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Tennissichtung am 15.03. 🎾
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Am <strong>15.03. um 12:00 Uhr</strong> findet eine Tennissichtung statt für Mitglieder, die in der Sommersaison mit Training starten möchten (Kinder und Erwachsene).
                  </p>
                </div>

                {/* Ostercamp */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Ostertenniscamp für Kinder
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Das Ostertenniscamp für Kinder findet vom <strong>07.04. – 10.04.</strong> täglich von <strong>9:30 – 15:30 Uhr</strong> statt.
                  </p>
                </div>

                {/* Erfolge */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <Trophy className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      Unsere Erfolge 🏆
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="rounded-xl overflow-hidden shadow-lg w-48 flex-shrink-0">
                        <img
                          src="/images/aktuelles/olivia-georg-stuttgart.png"
                          alt="Olivia Georg – 3. Platz Stuttgart U12"
                          className="w-full object-cover"
                        />
                      </div>
                      <p className="leading-relaxed">
                        <strong className="text-tennis-yellow">Olivia Georg</strong> hat das Jahr stark gestartet: im Februar gewinnt sie gegen die Nummer eins in Deutschland und belegt zweimal den 3. Platz bei den besten nationalen Turnieren!
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="rounded-xl overflow-hidden shadow-lg w-48 flex-shrink-0">
                        <img
                          src="/images/aktuelles/emmy-zhu-badische-meisterin.png"
                          alt="Emmy Zhu – Badische Meisterin"
                          className="w-full object-cover"
                        />
                      </div>
                      <p className="leading-relaxed">
                        Wir gratulieren auch <strong className="text-tennis-yellow">Emmy Zhu</strong>! Sie wurde im Januar erneut badische Meisterin 👏🏻!
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Erinnerung */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      WhatsApp Gruppe beitreten 🙂
                    </h3>
                  </div>
                  <p className="leading-relaxed mb-4">
                    Nochmal die Erinnerung an unsere neue WhatsApp Gruppe, die wir verstärkt nutzen wollen für die Kommunikation mit allen Mitgliedern.
                  </p>
                  <a
                    href="https://chat.whatsapp.com/GPjdj6ZfcAzGRLeijq7OK1?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-tennis-yellow text-tennis-black font-bold px-6 py-3 rounded-xl hover:bg-tennis-yellow/90 transition-colors"
                  >
                    WhatsApp Gruppe beitreten
                  </a>
                </div>

                <div className="text-center bg-tennis-yellow/10 rounded-xl p-6">
                  <p className="text-gray-700 font-medium">
                    Sonnige Grüße, ☀️
                    <br />
                    <strong>Euer Vorstand</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Archive - No. 1/2026 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200">
            <div className="bg-gray-200 p-6 cursor-pointer" onClick={() => {
              const el = document.getElementById('archive-1-2026');
              if (el) el.classList.toggle('hidden');
            }}>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-tennis-black">
                  Archiv: Schwarz-Gelb(e) TieBreaking No. 1/2026
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Januar 2026</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">Klicken zum Auf-/Zuklappen</p>
            </div>

            <div id="archive-1-2026" className="hidden p-8 md:p-12">
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

                {/* Termine */}
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
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        26.04. – Tag der offenen Tür & Saisoneröffnung
                      </h5>
                    </div>
                    <div className="bg-white rounded-xl p-4 border-l-4 border-tennis-yellow">
                      <h5 className="font-bold text-tennis-black mb-1">
                        30.05. – 06.06. – Pfingstferien Tenniscamp
                      </h5>
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
