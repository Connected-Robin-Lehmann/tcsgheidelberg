import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { upcomingEvents } from "@/data/events";

const TurniereDE = () => {
  const tournamentEvents = upcomingEvents.filter(
    (e) => e.type === "tournament" && e.id !== "season-opening-2026" && e.id !== "doppelturnier-saisonabschluss-2026"
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Turniere 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Turniere
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alle Turniere unseres Vereins in der Übersicht – von LK-Turnieren
              bis zum Schwarz-Gelb-Cup
            </p>
          </div>

          {/* Tournament List */}
          <div className="space-y-6">
            {tournamentEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border-l-4 border-l-tennis-yellow hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Trophy className="h-6 w-6 text-tennis-yellow" />
                        <h3 className="font-bold text-2xl text-tennis-black">
                          {event.title.de}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description.de}
                      </p>
                    </div>
                    <div className="lg:text-right space-y-3 lg:min-w-[280px]">
                      <div className="flex items-center lg:justify-end text-tennis-black">
                        <Calendar className="h-5 w-5 mr-3 text-tennis-yellow" />
                        <span className="font-bold text-lg">{event.date}</span>
                      </div>
                      <div className="flex items-center lg:justify-end text-gray-700">
                        <Clock className="h-5 w-5 mr-3 text-tennis-yellow" />
                        <span className="font-medium">{event.time.de}</span>
                      </div>
                      <div className="flex items-center lg:justify-end text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-tennis-yellow" />
                        <span>{event.location.de}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TurniereDE;
