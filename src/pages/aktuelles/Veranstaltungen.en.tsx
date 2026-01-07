import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { upcomingEvents } from "@/data/events";

const VeranstaltungenEN = () => {
  // Filter match events for 2026
  const matchEvents = upcomingEvents.filter(e => e.type === "match");
  
  // Group by team
  const damen1 = matchEvents.filter(e => e.id.includes("damen1"));
  const damen2 = matchEvents.filter(e => e.id.includes("damen2"));
  const herren1 = matchEvents.filter(e => e.id.includes("herren1"));

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

          {/* Badenliga Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-tennis-black mb-8 flex items-center gap-3">
              <span className="text-4xl">🏸</span>
              Baden League Indoor Season 2026
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Women 1 */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 pb-2 border-b-2 border-tennis-yellow">
                  Women 1
                </h3>
                <div className="space-y-4">
                  {damen1.map((event) => (
                    <Card key={event.id} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span>{event.time.en}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span>{event.location.en}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Women 2 */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 pb-2 border-b-2 border-tennis-yellow">
                  Women 2
                </h3>
                <div className="space-y-4">
                  {damen2.map((event) => (
                    <Card key={event.id} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span>{event.time.en}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span>{event.location.en}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Men 1 */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 pb-2 border-b-2 border-tennis-yellow">
                  Men 1
                </h3>
                <div className="space-y-4">
                  {herren1.map((event) => (
                    <Card key={event.id} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                          <Calendar className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span>{event.time.en}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-tennis-yellow" />
                          <span>{event.location.en}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
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