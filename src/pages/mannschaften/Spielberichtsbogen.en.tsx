import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpielberichtsbogenEN = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Team Sports
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Match Report Form
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download the match report form template here.
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center max-w-xl mx-auto">
            <FileText className="h-16 w-16 text-tennis-yellow mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-tennis-black mb-4">
              Match Report Template
            </h2>
            <p className="text-gray-600 mb-8">
              PDF template for printing and filling out by team captains.
            </p>
            <a href="/downloads/Spielbericht-Vorlage.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="bg-tennis-yellow hover:bg-tennis-yellow/90 text-tennis-black font-bold px-8 py-3 text-lg">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpielberichtsbogenEN;
