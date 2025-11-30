import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Mail, ExternalLink, Users, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    date: "08.09.-12.09.2025",
    title: "Sommerferien Tenniscamp",
    description: "Anmeldung und Info bei A. Kukaras",
    contact: "tennis@kukaras.de",
    type: "training",
  },
  {
    date: "12.09.-14.09.2025",
    title: "Traglufthallenaufbau",
    description: "Aufbau der Winterhalle",
    type: "maintenance",
  },
  {
    date: "13.09.-14.09.2025",
    title: "Badische Mannschaftsmeisterschaften U12w",
    description: "Nachwuchsturnier",
    type: "tournament",
  },
  {
    date: "22.09.2025",
    title: "Beginn Wintertraining",
    description: "Anmeldung über Sportision",
    link: "https://www.sportision.de/club/kukaras-professional-tennis-1",
    type: "training",
  },
  {
    date: "12.10.2025",
    title: "Mitgliederversammlung",
    description: "17:00 Uhr",
    type: "meeting",
  },
  {
    date: "18.10.2025",
    title: "Putzete",
    description: "ab 10:00 Uhr",
    type: "maintenance",
  },
  {
    date: "21.11.2025",
    title: "Thanksgiving – Truthahnessen",
    description: "ab 19:00 Uhr in der Rose (Kirchheim)",
    type: "social",
  },
];

const AktuellesDE = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Aktuelles 2025</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden mit allen wichtigen Terminen und Neuigkeiten unseres Vereins
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Upcoming Events */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-tennis-black mb-4">Kommende Termine</h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={index}
                  className={`border-l-4 ${getEventColor(event.type)} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center text-tennis-black">
                        {getEventIcon(event.type)}
                        <span className="ml-2 text-sm font-medium text-gray-600">{event.date}</span>
                      </div>
                      <Clock className="h-4 w-4 text-gray-400" />
                    </div>

                    <h3 className="text-lg font-bold text-tennis-black mb-2">{event.title}</h3>

                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>

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
                        Zur Anmeldung
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Alle weiteren Termine finden Sie unter:</p>
              <Link to="/aktuelles/veranstaltungen" className="btn-hero inline-flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Alle Veranstaltungen
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
                  <h3 className="text-2xl font-bold text-tennis-black">Scheine für Vereine 2025</h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Durch eure Mithilfe haben wir über die Sammelaktion ‚Scheine für Vereine'
                  <span className="font-bold text-tennis-black"> 1.679 Scheine </span>
                  gesammelt und konnten diese gegen
                  <span className="font-bold text-tennis-black"> acht neue Anzeigetafeln </span>
                  einlösen – ganz herzlichen Dank an alle, die fleißig mitgesammelt haben!
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/07/ScheineFuerVereineAktion-211x300.jpg"
                    alt="Scheine für Vereine Aktion"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/07/ScheineFuerVereine2025-219x300.jpg"
                    alt="Scheine für Vereine 2025"
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
                  <h3 className="text-xl font-bold text-tennis-black mb-3">Nachrichten</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Berichte von Turnieren, Spielen und weitere Nachrichten aus dem Vereinsleben. Durchsuchen Sie unsere
                    Nachrichtensammlung nach Monat und Kategorie.
                  </p>
                  <Link to="/aktuelles/nachrichten">
                    <Button variant="outline" className="btn-hero-outline w-full">
                      Zu den Nachrichten
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Crowdfunding */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">Crowdfunding-Initiative</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Beim Crowdfunding finanziert ein einzelner oder mehrere mit kleinen oder auch größeren individuellen
                    Beträgen ein Projekt für einen guten Zweck. Diese Idee haben wir auch in unserem Verein zur
                    Verbesserung und Verschönerung unserer Tennis-Infrastruktur aufgenommen.
                  </p>
                  <Link to="/aktuelles/projekte">
                    <Button variant="outline" className="btn-hero-outline w-full">
                      Zu den Projekten
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Großprojekte */}
              <Card className="card-tennis border-l-4 border-l-blue-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">Großprojekte & Vereinsvorhaben</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Innovative und infrastrukturelle Großprojekte, die nur mittelbar den Tennissport direkt betreffen,
                    stellen viele Anforderungen an unseren TC Schwarz-Gelb Heidelberg e.V.
                  </p>
                  <Button variant="outline" className="btn-hero-outline w-full">
                    Vereinsvorhaben ansehen
                  </Button>
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="card-tennis border-l-4 border-l-green-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">Tie-Break(ing)News</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Aktuelles rund um den Sport, aber auch geplante Veranstaltungen und neue Entwicklungen und Planungen
                    im und rund um den Club teilen wir als Vorstand in unserem Newsletter mit.
                  </p>
                  <Link to="/aktuelles/tiebreaking-news">
                    <Button variant="outline" className="btn-hero-outline w-full">
                      Newsletter lesen
                    </Button>
                  </Link>
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

export default AktuellesDE;
