import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Trophy, Target, Calendar } from "lucide-react";

const JugendEN = () => {
  const youthTeams = [
    { name: "Midcourt U10.1", category: "U10" },
    { name: "Full Court U12 Green", category: "U12" },
    { name: "Boys U12", category: "U12" },
    { name: "Girls U15.1", category: "U15" },
    { name: "Boys U15.1", category: "U15" },
    { name: "Girls U15.2", category: "U15" },
    { name: "Boys U15.2", category: "U15" },
    { name: "Boys U15.3", category: "U15" },
    { name: "Boys U15.4", category: "U15" },
    { name: "Girls U18.1", category: "U18" },
    { name: "Boys U18.1", category: "U18" },
    { name: "Girls U18.2", category: "U18" },
    { name: "Boys U18.2", category: "U18" },
    { name: "Girls U18.3", category: "U18" },
  ];

  const categories = {
    U10: youthTeams.filter((team) => team.category === "U10"),
    U12: youthTeams.filter((team) => team.category === "U12"),
    U15: youthTeams.filter((team) => team.category === "U15"),
    U18: youthTeams.filter((team) => team.category === "U18"),
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
                Youth Development
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Youth
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The future of tennis – youth training with tradition and
              innovation
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-8">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Tradition of Youth Development
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Training children and youth and playing in teams from an
                    early age has a long tradition at our club. We are proud to
                    nurture young talent and provide them with a solid
                    foundation in tennis.
                    The contact person for all club members under 18 is Karolin Kukaras (<a href="mailto:karolin.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-black underline hover:text-tennis-yellow transition-colors font-medium">karolin.kukaras@schwarzgelb-heidelberg.de</a>).
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-tennis-black rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-tennis-yellow mb-2">
                      14
                    </div>
                    <div className="text-sm font-medium">Youth Teams</div>
                  </div>
                  <div className="bg-tennis-yellow rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-tennis-black mb-2">
                      4
                    </div>
                    <div className="text-sm font-medium text-tennis-black">
                      Age Groups
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      2026
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      Current Season
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-tennis-black mb-2">
                      U10-U18
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Age Range
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teams Overview */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Our Youth Teams 2026
              </h2>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-center mb-8">
                Here you can find an overview of all 12 youth teams of TC
                Schwarz-Gelb Heidelberg e.V. in the summer season 2026.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(categories).map(([category, teams]) => (
                  <div
                    key={category}
                    className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-tennis-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                        <Trophy className="h-8 w-8 text-tennis-black" />
                      </div>
                      <h3 className="text-xl font-bold text-tennis-black">
                        {category}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {teams.length} Team{teams.length > 1 ? "s" : ""}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {teams.map((team, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-3 border border-gray-200 hover:border-tennis-yellow/50 transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-800">
                            {team.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-tennis-black rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-tennis-yellow mr-3" />
                <h3 className="text-xl font-bold text-tennis-yellow">
                  For Every Skill Level
                </h3>
              </div>
              <p className="leading-relaxed mb-4">
                Our club offers the right team for all age groups and skill
                levels. From first steps on the Midcourt to ambitious youth
                players, there is something for everyone.
              </p>
              <p className="text-tennis-yellow font-medium">
                Interested? Contact our youth coordinator Karo!
              </p>
            </div>

            <div className="bg-gradient-to-br from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 border-2 border-tennis-yellow/20">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-tennis-yellow mr-3" />
                <h3 className="text-xl font-bold text-tennis-black">
                  Our Philosophy
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We not only develop tennis skills, but also emphasize teamwork,
                fair play, and the personal growth of our young talents.
              </p>
              <p className="text-gray-700 font-medium">
                Training should be fun and lead to success – that is our motto!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JugendEN;
