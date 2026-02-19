import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';

const TraditionDE = () => {
  const galleryImages = [
    { src: "/images/tradition/team-historical-1.jpg", alt: "Historische Mannschaftsaufnahme" },
    { src: "/images/tradition/team-historical-list.jpg", alt: "Meistermannschaften 1948-1955" },
    { src: "/images/tradition/max-berk-historical.jpg", alt: "Unser Präsident Max Berk an seinem Stammplatz" },
    { src: "/images/tradition/fritz-kuhlmann.jpg", alt: "Fritz Kuhlmann, ehem. Davis-Cup-Spieler" },
    { src: "/images/tradition/clubhouse-opening-1958.jpg", alt: "Einweihung des neuen Clubhauses Juli 1958" },
    { src: "/images/tradition/clubhouse-historical.jpg", alt: "Unser Clubhaus - Historische Aufnahme" },
    { src: "/images/tradition/indoor-historical.jpg", alt: "Im Clubhaus - Innenansicht" },
    { src: "/images/tradition/tennis-hall-sign.jpg", alt: "Zufahrt zur Tennishalle - Historisch" },
    { src: "/images/tradition/indoor-tennis-historical.jpg", alt: "In der Halle - Trainer Molloy und Lamy jun." },
    { src: "/images/tradition/team-historical-2.jpg", alt: "Historisches Gruppenbild auf dem Platz" },
    { src: "/images/tradition/1954-youth-team.jpg", alt: "1954: Jugendmannschaft mit Vera Berk, H. Schweizer, Doris Berk, Lamy, Hill, Rittershausen, B. Schweizer" },
    { src: "/images/tradition/vera-berk-champion.jpg", alt: "Vera Berk mit 14 Jahren Deutsche Meisterin der Mädchenklasse" },
    { src: "/images/tradition/youth-team-group.jpg", alt: "Jugendgruppe mit B. Schweizer, Mi. Wisniovsky, Vera Berk, Pelzin, Walz, H. Lenk, R. v. Traetteur, R. Lenk, Baly Berk, Ma. Wisniovsky" },
    { src: "/images/tradition/edda-budding.jpg", alt: "Edda Budding" },
    { src: "/images/tradition/sedgman-gregor-pails-segura.jpg", alt: "Sedgman, M. Gregor, Pails, Segura - Klassetennis vor 2.000 Zuschauern" },
    { src: "/images/tradition/sedgman-segura-match.jpg", alt: "Sedgman und Segura im Match (im Hintergrund die Tennishalle)" },
    { src: "/images/tradition/cramm-berk-kuhlmann.jpg", alt: "v. Cramm, Berk, Kuhlmann beim ersten Ausländergastspiel 1949" },
    { src: "/images/tradition/international-tennis-match.jpg", alt: "Internationales Tennis vor großer Kulisse" },
    { src: "/images/tradition/mens-team-group.jpg", alt: "Herrenmannschaft Gruppenbild" },
    { src: "/images/tradition/1957-womens-team.jpg", alt: "1957: v. Slytermann, Milek, Schröder, Vera Berk, Prestinari, Doris Berk" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const previewImages = useMemo(() => {
    // Show 4 random images
    const shuffled = [...galleryImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Tradition seit 1928
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Unsere Tradition
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast ein Jahrhundert Tennisgeschichte in Heidelberg
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Der TC Schwarz-Gelb Heidelberg ist seit seiner Gründung im Jahre 1928 ein fester Bestandteil 
                  nicht nur des Heidelberger Tennisgeschehens, sondern auch über die Grenzen der Rhein-Neckar 
                  Metropolregion hinaus bekannt. Zahlreiche Meisterschaften, von der Bezirksebene über Badische 
                  Meisterschaften bis hin zur Deutschen Meisterschaft stehen auf dem Konto unserer Mannschaften 
                  und Einzelspieler.
                </p>

                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Die Ära Max Berk
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Schon nach dem 2. Weltkrieg wurde im TC Schwarz-Gelb Heidelberg e.V. unter der Regie des 
                    Vorsitzenden, Präsidenten und Mäzen Max Berk, seinerseits zu Lebzeiten Inhaber der Modemarke 
                    „Betty Barclay" in Deutschland, eine leistungssportorientierte Linie eingeschlagen. 
                    Besonders hervorzuheben sind die Damenmannschaften des TC Schwarz-Gelb Heidelberg e.V., 
                    die über Jahrzehnte andauernde Erfolge aufzuweisen haben.
                  </p>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    Boris Becker
                  </h3>
                  <p className="leading-relaxed">
                    Aber auch die Herrenmannschaften gehören zum traditionellen Aushängeschild. So spielte unter 
                    anderem Boris Becker in den Jahren 1983 und 1984 für unseren Tennisclub Schwarz-Gelb Heidelberg, 
                    bevor er bekanntermaßen 1985 sensationell mit einem Sieg über Kevin Curren aus Südafrika als 
                    jüngster Wimbledonsieger in die Geschichte einging.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Jugendförderung
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Besonderer Wert wird in unserem Tennisverein Schwarz-Gelb Heidelberg seit jeher auf die 
                  Jugend- und Nachwuchsarbeit gelegt. So stehen auch die Jugendmannschaften und Nachwuchsspieler 
                  des TC Schwarz-Gelb Heidelberg keineswegs im Schatten ihrer „großen" Vorbilder aus den 50er 
                  und 60ern.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-tennis-yellow">
                    <h4 className="font-bold text-tennis-black mb-2">1950er Jahre</h4>
                    <p className="text-gray-700">
                      Vera Bauer geb. Berk wurde Deutsche Jugendmeisterin und zudem zweimal Badische Meisterin, 
                      wohlgemerkt bei den Aktiven mit gerade einmal 15 Jahren.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-tennis-yellow">
                    <h4 className="font-bold text-tennis-black mb-2">1960er Jahre</h4>
                    <p className="text-gray-700">
                      Jokel Elzer erspielte zwei Deutsche Meistertitel im Nachwuchsbereich.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Moderner Erfolg
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In der jüngeren Vergangenheit spielten regelmäßig 20 bis 30 Mannschaften in der Medenrunde, 
                  davon etwa die Hälfte als Erwachsenen-Teams und die Hälfte in Jugendmannschaften. Der „Leuchtturm" 
                  des TC Schwarz-Gelb Heidelberg e.V. ist die Damenmannschaft, die sich von der Badenliga über die 
                  Regionalliga kontinuierlich nach oben gearbeitet hat, zwischenzeitlich sogar in der 2. Bundesliga 
                  spielte und derzeit wieder in der Badenliga spielt. Auch die D50 hat sich kontinuierlich hochgespielt 
                  und ist in der Sommersaison 2026 in der Regionalmannschaft.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Der TC Schwarz-Gelb Heidelberg legt aber nicht nur Wert auf den Leistungssport. Er begreift sich 
                  vor allem auch als ein Ort, an dem sich auch und besonders Familien und Freizeitspieler zu Hause 
                  fühlen und sich mit viel Spaß dem Tennissport widmen.
                </p>

                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Ein wachsender Verein
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unser TC Schwarz-Gelb Heidelberg e.V. gehört weiterhin zu den (wenigen) wachsenden Vereinen. 
                    Gerade durch den Zulauf an Kindern bzw. Jugendlichen dank der herausragenden Trainingsarbeit 
                    und Förderung sowie auch erwachsenen Neumitgliedern, die durch beruflichen Umzug ins schöne 
                    Heidelberg kommen, steht der Fortsetzung der langen Vereinstradition nichts entgegen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Gallery */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                Historische Galerie
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-4"></div>
              <p className="text-gray-600">
                Ein Blick in unsere bewegte Geschichte
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {previewImages.map((image) => {
                const fullIndex = galleryImages.findIndex(img => img.src === image.src);
                return (
                  <div
                    key={image.src}
                    onClick={() => setLightboxIndex(fullIndex)}
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
                        <p className="text-white text-xs font-medium truncate">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setLightboxIndex(0)}
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow transition-all duration-300 shadow-lg"
              >
                Alle {galleryImages.length} historischen Bilder anzeigen
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <ImageLightbox 
        images={galleryImages} 
        currentIndex={lightboxIndex} 
        isOpen={lightboxIndex >= 0} 
        onClose={() => setLightboxIndex(-1)} 
        onNavigate={setLightboxIndex} 
      />
    </div>
  );
};

export default TraditionDE;
