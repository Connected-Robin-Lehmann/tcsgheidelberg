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
  Download,
  ExternalLink,
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

  const camps2026 = [
    {
      name: "2nd Summer Tennis Camp",
      date: "07.09. - 11.09.2026",
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

          {/* Winter Training Registration 2026/2027 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Winter Training Registration 2026/2027
              </h2>
            </div>

            <div className="p-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="font-medium text-lg">Dear Tennis Friends!</p>

                <p>
                  A successful and sunny summer is drawing to a close. We look
                  forward to seeing you again after the summer break and starting
                  the winter training.
                </p>

                <p className="font-semibold text-tennis-black">
                  Training registration is again via the online portal Sportision.
                </p>

                <div className="bg-tennis-yellow/10 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4">
                    <img
                      src="/images/sportision-qr-code.png"
                      alt="QR Code Sportision Registration"
                      className="w-36 h-36"
                    />
                    <div className="text-center md:text-left">
                      <a
                        href="https://www.sportision.de/club/kukaras-professional-tennis-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-tennis-black font-semibold hover:text-tennis-yellow transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        sportision.de/club/kukaras-professional-tennis-1
                      </a>
                    </div>
                  </div>
                  <p className="text-center text-sm text-gray-600">
                    Registration with guest access or after registration possible
                  </p>
                </div>

                <p>
                  Registration is possible with a guest account or with a
                  registration. I recommend a registration, so you can change your
                  entries (until the registration deadline). Registration is free.
                  Each training participant must submit their own registration for
                  the training. However, this can be done via a registered person.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-tennis-black mb-3">
                    Registration Process:
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      • By clicking <strong>Register</strong>, you register for the
                      training. Here you enter your training preferences and your
                      desired training times and days (as many as possible!).
                    </li>
                    <li>
                      • <strong>6 checkmarks are mandatory</strong>, otherwise the
                      registration will not be accepted. For bookings of several
                      units, please add 2 additional checkmarks per further unit
                      (e.g. 2 units per week = 8 checkmarks).
                    </li>
                    <li>
                      • The times of the checkmarks made are mandatory to observe,
                      as we use them to create the schedule.
                    </li>
                    <li>
                      • When registering for 2-person training, it is advisable to
                      already have a partner, as it is not always possible to find a
                      suitable player. Please note this in the comments.
                    </li>
                    <li>
                      • Other training requests can also be entered in the comments.
                    </li>
                  </ul>
                </div>

                <p>
                  The portal is easy to use. If you have any questions, we are
                  happy to help:{" "}
                  <a
                    href="mailto:tennis@kukaras.de"
                    className="text-tennis-black font-semibold hover:text-tennis-yellow transition-colors"
                  >
                    tennis@kukaras.de
                  </a>
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <p className="font-bold text-red-800">
                    Important: Even training participants who have been playing in
                    the same group for a long time and have partially stopped
                    registering officially must register via this program, as group
                    allocation is done via the program.
                  </p>
                </div>

                {/* Price Table */}
                <div className="bg-white rounded-xl border-2 border-tennis-yellow overflow-hidden">
                  <div className="bg-tennis-black p-4">
                    <h4 className="text-lg font-bold text-tennis-yellow text-center">
                      Winter Training Prices Monday–Friday (incl. hall, lighting,
                      balls)
                    </h4>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-tennis-yellow/20">
                          <th className="text-left p-4 font-bold text-tennis-black">
                            Training Group
                          </th>
                          <th className="text-right p-4 font-bold text-tennis-black">
                            until 4 PM
                          </th>
                          <th className="text-right p-4 font-bold text-tennis-black">
                            from 4 PM
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">Group of 4, 60 minutes</td>
                          <td className="p-4 text-right font-semibold">€520.00</td>
                          <td className="p-4 text-right font-semibold">€535.00</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">Group of 3, 60 minutes</td>
                          <td className="p-4 text-right font-semibold">€690.00</td>
                          <td className="p-4 text-right font-semibold">€710.00</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">Group of 2, 60 minutes</td>
                          <td className="p-4 text-right font-semibold">€1,035.00</td>
                          <td className="p-4 text-right font-semibold">€1,065.00</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4">Private / Family Training</td>
                          <td className="p-4 text-right font-semibold">€1,950.00</td>
                          <td className="p-4 text-right font-semibold">€1,990.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 p-4 text-sm text-gray-600 text-center">
                    Prices for training on Saturdays and Sundays correspond to the
                    prices from 4 PM.
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="text-lg font-bold text-tennis-black mb-3">
                    Training Venues & Period:
                  </h4>
                  <p className="mb-2">
                    Winter training takes place in the{" "}
                    <strong>inflatable hall</strong>, in the{" "}
                    <strong>carpet hall (SG)</strong> and in the{" "}
                    <strong>USC hall (Neuenheimer Feld)</strong>.
                  </p>
                  <p>
                    Training starts on <strong>21.09.2026</strong> and ends on{" "}
                    <strong>21.03.2027</strong> with the Easter holidays.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-sm">
                  <p className="mb-1">
                    ✅ Training takes place as usual on public holidays.
                  </p>
                  <p className="mb-3">
                    ❌ <strong>No</strong> training takes place during the holidays.
                  </p>
                  <h5 className="font-bold text-tennis-black mb-2">
                    Training-free periods:
                  </h5>
                  <ul className="space-y-1">
                    <li>• Autumn holidays: 25.10. – 01.11.2026</li>
                    <li>• Christmas holidays: 20.12.2026 – 10.01.2027</li>
                    <li>• Carnival holidays: 07.02. – 14.02.2027</li>
                  </ul>
                  <p className="mt-3 text-xs text-gray-600">
                    Saturday training still takes place at the beginning of the
                    holidays. Sunday training takes place on the last Sunday after
                    the holidays.
                  </p>
                </div>

                <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow p-6 rounded-r-lg">
                  <p className="font-bold text-tennis-black text-lg">
                    Registration deadline is 15.09.2026.
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    With a later registration I cannot guarantee a training spot, as
                    winter training already starts on 21.09.2026.
                  </p>
                </div>

                <p className="font-medium text-center text-lg">
                  Best regards
                  <br />
                  Alex Kukaras
                </p>
              </div>
            </div>
          </div>

          {/* Tennis Camps 2026 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 text-tennis-black mr-3" />
                <h2 className="text-2xl font-bold text-tennis-black text-center">
                  Tennis Camps 2026
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {camps2026.map((camp, index) => (
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

              {/* Flyer */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-tennis-black mb-4 text-center">
                  Summer Camp Flyer
                </h4>
                <div className="max-w-md mx-auto">
                  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
                    <img
                      src="/images/flyer-sommercamp-2026.jpg"
                      alt="Summer Camp 2026 Flyer"
                      className="w-full"
                    />
                    <div className="p-4 text-center">
                      <a
                        href="/downloads/SommerTenniscamps_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-tennis-yellow text-tennis-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors text-sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Summer Camp Flyer
                      </a>
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
