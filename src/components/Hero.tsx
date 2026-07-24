import React, { useState } from "react";
import { Calendar, MapPin, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { upcomingEvents, ClubEvent } from "@/data/events";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'de';
  const [showPoster, setShowPoster] = useState(false);

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

        {/* Schwarz-Gelb-Cup Poster Highlight */}
        <div className="flex-1 flex items-center justify-center py-4 md:py-6">
          <div className="max-w-5xl w-full px-2 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-tennis-yellow rounded-lg md:rounded-2xl p-3 md:p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-3 md:mb-4">
                <div className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-4 py-1.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                  {lang === 'de' ? '30.07. – 02.08.2026' : '30.07. – 02.08.2026'}
                </div>
              </div>

              <button
                onClick={() => setShowPoster(true)}
                className="w-full block rounded-lg overflow-hidden shadow-2xl hover:shadow-tennis-yellow/20 hover:scale-[1.01] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-tennis-yellow/50"
                aria-label={lang === 'de' ? 'Schwarz-Gelb-Cup 2026 Plakat vergrößern' : 'Enlarge Schwarz-Gelb Cup 2026 poster'}
              >
                <img
                  src="/images/events/schwarz-gelb-cup-2026-poster.jpeg"
                  alt={lang === 'de' ? 'WILSON Junior Race – Schwarz-Gelb-Cup 2026' : 'WILSON Junior Race – Schwarz-Gelb Cup 2026'}
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 md:mt-6">
                <p className="text-white/80 text-xs md:text-sm text-center sm:text-left">
                  {lang === 'de'
                    ? 'WILSON Junior Race powered by Engelhorn Sport – offenes DTB-Ranglistenturnier für die Nachwuchsklassen U10 bis U18.'
                    : 'WILSON Junior Race powered by Engelhorn Sport – open DTB ranking tournament for junior classes U10 to U18.'}
                </p>
                <Link to="/aktuelles/veranstaltungen" className="inline-flex items-center justify-center bg-tennis-yellow text-tennis-black px-4 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-yellow-300 transition-colors flex-shrink-0">
                  {lang === 'de' ? 'Alle Termine ansehen' : 'View all events'}
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sommer-Tenniscamps Quick Cards */}
        {highlightedEvents.filter(e => e.type === "camp").length > 0 && (
          <div className="pb-6 md:pb-8">
            <div className="max-w-4xl mx-auto px-2">
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {highlightedEvents
                  .filter(e => e.type === "camp")
                  .map((event, idx) => (
                    <div key={event.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4">
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
            </div>
          </div>
        )}
      </div>

      {/* Poster Lightbox */}
      {showPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowPoster(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setShowPoster(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src="/images/events/schwarz-gelb-cup-2026-poster.jpeg"
            alt={lang === 'de' ? 'Schwarz-Gelb-Cup 2026 Plakat' : 'Schwarz-Gelb Cup 2026 poster'}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
export default Hero;
