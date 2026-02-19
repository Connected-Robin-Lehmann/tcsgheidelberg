import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";
import { clubGalleryImages } from "@/data/clubGalleryImages";

const DerClubEN = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const images = clubGalleryImages.map((img) => ({ src: img.src, alt: img.alt.en }));
  const previewImages = useMemo(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
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

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-8 leading-tight">
                The friendly tennis club in Heidelberg uniquely combines
                tradition and modernity
              </h3>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-8">
                  We offer our members many opportunities to pursue their
                  beloved tennis sport among like-minded people with fun, but
                  also with sporting ambition and a lot of commitment. Our
                  infrastructure includes ten well-maintained clay courts on the
                  club grounds, a private air-supported hall of the Kukaras
                  tennis school with two clay courts for winter use (subject to
                  availability, courts can be booked for a fee), as well as an
                  indoor carpet court that can also be booked year-round for a
                  fee. During the season, our outdoor courts can be conveniently
                  booked online by our members via a digital court reservation
                  system. In the evenings, we have free floodlighting on five
                  courts, so they can be played on until 10 PM.
                </p>
              </div>

              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl border-4 border-tennis-yellow/30">
                <img
                  src="/images/gallery/TC-SG-018.jpg"
                  alt="TC Schwarz-Gelb Heidelberg Aerial View"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our sporting activities include many men's, women's, senior,
                  mixed and many youth teams that represent our black and yellow
                  colors currently up to the Baden league. Our sporting success
                  and the development of the athletic skills of all our members
                  is supported by the two tennis schools Kukaras and Seibold,
                  which have been working closely with the club for many years.
                  The Kukaras tennis school also offers several tennis camps
                  during the Easter and summer holidays on the facility and a
                  camp in Croatia during the Pentecost holidays. Youth
                  development is especially important in our club and the high
                  number of young members and families show the commitment of
                  the tennis schools in this area. Of course, we also organize
                  our own tournaments every year, such as the Blümchenturnier to
                  kick off the season, our own ranking tournaments and the
                  Schwarz-Gelb Cup for internal and external players, and a
                  closing tournament at the end of the season, so that
                  competitive play with like-minded people from our own and
                  other clubs is possible.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our clubhouse is situated in a fantastic location with a
                  beautiful beer garden. Not only our members appreciate drinks
                  and good food after an intensive tennis match. This is also
                  where our legendary summer parties take place, where new
                  members can quickly feel at home in the club and make new
                  contacts.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We are always happy to welcome new members! If you are
                  interested or have questions, please write to the following
                  email addresses: for membership{" "}
                  <a
                    href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                    className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline"
                  >
                    mitgliederservice@schwarzgelb-heidelberg.de
                  </a>
                  , for training opportunities contact the tennis schools
                  Kukaras (
                  <a
                    href="mailto:aleksandar.kukaras@schwarzgelb-heidelberg.de"
                    className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline"
                  >
                    aleksandar.kukaras@schwarzgelb-heidelberg.de
                  </a>
                  ) and Seibold (
                  <a
                    href="mailto:seibold-tennis@t-online.de"
                    className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline"
                  >
                    seibold-tennis@t-online.de
                  </a>
                  ), see also under{" "}
                  <Link
                    to="/training"
                    className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors underline"
                  >
                    Training
                  </Link>
                  .
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Further impressions of our club are shown in our extensive{" "}
                  <strong>photo gallery</strong> below. Simply click on an image
                  and then scroll right or left… and now enjoy!
                </p>
              </div>

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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {previewImages.map((image) => {
                const fullIndex = images.findIndex((img) => img.src === image.src);
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
                View all {images.length} photos
              </button>
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

export default DerClubEN;
