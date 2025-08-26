
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
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <div className="space-y-12">
                  {/* Section 1 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      1. Datenschutz auf einen Blick
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Allgemeine Hinweise</h3>
                        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Datenerfassung auf unserer Website</h3>
                        <h4 className="font-medium text-tennis-black mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                        <p>Die Datenverarbeitung auf dieser Website erfolgt durch uns als den Websitebetreiber. Unsere Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                        
                        <h4 className="font-medium text-tennis-black mb-2 mt-4">Wie erfassen wir Ihre Daten?</h4>
                        <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
                        
                        <h4 className="font-medium text-tennis-black mb-2 mt-4">Wofür nutzen wir Ihre Daten?</h4>
                        <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                        
                        <h4 className="font-medium text-tennis-black mb-2 mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                        <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      2. Allgemeine Hinweise und Pflichtinformationen
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Datenschutz</h3>
                        <p>Als Betreiber dieser Seiten nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                        <p className="mt-3">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Hinweis zur verantwortlichen Stelle</h3>
                        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                        <div className="bg-gray-50 p-4 rounded-lg mt-3">
                          <p><strong>TC Schwarz-Gelb Heidelberg e.V.</strong></p>
                          <p>Schwindstr. 9</p>
                          <p>69126 Heidelberg</p>
                          <p className="mt-2">Vertreten durch den Vorstand:</p>
                          <p>Aleksandar Kukaras, 1.Vorsitzender</p>
                          <p>Dr. Frank Schöneborn, 2. Vorsitzender und Schatzmeister</p>
                          <p className="mt-2">Tel. 0172-6644369</p>
                          <p>E-Mail: <a href="mailto:vorstand@schwarzgelb-heidelberg.de" className="text-tennis-black hover:text-tennis-yellow">vorstand@schwarzgelb-heidelberg.de</a></p>
                        </div>
                        <p className="mt-3">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      3. Datenerfassung auf unserer Website
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Server-Log-Dateien</h3>
                        <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                          <li>Browsertyp und Browserversion</li>
                          <li>verwendetes Betriebssystem</li>
                          <li>Referrer-URL</li>
                          <li>Hostname des zugreifenden Rechners</li>
                          <li>Uhrzeit der Serveranfrage</li>
                          <li>IP-Adresse</li>
                        </ul>
                        <p className="mt-3">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Kontaktformular</h3>
                        <p>Wenn Sie uns mittels der verfügbaren Kontaktformulare Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      4. Newsletter
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Newsletterdaten</h3>
                        <p>Wenn Sie den Vereinsnewsletter „TieBreak(ing)News" beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      5. Plugins und Tools
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Google Web Fonts</h3>
                        <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
                        <p className="mt-3">Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" className="text-tennis-black hover:text-tennis-yellow">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-tennis-black hover:text-tennis-yellow">https://policies.google.com/privacy?hl=de</a>.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Google Maps</h3>
                        <p>Unsere Website nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
                        <p className="mt-3">Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-tennis-black hover:text-tennis-yellow">https://policies.google.com/privacy?hl=de</a>.</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact for Privacy Questions */}
                  <div className="bg-tennis-yellow/10 p-6 rounded-lg border-l-4 border-tennis-yellow">
                    <h3 className="font-semibold text-tennis-black mb-2">
                      Fragen zum Datenschutz?
                    </h3>
                    <p className="text-gray-700">
                      Bei Fragen zum Datenschutz wenden Sie sich bitte an: 
                      <strong className="text-tennis-black"> vorstand@schwarzgelb-heidelberg.de</strong>
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
