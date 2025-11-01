import React from "react";
import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DerClub = () => {
  const { t } = useTranslation();
  const galleryImages = [
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennis-Club-Schwarz-Gelb-Heidelberg-018.jpg",
      alt: "Tennisplätze TC Schwarz-Gelb Heidelberg",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/07/Metin-Gastronomie-Geburtstagsfeier-2.jpg",
      alt: "Clubhaus und Biergarten",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg",
      alt: "TC Schwarz-Gelb Logo",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/06/Foto_Pasquale_Dimauro_kompakt.jpg",
      alt: "Vereinsleben TC Schwarz-Gelb",
    },
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
                {t('club.traditionSince')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              {t('club.title')}
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-8 leading-tight">
                {t('club.subtitle')}
              </h3>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Im schönen und weltbekannten Heidelberg, genauer gesagt an der
                  Schnittstelle der Heidelberger Stadtteile Rohrbach, Kirchheim,
                  Bahnstadt, West- und Südstadt hat unser 1928 gegründete
                  Tennisclub, der Traditionsverein TC Schwarz-Gelb Heidelberg
                  e.V. seinen sportlichen und kulturellen Mittelpunkt.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Wir bieten unseren Mitgliedern viele Möglichkeiten, den
                  geliebten Tennissport unter Gleichgesinnten mit Spaß, aber
                  auch mit sportlichem Ehrgeiz und viel Engagement nachzugehen.
                  Zu unserer Infrastruktur gehören 10 top gepflegte Sandplätze
                  auf dem Clubgelände, eine Traglufthalle mit 2 Sandplätzen zur
                  Nutzung im Winter sowie ein Hallen-Teppichplatz, der natürlich
                  ganzjährig genutzt werden kann. Seit 2020 haben wir ein
                  digitales Platzreservierungssystem im Einsatz, mit dem sich
                  unsere Mitglieder bequem online und mobil einbuchen können und
                  sind auch sonst bestrebt, die gesamte Anlage weiter zu
                  modernisieren und das Gelände insgesamt noch weiter zu
                  verschönern.
                </p>
              </div>

              {/* Main Image */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-4 border-tennis-yellow/30">
                <img
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennis-Club-Schwarz-Gelb-Heidelberg-018.jpg"
                  alt="TC Schwarz-Gelb Heidelberg Tennisplätze"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Zu unseren sportlichen Aktivitäten zählen viele Herren-,
                  Damen-, Senioren-, Mixed- und viele Jugend-Mannschaften, die
                  unsere Schwarz-Gelb Farben bis hoch zur Regionalliga
                  vertreten. Unterstützt wird unser sportlicher Erfolg und der
                  Ausbau des sportlichen Könnens all unserer Mitglieder durch
                  die zwei bereits langjährig mit dem Club eng
                  zusammenarbeitende Tennisschulen Kukaras und Seibold. Die
                  Tennisschule Kukaras bietet zudem mehrere Tenniscamps über die
                  Oster- und Sommerferien auf der Anlage sowie über Pfingsten
                  ein Camp in Kroatien an. Vor allem wird in unserem Verein auch
                  die Jugendförderung großgeschrieben und die hohe Zahl an
                  jugendlichen Mitgliedern und Familien zeigt unser Engagement
                  auf dem Gebiet. Natürlich veranstalten wir jedes Jahr auch
                  eigene LK-Turniere sowie den Schwarz-Gelb Cup, so dass auch
                  das sportliche Leistungsmessen mit Gleichgesinnten aus anderen
                  Vereinen möglich ist.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Nicht vergessen wollen wir auch unser Clubhaus in traumhafter
                  Lage mit einem wunderschönen Biergarten, denn unsere
                  Mitglieder wissen auch ein oder zwei Getränke und gutes Essen
                  nach einem intensiven Tennis-Match zu schätzen. Hier finden
                  auch unsere legendären Sommerfeste statt, wo sich auch neue
                  Mitglieder problemlos und schnell im Verein wohlfühlen und
                  neue Kontakte knüpfen können.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Wir freuen uns immer über neue Mitglieder! Bei Interesse und
                  Fragen zur Mitgliedschaft, zu den Trainingsmöglichkeiten und
                  allem sonst einfach eine kurze Email:{" "}
                  <a
                    href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                    className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline"
                  >
                    mitgliederservice@schwarzgelb-heidelberg.de
                  </a>
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Weitere Eindrücke unseres Clubs zeigt unsere untenstehende
                  umfangreiche <strong>Fotogalerie</strong>. Einfach auf ein
                  Bild klicken und dann nach rechts oder links weiterschalten…
                  und jetzt viel Spaß!
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                  {t('club.interestedTitle')}
                </h3>
                <p className="text-white mb-6">
                  {t('club.interestedText')}
                </p>
                <a
                  href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                  className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  {t('club.contactNow')}
                </a>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                {t('club.photoGallery')}
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-tennis-yellow/20 hover:border-tennis-yellow/60"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-tennis-black/0 group-hover:bg-tennis-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tennis-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DerClub;
