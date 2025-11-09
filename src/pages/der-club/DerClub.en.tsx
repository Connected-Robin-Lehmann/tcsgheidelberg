import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DerClubEN = () => {
  const galleryImages = [
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennis-Club-Schwarz-Gelb-Heidelberg-018.jpg",
      alt: "Tennis Courts TC Schwarz-Gelb Heidelberg",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/07/Metin-Gastronomie-Geburtstagsfeier-2.jpg",
      alt: "Clubhouse and Beer Garden",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg",
      alt: "TC Schwarz-Gelb Logo",
    },
    {
      src: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/06/Foto_Pasquale_Dimauro_kompakt.jpg",
      alt: "Club Life TC Schwarz-Gelb",
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
              The Club
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-8 leading-tight">
                The friendly tennis club in Heidelberg uniquely combines
                tradition and modernity
              </h3>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  In beautiful and world-renowned Heidelberg, more precisely at
                  the intersection of the Heidelberg districts of Rohrbach,
                  Kirchheim, Bahnstadt, West and Südstadt, our tennis club
                  founded in 1928, the traditional club TC Schwarz-Gelb
                  Heidelberg e.V., has its sporting and cultural center.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  We offer our members many opportunities to pursue their
                  beloved tennis sport among like-minded people with fun, but
                  also with sporting ambition and a lot of commitment. Our
                  infrastructure includes 10 well-maintained clay courts on the
                  club grounds, an air-supported hall with 2 clay courts for use
                  in winter, and an indoor carpet court that can of course be
                  used all year round. Since 2020, we have had a digital court
                  reservation system in use, with which our members can
                  conveniently book online and mobile, and we are also committed
                  to further modernizing the entire facility and making the
                  grounds even more beautiful.
                </p>
              </div>

              {/* Main Image */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-4 border-tennis-yellow/30">
                <img
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennis-Club-Schwarz-Gelb-Heidelberg-018.jpg"
                  alt="TC Schwarz-Gelb Heidelberg Tennis Courts"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our sporting activities include many men's, women's, senior,
                  mixed and many youth teams that represent our black and yellow
                  colors up to the regional league. Our sporting success and the
                  development of the athletic skills of all our members is
                  supported by the two tennis schools Kukaras and Seibold, which
                  have been working closely with the club for many years. The
                  Kukaras tennis school also offers several tennis camps during
                  the Easter and summer holidays on the facility and a camp in
                  Croatia during Pentecost. Above all, youth development is also
                  very important in our club, and the high number of young
                  members and families shows our commitment in this area. Of
                  course, we also organize our own LK tournaments every year as
                  well as the Schwarz-Gelb Cup, so that athletic competition
                  with like-minded people from other clubs is also possible.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We also don't want to forget our clubhouse in a fantastic
                  location with a beautiful beer garden, because our members
                  also appreciate a drink or two and good food after an
                  intensive tennis match. This is also where our legendary
                  summer parties take place, where new members can quickly feel
                  at home in the club and make new contacts.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We are always happy to welcome new members! If you are
                  interested or have questions about membership, training
                  opportunities and anything else, just send a quick email:{" "}
                  <a
                    href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                    className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline"
                  >
                    mitgliederservice@schwarzgelb-heidelberg.de
                  </a>
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Further impressions of our club are shown in our extensive{" "}
                  <strong>photo gallery</strong> below. Simply click on an image
                  and then scroll right or left… and now enjoy!
                </p>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                  Interested?
                </h3>
                <p className="text-white mb-6">
                  Become part of our tennis family!
                </p>
                <a
                  href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                  className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                Photo Gallery
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

export default DerClubEN;
