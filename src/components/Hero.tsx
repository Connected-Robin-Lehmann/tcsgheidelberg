import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { upcomingEvents, ClubEvent } from "@/data/events";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'de';

  const highlightedEvents = upcomingEvents.filter(e => e.type === "camp");

  const getEventLabel = (event: ClubEvent, index: number) => {
    return lang === 'de' ? `${index + 1}. Camp` : `Camp ${index + 1}`;
  };

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

        {/* Sommer-Tenniscamps Highlight */}
        <div className="flex-1 flex items-center justify-center py-4 md:py-6">
          <div className="max-w-5xl w-full px-2 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-tennis-yellow rounded-lg md:rounded-2xl p-3 md:p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-3 md:mb-4">
                <div className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-4 py-1.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  {lang === 'de' ? 'Sommer-Tenniscamps 2026' : 'Summer Tennis Camps 2026'}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {highlightedEvents.map((event, idx) => (
                  <div key={event.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4">
                    <div className="text-tennis-yellow font-bold text-sm md:text-base mb-1">
                      {getEventLabel(event, idx)}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/80 text-xs md:text-sm mb-1">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/70 text-xs md:text-sm">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                      {event.location[lang]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 md:mt-6">
                <p className="text-white/80 text-xs md:text-sm text-center sm:text-left">
                  {lang === 'de'
                    ? 'Actionreiche Tenniscamps für Kinder und Jugendliche in den Sommerferien – Anmeldung über unsere Tennisschulen.'
                    : 'Action-packed tennis camps for kids and teens during the summer holidays – register via our tennis schools.'}
                </p>
                <Link to="/training" className="inline-flex items-center justify-center bg-tennis-yellow text-tennis-black px-4 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-yellow-300 transition-colors flex-shrink-0">
                  {lang === 'de' ? 'Zur Anmeldung' : 'Register now'}
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
