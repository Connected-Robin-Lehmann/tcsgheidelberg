import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { upcomingEvents, ClubEvent } from "@/data/events";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'de';

  const highlightedIds = [
    "sommercamp-1-2026",
    "sommercamp-2-2026",
    "schwarz-gelb-cup-2026",
  ];

  const highlightedEvents = highlightedIds
    .map(id => upcomingEvents.find(e => e.id === id))
    .filter((e): e is ClubEvent => !!e);

  const getEventLabel = (event: ClubEvent, index: number) => {
    if (event.type === "camp") {
      return lang === 'de' ? `${index + 1}. Camp` : `Camp ${index + 1}`;
    }
    return event.title[lang];
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

        {/* Sommer-Tenniscamps & Schwarz-Gelb-Cup Highlight */}
        {highlightedEvents.length > 0 && (
          <div className="flex-1 flex items-center justify-center py-6 md:py-8">
            <div className="max-w-4xl w-full px-2 animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-tennis-yellow/50 rounded-lg md:rounded-2xl p-3 md:p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="bg-tennis-yellow rounded-full p-1.5 md:p-2 flex-shrink-0">
                      <Calendar className="w-3 h-3 md:w-5 md:h-5 text-tennis-black" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-tennis-yellow">
                      {lang === 'de' ? 'Sommerferien Tenniscamps & Schwarz-Gelb-Cup 2026' : 'Summer Tennis Camps & Schwarz-Gelb Cup 2026'}
                    </h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4">
                    {highlightedEvents.map((event, idx) => (
                      <div key={event.id} className="bg-white/5 rounded-lg p-3 md:p-4 border border-white/10">
                        <div className="text-tennis-yellow font-semibold text-sm md:text-base mb-1">
                          {getEventLabel(event, idx)}
                        </div>
                        <div className="flex items-center gap-1 text-white/80 text-xs md:text-sm mb-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1 text-white/70 text-xs md:text-sm">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                          {event.location[lang]}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4">
                    {lang === 'de'
                      ? 'Tenniscamps und der Schwarz-Gelb-Cup im Sommer 2026 – Spaß, Training, Turnier und neue Freundschaften.'
                      : 'Tennis camps and the Schwarz-Gelb Cup in summer 2026 – fun, training, tournament and new friendships.'}
                  </p>
                  <Link to="/aktuelles/veranstaltungen" className="inline-flex items-center text-tennis-yellow hover:text-yellow-300 font-semibold transition-colors text-xs md:text-base">
                    {lang === 'de' ? 'Alle Termine ansehen' : 'View all events'}
                    <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>
  );
};
export default Hero;