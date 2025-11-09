// Optimized and cleaned-up version of Platzordnung component
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

const PlatzordnungEN = () => {
  const playingTimes = [
    {
      type: "Singles",
      duration: "60 minutes",
      icon: <Users className="h-5 w-5" />,
    },
    {
      type: "Doubles",
      duration: "120 minutes",
      icon: <Users className="h-5 w-5" />,
    },
    {
      type: "During extreme court usage",
      duration: "Always only 60 minutes",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const courtRules = [
    {
      title: "Drag the courts",
      description: "After playing with the provided nets",
    },
    { title: "Clean the lines", description: "Use the line brushes" },
    {
      title: "Water the courts",
      description: "Sufficiently water before and after playing",
    },
    {
      title: "Fold in sun umbrellas",
      description: "After leaving the court",
    },
    {
      title: "Dispose of bottles",
      description: "Do not leave empty bottles behind",
    },
    {
      title: "Avoid trash",
      description: "Use the bins on the premises",
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
                Fair Play
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Court Rules
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rules for harmonious coexistence on our tennis grounds
            </p>
          </div>

          {/* Intro */}
          <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-12 border-l-4 border-tennis-yellow">
            <p className="text-lg text-gray-700 leading-relaxed">
              Without rules for game play and court usage, we cannot enjoy
              tennis. Therefore, we have established court rules that are
              binding for all members.
            </p>
          </div>

          {/* Playing Rights */}
          <Card className="border-tennis-yellow/20 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center">
                <CheckCircle className="h-6 w-6 text-tennis-yellow mr-3" />
                Playing Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Every member who has duly paid their annual membership fee in
                full including all additional charges is eligible to play.
              </p>
            </CardContent>
          </Card>

          {/* Playing Times */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8 flex items-center">
                <Clock className="h-8 w-8 text-tennis-yellow mr-4" />
                Standard Playing Times
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {playingTimes.map((time, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4 text-tennis-yellow">
                        {time.icon}
                      </div>
                      <h4 className="font-bold text-tennis-black mb-2">
                        {time.type}
                      </h4>
                      <p className="text-gray-600">{time.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Court Reservation */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Digital Court Reservation
                </h3>
                <div className="space-y-4">
                  <p>
                    Court reservations are managed using the digital reservation
                    system. Details can be found in the system’s rulebook.
                  </p>
                  <p>
                    <strong>Goal:</strong> Avoid situations where members come
                    to the facility and cannot play or must wait due to
                    fully-occupied courts.
                  </p>
                  <p>
                    Use of the system is not mandatory, and free play is still
                    possible if courts are available. All existing reservations
                    can be viewed in real-time at any moment.
                  </p>
                </div>
                <div className="mt-6 bg-tennis-yellow/20 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-tennis-yellow mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">
                      <strong>Important:</strong> If a reservation/booking
                      exists, the court must be vacated immediately—without
                      discussion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guest Policy */}
              <div className="bg-red-50 rounded-2xl p-6 mb-8 border-l-4 border-red-400">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Guests</h4>
                    <p className="text-red-700">
                      Due to high court usage, guests are currently not allowed!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After Playing Rules */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8">
                After Playing
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {courtRules.map((rule, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-tennis-yellow mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-tennis-black mb-2">
                            {rule.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {rule.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-tennis-yellow/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Special attention for:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>All players, coaches, and parents</strong> of
                    children/youth
                  </li>
                  <li>• Ensure sun umbrellas are folded in</li>
                  <li>
                    • Do not leave empty bottles on or next to the player
                    benches
                  </li>
                  <li>
                    • Do not leave other trash behind (wrappers, bags, etc.)
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-tennis-black">
                  There are plenty of bins available on the grounds!
                </p>
              </div>
            </div>
          </div>

          {/* Download and Contact */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-tennis-yellow/20">
              <CardContent className="p-8 text-center">
                <Download className="h-12 w-12 text-tennis-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Full Court Rules
                </h3>
                <p className="text-gray-600 mb-6">
                  The complete court rules as a PDF document
                </p>
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2023/01/Platzordnung-Stand-1.2023.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-tennis-yellow/20 bg-tennis-black text-white">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="h-12 w-12 text-tennis-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-tennis-yellow mb-4">
                  In Case of Conflicts
                </h3>
                <p className="mb-6">
                  In case of doubt, a present member of the board should be
                  consulted. They will ensure compliance with the game and court
                  rules.
                </p>
                <p className="text-tennis-yellow font-semibold">
                  We urgently ask for your attention to this in the interest of
                  all members!
                </p>
                <p className="text-sm mt-4">— The Board —</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatzordnungEN;
