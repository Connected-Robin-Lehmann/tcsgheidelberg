
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DatenschutzEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-tennis-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300">
                Privacy Policy of TC Schwarz-Gelb Heidelberg e.V.
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
                      1. Data Protection at a Glance
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">General Information</h3>
                        <p>The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data that can be used to personally identify you. For detailed information on data protection, please refer to our privacy policy listed below this text.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Data Collection on Our Website</h3>
                        <h4 className="font-medium text-tennis-black mb-2">Who is responsible for data collection on this website?</h4>
                        <p>Data processing on this website is carried out by us as the website operator. Our contact details can be found in the legal notice of this website.</p>
                        
                        <h4 className="font-medium text-tennis-black mb-2 mt-4">How do we collect your data?</h4>
                        <p>On the one hand, your data is collected when you provide it to us. This may, for example, be data that you enter in a contact form. Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data (e.g. internet browser, operating system or time of page access). This data is collected automatically as soon as you enter our website.</p>
                        
                        <h4 className="font-medium text-tennis-black mb-2 mt-4">What do we use your data for?</h4>
                        <p>Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.</p>
                        
                        <h4 className="font-medium text-tennis-black mb-2 mt-4">What rights do you have regarding your data?</h4>
                        <p>You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction, blocking or deletion of this data. You can contact us at any time at the address given in the legal notice for this purpose and for further questions on data protection. Furthermore, you have the right to lodge a complaint with the competent supervisory authority. You also have the right to request the restriction of the processing of your personal data under certain circumstances. For details, please refer to the privacy policy under "Right to restriction of processing".</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      2. General Information and Mandatory Information
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Data Protection</h3>
                        <p>As the operator of these pages, we take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy. When you use this website, various personal data is collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.</p>
                        <p className="mt-3">We would like to point out that data transmission on the Internet (e.g. communication by email) may have security gaps. Complete protection of data against access by third parties is not possible.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Note on the Responsible Party</h3>
                        <p>The responsible party for data processing on this website is:</p>
                        <div className="bg-gray-50 p-4 rounded-lg mt-3">
                          <p><strong>TC Schwarz-Gelb Heidelberg e.V.</strong></p>
                          <p>Schwindstr. 9</p>
                          <p>69126 Heidelberg</p>
                          <p>Germany</p>
                          <p className="mt-2">Represented by the Board:</p>
                          <p>Aleksandar Kukaras, Chairman</p>
                          <p>Marc Homsy, Vice Chairman</p>
                          <p>Timo Schulz, Treasurer</p>
                          <p className="mt-2">Email: <a href="mailto:vorstand@schwarzgelb-heidelberg.de" className="text-tennis-black hover:text-tennis-yellow">vorstand@schwarzgelb-heidelberg.de</a></p>
                        </div>
                        <p className="mt-3">The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g. names, email addresses, etc.).</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      3. Data Collection on Our Website
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Server Log Files</h3>
                        <p>The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:</p>
                        <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                          <li>Browser type and browser version</li>
                          <li>Operating system used</li>
                          <li>Referrer URL</li>
                          <li>Hostname of the accessing computer</li>
                          <li>Time of server request</li>
                          <li>IP address</li>
                        </ul>
                        <p className="mt-3">This data is not merged with other data sources. Legal basis: Art. 6 para. 1 lit. f GDPR. <strong>Retention period:</strong> 7 days, then automatic deletion.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Contact Form</h3>
                        <p>If you send us inquiries via the available contact forms or by email, your details will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent. <strong>Retention period:</strong> until your request has been completed, then a maximum of 6 months.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">SSL / TLS Encryption</h3>
                        <p>This site uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content. You can recognize an encrypted connection by the fact that the browser address bar changes from "http://" to "https://" and by the lock symbol in your browser bar.</p>
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
                        <h3 className="font-semibold text-tennis-black mb-3">Newsletter Data</h3>
                        <p>If you would like to subscribe to our club newsletter "TieBreak(ing)News", we require an email address from you as well as information that allows us to verify that you are the owner of the specified email address and agree to receive the newsletter. No further data is collected or only on a voluntary basis. We use this data exclusively for sending the requested information and do not pass it on to third parties.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      5. Hosting and External Services
                    </h2>
                    
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Hosting (Vercel)</h3>
                        <p>This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Content is delivered via servers located inside the European Union (Frankfurt region). A data processing agreement (Art. 28 GDPR) is in place. Legal basis: Art. 6 para. 1 lit. f GDPR.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Backend / Database (Supabase)</h3>
                        <p>For dynamic content (news, videos, magazines) we use Supabase as our backend and storage provider. Data is processed on servers within the EU. Legal basis: Art. 6 para. 1 lit. f GDPR. No personal data of website visitors is stored in the database.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Fonts (self-hosted)</h3>
                        <p>We use fonts ("Inter" and "Playfair Display") that are <strong>hosted locally on our server</strong>. No connection to Google servers is established and your IP address is not transmitted.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Google Maps (with consent)</h3>
                        <p>On the "Directions" page we offer a map via Google Maps. Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. The map is <strong>only loaded after your active consent</strong> (click on "Load map") — a two-click solution. Only then is data, in particular your IP address, transmitted to Google and possibly to the USA. Legal basis: Art. 6 para. 1 lit. a GDPR. You may withdraw your consent at any time by clearing this website's browser data.</p>
                        <p className="mt-3">Google privacy policy: <a href="https://policies.google.com/privacy?hl=en" className="text-tennis-black hover:text-tennis-yellow" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Sportision (training registration)</h3>
                        <p>For training registration we link to the external service Sportision. Clicking the corresponding buttons redirects you to the Sportision website where their own terms and privacy policy apply. We do not transmit any personal data to Sportision ourselves.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">WhatsApp news channel</h3>
                        <p>We offer an optional WhatsApp channel for club news. Joining is voluntary. Provider: Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Ireland. When using WhatsApp, data may be transferred to the USA. Legal basis: Art. 6 para. 1 lit. a GDPR. WhatsApp privacy policy: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" className="text-tennis-black hover:text-tennis-yellow" target="_blank" rel="noopener noreferrer">whatsapp.com/legal/privacy-policy-eea</a>.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-3">Cookies / Local Storage</h3>
                        <p>This website only uses <strong>technically necessary</strong> storage. Your choice on the data protection notice is stored in your browser's local storage (key: <code>sg-cookie-consent-v1</code>) so it is not shown again. No tracking, analytics or ad profiling takes place.</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      6. Your rights as a data subject
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>You have the following rights at any time:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Right of access (Art. 15 GDPR)</li>
                        <li>Right to rectification (Art. 16 GDPR)</li>
                        <li>Right to erasure (Art. 17 GDPR)</li>
                        <li>Right to restriction of processing (Art. 18 GDPR)</li>
                        <li>Right to data portability (Art. 20 GDPR)</li>
                        <li>Right to object (Art. 21 GDPR)</li>
                        <li>Right to withdraw consent (Art. 7(3) GDPR)</li>
                      </ul>
                      <p>To exercise these rights please contact <a href="mailto:vorstand@schwarzgelb-heidelberg.de" className="text-tennis-black hover:text-tennis-yellow">vorstand@schwarzgelb-heidelberg.de</a>.</p>
                      <p>You also have the right to lodge a complaint with the competent supervisory authority (Art. 77 GDPR):</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p><strong>State Commissioner for Data Protection and Freedom of Information Baden-Württemberg</strong></p>
                        <p>Lautenschlagerstraße 20, 70173 Stuttgart, Germany</p>
                        <p>Web: <a href="https://www.baden-wuerttemberg.datenschutz.de" className="text-tennis-black hover:text-tennis-yellow" target="_blank" rel="noopener noreferrer">baden-wuerttemberg.datenschutz.de</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-6">
                      7. Retention periods
                    </h2>
                    <div className="space-y-3 text-gray-700">
                      <p>We only store personal data as long as necessary for the respective purposes:</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Server logs: 7 days</li>
                        <li>Email and contact requests: until completion + max. 6 months</li>
                        <li>Member data: for the duration of the membership + statutory retention periods (typically 10 years under § 147 AO / § 257 HGB)</li>
                        <li>Consent stored in local storage: until you clear it in your browser</li>
                      </ul>
                    </div>
                  </div>

                  {/* Contact for Privacy Questions */}
                  <div className="bg-tennis-yellow/10 p-6 rounded-lg border-l-4 border-tennis-yellow">
                    <h3 className="font-semibold text-tennis-black mb-2">
                      Questions about Data Protection?
                    </h3>
                    <p className="text-gray-700">
                      If you have any questions about data protection, please contact: 
                      <strong className="text-tennis-black"> vorstand@schwarzgelb-heidelberg.de</strong>
                    </p>
                    <p className="text-sm text-gray-500 mt-3">Last updated: June 2026 — This English version is provided for information purposes only; the German version is legally binding.</p>
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

export default DatenschutzEN;
