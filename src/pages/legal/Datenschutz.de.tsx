
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DatenschutzDE = () => {
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
                          <p>Marc Homsy, 2. Vorsitzender</p>
                          <p>Timo Schulz, Kassenwart</p>
                          <p className="mt-2">E-Mail: <a href="mailto:vorstand@schwarzgelb-heidelberg.de" className="text-tennis-black hover:text-tennis-yellow">vorstand@schwarzgelb-heidelberg.de</a></p>
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
                        <p className="mt-3">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden. <strong>Speicherdauer:</strong> 7 Tage, danach automatische Löschung.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Kontaktformular</h3>
                        <p>Wenn Sie uns mittels der verfügbaren Kontaktformulare oder per E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. <strong>Speicherdauer:</strong> bis zur Erledigung Ihres Anliegens, danach maximal 6 Monate.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">SSL-/TLS-Verschlüsselung</h3>
                        <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und am Schloss-Symbol in Ihrer Browserzeile.</p>
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
                      5. Hosting und externe Dienste
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Hosting (Vercel)</h3>
                        <p>Diese Website wird gehostet bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Die Auslieferung erfolgt über Server innerhalb der Europäischen Union (Region Frankfurt). Mit Vercel besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen Bereitstellung der Website).</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Backend / Datenbank (Supabase)</h3>
                        <p>Für dynamische Inhalte (Aktuelles, Videos, Tennis-Info-Hefte) nutzen wir Supabase als Backend- und Speicherdienst. Die Daten werden auf Servern innerhalb der EU verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Es werden keine personenbezogenen Daten der Website-Besucher in der Datenbank gespeichert.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Schriftarten (lokal gehostet)</h3>
                        <p>Wir verwenden Schriftarten („Inter" und „Playfair Display"), die <strong>lokal auf unserem Server</strong> gehostet werden. Es findet kein Verbindungsaufbau zu Google-Servern statt; eine Übertragung Ihrer IP-Adresse erfolgt nicht.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Google Maps (mit Einwilligung)</h3>
                        <p>Auf der Seite „Anfahrt" bieten wir eine Karte über den Dienst Google Maps an. Anbieter ist Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland. Die Karte wird <strong>erst nach Ihrer aktiven Einwilligung (Klick auf „Karte laden")</strong> geladen (Two-Click-Lösung). Erst dann werden Daten – insbesondere Ihre IP-Adresse – an Google übertragen, ggf. auch in die USA. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Browser-Daten dieser Website löschen.</p>
                        <p className="mt-3">Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-tennis-black hover:text-tennis-yellow" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Sportision (Trainingsanmeldung)</h3>
                        <p>Für die Trainingsanmeldung verlinken wir auf den externen Dienst Sportision. Beim Klick auf entsprechende Buttons werden Sie auf die Website von Sportision weitergeleitet; dort gelten ausschließlich deren Nutzungs- und Datenschutzbedingungen. Wir übermitteln selbst keine personenbezogenen Daten an Sportision.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">WhatsApp-Newskanal</h3>
                        <p>Wir bieten einen optionalen WhatsApp-Kanal für aktuelle Vereinsnews an. Der Beitritt ist freiwillig. Anbieter ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Bei Nutzung von WhatsApp werden Daten ggf. in die USA übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktiven Beitritt). Datenschutz von WhatsApp: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" className="text-tennis-black hover:text-tennis-yellow" target="_blank" rel="noopener noreferrer">whatsapp.com/legal/privacy-policy-eea</a>.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Cookies / Local Storage</h3>
                        <p>Diese Website verwendet ausschließlich <strong>technisch notwendige</strong> Speichermechanismen. Im Local Storage Ihres Browsers wird lediglich Ihre Auswahl zum Datenschutz-Hinweis abgelegt (Schlüssel: <code>sg-cookie-consent-v1</code>), damit dieser nicht erneut angezeigt wird. Es findet kein Tracking, keine Reichweitenmessung und keine Werbe-Profilbildung statt.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 6: Betroffenenrechte */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      6. Ihre Rechte als betroffene Person
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>Sie haben jederzeit folgende Rechte gegenüber uns:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                        <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                      </ul>
                      <p>Zur Ausübung wenden Sie sich an <a href="mailto:vorstand@schwarzgelb-heidelberg.de" className="text-tennis-black hover:text-tennis-yellow">vorstand@schwarzgelb-heidelberg.de</a>.</p>
                      <p>Darüber hinaus steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Art. 77 DSGVO):</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</strong></p>
                        <p>Lautenschlagerstraße 20, 70173 Stuttgart</p>
                        <p>Web: <a href="https://www.baden-wuerttemberg.datenschutz.de" className="text-tennis-black hover:text-tennis-yellow" target="_blank" rel="noopener noreferrer">baden-wuerttemberg.datenschutz.de</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Section 7: Speicherdauer */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      7. Speicherdauer
                    </h2>
                    <div className="space-y-3 text-gray-700">
                      <p>Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Server-Logs: 7 Tage</li>
                        <li>E-Mail- und Kontaktanfragen: bis zur Erledigung + max. 6 Monate</li>
                        <li>Mitgliedsdaten: für die Dauer der Mitgliedschaft + gesetzliche Aufbewahrungsfristen (i.d.R. 10 Jahre gem. § 147 AO / § 257 HGB)</li>
                        <li>Einwilligungs-Speicherung im Local Storage: bis Sie diese im Browser löschen</li>
                      </ul>
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
                    <p className="text-sm text-gray-500 mt-3">Stand: Juni 2026</p>
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

export default DatenschutzDE;
