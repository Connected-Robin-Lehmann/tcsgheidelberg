import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Euro, Users, AlertTriangle, Mail } from "lucide-react";

const BeitragsordnungEN = () => {
  const membershipTypes = [
    { type: "Adults (25–65 years)", rate: "Regular fee" },
    { type: "Families", rate: "Reduced rate" },
    { type: "Youth (up to 18 years)", rate: "Reduced rate" },
    { type: "Students", rate: "Reduced rate" },
    { type: "Seniors (65 years and above)", rate: "Special rate" },
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
                Transparent Prices
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Fee Regulations
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All details about our membership fees at a glance
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <Euro className="h-8 w-8 text-tennis-yellow mr-4" />
                <h2 className="text-3xl font-bold text-tennis-black">
                  Our Fee Structure
                </h2>
              </div>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here you will find all details about our fees. Families,
                  youth, and students benefit from reduced rates. If you join
                  after July 15, you will also receive reduced fees for the
                  remainder of the first year of membership.
                </p>

                <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    New Fee Regulations from 2021
                  </h3>
                  <p className="text-gray-700">
                    New fee regulations have applied since 2021. These were
                    approved by the general assembly on October 11, 2020. The
                    table below reflects the fees valid as of January 1, 2021.
                  </p>
                </div>
              </div>

              {/* Membership Types */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {membershipTypes.map((membership, index) => (
                  <Card key={index} className="border-tennis-yellow/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-tennis-black">
                            {membership.type}
                          </h4>
                          <p className="text-gray-600">{membership.rate}</p>
                        </div>
                        <Users className="h-6 w-6 text-tennis-yellow" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Important Notes */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-400">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-red-800 mb-2">
                        Important Notice
                      </h4>
                      <p className="text-red-700 text-sm">
                        We do not offer “trial” or “introductory” memberships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start">
                    <Download className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800 mb-2">
                        Membership Application
                      </h4>
                      <p className="text-green-700 text-sm">
                        The current valid version of the membership application
                        is available for download.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Payment Modalities
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We recommend granting a SEPA direct debit mandate.
                    Otherwise, an additional <strong>EUR 25</strong> processing
                    fee will be charged for manual transfers in accordance with
                    the fee regulations.
                  </p>
                  <p className="font-semibold">
                    All fees must always be paid in full. No exceptions or other
                    discounts outside the official fee regulations will be
                    granted.
                  </p>
                </div>
              </div>

              {/* Infrastructure Fee */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Infrastructure Fee
                </h3>
                <div className="space-y-4">
                  <p>
                    In 2022, a one-time <strong>EUR 20</strong> fee will be
                    charged per active adult member (ages 25–65) as an
                    infrastructure fee (according to the resolution of the
                    general assembly on October 11, 2020).
                  </p>
                  <p>
                    For all subsequent years (2023 onward), the general assembly
                    (specifically the meeting in the previous year) will decide
                    based on a submitted proposal whether an infrastructure fee
                    will be charged for the following year, and if so, the exact
                    amount.
                  </p>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center mb-8">
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-8 py-4 text-lg"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2021/01/Beitragsordnung-ab-2021-komplett.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Fee Regulations (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Existing Members */}
          <Card className="border-tennis-yellow/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tennis-black flex items-center">
                <Mail className="h-6 w-6 text-tennis-yellow mr-3" />
                Already a Member?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                For questions concerning changes to your membership, fee
                invoices, or updates to your personal data (e.g., address,
                email, bank details, phone number, etc.), please contact us only
                at:
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-5 w-5 text-tennis-yellow" />
                <a
                  href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                  className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors text-lg"
                >
                  mitgliederservice@schwarzgelb-heidelberg.de
                </a>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">
                      Important Termination Deadline
                    </h4>
                    <p className="text-red-700">
                      A termination or withdrawal notice must be submitted to
                      the board in writing (letter or email) no later than
                      <strong> September 30 of each year</strong>. Tolerance for
                      delays (e.g., postal delays) cannot be granted for reasons
                      of equal treatment.
                    </p>
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

export default BeitragsordnungEN;
