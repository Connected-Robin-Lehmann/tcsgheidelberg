import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Target, Heart } from "lucide-react";

const MannschaftenEN = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Teams 2024
          </h1>
          {/* <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay up to date with all important dates and news from our club
          </p> */}
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-tennis-yellow border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow rounded-full mb-4">
                    <Users className="w-8 h-8 text-tennis-black" />
                  </div>
                  <h3 className="text-6xl font-bold text-tennis-black mb-2">
                    28
                  </h3>
                  <p className="text-lg font-medium text-foreground">
                    Total Teams
                  </p>
                </div>
              </Card>

              <Card className="border-tennis-yellow border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow rounded-full mb-4">
                    <Trophy className="w-8 h-8 text-tennis-black" />
                  </div>
                  <h3 className="text-6xl font-bold text-tennis-black mb-2">
                    16
                  </h3>
                  <p className="text-lg font-medium text-foreground">
                    Youth Teams
                  </p>
                </div>
              </Card>
            </div>

            {/* Description */}
            <Card className="p-8 border-tennis-yellow border-2">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Our Teams 2024
              </h2>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                In 2024, TC Schwarz-Gelb Heidelberg e.V. will again send a total
                of{" "}
                <span className="font-semibold text-tennis-black">
                  28 teams
                </span>{" "}
                into the summer season, including{" "}
                <span className="font-semibold text-tennis-black">
                  16 youth teams
                </span>
                , to compete with other clubs. We therefore offer our members
                attractive team sports across various skill levels and age
                groups.
              </p>

              <p className="text-lg leading-relaxed text-foreground mb-8">
                Every tennis player will quickly find a suitable team with us.
                Our regularly held internal team trainings are well-known for
                fostering a positive atmosphere and openness to newcomers.
                Afterwards, players often relax together at the clubhouse,
                enjoying drinks on the cozy terrace of our restaurant on summer
                evenings.
              </p>

              <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                  Want to learn more?
                </h3>
                <p className="text-white mb-6">
                  You can find the members and results of our teams on the Baden
                  Tennis Association website:
                </p>
                <a
                  href="https://baden.liga.nu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Baden Tennis Association
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </Card>

            {/* Team Categories */}
            <Card className="p-8 border-tennis-yellow border-2">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                Our Team Categories
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="/teams/youth"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Trophy className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Youth</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      16 Teams
                    </p>
                  </div>
                </a>

                <a
                  href="https://baden.liga.nu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Target className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Women</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Multiple Teams
                    </p>
                  </div>
                </a>

                <a
                  href="https://baden.liga.nu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Users className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Men</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Multiple Teams
                    </p>
                  </div>
                </a>

                <a
                  href="https://baden.liga.nu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-background to-secondary/20 p-8 rounded-xl border-2 border-tennis-yellow/30 hover:border-tennis-yellow transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-tennis-yellow/20 group-hover:bg-tennis-yellow rounded-full mb-4 transition-colors">
                      <Heart className="w-8 h-8 text-tennis-black" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Seniors
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Multiple Teams
                    </p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MannschaftenEN;
