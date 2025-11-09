import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Calendar, Award, ExternalLink } from "lucide-react";

const TrainingEN = () => {
  const trainingOffers = [
    "Individual training",
    "Group training with suitable sparring partners",
    "Team training",
    "Camps",
    "Tournaments",
    "Intensive training for individual skill development",
  ];

  const philosophy = [
    "High quality standards in all training",
    "Fun in playing tennis",
    "Professionalism in all events",
    "Providing new perspectives",
    "Individual development",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Professional Training
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Training
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Training options for every level – from beginners to ambitious
              competitive players
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Club Training Options
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Whether individual training, group training with suitable
                    sparring partners, team training, camps, tournaments, or
                    intensive training for exceptionally talented juniors –
                    everyone can find what they need with us.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our TC Schwarz-Gelb Heidelberg e.V. has relied for many
                    years on the expertise of the Kukaras and Manfred Seibold
                    tennis schools.
                  </p>
                </div>

                {/* Training Options Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-tennis-black rounded-2xl p-6 text-white">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-yellow">
                        Our Training Offers
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {trainingOffers.map((offer, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                          <span className="text-sm">{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-black">
                        Our Philosophy
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {philosophy.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-tennis-black rounded-full mr-3"></div>
                          <span className="text-sm text-gray-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white border-2 border-tennis-yellow/20 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    For All Age Groups
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Both of our tennis schools offer training for children,
                    juniors, adults, as well as individual and team sessions,
                    courses, and camps domestically and abroad.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From beginner tennis to competitive performance-focused
                    training, quality, fun, and professionalism are the common
                    thread in all our training and events.
                  </p>
                </div>

                <div className="bg-tennis-yellow/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Our Goal
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The aim of the club and tennis schools is to provide both
                    young and adult players with new perspectives and to support
                    their individual development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tennis Schools Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-tennis-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-tennis-black" />
                </div>
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Kukaras Tennis School
                </h3>
                <p className="text-gray-700 mb-6">
                  Professional youth and talent development with the highest DTB
                  A-License. Specializing in developing young talent.
                </p>
                <a
                  href="/training/tennisschule-pts-kukaras"
                  className="inline-flex items-center bg-tennis-yellow text-tennis-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-yellow/80 transition-colors"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-tennis-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-tennis-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Seibold Tennis School
                </h3>
                <p className="text-gray-700 mb-6">
                  Experienced coach for beginners, hobby players, and seniors.
                  Focus on recreational tennis and club integration.
                </p>
                <a
                  href="/training/tennisschule-seibold"
                  className="inline-flex items-center bg-tennis-black text-tennis-yellow font-semibold px-6 py-3 rounded-lg hover:bg-tennis-black/80 transition-colors"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-black mb-4">
              Interested in Training?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you are interested or have questions, please contact our tennis
              schools directly. Our experienced coaches will be happy to advise
              you and find the right training for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/training/tennisschule-pts-kukaras"
                className="bg-tennis-yellow text-tennis-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-yellow/80 transition-colors"
              >
                To Kukaras Tennis School
              </a>
              <a
                href="/training/tennisschule-seibold"
                className="bg-tennis-black text-tennis-yellow font-semibold px-6 py-3 rounded-lg hover:bg-tennis-black/80 transition-colors"
              >
                To Seibold Tennis School
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingEN;
