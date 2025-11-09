import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Veranstaltungen from "./Veranstaltungen";

const VeranstaltungenEN = () => {
  const upcomingEvents = [
    {
      date: "30.04.2025",
      time: "20:00",
      title: "80s/90s Party – Dance into May",
      location: "Clubhouse",
      description: "Please register via email for planning purposes",
      contact: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
      type: "Party",
    },
    {
      date: "03.05.2025",
      time: "All day",
      title: "Start of League Matches",
      location: "Various Courts",
      description: "Start of team matches for the 2025 season",
      type: "Sport",
    },
    {
      date: "04.05.2025",
      time: "14:00",
      title: "Season Opening with Flower Tournament",
      location: "Tennis Facility",
      description:
        "Official opening of the tennis season with a traditional tournament",
      type: "Tournament",
    },
    {
      date: "07.06. - 21.06.2025",
      time: "All day",
      title: "Pentecost Tennis Camp",
      location: "Veli Lošinj, Croatia",
      description: "Tennis camp in a beautiful setting on the Croatian coast",
      type: "Camp",
    },
    {
      date: "19.07.2025",
      time: "17:00",
      title: "General Meeting + Summer Festival",
      location: "Clubhouse & Terrace",
      description: "Combined with Nuit Blanche – our annual club highlight",
      type: "Meeting",
    },
    {
      date: "30.07. - 03.08.2025",
      time: "All day",
      title: "Schwarz Gelb Cup 2025 (Youth)",
      location: "Tennis Facility",
      description:
        "Powered by Engelhorn Sports – our traditional youth tournament",
      type: "Tournament",
    },
    {
      date: "04.08. - 08.08.2025",
      time: "09:30 - 15:30",
      title: "1st Summer Holiday Camp in Heidelberg",
      location: "Tennis Facility",
      description: "Tennis camp for children and youth during summer holidays",
      type: "Camp",
    },
    {
      date: "08.09. - 12.09.2025",
      time: "09:30 - 15:30",
      title: "2nd Summer Holiday Camp in Heidelberg",
      location: "Tennis Facility",
      description: "Second tennis camp for children and youth",
      type: "Camp",
    },
    {
      date: "07.09. - 15.09.2025",
      time: "All day",
      title: "Inflatable Hall Setup",
      location: "Courts 7 & 8",
      description: "Setup of the inflatable hall for the winter season",
      type: "Infrastructure",
    },
    {
      date: "22.09.2025",
      time: "All day",
      title: "Start of Winter Training",
      location: "Inflatable Hall",
      description: "Start of training operations in the inflatable hall",
      type: "Training",
    },
    {
      date: "07.10.2025",
      time: "14:00",
      title: "Season Closing with Doubles Tournament",
      location: "Tennis Facility",
      description: "Traditional season closing with doubles tournament",
      type: "Tournament",
    },
    {
      date: "21.11.2025",
      time: "19:00",
      title: "Thanksgiving Turkey Dinner",
      location: "Clubhouse",
      description: "Cozy gathering with traditional Thanksgiving meal",
      type: "Food",
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Party":
        return "bg-purple-100 text-purple-800";
      case "Sport":
        return "bg-green-100 text-green-800";
      case "Tournament":
        return "bg-tennis-yellow/20 text-tennis-black";
      case "Camp":
        return "bg-blue-100 text-blue-800";
      case "Meeting":
        return "bg-red-100 text-red-800";
      case "Training":
        return "bg-orange-100 text-orange-800";
      case "Infrastructure":
        return "bg-gray-100 text-gray-800";
      case "Food":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Party":
        return "🎉";
      case "Sport":
        return "🎾";
      case "Tournament":
        return "🏆";
      case "Camp":
        return "🏕️";
      case "Meeting":
        return "📋";
      case "Training":
        return "💪";
      case "Infrastructure":
        return "🔧";
      case "Food":
        return "🍽️";
      default:
        return "📅";
    }
  };

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

          {/* Events Grid */}
          <div className="grid gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
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
                          {event.title}
                        </h3>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getEventTypeColor(
                            event.type
                          )}`}
                        >
                          {event.type}
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
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-tennis-yellow mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {event.contact && (
                    <div className="bg-tennis-yellow/10 rounded-xl p-4">
                      <div className="flex items-center text-tennis-black">
                        <Users className="h-5 w-5 mr-2" />
                        <span className="font-medium">Registration:</span>
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
                Don’t Miss Out!
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
