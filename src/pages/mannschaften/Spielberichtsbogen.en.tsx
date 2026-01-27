import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official forms for your team matches
            </p>
          </div>

          {/* Placeholder */}
          <div className="bg-tennis-yellow/10 rounded-3xl p-12 text-center border-2 border-tennis-yellow/30">
            <FileText className="h-16 w-16 text-tennis-yellow mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-tennis-black mb-4">
              Page Under Construction
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              This page is currently being updated. Please check back later.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpielberichtsbogenEN;
