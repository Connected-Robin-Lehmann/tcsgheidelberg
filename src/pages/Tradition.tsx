
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Tradition = () => {
  const galleryImages = [
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennis-Club-Schwarz-Gelb-Heidelberg-018.jpg",
      alt: "Historische Aufnahme des TC Schwarz-Gelb",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/07/Metin-Gastronomie-Geburtstagsfeier-2.jpg",
      alt: "Vereinsleben in den frühen Jahren",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg",
      alt: "Traditionelles Vereinslogo",
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
                Seit 1928
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Tradition & Geschichte
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von 1928 bis heute - Eine stolze Vereinsgeschichte
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
                    Boris Becker bei Schwarz-Gelb
                  </h3>
                  <p className="leading-relaxed">
                    Aber auch die Herrenmannschaften gehören zum traditionellen Aushängeschild. So spielte unter 
                    anderem Boris Becker in den Jahren 1983 und 1984 für unseren Tennisclub Schwarz-Gelb Heidelberg, 
                    bevor er bekanntermaßen 1985 sensationell mit einem Sieg über Kevin Curren aus Südafrika als 
                    jüngster Wimbledonsieger in die Geschichte einging.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Tradition der Jugendförderung
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
                  Moderne Erfolge
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In der jüngeren Vergangenheit spielten regelmäßig 20 bis 30 Mannschaften in der Medenrunde, 
                  davon etwa die Hälfte als Erwachsenen-Teams und die Hälfte in Jugendmannschaften. Der „Leuchtturm" 
                  des TC Schwarz-Gelb Heidelberg e.V. ist heute die Damenmannschaft, die in den letzten Jahren 
                  erfolgreich in der Badenliga spielte und der 2019 sogar der Aufstieg in die Regionalliga gelang.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Der TC Schwarz-Gelb Heidelberg legt früher wie heute, und das ist auch täglich gelebte Tradition, 
                  nicht nur Wert auf den Leistungssport. Er begreift sich vor allem auch als ein Ort, an dem sich 
                  auch und besonders Familien und Freizeitspieler zu Hause fühlen und sich mit viel Spaß dem 
                  Tennissport widmen.
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
                Historische Bildergalerie
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-4"></div>
              <p className="text-gray-600">
                Ein kleiner Geschichtsunterricht über unseren Verein in frühen Jahren
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

export default Tradition;
