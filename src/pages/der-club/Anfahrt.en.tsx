import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Car, Bike, AlertTriangle, Download, Navigation } from "lucide-react";

const AnfahrtEN = () => {
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
              Directions & Parking
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How to get to our club? Here you'll find all directions and information
            </p>
          </div>

          {/* Important Parking Notice */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-2xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-700 mb-4">
                  Important Parking Notice
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We would like to expressly remind all members that <strong>parking at the HTV car park</strong> next to the restaurant "Moods" is <strong>not permitted</strong> for members and guests of our club.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                  This applies particularly and expressly to short-term parking for dropping off or picking up our youth players!
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All members are therefore expressly and officially requested by the board to <strong>exclusively use the car park on Schwindstraße</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you still want to reach the club grounds via Carl-Bosch-Straße, please park your vehicle outside the HTV car park in public spaces.
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
                  Cycling on Club Grounds
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Cycling is not permitted on the entire club grounds!</strong> Bicycle racks are available at the main entrance. The remaining steps to the court or clubhouse can easily be covered on foot. We ask you to change old habits.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Note for Schwarz-Gelb members who are also HTV members:</strong> Bicycles are also not permitted on the HTV grounds! Schwarz-Gelb members who are also HTV members may push their bicycle from the Carl-Bosch-Straße entrance across the HTV grounds to courts 6-9 and use the bicycle rack behind the "garage" next to court 6!
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
                  Directions and Parking - Main Facility
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our tennis club Schwarz-Gelb Heidelberg e.V. is centrally located between the Weststadt, Bahnstadt and Südstadt districts. The parking spaces are located on Schwindstraße (in front of the indoor tennis carpet hall), which can be reached by turning off Römerstraße. From the car park, it is only a short walk of about 50 m across the bridge over the railway tracks. The main entrance is immediately on the left side. Coming from the Bahnstadt, you can also conveniently reach the club by bicycle or on foot via the cycle path. The exact location can be seen on Google Maps.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open("/downloads/Anfahrt-und-Lageplan-TC-Schwarz-Gelb-Heidelberg.pdf", "_blank")}
                  className="inline-flex items-center gap-2 bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
                  Download Site Plan (PDF)
                </button>
                <a
                  href="https://www.google.com/maps/place/Schwindstra%C3%9Fe+9,+69126+Heidelberg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-tennis-black text-tennis-yellow px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <MapPin className="h-5 w-5" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-4">
              <ConsentMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.5!2d8.6833!3d49.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1234567890%3A0x1234567890abcdef!2sSchwindstra%C3%9Fe+9%2C+69126+Heidelberg!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                title="Location TC Schwarz-Gelb Heidelberg"
                lang="en"
              />
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <MapPin className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Our Address
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

export default AnfahrtEN;
