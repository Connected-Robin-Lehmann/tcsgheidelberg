import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  Mail,
  ExternalLink,
  Users,
  MapPin,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    date: "08.09.-12.09.2025",
    title: "Summer Holiday Tennis Camp",
    description: "Registration and info at A. Kukaras",
    contact: "tennis@kukaras.de",
    type: "training",
  },
  {
    date: "12.09.-14.09.2025",
    title: "Air Dome Hall Setup",
    description: "Construction of the winter hall",
    type: "maintenance",
  },
  {
    date: "13.09.-14.09.2025",
    title: "Baden Team Championships U12w",
    description: "Youth tournament",
    type: "tournament",
  },
  {
    date: "22.09.2025",
    title: "Winter Training Starts",
    description: "Registration via Sportision",
    link: "https://www.sportision.de/club/kukaras-professional-tennis-1",
    type: "training",
  },
  {
    date: "12.10.2025",
    title: "Members' Meeting",
    description: "5:00 PM",
    type: "meeting",
  },
  {
    date: "18.10.2025",
    title: "Club Cleanup Day",
    description: "from 10:00 AM",
    type: "maintenance",
  },
  {
    date: "21.11.2025",
    title: "Thanksgiving – Turkey Dinner",
    description: "from 7:00 PM at Rose (Kirchheim)",
    type: "social",
  },
];

const AktuellesEN = () => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "training":
        return <Users className="h-5 w-5" />;
      case "tournament":
        return <Calendar className="h-5 w-5" />;
      case "meeting":
        return <Users className="h-5 w-5" />;
      case "maintenance":
        return <MapPin className="h-5 w-5" />;
      case "social":
        return <Calendar className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "training":
        return "border-l-tennis-yellow bg-tennis-yellow/5";
      case "tournament":
        return "border-l-red-500 bg-red-50";
      case "meeting":
        return "border-l-blue-500 bg-blue-50";
      case "maintenance":
        return "border-l-green-500 bg-green-50";
      case "social":
        return "border-l-purple-500 bg-purple-50";
      default:
        return "border-l-tennis-yellow bg-tennis-yellow/5";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News 2025</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay up to date with all important dates and news from our club
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Upcoming Events */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-tennis-black mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${getEventColor(
                    event.type
                  )} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center text-tennis-black">
                        {getEventIcon(event.type)}
                        <span className="ml-2 text-sm font-medium text-gray-600">
                          {event.date}
                        </span>
                      </div>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>

                    <h3 className="text-lg font-bold text-tennis-black mb-2">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>

                    {event.contact && (
                      <a
                        href={`mailto:${event.contact}`}
                        className="inline-flex items-center text-tennis-yellow hover:text-tennis-black transition-colors text-sm font-medium"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {event.contact}
                      </a>
                    )}

                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-tennis-yellow hover:text-tennis-black transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Register
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Find all other dates at:</p>
              <Link
                to="/aktuelles/veranstaltungen"
                className="btn-hero inline-flex items-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                All Events
              </Link>
            </div>
          </section>

          {/* News Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Scheine für Vereine */}
            <Card className="card-tennis">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-tennis-yellow rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-tennis-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-tennis-black">
                    Vouchers for Clubs 2025
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Thanks to your help, we collected
                  <span className="font-bold text-tennis-black">
                    {" "}
                    1,679 vouchers{" "}
                  </span>
                  through the 'Vouchers for Clubs' collection campaign and were
                  able to redeem them for
                  <span className="font-bold text-tennis-black">
                    {" "}
                    eight new scoreboards{" "}
                  </span>
                  – a big thank you to everyone who diligently collected!
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/07/ScheineFuerVereineAktion-211x300.jpg"
                    alt="Vouchers for Clubs Campaign"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/07/ScheineFuerVereine2025-219x300.jpg"
                    alt="Vouchers for Clubs 2025"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <div className="space-y-6">
              {/* Nachrichten */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    News
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Reports from tournaments, matches and other news from club
                    life. Browse our news collection by month and category.
                  </p>
                  <Link to="/aktuelles/nachrichten">
                    <Button
                      variant="outline"
                      className="btn-hero-outline w-full"
                    >
                      View News
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Crowdfunding */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    Crowdfunding Initiative
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    In crowdfunding, one or more individuals finance a project
                    for a good cause with small or larger individual amounts. We
                    have adopted this idea in our club to improve and enhance
                    our tennis infrastructure.
                  </p>
                  <Button variant="outline" className="btn-hero-outline w-full">
                    View Projects
                  </Button>
                </div>
              </Card>

              {/* Großprojekte */}
              <Card className="card-tennis border-l-4 border-l-blue-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    Major Projects & Club Initiatives
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Innovative and infrastructural major projects that only
                    indirectly relate to tennis pose many requirements for our
                    TC Schwarz-Gelb Heidelberg e.V.
                  </p>
                  <Button variant="outline" className="btn-hero-outline w-full">
                    View Club Initiatives
                  </Button>
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="card-tennis border-l-4 border-l-green-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    Tie-Break(ing)News
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    News about sports, planned events and new developments and
                    plans in and around the club are shared by the board in our
                    newsletter.
                  </p>
                  <Button variant="outline" className="btn-hero-outline w-full">
                    Read Newsletter
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AktuellesEN;
