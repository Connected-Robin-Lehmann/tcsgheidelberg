import React, { useState } from "react";
import { Calendar, MapPin, Clock, Trophy, Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import ImageLightbox from "./ImageLightbox";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'de';
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const posterAlt = lang === 'de'
    ? 'Spaß-Blümchenturnier zum Saisonabschluss am 4.10.2026'
    : 'Fun Blümchenturnier season finale on 4.10.2026';

  return (
    <section id="home" className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col bg-gradient-to-br from-tennis-black via-gray-900 to-tennis-court overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        {/* Title Section */}
        <div className="text-center text-white animate-fade-in pt-6 md:pt-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
            {t('home.hero.welcome')}
            <span className="block text-tennis-yellow mt-1 md:mt-2">
              {t('home.hero.clubName')}
            </span>
            <span className="block text-base sm:text-lg md:text-2xl lg:text-3xl mt-1 md:mt-2 font-light">
              {t('home.hero.clubSuffix')}
            </span>
          </h1>
        </div>

        {/* Blümchenturnier Highlight */}
        <div className="flex-1 flex items-center justify-center py-4 md:py-6">
          <div className="max-w-5xl w-full px-2 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-tennis-yellow rounded-lg md:rounded-2xl p-3 md:p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-3 md:mb-4">
                <div className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-4 py-1.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider">
                  <Trophy className="w-3 h-3 md:w-4 md:h-4" />
                  {lang === 'de' ? 'Saisonabschluss 2026' : 'Season Finale 2026'}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
                {/* Poster */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="relative group overflow-hidden rounded-lg border-2 border-white/20 bg-white cursor-pointer w-full"
                  aria-label={lang === 'de' ? 'Blümchenturnier-Plakat vergrößern' : 'Enlarge Blümchenturnier poster'}
                >
                  <img
                    src="/images/aktuelles/bluemchenturnier-2026.jpg"
                    alt={posterAlt}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>

                {/* Details */}
                <div className="space-y-3 md:space-y-4 text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                    {lang === 'de' ? 'Spaß-Blümchenturnier zum Saisonabschluss' : 'Fun Blümchenturnier Season Finale'}
                  </h2>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-tennis-yellow flex-shrink-0" />
                      <span className="font-semibold">4.10.2026</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-tennis-yellow flex-shrink-0" />
                      <span>{lang === 'de' ? 'Beginn: 13.00 Uhr' : 'Start: 1:00 PM'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-tennis-yellow flex-shrink-0" />
                      <span>{lang === 'de' ? 'Clubanlage Schwarz-Gelb Heidelberg' : 'Schwarz-Gelb Heidelberg Club Facility'}</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 md:p-4 border border-white/20">
                    <div className="flex items-center gap-2 text-tennis-yellow font-bold text-sm md:text-base mb-2">
                      <Trophy className="w-4 h-4 md:w-5 md:h-5" />
                      {lang === 'de' ? '1-Punkt-Turnier' : '1-Point Tournament'}
                    </div>
                    <p className="text-white/80 text-xs md:text-sm mb-2">
                      {lang === 'de'
                        ? 'Beginn: 16.00 Uhr – Anmeldung bei Terezie erforderlich'
                        : 'Start: 4:00 PM – registration with Terezie required'}
                    </p>
                    <a
                      href="mailto:terezie.zuna-homsy@schwarzgelb-heidelberg.de"
                      className="inline-flex items-center gap-2 text-tennis-yellow hover:text-yellow-300 text-xs md:text-sm font-medium transition-colors break-all"
                    >
                      <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      terezie.zuna-homsy@schwarzgelb-heidelberg.de
                    </a>
                  </div>

                  <p className="text-white/80 text-xs md:text-sm">
                    {lang === 'de'
                      ? 'Spaß, Spiel und Gemeinschaft beim Saisonabschluss – mit Spezialpreis: Pizza von Pasquale!'
                      : 'Fun, play and community at the season finale – with a special prize: pizza from Pasquale!'}
                  </p>

                  <Link
                    to="/aktuelles/veranstaltungen"
                    className="inline-flex items-center justify-center bg-tennis-yellow text-tennis-black px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
                  >
                    {lang === 'de' ? 'Zu den Veranstaltungen' : 'View Events'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={[{ src: "/images/aktuelles/bluemchenturnier-2026.jpg", alt: posterAlt }]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={() => {}}
      />
    </section>
  );
};
export default Hero;
