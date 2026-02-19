import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';

const TraditionEN = () => {
  const galleryImages = [
    { src: "/images/tradition/team-historical-1.jpg", alt: "Historic Team Photo" },
    { src: "/images/tradition/team-historical-list.jpg", alt: "Championship Teams 1948-1955" },
    { src: "/images/tradition/max-berk-historical.jpg", alt: "Our President Max Berk at his regular spot" },
    { src: "/images/tradition/fritz-kuhlmann.jpg", alt: "Fritz Kuhlmann, former Davis Cup Player" },
    { src: "/images/tradition/clubhouse-opening-1958.jpg", alt: "Inauguration of the new clubhouse July 1958" },
    { src: "/images/tradition/clubhouse-historical.jpg", alt: "Our Clubhouse - Historical Photo" },
    { src: "/images/tradition/indoor-historical.jpg", alt: "Inside the Clubhouse" },
    { src: "/images/tradition/tennis-hall-sign.jpg", alt: "Entrance to Tennis Hall - Historical" },
    { src: "/images/tradition/indoor-tennis-historical.jpg", alt: "In the Hall - Coach Molloy and Lamy jun." },
    { src: "/images/tradition/team-historical-2.jpg", alt: "Historical Group Photo on Court" },
    { src: "/images/tradition/1954-youth-team.jpg", alt: "1954: Youth Team with Vera Berk, H. Schweizer, Doris Berk, Lamy, Hill, Rittershausen, B. Schweizer" },
    { src: "/images/tradition/vera-berk-champion.jpg", alt: "Vera Berk at 14 years old, German Champion (Girls)" },
    { src: "/images/tradition/youth-team-group.jpg", alt: "Youth Group with B. Schweizer, Mi. Wisniovsky, Vera Berk, Pelzin, Walz, H. Lenk, R. v. Traetteur, R. Lenk, Baly Berk, Ma. Wisniovsky" },
    { src: "/images/tradition/edda-budding.jpg", alt: "Edda Budding" },
    { src: "/images/tradition/sedgman-gregor-pails-segura.jpg", alt: "Sedgman, M. Gregor, Pails, Segura - World-class tennis in front of 2,000 spectators" },
    { src: "/images/tradition/sedgman-segura-match.jpg", alt: "Sedgman and Segura match (Tennis Hall in background)" },
    { src: "/images/tradition/cramm-berk-kuhlmann.jpg", alt: "v. Cramm, Berk, Kuhlmann at the first international guest match in 1949" },
    { src: "/images/tradition/international-tennis-match.jpg", alt: "International Tennis Match" },
    { src: "/images/tradition/mens-team-group.jpg", alt: "Men's Team Group Photo" },
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
                Tradition since 1928
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Our Tradition
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Almost a century of tennis history in Heidelberg
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since its founding in 1928, TC Schwarz-Gelb Heidelberg has been an integral part not only of 
                  Heidelberg's tennis scene, but is also well known beyond the borders of the Rhine-Neckar metropolitan 
                  region. Numerous championships, from district level to Baden championships to German championships, 
                  are on the record of our teams and individual players.
                </p>

                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    The Max Berk Era
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Already after World War II, TC Schwarz-Gelb Heidelberg e.V. pursued a performance-oriented line 
                    under the direction of chairman, president and patron Max Berk, who in his lifetime was the owner 
                    of the fashion brand "Betty Barclay" in Germany. Particularly noteworthy are the women's teams of 
                    TC Schwarz-Gelb Heidelberg e.V., which have shown success for decades.
                  </p>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    Boris Becker
                  </h3>
                  <p className="leading-relaxed">
                    But the men's teams also belong to the traditional flagships. Among others, Boris Becker played for 
                    our tennis club Schwarz-Gelb Heidelberg in 1983 and 1984, before he sensationally entered history in 
                    1985 as the youngest Wimbledon winner with a victory over Kevin Curren from South Africa.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Youth Development
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Special emphasis has always been placed on youth and junior development in our tennis club Schwarz-Gelb 
                  Heidelberg. Thus, the youth teams and junior players of TC Schwarz-Gelb Heidelberg are by no means in 
                  the shadow of their "great" role models from the 50s and 60s.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-tennis-yellow">
                    <h4 className="font-bold text-tennis-black mb-2">1950s</h4>
                    <p className="text-gray-700">
                      Vera Bauer (née Berk) became German Youth Champion and also twice Baden Champion, notably in the 
                      adult category at just 15 years old.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-tennis-yellow">
                    <h4 className="font-bold text-tennis-black mb-2">1960s</h4>
                    <p className="text-gray-700">
                      Jokel Elzer won two German championship titles in the junior category.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Modern Success
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In recent years, regularly 20 to 30 teams have played in the Medenrunde, about half as adult teams 
                  and half in youth teams. The "flagship" of TC Schwarz-Gelb Heidelberg e.V. today is the women's team, 
                  which has continuously worked its way up from the Baden League through the Regional League, temporarily 
                  even playing in the 2nd Bundesliga, and is currently playing in the Baden League again. The Women's 50 
                  team has also continuously worked its way up and will play in the Regional Team league in the 2026 
                  summer season.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  However, TC Schwarz-Gelb Heidelberg places value not only on competitive sports. Above all, it sees 
                  itself as a place where families and recreational players feel at home and dedicate themselves to 
                  tennis with a lot of fun.
                </p>

                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    A Growing Club
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our TC Schwarz-Gelb Heidelberg e.V. continues to be among the (few) growing clubs. Especially 
                    through the influx of children and youth thanks to outstanding training and support, as well as adult 
                    new members who come to beautiful Heidelberg for professional reasons, there is nothing standing in 
                    the way of continuing the long club tradition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Gallery */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                Historical Gallery
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-4"></div>
              <p className="text-gray-600">
                A look into our eventful history
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
                View all {galleryImages.length} historical photos
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

export default TraditionEN;
