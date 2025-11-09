import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Crowdfunding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[50vh] bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Crowdfunding</h1>
          <p className="mt-4 text-gray-600">
            Placeholder for Crowdfunding Site
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Crowdfunding;
