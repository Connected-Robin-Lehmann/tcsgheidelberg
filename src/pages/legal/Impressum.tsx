<<<<<<< HEAD
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-tennis-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Impressum</h1>
              <p className="text-xl text-gray-300">
                Rechtliche Angaben und Kontaktdaten
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column - Basic Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Impressum
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Tennisclub Schwarz-Gelb Heidelberg e.V.</strong>
                      </p>
                      <p>Angaben gemäß § 5 TMG:</p>
                      <p>TC Schwarz-Gelb Heidelberg e.V.</p>
                      <p>Schwindstr. 9</p>
                      <p>69126 Heidelberg</p>
                    </div>

                    <div className="mt-6 space-y-2 text-gray-700">
                      <p>
                        <strong>Vertreten durch Vorstand:</strong>
                      </p>
                      <p>Aleksandar Kukaras, 1.Vorsitzender</p>
                      <p>
                        Dr. Frank Schöneborn, 2. Vorsitzender und Schatzmeister
                      </p>
                      <p>Tel. 06221-4337096</p>
                      <p>E-Mail: vorstand@schwarzgelb-heidelberg.de</p>
                      <p>
                        Internet:{" "}
                        <a
                          href="http://www.schwarzgelb-heidelberg.de"
                          className="text-tennis-black hover:text-tennis-yellow"
                        >
                          http://www.schwarzgelb-heidelberg.de
                        </a>
                      </p>
                    </div>

                    <div className="mt-6 space-y-2 text-gray-700">
                      <p>
                        <strong>V.i.S.d § 18 Abs. 2 MStV</strong>
                      </p>
                      <p>Dr. Frank Schöneborn</p>
                      <p>Schwindstr. 9</p>
                      <p>69126 Heidelberg</p>
                    </div>
                  </div>

                  {/* Right Column - Registration Info */}
                  <div>
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">
                          Registereintrag:
                        </h3>
                        <p>Eintragung im Vereinsregister</p>
                        <p>
                          Registergericht: AG Mannheim VR330225 (ehem. AG
                          Heidelberg VR 225)
                        </p>
                        <p>Steuernummer 32489/60339</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">
                          Streitschlichtung:
                        </h3>
                        <p>
                          Die Europäische Kommission stellt eine Plattform zur
                          Online-Streitbeilegung (OS) bereit:{" "}
                          <a
                            href="https://ec.europa.eu/consumers/odr"
                            className="text-tennis-black hover:text-tennis-yellow"
                          >
                            https://ec.europa.eu/consumers/odr
                          </a>
                          .
                        </p>
                        <p className="mt-2">
                          Unsere E-Mail-Adresse finden Sie oben im Impressum.
                          Wir sind nicht bereit oder verpflichtet, an
                          Streitbeilegungsverfahren vor einer
                          Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">
                          Web-Gestaltung und Umsetzung:
                        </h3>
                        <p>
                          Eigenerstellung durch TC Schwarz-Gelb Heidelberg e.V.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Width Content */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Liability */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Haftung für Inhalte
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Die Inhalte dieser Website werden mit größtmöglicher
                        Sorgfalt erstellt. Wir übernehmen jedoch keine Gewähr
                        für die Richtigkeit, Vollständigkeit und Aktualität der
                        bereitgestellten Inhalte. Die Nutzung der Inhalte der
                        Website erfolgt auf eigene Gefahr des Nutzers.
                      </p>

                      <p>
                        Namentlich gekennzeichnete Beiträge geben die Meinung
                        des jeweiligen Autors und nicht immer Meinung des
                        Vorstands wieder. Mit der reinen Nutzung der Website
                        kommt keinerlei Vertragsverhältnis zwischen dem Nutzer
                        und unserem Verein zustande.
                      </p>

                      <p>
                        Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für
                        eigene Inhalte auf diesen Seiten nach den allgemeinen
                        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                        als Dienstanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine
                        rechtswidrige Tätigkeit hinweisen.
                      </p>

                      <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                        von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unberührt. Eine diesbezügliche Haftung ist
                        jedoch erst ab dem Zeitpunkt der Kenntnis einer
                        konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                        von entsprechenden Rechtsverletzungen werden wir diese
                        Inhalte umgehend entfernen.
                      </p>

                      <div className="mt-6">
                        <h3 className="font-semibold text-tennis-black mb-2">
                          Haftung für Links
                        </h3>
                        <p>
                          Unser Internetauftritt enthält Links zu externen
                          Websites Dritter, auf deren Inhalte wir keinen
                          Einfluss haben. Deshalb können wir zwangsläufig für
                          diese fremden Inhalte auch keine Gewähr übernehmen.
                          Für die Inhalte der verlinkten Seiten ist daher stets
                          der jeweilige Anbieter oder Betreiber der Seiten
                          verantwortlich. Die verlinkten Seiten wurden zum
                          Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                          überprüft. Rechtswidrige Inhalte waren für uns zum
                          Zeitpunkt der Verlinkung nicht erkennbar.
                        </p>
                        <p className="mt-2">
                          Eine permanente inhaltliche Kontrolle der verlinkten
                          Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                          Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                          Rechtsverletzungen werden wir derartige Links umgehend
                          entfernen.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Copyright */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Urheberrecht
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung,
                        Verbreitung und jede Art der Verwertung außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den
                        privaten, nicht kommerziellen Gebrauch gestattet.
                      </p>

                      <p>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche
                        gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um
                        einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Inhalte umgehend
                        entfernen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
=======
import { LanguageRoute } from '@/utils/LanguageRoute';
import ImpressumDE from './Impressum.de';
import ImpressumEN from './Impressum.en';

const Impressum = () => {
  return <LanguageRoute de={ImpressumDE} en={ImpressumEN} />;
>>>>>>> b8a6f6b9174ea5c4dbefe9d0cb2558a7631f5c52
};

export default Impressum;
