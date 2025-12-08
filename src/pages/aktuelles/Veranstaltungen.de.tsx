import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { 
  upcomingEvents, 
  eventTypeLabels, 
  getEventTypeColor, 
  getEventIcon 
} from "@/data/events";

const VeranstaltungenDE = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Events & Termine
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Veranstaltungen
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hier finden Sie alle kommenden Termine und Veranstaltungen unseres
              Vereins geordnet und übersichtlich
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg border-4 border-tennis-yellow/20 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="text-2xl mr-3">
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-tennis-black">
                          {event.title.de}
                        </h3>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getEventTypeColor(
                            event.type
                          )}`}
                        >
                          {eventTypeLabels[event.type].de}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-tennis-yellow mr-2" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 text-tennis-yellow mr-2" />
                      <span>{event.time.de}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-tennis-yellow mr-2" />
                      <span>{event.location.de}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description.de}
                  </p>

                  {event.contact && (
                    <div className="bg-tennis-yellow/10 rounded-xl p-4">
                      <div className="flex items-center text-tennis-black">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="font-medium">Anmeldung:</span>
                        <a
                          href={`mailto:${event.contact}`}
                          className="ml-2 text-tennis-black hover:underline font-medium"
                        >
                          {event.contact}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
              <Calendar className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                Verpassen Sie nichts!
              </h3>
              <p className="text-white mb-6">
                Bleiben Sie über alle Vereinsveranstaltungen auf dem Laufenden
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/aktuelles/tiebreaking-news"
                  className="bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  TieBreaking News
                </a>
                <a
                  href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-tennis-yellow text-tennis-yellow px-8 py-3 rounded-full font-bold hover:bg-tennis-yellow hover:text-tennis-black transition-colors"
                >
                  Instagram folgen
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VeranstaltungenDE;
