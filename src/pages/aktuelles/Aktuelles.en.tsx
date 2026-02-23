import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AktuellesEN = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News 2025</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay up to date with all important dates and news from our club
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Events Link */}
          <section className="mb-12">
            <div className="text-center">
              <Link
                to="/aktuelles/veranstaltungen"
                className="btn-hero inline-flex items-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                All Events
              </Link>
            </div>
          </section>

          {/* News Sections */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Scheine für Vereine */}
            <Card className="card-tennis">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-tennis-yellow rounded-full flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-tennis-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-tennis-black">
                    Vouchers for Clubs 2025
                  </h3>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Thanks to your help, we collected
                  <span className="font-bold text-tennis-black">
                    {" "}
                    1,679 vouchers{" "}
                  </span>
                  through the 'Vouchers for Clubs' collection campaign and were
                  able to redeem them for
                  <span className="font-bold text-tennis-black">
                    {" "}
                    eight new scoreboards{" "}
                  </span>
                  – a big thank you to everyone who diligently collected!
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/aktuelles/ScheineFuerVereineAktion.jpg"
                    alt="Vouchers for Clubs Campaign"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/images/aktuelles/ScheineFuerVereine2025.jpg"
                    alt="Vouchers for Clubs 2025"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <div className="space-y-6">
              {/* Nachrichten */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    News
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Reports from tournaments, matches and other news from club
                    life. Browse our news collection by month and category.
                  </p>
                  <Link to="/aktuelles/nachrichten">
                    <Button
                      variant="outline"
                      className="btn-hero-outline w-full"
                    >
                      View News
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Crowdfunding */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    Crowdfunding Initiative
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    In crowdfunding, one or more individuals finance a project
                    for a good cause with small or larger individual amounts. We
                    have adopted this idea in our club to improve and enhance
                    our tennis infrastructure.
                  </p>
                  <Link to="/aktuelles/projekte">
                    <Button variant="outline" className="btn-hero-outline w-full">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </Card>

              {/* Großprojekte */}
              <Card className="card-tennis border-l-4 border-l-blue-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    Major Projects & Club Initiatives
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Innovative and infrastructural major projects that only
                    indirectly relate to tennis pose many requirements for our
                    TC Schwarz-Gelb Heidelberg e.V.
                  </p>
                  <Button variant="outline" className="btn-hero-outline w-full">
                    View Club Initiatives
                  </Button>
                </div>
              </Card>

              {/* Newsletter */}
              <Card className="card-tennis border-l-4 border-l-green-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tennis-black mb-3">
                    Tie-Break(ing)News
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    News about sports, planned events and new developments and
                    plans in and around the club are shared by the board in our
                    newsletter.
                  </p>
                  <Link to="/aktuelles/tiebreaking-news">
                    <Button variant="outline" className="btn-hero-outline w-full">
                      Read Newsletter
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AktuellesEN;
