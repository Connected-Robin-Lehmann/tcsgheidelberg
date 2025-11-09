import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  Users,
  Target,
  Heart,
  Award,
  BookOpen,
} from "lucide-react";

const TennisschuleSeiboldEN = () => {
  const focuses = [
    "Training for beginners and returning players",
    "Tactics in singles and doubles",
    "Mental training",
  ];

  const qualifications = [
    "State-certified tennis coach (VDT/DTB)",
    "Cardio Tennis Trainer (VDT/DTB/PTR)",
    "Trainer for state-certified tennis coaches (VDT/DTB)",
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
                Experience & Expertise
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Manfred Seibold Tennis School
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recreational sports and club integration - learn tennis with fun
              and structure
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Manfred Seibold Tennis School, with its experienced
                    coach, primarily trains beginners, recreational players, and
                    seniors, offering introductory courses and tennis camps.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Students are given the opportunity from the start to get a
                    feel for club life, eventually becoming members and, if
                    talented, joining a team.
                  </p>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-2xl font-bold text-tennis-yellow">
                      Our Goal
                    </h3>
                  </div>
                  <p className="leading-relaxed">
                    The goal is to discover the joy of playing tennis and
                    promote recreational sports. Tennis should be accessible and
                    enjoyable for everyone—regardless of age or prior
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Manfred Seibold Profile */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-200 mb-12">
            <div className="bg-tennis-yellow p-6">
              <h2 className="text-2xl font-bold text-tennis-black text-center">
                Manfred Seibold - Your Experienced Coach
              </h2>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-xl font-bold text-tennis-black">
                      Qualifications
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-tennis-yellow rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 font-medium text-sm">
                          {qualification}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-xl font-bold text-tennis-black">
                      Focus Areas
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {focuses.map((focus, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-tennis-black rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 font-medium text-sm">
                          {focus}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Contact & Appointments
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center justify-center">
                    <Phone className="h-5 w-5 text-tennis-yellow mr-3" />
                    <span className="font-semibold">0171-4557538</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="h-5 w-5 text-tennis-yellow mr-3" />
                    <span className="font-semibold">
                      seibold-tennis@t-online.de
                    </span>
                  </div>
                </div>
                <div className="mt-6 bg-tennis-yellow/20 rounded-lg p-4">
                  <p className="text-sm font-medium">
                    Training sessions by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Training Focus */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-tennis-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-tennis-black" />
              </div>
              <h3 className="text-xl font-bold text-tennis-black mb-4">
                Beginners & Returning Players
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Specially designed programs for tennis newcomers and those
                returning after a break. Step by step to success.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-tennis-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-tennis-yellow" />
              </div>
              <h3 className="text-xl font-bold text-tennis-black mb-4">
                Tactics & Strategy
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Learn the right tactics for singles and doubles. Strategic
                thinking and smart play make the difference.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-tennis-yellow to-tennis-yellow/80 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-tennis-black" />
              </div>
              <h3 className="text-xl font-bold text-tennis-black mb-4">
                Mental Training
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Mental strength is crucial. Concentration, self-confidence, and
                handling pressure are trained deliberately.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-tennis-black mb-6">
                Our Philosophy
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 border-l-4 border-tennis-yellow">
                  <h4 className="font-bold text-tennis-black mb-3">
                    Club Integration
                  </h4>
                  <p className="text-gray-700 text-sm">
                    From the beginning, we provide opportunities to experience
                    club life. Tennis is a team sport – you’ll quickly find a
                    community with us.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border-l-4 border-tennis-yellow">
                  <h4 className="font-bold text-tennis-black mb-3">
                    Promote Recreational Sports
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Tennis for everyone – that is our motto. Whether hobbyist or
                    competitive player, we find the right path for each
                    individual.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-tennis-black rounded-2xl p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-tennis-yellow mr-3" />
              <h3 className="text-xl font-bold text-tennis-yellow">
                Important Note
              </h3>
            </div>
            <p className="leading-relaxed">
              After initial trial sessions, a formal membership at TC
              Schwarz-Gelb Heidelberg e.V. is required (e.g., for insurance
              reasons) to train on the club’s facilities.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TennisschuleSeiboldEN;
