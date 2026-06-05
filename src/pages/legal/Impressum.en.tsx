
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ImpressumEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-tennis-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Legal Notice
              </h1>
              <p className="text-xl text-gray-300">
                Legal Information and Contact Details
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
                      Legal Notice
                    </h2>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Tennis Club Schwarz-Gelb Heidelberg e.V.</strong></p>
                      <p>Information according to § 5 TMG:</p>
                      <p>TC Schwarz-Gelb Heidelberg e.V.</p>
                      <p>Schwindstr. 9</p>
                      <p>69126 Heidelberg</p>
                      <p>Germany</p>
                    </div>

                    <div className="mt-6 space-y-2 text-gray-700">
                      <p><strong>Represented by the Board:</strong></p>
                      <p>Aleksandar Kukaras, Chairman</p>
                      <p>Marc Homsy, Vice Chairman</p>
                      <p>Email: vorstand@schwarzgelb-heidelberg.de</p>
                      <p>Website: <a href="http://www.schwarzgelb-heidelberg.de" className="text-tennis-black hover:text-tennis-yellow">http://www.schwarzgelb-heidelberg.de</a></p>
                    </div>

                    <div className="mt-6 space-y-2 text-gray-700">
                      <p><strong>Responsible according to § 18 para. 2 MStV</strong></p>
                      <p>Marc Homsy</p>
                      <p>Schwindstr. 9</p>
                      <p>69126 Heidelberg</p>
                      <p>Germany</p>
                    </div>
                  </div>

                  {/* Right Column - Registration Info */}
                  <div>
                    <div className="space-y-6 text-gray-700">
                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Register Entry:</h3>
                        <p>Registration in the Association Register</p>
                        <p>Registration Court: AG Mannheim VR330225 (formerly AG Heidelberg VR 225)</p>
                        <p>Tax Number: 32489/60339</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Dispute Resolution:</h3>
                        <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" className="text-tennis-black hover:text-tennis-yellow">https://ec.europa.eu/consumers/odr</a>.</p>
                        <p className="mt-2">Our email address can be found above in the legal notice. We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Web Design and Implementation:</h3>
                        <p>Created by TC Schwarz-Gelb Heidelberg e.V.</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-tennis-black mb-2">Note:</h3>
                        <p>This English translation is provided for information purposes only. The German version is legally binding.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Width Content */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Liability */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Liability for Content
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>The content of this website has been created with the greatest possible care. However, we cannot guarantee the accuracy, completeness and timeliness of the content provided. Use of the website content is at the user's own risk.</p>
                      
                      <p>Articles marked with names express the opinion of the respective author and not always the opinion of the board. The mere use of the website does not establish any contractual relationship between the user and our association.</p>
                      
                      <p>As a service provider, we are responsible for our own content on these pages in accordance with § 7 para.1 TMG under general laws. According to §§ 8 to 10 TMG, however, we are not obliged as a service provider to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity.</p>
                      
                      <p>Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.</p>
                      
                      <div className="mt-6">
                        <h3 className="font-semibold text-tennis-black mb-2">Liability for Links</h3>
                        <p>Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable to us at the time of linking.</p>
                        <p className="mt-2">However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Copyright */}
                  <div>
                    <h2 className="text-2xl font-bold text-tennis-black mb-4">
                      Copyright
                    </h2>
                    <div className="space-y-4 text-gray-700">
                      <p>The content and works created by the site operators on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.</p>
                      
                      <p>Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.</p>
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

export default ImpressumEN;
