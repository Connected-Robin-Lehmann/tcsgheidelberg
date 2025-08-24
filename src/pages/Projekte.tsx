
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projekte = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-[50vh] bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Projekte</h1>
          <p className="mt-4 text-gray-600">Placeholder für Projekte Seite</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projekte;
