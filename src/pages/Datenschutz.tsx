
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-tennis-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Datenschutz
              </h1>
              <p className="text-xl text-gray-300">
                Datenschutzerklärung des TC Schwarz-Gelb Heidelberg e.V.
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
                  {/* Allgemeine Hinweise */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      1. Datenschutz auf einen Blick
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <h3 className="font-semibold text-tennis-black">Allgemeine Hinweise</h3>
                      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                      
                      <h3 className="font-semibold text-tennis-black">Datenerfassung auf dieser Website</h3>
                      <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                    </div>
                  </div>

                  {/* Verantwortliche Stelle */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      2. Hinweis zur verantwortlichen Stelle
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                      <div className="bg-gray-50 p-4 rounded-lg mt-4">
                        <p><strong>TC Schwarz-Gelb Heidelberg e.V.</strong></p>
                        <p>Schwindstraße 9</p>
                        <p>69126 Heidelberg</p>
                        <p>E-Mail: tennis@schwarzgelb-heidelberg.de</p>
                      </div>
                      <p className="mt-4">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                    </div>
                  </div>

                  {/* Datenerfassung */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      3. Datenerfassung auf dieser Website
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <h3 className="font-semibold text-tennis-black">Server-Log-Dateien</h3>
                      <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Browsertyp und Browserversion</li>
                        <li>verwendetes Betriebssystem</li>
                        <li>Referrer URL</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                      </ul>
                      <p className="mt-4">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
                    </div>
                  </div>

                  {/* Kontaktformular */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      4. Kontaktformular und E-Mail-Kontakt
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
                      <p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.</p>
                    </div>
                  </div>

                  {/* Ihre Rechte */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      5. Ihre Rechte
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>Sie haben jederzeit das Recht:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                        <li>Berichtigung oder Löschung dieser Daten zu verlangen</li>
                        <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                        <li>der Datenverarbeitung zu widersprechen</li>
                        <li>auf Datenübertragbarkeit</li>
                      </ul>
                      <p className="mt-4">Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</p>
                    </div>
                  </div>

                  {/* Kontakt Datenschutz */}
                  <div className="bg-tennis-yellow/10 p-6 rounded-lg border-l-4 border-tennis-yellow">
                    <h3 className="font-semibold text-tennis-black mb-2">
                      Fragen zum Datenschutz?
                    </h3>
                    <p className="text-gray-700">
                      Bei Fragen zum Datenschutz wenden Sie sich bitte an: 
                      <strong className="text-tennis-black"> tennis@schwarzgelb-heidelberg.de</strong>
                    </p>
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

export default Datenschutz;
