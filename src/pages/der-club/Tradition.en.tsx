import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TraditionEN = () => {
  const galleryImages = [
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennis-Club-Schwarz-Gelb-Heidelberg-018.jpg",
      alt: "Historic photo of TC Schwarz-Gelb",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/07/Metin-Gastronomie-Geburtstagsfeier-2.jpg",
      alt: "Club life in the early years",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg",
      alt: "Traditional club logo",
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
                  which has continuously worked its way up from the Baden League through the Regional League and now plays 
                  in the <strong>2nd Bundesliga</strong>.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  TC Schwarz-Gelb Heidelberg, then as now, and this is also a daily lived tradition, places value not 
                  only on competitive sports. Above all, it sees itself as a place where families and recreational 
                  players feel at home and dedicate themselves to tennis with a lot of fun.
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

export default TraditionEN;
