import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download, Users, Heart, Trophy } from "lucide-react";

const MitgliedschaftEN = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-tennis-yellow" />,
      title: "Community",
      description: "Meet new friends and become part of a tennis family",
    },
    {
      icon: <Heart className="h-8 w-8 text-tennis-yellow" />,
      title: "Great Atmosphere",
      description: "Play tennis in a relaxed and friendly environment",
    },
    {
      icon: <Trophy className="h-8 w-8 text-tennis-yellow" />,
      title: "Varied Offerings",
      description: "Different skill levels and ambitions for everyone",
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
                Join now
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Membership
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of our tennis family at TC Schwarz-Gelb Heidelberg
              e.V.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-tennis-yellow/20 hover:border-tennis-yellow/40 transition-colors"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-tennis-black">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8">
                Fancy playing tennis in a great atmosphere?
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Are you interested in playing tennis in a great atmosphere in
                  the heart of Heidelberg? Would you like to pick up a racket
                  for the first time or return to the game after many years of
                  break to send balls — and opponents — across the court? Then
                  we look forward to welcoming you as a new member of our
                  traditional club.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  As a new member, you can be sure that you will not only have
                  fun playing, but also make new friends. With our many players
                  of different strengths and levels of ambition, you will always
                  find friendly people who love tennis just as much as you do!
                </p>
              </div>

              {/* Membership Info */}
              <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Membership Information
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Reduced rates for families, youth, and students</li>
                  <li>
                    • Reduced fees for joining after July 15 until year-end
                  </li>
                  <li>
                    • New fee structure as of 01.01.2026 (adopted on 19.10.2025)
                  </li>
                  <li>
                    • No trial or introductory memberships available – however, a trial training session can be arranged at the{" "}
                    <a href="/training/tennisschule-pts-kukaras" className="text-tennis-black font-semibold underline hover:text-yellow-700 transition-colors">Kukaras</a>{" "}
                    or{" "}
                    <a href="/training/tennisschule-seibold" className="text-tennis-black font-semibold underline hover:text-yellow-700 transition-colors">Seibold</a>{" "}
                    tennis schools, see under <a href="/training" className="text-tennis-black font-semibold underline hover:text-yellow-700 transition-colors">Training</a>
                  </li>
                </ul>
              </div>

              {/* Payment Info */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Payment Modalities
                </h3>
                <p className="text-gray-700 mb-4">
                  We recommend setting up a SEPA direct debit mandate.
                  Otherwise, an additional processing fee of EUR 25 will be
                  charged for manual transfer according to the fee regulations.
                </p>
                <p className="text-gray-700 font-semibold">
                  All membership fees must always be paid in full. No exceptions
                  or other discounts outside the official fee structure will be
                  granted.
                </p>
              </div>

              {/* Work Hours Notice */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Note on Work Hours
                </h3>
                <p>
                  From 2026 onwards, every member between the ages of 16 and 65 must perform one voluntary work assignment of 2 hours per year for the club. Otherwise, a fee of €15 per uncompleted hour will be charged at the end of the year – the amount will be collected or invoiced accordingly.
                </p>
              </div>

              {/* Downloads */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold p-6 h-auto"
                  onClick={() =>
                    window.open(
                      "/downloads/Beitragsordnung-2026.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Fee Regulations 2026 (PDF)
                </Button>
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold p-6 h-auto"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2023/01/Aufnahmeantrag-komplett-ab-2023.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Membership Application (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Existing Members Section */}
          <Card className="border-tennis-yellow/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tennis-black">
                Already a member?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                For questions regarding changes to your membership, fee
                invoices, or updates to your personal data (such as address,
                email, bank details, phone number, etc.), please contact us
                exclusively at:
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-5 w-5 text-tennis-yellow" />
                <a
                  href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                  className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors"
                >
                  mitgliederservice@schwarzgelb-heidelberg.de
                </a>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800 font-semibold">
                  Important: A termination or withdrawal notice must be
                  submitted to the board in writing (letter or email) no later
                  than September 30th of each year.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <a
              href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
              className="inline-block bg-tennis-yellow text-tennis-black px-8 py-4 rounded-full font-bold hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Become a Member Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MitgliedschaftEN;
