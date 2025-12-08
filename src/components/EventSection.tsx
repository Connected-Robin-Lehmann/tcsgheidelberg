import React from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { 
  upcomingEvents, 
  eventTypeLabels, 
  getEventTypeColor, 
  getEventIcon 
} from "@/data/events";

const EventSection = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'de';
  
  // Find the member meeting event
  const memberMeetingEvent = upcomingEvents.find(e => e.id === 'member-meeting-2025');
  
  return (
    <section id="news" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-3 md:mb-4">
            {t('home.events.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('home.events.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mitgliederversammlung */}
          {memberMeetingEvent && (
            <Card className="card-tennis bg-gradient-to-br from-tennis-yellow-light to-white border-tennis-yellow/20">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-tennis-black mr-3" />
                <h3 className="text-2xl font-bold text-tennis-black">
                  {memberMeetingEvent.title[lang]}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{memberMeetingEvent.date} - {memberMeetingEvent.time[lang]}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{memberMeetingEvent.location[lang]}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{t('home.events.allMembers')}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                {memberMeetingEvent.description[lang]}
              </p>

              <Link to="/aktuelles/veranstaltungen">
                <Button className="btn-hero w-full">{t('home.events.moreInfo')}</Button>
              </Link>
            </Card>
          )}

          {/* Tagesordnung */}
          <Card className="card-tennis">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-tennis-yellow mr-3" />
              <h3 className="text-2xl font-bold text-tennis-black">
                {t('home.events.agenda')}
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-tennis-black mb-2">
                  🗳️ {t('home.events.boardElection')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('home.events.boardElectionDesc')}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-tennis-black mb-2">
                  💰 {t('home.events.membershipFees')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('home.events.membershipFeesDesc')}
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-tennis-black mb-2">
                  📋 {t('home.events.statute')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('home.events.statuteDesc')}
                </p>
              </div>
            </div>

            <Link to="/aktuelles/veranstaltungen">
              <Button variant="outline" className="btn-hero-outline w-full">
                {t('home.events.invitationDetails')}
              </Button>
            </Link>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Link to="/der-club" className="btn-hero">{t('home.events.discoverClub')}</Link>
            <Link to="/faq" className="btn-hero-outline">{t('home.events.faqNewcomers')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
