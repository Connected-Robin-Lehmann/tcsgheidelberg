import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { clubGalleryImages } from "@/data/clubGalleryImages";

const DerClubDE = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = clubGalleryImages.map((img) => ({ src: img.src, alt: img.alt.de }));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Tradition seit 1928
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Der Club
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-8 leading-tight">
                Der sympathische Tennisclub in Heidelberg vereint einzigartig
                Tradition und Moderne
              </h3>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Wir bieten unseren Mitgliedern viele Möglichkeiten, den
                  geliebten Tennissport unter Gleichgesinnten mit Spaß, aber
                  auch mit sportlichem Ehrgeiz und viel Engagement nachzugehen.
                  Zu unserer Infrastruktur gehören zehn top gepflegte Sandplätze
                  auf dem Clubgelände, eine private Tragluftlufthalle der
                  Tennisschule Kukaras mit zwei Sandplätzen zur Nutzung im Winter
                  (sofern verfügbar können die Plätze gegen Gebühr gebucht
                  werden) sowie ein Hallen-Teppichplatz, der ebenfalls, auch
                  ganzjährig, gegen Gebühr gebucht werden kann. Unsere
                  Außenplätze können während der Saison von unseren Mitgliedern
                  über ein digitales Platzreservierungssystem bequem online
                  gebucht werden. Abends haben wir auf fünf Plätzen kostenfreies
                  Flutlicht, sodass die Plätze bis 22 Uhr bespielt werden
                  können.
                </p>
              </div>

              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-4 border-tennis-yellow/30">
                <img src="/images/gallery/TC-SG-018.jpg" alt="TC Schwarz-Gelb Heidelberg Luftaufnahme" className="w-full h-64 md:h-96 object-cover" />
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Zu unseren sportlichen Aktivitäten zählen viele Herren-,
                  Damen-, Senioren-, Mixed- und viele Jugend-Mannschaften, die
                  unsere Schwarz-Gelb Farben derzeit bis hoch zur Badenliga
                  vertreten. Unterstützt wird unser sportlicher Erfolg und der
                  Ausbau des sportlichen Könnens all unserer Mitglieder durch
                  die zwei bereits langjährig mit dem Club eng
                  zusammenarbeitende Tennisschulen Kukaras und Seibold. Die
                  Tennisschule Kukaras bietet zudem mehrere Tenniscamps über die
                  Oster- und Sommerferien auf der Anlage sowie in den
                  Pfingstferien ein Camp in Kroatien an. In unserem Verein wird
                  besonders die Jugendförderung großgeschrieben und die hohe Zahl
                  an jugendlichen Mitgliedern und Familien zeigen das Engagement
                  der Tennisschulen auf dem Gebiet. Natürlich veranstalten wir
                  jedes Jahr auch eigene Turniere, wie das Blümchenturnier zum
                  Start der Saison, eigene LK-Turniere und den Schwarz-Gelb Cup
                  für interne und externe Spieler und Spielerinnen, und zum
                  Saisonende noch ein Abschlussturnier, so dass das sportliche
                  Leistungsmessen mit Gleichgesinnten aus dem eigenen und auch
                  aus anderen Vereinen möglich ist.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Unser Clubhaus befindet sich in traumhafter Lage mit einem
                  wunderschönen Biergarten. Nicht nur unsere Mitglieder wissen
                  Getränke und gutes Essen nach einem intensiven Tennis-Match zu
                  schätzen. Hier finden auch unsere legendären Sommerfeste statt,
                  wo sich auch neue Mitglieder problemlos und schnell im Verein
                  wohlfühlen und neue Kontakte knüpfen können.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Wir freuen uns immer über neue Mitglieder! Bei Interesse und
                  Fragen bitte an die folgenden E-Mail-Adressen schreiben: zur
                  Mitgliedschaft{" "}
                  <a href="mailto:mitgliederservice@schwarzgelb-heidelberg.de" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline">
                    mitgliederservice@schwarzgelb-heidelberg.de
                  </a>
                  , zu Trainingsmöglichkeiten an die Tennisschulen Kukaras (
                  <a href="mailto:aleksandar.kukaras@schwarzgelb-heidelberg.de" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline">
                    aleksandar.kukaras@schwarzgelb-heidelberg.de
                  </a>
                  ) und Seibold (
                  <a href="mailto:seibold-tennis@t-online.de" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline">
                    seibold-tennis@t-online.de
                  </a>
                  ), siehe auch unter{" "}
                  <Link to="/training" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline">
                    Training
                  </Link>
                  .
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Weitere Eindrücke unseres Clubs zeigt unsere untenstehende
                  umfangreiche <strong>Fotogalerie</strong>. Einfach auf ein
                  Bild klicken und dann nach rechts oder links weiterschalten…
                  und jetzt viel Spaß!
                </p>
              </div>

              <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                  Interesse geweckt?
                </h3>
                <p className="text-white mb-6">
                  Werden Sie Teil unserer Tennisfamilie!
                </p>
                <a href="mailto:mitgliederservice@schwarzgelb-heidelberg.de" className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Jetzt Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                Fotogalerie
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => {
                const isLogo = image.alt.toLowerCase().includes("logo");
                return (
                  <div
                    key={index}
                    onClick={() => setLightboxIndex(index)}
                    className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-tennis-yellow/20 hover:border-tennis-yellow/60"
                  >
                    <div className={`relative overflow-hidden ${isLogo ? "bg-gray-100" : ""}`}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-48 ${isLogo ? "object-contain p-2" : "object-cover"} group-hover:scale-110 transition-transform duration-500`}
                      />
                      <div className="absolute inset-0 bg-tennis-black/0 group-hover:bg-tennis-black/20 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tennis-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <ImageLightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};

export default DerClubDE;
