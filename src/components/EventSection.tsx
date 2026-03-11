import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { 
  upcomingEvents, 
  eventTypeLabels, 
  getEventTypeColor
} from "@/data/events";

const EventSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'de';
  
  // Get upcoming match events (Badenliga 2026)
  const upcomingMatches = upcomingEvents
    .filter(e => e.type === "match")
    .slice(0, 4);
  
  return (
    <section id="news" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-3 md:mb-4">
            {t('home.events.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {lang === 'de' 
              ? 'Badenliga Hallensaison 2026 – Unsere Mannschaften im Einsatz'
              : 'Baden League Indoor Season 2026 – Our teams in action'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {upcomingMatches.map((event) => (
            <Card key={event.id} className="p-4 hover:shadow-lg transition-shadow border-l-4 border-tennis-yellow">
              <div className="mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                  {eventTypeLabels[event.type][lang]}
                </span>
              </div>
              <h3 className="font-bold text-tennis-black mb-2">
                {event.title[lang]}
              </h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-tennis-yellow" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-tennis-yellow" />
                  <span>{event.time[lang]}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-tennis-yellow" />
                  <span className="truncate">{event.location[lang]}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to="/aktuelles/veranstaltungen" className="btn-hero">
              {lang === 'de' ? 'Alle Termine' : 'All Events'}
            </Link>
            <Link to="/der-club" className="btn-hero-outline">{t('home.events.discoverClub')}</Link>
            <Link to="/faq" className="btn-hero-outline">{t('home.events.faqNewcomers')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;