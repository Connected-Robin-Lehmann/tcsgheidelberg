import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Download, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { upcomingEvents } from "@/data/events";

const renderTextWithEmailLinks = (text: string) => {
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts = text.split(emailRegex);
  return parts.map((part, i) =>
    emailRegex.test(part) ? (
      <a key={i} href={`mailto:${part}`} className="text-tennis-black font-medium underline hover:text-tennis-yellow transition-colors">{part}</a>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

const VeranstaltungenEN = () => {
  // Get upcoming social/food events
  const socialEvents = upcomingEvents.filter(e => e.type === "food" || e.type === "party" || e.type === "meeting" || e.id === "season-opening-2026" || e.id === "doppelturnier-saisonabschluss-2026");

  // Season events (camps, tournaments, etc.)
  const seasonEvents = upcomingEvents.filter(e => e.type === "camp" || e.type === "tournament" || e.type === "training");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Events & Dates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Upcoming Events
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here you can find all upcoming club events and dates in a clear
              overview
            </p>
          </div>

          {/* Social Events Section */}
          {socialEvents.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-tennis-black mb-8 flex items-center gap-3">
                <span className="text-4xl">🎉</span>
                Upcoming Events
              </h2>
              
              <div className="space-y-6">
                {socialEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-l-4 border-l-tennis-yellow hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        {/* Event Info */}
                        <div className="flex-1">
                          <h3 className="font-bold text-2xl text-tennis-black mb-3">{event.title.en}</h3>
                          <p className="text-gray-600 leading-relaxed">{renderTextWithEmailLinks(event.description.en)}</p>
                          {event.contact && (
                            <p className="text-sm text-gray-500 mt-4">
                              Contact: <a href={`mailto:${event.contact}`} className="text-tennis-black font-medium hover:text-tennis-yellow transition-colors">{event.contact}</a>
                            </p>
                          )}
                          {event.attachmentUrl && (
                            <a
                              href={event.attachmentUrl}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-4 bg-tennis-black text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
                            >
                              <Download className="h-4 w-4 text-tennis-yellow" />
                              {event.attachmentLabel?.en ?? "Download"}
                            </a>
                          )}
                        </div>


                        {/* Event Details */}
                        <div className="lg:text-right space-y-3 lg:min-w-[280px]">
                          <div className="flex items-center lg:justify-end text-tennis-black">
                            <Calendar className="h-5 w-5 mr-3 text-tennis-yellow" />
                            <span className="font-bold text-lg">{event.date}</span>
                          </div>
                          <div className="flex items-center lg:justify-end text-gray-700">
                            <Clock className="h-5 w-5 mr-3 text-tennis-yellow" />
                            <span className="font-medium">{event.time.en}</span>
                          </div>
                          <div className="flex items-center lg:justify-end text-gray-600">
                            <MapPin className="h-5 w-5 mr-3 text-tennis-yellow" />
                            <span>{event.location.en}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Dates 2026 Section */}
          {seasonEvents.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-tennis-black mb-8 flex items-center gap-3">
                <span className="text-4xl">📅</span>
                Dates 2026
              </h2>
              
              <div className="space-y-6">

                {/* Dynamic season events */}
                {seasonEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-l-4 border-l-tennis-yellow hover:shadow-xl transition-all duration-300 bg-white">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="font-bold text-2xl text-tennis-black mb-3">{event.title.en}</h3>
                          <p className="text-gray-600 leading-relaxed">{renderTextWithEmailLinks(event.description.en)}</p>
                          {event.linkUrl && (
                            <a
                              href={event.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-4 bg-tennis-black text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 text-tennis-yellow" />
                              {event.linkLabel?.en ?? "More info"}
                            </a>
                          )}
                        </div>
                        <div className="lg:text-right space-y-3 lg:min-w-[280px]">
                          <div className="flex items-center lg:justify-end text-tennis-black">
                            <Calendar className="h-5 w-5 mr-3 text-tennis-yellow" />
                            <span className="font-bold text-lg">{event.date}</span>
                          </div>
                          <div className="flex items-center lg:justify-end text-gray-700">
                            <Clock className="h-5 w-5 mr-3 text-tennis-yellow" />
                            <span className="font-medium">{event.time.en}</span>
                          </div>
                          <div className="flex items-center lg:justify-end text-gray-600">
                            <MapPin className="h-5 w-5 mr-3 text-tennis-yellow" />
                            <span>{event.location.en}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}


          <div className="mt-16">
            <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
              <Calendar className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                Don't Miss Out!
              </h3>
              <p className="text-white mb-6">Stay updated on all club events</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/aktuelles/tiebreaking-news"
                  className="bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Tiebreaking News
                </a>
                <a
                  href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-tennis-yellow text-tennis-yellow px-8 py-3 rounded-full font-bold hover:bg-tennis-yellow hover:text-tennis-black transition-colors"
                >
                  Follow on Instagram
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

export default VeranstaltungenEN;