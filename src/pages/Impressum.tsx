
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-tennis-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Impressum
              </h1>
              <p className="text-xl text-gray-300">
                Rechtliche Angaben und Kontaktdaten
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="space-y-8">
                  {/* Vereinsangaben */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Angaben gemäß § 5 TMG
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>TC Schwarz-Gelb Heidelberg e.V.</strong></p>
                      <p>Schwindstraße 9</p>
                      <p>69126 Heidelberg</p>
                    </div>
                  </div>

                  {/* Kontakt */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Kontakt
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>E-Mail:</strong> tennis@schwarzgelb-heidelberg.de</p>
                      <p><strong>Telefon Restaurant:</strong> 0174-6808685</p>
                      <p><strong>Vereinshotline:</strong> 06221-4337096</p>
                    </div>
                  </div>

                  {/* Vereinsregister */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Registereintrag
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Eintragung im Vereinsregister:</strong></p>
                      <p>Registergericht: Amtsgericht Mannheim</p>
                      <p>Registernummer: VR 330674</p>
                    </div>
                  </div>

                  {/* Vorstand */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Vertretungsberechtigter Vorstand
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p>Der Verein wird vertreten durch den Vorstand im Sinne des § 26 BGB.</p>
                      <p>Einzelvertretungsberechtigt sind:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>1. Vorsitzende/r</li>
                        <li>2. Vorsitzende/r</li>
                        <li>Kassenwart/in</li>
                      </ul>
                    </div>
                  </div>

                  {/* Haftungsausschluss */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Haftungsausschluss
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Haftung für Inhalte</h3>
                        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Haftung für Links</h3>
                        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Urheberrecht</h3>
                        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                      </div>
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
};

export default Impressum;
