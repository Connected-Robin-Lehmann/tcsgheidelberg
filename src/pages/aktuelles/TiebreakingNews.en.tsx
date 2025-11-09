import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Users, Utensils, Mail } from "lucide-react";

const TiebreakingNewsEN = () => {
  const newsItems = [
    {
      title: "Schwarz-Gelb(e) TieBreaking No. 2/2025",
      date: "26.06.2025",
      content: "Summer festival and general meeting combined",
    },
    {
      title: "Schwarz-Gelb(e) TieBreaking No. 1/2025",
      date: "22.03.2025",
      content: "Season opening and new restaurant",
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
                Club News
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Tiebreaking News
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current news and important information from our club
            </p>
          </div>

          {/* Latest News - No. 2/2025 */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="bg-tennis-yellow p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-tennis-black">
                  Schwarz-Gelb(e) TieBreaking No. 2/2025
                </h2>
                <div className="flex items-center text-tennis-black">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">26.06.2025</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Dear members and friends of our club,</strong>
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Midway through the season, we once again present our members
                  and friends with the very special annual club highlight!
                </p>

                {/* Summer Festival Announcement */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Summer Festival on 19.07.2025
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We will celebrate our summer festival on{" "}
                    <strong>Saturday 19.07.2025 from 5:00 PM</strong> on our
                    club terrace. There will also be live music at the start,
                    and the event will be combined with the general meeting!
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    All long-standing and new members who enjoy socializing in a
                    summer atmosphere are welcome! Our summer festivals are
                    legendary, and there will be no shortage of food and drinks.
                  </p>
                </div>

                {/* General Meeting */}
                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    General Meeting at 5:00 PM
                  </h3>
                  <p className="leading-relaxed mb-4">
                    We hereby formally invite all members to our annual general
                    meeting on <strong>Saturday 19.07.2025 at 5:00 PM</strong>{" "}
                    in the club.
                  </p>
                  <p className="leading-relaxed mb-4">
                    In addition to formal agenda items, the year 2024 will be
                    highlighted in the board reports, followed by the election
                    of the new board.
                  </p>
                  <div className="bg-tennis-yellow/20 rounded-xl p-4">
                    <h4 className="font-bold text-tennis-yellow mb-2">
                      Important Voting Items:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Adjustment of the statutes</li>
                      <li>New fee schedule effective from 2026</li>
                      <li>
                        One-time levy for 2025 of EUR 45,- (age-independent)
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Restaurant News */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <div className="flex items-center mb-4">
                    <Utensils className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-black">
                      Our New Restaurant Operator – Pasquale DiMauro
                    </h3>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-l-4 border-tennis-yellow mb-4">
                    <h4 className="font-bold text-tennis-black mb-2">
                      Welcome to "La Trattoria"!
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <em>
                        "Starting April 2026, my team and I will take over the
                        gastronomy at TC Schwarz-Gelb!"
                      </em>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      My name is Pasquale Dimauro. I am an experienced
                      restaurateur with passion and tradition, and some of you
                      may already know me. I look forward to delighting you with
                      30 years of successful gastronomy experience, offering
                      Italian warmth and cuisine.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <h5 className="font-bold text-tennis-black mb-2">
                        Summer 2025 (limited)
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Weekends: small menu</li>
                        <li>• Wed-Fri: 6:00-9:00 PM open</li>
                        <li>• Mon-Tue: closed</li>
                      </ul>
                    </div>
                    <div className="bg-tennis-yellow/20 rounded-xl p-4">
                      <h5 className="font-bold text-tennis-black mb-2">
                        From April 2026
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Full operation "La Trattoria"</li>
                        <li>• Italian cuisine & pizza</li>
                        <li>• Private events possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-tennis-yellow/10 rounded-xl p-6">
                  <p className="text-gray-700 font-medium">
                    With sporty regards
                    <br />
                    <strong>Board of TC Schwarz-Gelb Heidelberg e.V.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Previous News - No. 1/2025 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="bg-gray-100 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">
                  Schwarz-Gelb(e) TieBreaking No. 1/2025
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-semibold">22.03.2025</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>Dear members and friends of our club,</strong>
                </p>
                <p className="text-gray-700 mb-6">
                  We are back with the latest and exciting updates from our
                  club. This time, there is a lot of news!
                </p>

                {/* Key Updates */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-tennis-black mb-3">
                      Courts Opening Soon
                    </h4>
                    <p className="text-gray-700 text-sm">
                      The renovated outdoor courts will likely be playable from
                      next week. Courts 1-4 and 10 will then be available.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-tennis-black mb-3">
                      Changing Rooms Renovated
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Renovation of the changing rooms and ancillary spaces is
                      complete. The result is wonderful – check out the details!
                    </p>
                  </div>
                </div>

                {/* Important Dates */}
                <div className="bg-tennis-yellow/10 rounded-xl p-6">
                  <h4 className="font-bold text-tennis-black mb-4">
                    Important Dates 2025
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • <strong>30.04.</strong> - 80s/90s Party
                        </li>
                        <li>
                          • <strong>03.05.</strong> - Start of league matches
                        </li>
                        <li>
                          • <strong>04.05.</strong> - Season opening with flower
                          tournament
                        </li>
                        <li>
                          • <strong>07.06.-21.06.</strong> - Tennis Camp Croatia
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>
                          • <strong>19.07.</strong> - General meeting + Summer
                          festival
                        </li>
                        <li>
                          • <strong>30.07.-03.08.</strong> - Schwarz Gelb Cup
                          2025
                        </li>
                        <li>
                          • <strong>07.10.</strong> - Season closing doubles
                          tournament
                        </li>
                        <li>
                          • <strong>21.11.</strong> - Thanksgiving turkey dinner
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TiebreakingNewsEN;
