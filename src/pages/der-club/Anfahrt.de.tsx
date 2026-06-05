import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Car, Bike, AlertTriangle, Download, Navigation } from "lucide-react";

const AnfahrtDE = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Schwindstraße 9, 69126 Heidelberg
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Anfahrt & Parken
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wie kommt man zu unserem Club? Hier alle Infos zur Anfahrt
            </p>
          </div>

          {/* Important Parking Notice */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-700 mb-4">
                  Wichtiger Hinweis zum Parken
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aus aktuellem Anlass möchten (und müssen) wir alle Mitglieder hiermit ausdrücklich daran erinnern, dass ein <strong>Parken auf dem HTV Parkplatz</strong> neben dem Restaurant „Moods" für Mitglieder und Gäste unseres Vereins <strong>nicht gestattet</strong> ist.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  Dies gilt insbesondere und ausdrücklich auch für das nur kurzzeitige Parken zum Bringen oder Abholen unserer Jugend!
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Alle Mitglieder werden deshalb ausdrücklich und vom Vorstand offiziell ersucht, <strong>ausschließlich den Parkplatz in der Schwindstraße</strong> zu nutzen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Wer dennoch über die Carl-Bosch-Straße zum Clubgelände gelangen möchte, parkt sein Fahrzeug bitte unbedingt(!) außerhalb des HTV-Parkplatzes an öffentlichen Stellen.
                </p>
              </div>
            </div>
          </div>

          {/* Bicycle Notice */}
          <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <Bike className="h-8 w-8 text-tennis-black flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-tennis-black mb-4">
                  Fahrradfahren auf dem Clubgelände
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Fahrradfahren ist auf dem gesamten Clubgelände nicht gestattet!</strong> Für Fahrräder sind am Haupteingang hinreichend Fahrradständer vorhanden. Die verbleibenden Schritte zum Platz oder Clubhaus können auch zu Fuß bewältigt werden. Wir bitten, alte Gewohnheiten einzustellen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Hinweis für Schwarz-Gelb-Mitglieder, die auch Mitglied des HTV sind:</strong> Auch auf dem Gelände des HTV sind Fahrräder nicht gestattet! Schwarz-Gelb-Mitglieder, die auch zugleich Mitglied des HTV sind, dürfen ihr Fahrrad vom Zugang über die Carl-Bosch-Straße über das HTV-Gelände zu den Plätzen 6-9 schieben und den dort vorhandenen Fahrradständer hinter der „Garage" neben Platz 6 nutzen!
                </p>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Navigation className="h-8 w-8 text-tennis-yellow" />
                <h2 className="text-2xl md:text-3xl font-bold text-tennis-black">
                  Anfahrt und Parken Hauptanlage
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unser Tennisverein Schwarz-Gelb Heidelberg e.V. liegt zentral zwischen Weststadt, Bahnstadt und Südstadt. Die Parkplätze befinden sich in der Schwindstraße (vor der Tennis-Teppichhalle), in die man von der Römerstraße abbiegt. Vom Parkplatz ist es nur ein kurzer Weg von etwa 50 m über die Brücke zur Überquerung der Bahngleise. Hier befindet sich der Haupteingang gleich auf der linken Seite. Auch von der Bahnstadt kommend gelangt man bequem auf dem Fahrrad-Damm mit dem Fahrrad oder zu Fuß zum Club. Die genaue Lage ist auf Google Maps ersichtlich.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open("/downloads/Anfahrt-und-Lageplan-TC-Schwarz-Gelb-Heidelberg.pdf", "_blank")}
                  className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  Anfahrts- / Lageplan herunterladen (PDF)
                </button>
                <a
                  href="https://www.google.com/maps/place/Schwindstra%C3%9Fe+9,+69126+Heidelberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-tennis-black text-tennis-yellow px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <MapPin className="h-5 w-5" />
                  Auf Google Maps anzeigen
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-4">
              <ConsentMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.5!2d8.6833!3d49.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1234567890%3A0x1234567890abcdef!2sSchwindstra%C3%9Fe+9%2C+69126+Heidelberg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                title="Standort TC Schwarz-Gelb Heidelberg"
                lang="de"
              />
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <MapPin className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Unsere Adresse
            </h3>
            <p className="text-white text-lg mb-2">
              TC Schwarz-Gelb Heidelberg e.V.
            </p>
            <p className="text-gray-300 text-lg">
              Schwindstraße 9, 69126 Heidelberg
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnfahrtDE;
