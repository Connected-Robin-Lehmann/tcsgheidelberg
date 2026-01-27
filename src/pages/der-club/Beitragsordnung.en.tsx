import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Euro, AlertTriangle, Mail } from "lucide-react";

const BeitragsordnungEN = () => {
  const membershipFees = [
    { type: "Couple / Partnership (2 adults at same address)", annual: "632 €", halfYear: "435 €" },
    { type: "Individual adult member over 18 years", annual: "406 €", halfYear: "265 €" },
    { type: "Individual adult in education 18-25 years (proof required)", annual: "197 €", halfYear: "135 €" },
    { type: "Individual child under 14 years", annual: "155 €", halfYear: "110 €" },
    { type: "Individual youth 14-18 years", annual: "167 €", halfYear: "115 €" },
    { type: "Training membership (training only, no court booking rights)", annual: "135 €", halfYear: "135 €" },
    { type: "Supporting member (passive membership without training/playing rights)", annual: "75 €", halfYear: "75 €" },
  ];

  const childrenSurcharges = [
    { type: "Surcharge for 1st child up to 18 years", annual: "48 €", halfYear: "35 €" },
    { type: "Surcharge for 2nd child up to 18 years", annual: "24 €", halfYear: "15 €" },
    { type: "Surcharge from 3rd child up to 18 years", annual: "0 €", halfYear: "0 €" },
    { type: "Surcharge for 1st adult child 18-25 years in education (proof required)", annual: "95 €", halfYear: "70 €" },
    { type: "Surcharge for 2nd adult child in education (proof required)", annual: "48 €", halfYear: "35 €" },
    { type: "Surcharge from 3rd adult child 18-25 years in education (proof required)", annual: "0 €", halfYear: "0 €" },
  ];

  const admissionFees = [
    { type: "Application for active membership, over 25 years", fee: "100 €" },
    { type: "Application for active membership, under 25 years", fee: "50 €" },
    { type: "Application or change to supporting membership", fee: "0 €" },
    { type: "Readmission (after leaving)", fee: "100 €" },
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
                Valid from 01.01.2026
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
                  Membership Fees TC Schwarz-Gelb Heidelberg e.V.
                </h2>
              </div>

              {/* Membership Fees Table */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-tennis-black mb-4 flex items-center">
                  <span className="bg-tennis-yellow text-tennis-black px-3 py-1 rounded-full text-sm mr-3">Base Fee</span>
                  Membership Fees
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Membership Type</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Annual Fee</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Entry after July 15</th>
                      </tr>
                    </thead>
                    <tbody>
                      {membershipFees.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 text-gray-700">{item.type}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.annual}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.halfYear}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Children Surcharges */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-tennis-black mb-4">
                  Children Surcharges to the Base Fee for Adults, Couples and Partnerships
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Surcharge</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Annual Fee</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Entry after July 15</th>
                      </tr>
                    </thead>
                    <tbody>
                      {childrenSurcharges.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 text-gray-700">{item.type}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.annual}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.halfYear}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Admission Fees */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-tennis-black mb-4 flex items-center">
                  <span className="bg-tennis-black text-tennis-yellow px-3 py-1 rounded-full text-sm mr-3">One-time</span>
                  Admission Fee for Joining TC Schwarz-Gelb Heidelberg e.V.
                </h3>
                <p className="text-gray-600 mb-4 text-sm">Fee per application, regardless of number of persons</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-tennis-yellow">
                        <th className="text-left p-4 font-bold text-tennis-black">Application Type</th>
                        <th className="text-right p-4 font-bold text-tennis-black">Independent of Entry Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admissionFees.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 text-gray-700">{item.type}</td>
                          <td className="p-4 text-right font-semibold text-tennis-black">{item.fee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footnotes */}
              <div className="bg-gray-100 rounded-xl p-6 mb-8 text-sm text-gray-600">
                <p className="mb-2">1) The listed prices apply for one calendar year and payment via SEPA direct debit</p>
                <p className="mb-2">2) For payments without SEPA direct debit, an additional processing fee of €25 will be charged each year</p>
                <p>3) Work assignment: Members aged 16-65, 2 hours/year. If not completed, €15/hour will be charged at the end of the calendar year</p>
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
                        We do not offer "trial" or "introductory" memberships.
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
