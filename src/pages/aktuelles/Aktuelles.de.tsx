import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AktuellesDE = () => {
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
          {/* Veranstaltungen Link */}
          <section className="mb-12">
            <div className="text-center">
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
