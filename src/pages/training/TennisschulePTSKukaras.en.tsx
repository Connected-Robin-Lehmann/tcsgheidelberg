import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Trophy,
  Users,
  Calendar,
  Target,
  Award,
} from "lucide-react";

const TennisschulePTSKukarasEN = () => {
  const services = [
    "Creating training programs",
    "Team training",
    "Individual and group training",
    "Regular training camps",
    "Coach and player placement",
    "Tennis courses",
    "DTB Tennis Badge",
    "Sparring partner placement",
    "Tournament support",
    "Video analysis using Dartfish method",
    "Mental training",
    "Conditioning – Plyometrics method",
    "Cardio Tennis",
    "School-club cooperation options",
    "Free racket tests",
    "Stringing service",
  ];

  const camps2025 = [
    {
      name: "Easter Tennis Camp for Children & Juniors",
      date: "14.04.-17.04.2025",
      time: "9:30-15:30",
    },
    {
      name: "Easter Tennis Workshop for Adults",
      date: "14.04.-17.04.2025",
      time: "18:00-20:00",
    },
    {
      name: "2nd Easter Tennis Camp for Children & Juniors",
      date: "22.04.-25.04.2025",
      time: "9:30-15:30",
    },
    {
      name: "2nd Easter Tennis Workshop for Adults",
      date: "22.04.-25.04.2025",
      time: "18:00-20:00",
    },
    {
      name: "Pentecost Tennis Camp Croatia (Veli Losinj)",
      date: "07.06.-21.06.2025",
      time: "All day",
    },
    {
      name: "1st Summer Tennis Camp",
      date: "04.08.-08.08.2025",
      time: "All day",
    },
    {
      name: "2nd Summer Tennis Camp",
      date: "08.09.-12.09.2025",
      time: "All day",
    },
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
                Professional Tennis School
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Kukaras Tennis School
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kukaras Tennis Services GmbH – Youth development at the
              highest level
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Tradition of Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Youth development has traditionally been a strength of TC
                    Schwarz-Gelb Heidelberg. Since 2008, Alex Kukaras has
                    returned as coach and coordinator after a six-year break,
                    proving that success is no coincidence.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Alex has achieved countless titles with teams and players,
                    including district, Baden regional, and even world
                    championships.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-tennis-black rounded-2xl p-8 text-white">
                    <div className="flex items-center mb-4">
                      <Trophy className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-yellow">
                        Highest Qualification
                      </h4>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Alex holds the A-License from the German Tennis
                      Federation, the highest tennis license. Our club, in
                      cooperation with the Kukaras Tennis School, thus provides
                      top-level youth training.
                    </p>
                    <div className="bg-tennis-yellow/20 rounded-lg p-4">
                      <p className="text-sm font-medium">
                        Since his renewed engagement, the number of children and
                        juniors in our club has increased significantly.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-black">
                        For All Members
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Naturally, the training offer is not limited to children
                      and juniors. Every member at Schwarz-Gelb can book
                      individual or group training depending on availability and
                      suitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aleksandar Kukaras Profile */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Aleksandar Kukaras – Head of the Tennis School
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-tennis-black mb-4">
                    Qualifications
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      DTB-A Coach
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      USPTA Professional 1
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      Serbian Diploma Coach
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      Cardio Trainer
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      Plyometrics Trainer
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 text-tennis-yellow mr-2" />
                      "JTFO" Representative in RP Karlsruhe
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-tennis-black mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-5 w-5 mr-3 text-tennis-yellow" />
                      <div>
                        <div>Leisberg 22</div>
                        <div>69124 Heidelberg</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-5 w-5 mr-3 text-tennis-yellow" />
                      <div>
                        <div>Tel/Fax: +49/(0)6221/783881</div>
                        <div>Mobile: +49/(0)172/6644369</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="h-5 w-5 mr-3 text-tennis-yellow" />
                      <span>aleksandar.kukaras@schwarzgelb-heidelberg.de</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-black p-6">
              <h2 className="text-2xl font-bold text-tennis-yellow text-center">
                Programs & Services
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-tennis-yellow/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-gray-800">
                        {service}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Camps 2025 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 text-tennis-black mr-3" />
                <h2 className="text-2xl font-bold text-tennis-black text-center">
                  Tennis Camps 2025
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {camps2025.map((camp, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-tennis-yellow/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-2 md:mb-0">
                        <h4 className="font-bold text-tennis-black">
                          {camp.name}
                        </h4>
                        <p className="text-sm text-gray-600">{camp.time}</p>
                      </div>
                      <div className="bg-tennis-yellow/20 px-4 py-2 rounded-lg">
                        <span className="font-semibold text-tennis-black">
                          {camp.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-tennis-yellow/10 rounded-xl p-6">
                <p className="text-gray-700 font-medium text-center">
                  Further information, including registration details, will be
                  available for download soon.
                </p>
              </div>
            </div>
          </div>

          {/* Inflatable Hall */}
          <div className="bg-tennis-black rounded-3xl p-8 text-white mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                Inflatable Hall from October to April
              </h3>
              <p className="leading-relaxed mb-6">
                Each year, from early October to early April, the Kukaras Tennis
                School sets up the inflatable tennis hall over courts 7 & 8.
              </p>
              <p className="leading-relaxed mb-6">
                The inflatable hall is owned by the Kukaras Tennis School and
                offers the advantage of two clay courts for winter training,
                reducing adaptation issues when switching from outdoor to indoor
                courts. Club members can also use the hall for free play without
                a coach, subject to availability and a fee.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tennis-yellow/20 rounded-xl p-6">
                <h4 className="font-bold text-tennis-yellow mb-3">Features</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 2 clay courts in heated hall</li>
                  <li>• Year-round clay court experience</li>
                  <li>• No adaptation problems</li>
                </ul>
              </div>
              <div className="bg-tennis-yellow/20 rounded-xl p-6">
                <h4 className="font-bold text-tennis-yellow mb-3">
                  Information & Booking
                </h4>
                <p className="text-sm mb-2">
                  Aleksandar Kukaras
                  <br />
                  Tel: 0172-66 44 369
                  <br />
                  Email: kukaras@t-online.de
                </p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-tennis-yellow mr-3" />
              <h3 className="text-xl font-bold text-tennis-black">
                Important Note
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              After initial trial training sessions, formal membership in TC
              Schwarz-Gelb Heidelberg e.V. is required for insurance reasons to
              train at the club facilities.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TennisschulePTSKukarasEN;
