import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, Info } from "lucide-react";

const TennisplaetzeDE = () => {
  const facilities = [
    {
      title: "Hauptanlage Schwindstrasse",
      description:
        'Unsere zentrale Tennisanlage rund um unser Clubhaus besteht aus vier nebeneinanderliegenden Plätzen Nr. 1 bis Nr. 4, an die sich in Richtung Restaurant durch eine Hecke getrennt der zentrale Center-Court "Max BERK" anschließt. Hinter dem Clubhaus und den Umkleideräumen befinden sich die Plätze 6-9, auf denen zumeist unsere Kinder- und Jugendtrainings stattfinden.',
      image: "/images/Hauptanlage_Schwindstrasse.jpg",
      features: [
        "10 Sandplätze",
        "Center-Court Max-BERK",
        "Kinder- und Jugendbereich",
      ],
    },
    {
      title: "Traglufthalle (Winter)",
      description:
        "Auf den Plätzen 7 und 8 wird für die Wintersaison eine beheizte Traglufthalle aufgebaut. So können unsere Mitglieder auch im Winter auf einem Sandplatz trainieren und frei spielen.",
      image: "/images/Traglufthalle.jpg",
      features: ["2 Sandplätze", "Beheizt", "Oktober bis April"],
    },
    {
      title: "Historische Tennis(teppich)halle",
      description:
        "Insbesondere in der Wintersaison steht uns in Absprache mit dem Eigentümer ebenfalls auch die historische Tennishalle mit Teppichboden direkt am Parkplatz in der Schwindstraße zur Verfügung.",
      image: "/images/Teppichhalle.jpg",
      features: [
        "Teppichboden",
        "Ganzjährig verfügbar",
        "Historisches Ambiente",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "/images/Hauptanlage_Schwindstrasse.jpg",
      alt: "Hauptanlage Tennisplätze",
    },
    {
      src: "/images/Max_Berk.jpg",
      alt: "Center Court Max BERK",
    },
    {
      src: "/images/Platz_10.jpg",
      alt: "Platz 10",
    },
    {
      src: "/images/Traglufthalle.jpg",
      alt: "Traglufthalle",
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
                10 Sandplätze
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Unsere Tennisplätze
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser Club besitzt 10 Sandplätze an unserem Stammsitz. Mehr Infos
              finden Sie weiter unten auf dieser Seite.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-tennis-black rounded-2xl p-8 mb-16 text-center">
            <Info className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Wichtiger Hinweis
            </h3>
            <p className="text-white text-lg">
              Zum Spielen bei uns im Verein ist eine offizielle („aktive")
              Mitgliedschaft notwendig.
              <br />
              Ein Mieten der Tennisplätze durch Nicht-Mitglieder ist nicht
              möglich, wir bitten um Verständnis.
            </p>
          </div>

          {/* Facilities */}
          <div className="space-y-16 mb-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-6">
                      {facility.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-6">
                Platz 10 - Der Besondere
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Der Platz 10 ist direkt vom Parkplatz in Schwindstraße aus
                zugänglich. Er liegt direkt hinter der historischen Tennishalle
                und ist über viele Jahre hinweg durch Hecken schön eingewachsen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Für weitere Impressionen einfach rechts auf ein Bild und durch
                die komplette Bildergalerie klicken.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                Impressionen unserer Anlage
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

          {/* Contact CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
              <MapPin className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                Besuchen Sie unsere Anlage
              </h3>
              <p className="text-white mb-6">
                Überzeugen Sie sich selbst von unseren erstklassigen
                Tennisplätzen
              </p>
              <a
                href="/der-club/mitgliedschaft"
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Mitglied werden
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TennisplaetzeDE;
