import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Scale, FileText, Calendar } from "lucide-react";

const SatzungEN = () => {
  const satzungPoints = [
    {
      title: "Purpose of the Club",
      description: "Promotion of tennis as a sport with joy and fun",
    },
    {
      title: "Organization",
      description: "Structure of the club and its committees",
    },
    {
      title: "Board Work",
      description: "Tools and principles for club leadership",
    },
    {
      title: "Membership",
      description: "Rights and duties of all members",
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
                Register of Associations Mannheim
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Our Statutes
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The constitution of our club – goals, purpose and organization
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Scale className="h-8 w-8 text-tennis-yellow mr-4" />
                <h2 className="text-3xl font-bold text-tennis-black">
                  The Constitution of Our Club
                </h2>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We already share a common goal: the promotion of tennis as a
                  sport, combined with joy and fun while practicing it. This
                  purpose has been laid down in our club statutes.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Our club, registered as an e.V. in the register of
                  associations in Mannheim, also requires written statutes.
                  These statutes represent the club’s constitution and are
                  essentially our “basic law”, reflecting the club’s goals,
                  purpose, organization of club activities and committees, and
                  more. The statutes define in particular the structure of the
                  club and serve as the essential toolkit for our board in
                  leading the club.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {satzungPoints.map((point, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <FileText className="h-6 w-6 text-tennis-yellow mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-tennis-black mb-2">
                            {point.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Living Document */}
              <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  A Living Document
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our statutes are not a static document valid for all time.
                  Just as our club evolves and changes, our statutes must also
                  be adjusted and updated over the years.
                </p>
              </div>

              {/* Current Version */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-tennis-yellow mr-3" />
                  <h3 className="text-2xl font-bold text-tennis-yellow">
                    Current Version
                  </h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p>
                    At the general assembly on <strong>October 19, 2025</strong>,
                    a new version of the statutes was adopted.
                  </p>
                  <p>The currently valid version is available for download.</p>
                </div>
                <div className="text-center">
                  <Button
                    className="bg-tennis-yellow text-tennis-black hover:bg-tennis-yellow/90 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "/downloads/Satzung_TC_Schwarz-Gelb_Heidelberg_e.V._Fassung_vom_19.10.2025.pdf",
                        "_blank"
                      )
                    }
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Statutes (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <Card className="border-tennis-yellow/20 bg-gray-50">
            <CardContent className="p-8">
              <div className="text-center">
                <Scale className="h-12 w-12 text-tennis-yellow mx-auto mb-4" />
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Legal Basis
                </h3>
                <p className="text-gray-700">
                  As a registered club (e.V.) in the Register of Associations in
                  Mannheim, we are subject to the legal provisions of the German
                  Civil Code (BGB) and are obligated to maintain statutes. These
                  regulate all essential aspects of our club life in a
                  transparent and legally binding manner.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SatzungEN;
