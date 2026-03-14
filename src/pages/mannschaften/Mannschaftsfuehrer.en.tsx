import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, ClipboardList, Phone, Mail, Calendar, Car, Home, Snowflake, MessageCircle } from "lucide-react";

const MannschaftsfuehrerEN = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Checklist
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Team Captain
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All important information and responsibilities for team captains
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mb-12">
            <Button
              className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-8 py-6 text-lg"
              onClick={() =>
                window.open("/downloads/Checkliste_Mannschaftsfuehrer_2025.pdf", "_blank")
              }
            >
              <Download className="h-5 w-5 mr-2" />
              Download Checklist as PDF
            </Button>
          </div>

          {/* General Section */}
          <Card className="border-4 border-tennis-yellow/30 shadow-xl mb-8">
            <CardHeader className="bg-tennis-black">
              <CardTitle className="text-2xl font-bold text-tennis-yellow flex items-center gap-3">
                <Users className="h-7 w-7" />
                General
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Contact person for other team captains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Communication with the sports coordinator</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Receives all balls for the season</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Informs the team about match dates as soon as they are set</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">Clarifies the lineup for match day in advance (e.g., via Doodle, WhatsApp poll, etc.) & informs everyone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">•</span>
                  <span className="text-gray-700">If unavailable → designate a substitute captain & pass on information</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Match Days Section */}
          <Card className="border-4 border-tennis-yellow/30 shadow-xl mb-8">
            <CardHeader className="bg-tennis-yellow">
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center gap-3">
                <Calendar className="h-7 w-7" />
                Match Days
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Before the Match */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 border-b-2 border-tennis-yellow pb-2">
                  BEFORE THE MATCH
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Home Match */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Home Match
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Pack match report forms & balls</li>
                      <li>• Organize everyone on the home team to bring food/drinks</li>
                      <li>• Inform the restaurant about match day – approx. 1 week in advance (summer only)</li>
                    </ul>
                  </div>

                  {/* Away Match */}
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Away Match
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Set meeting point (ideally at least 15 min before match start)</li>
                      <li>• Organize carpooling</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* On Match Day */}
              <div>
                <h3 className="text-xl font-bold text-tennis-black mb-4 border-b-2 border-tennis-yellow pb-2">
                  ON MATCH DAY
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Home Match */}
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      Home Match
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bring balls (6-player teams: 5 cans / 4-player teams: 3 cans)</li>
                      <li>• Bring match report form & fill out with opposing captain + sign</li>
                      <li>• After the match: Enter result online or send to sports coordinator</li>
                    </ul>
                  </div>

                  {/* Away Match */}
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Away Match
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Fill out match report with opposing captain</li>
                      <li>• Check entries & sign</li>
                      <li>• Take a photo of the signed match report</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Winter Season */}
              <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300">
                <h4 className="font-bold text-tennis-black mb-4 flex items-center gap-2">
                  <Snowflake className="h-5 w-5 text-blue-500" />
                  Winter Season Additional Notes
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-tennis-yellow font-bold">•</span>
                    <span>Team captain receives list from sports coordinator with indoor facility info</span>
                  </li>
                  <li className="ml-6 text-gray-600">○ Check court surface etc. + communicate in group</li>
                  <li className="flex items-start gap-2">
                    <span className="text-tennis-yellow font-bold">•</span>
                    <span>Team captain collects money for match day:</span>
                  </li>
                  <li className="ml-6 text-gray-600">○ €100 per adult team</li>
                  <li className="ml-6 text-gray-600">○ €85 per youth team U12-U18</li>
                  <li className="ml-6 text-gray-600">○ €65 for U10</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-tennis-yellow/20 bg-tennis-yellow/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-tennis-black mb-6 flex items-center gap-3">
                <MessageCircle className="h-7 w-7 text-tennis-yellow" />
                Questions?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="bg-tennis-yellow rounded-full p-3">
                    <Phone className="h-6 w-6 text-tennis-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+4915226564889" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors">
                      +49 152 265 64 889
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="bg-tennis-yellow rounded-full p-3">
                    <Mail className="h-6 w-6 text-tennis-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:katharina.kukaras@schwarzgelb-heidelberg.de" className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors">
                      katharina.kukaras@schwarzgelb-heidelberg.de
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MannschaftsfuehrerEN;
