import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SeniorenDE = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Senioren-Mannschaften
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Erfahrung, Leidenschaft und Teamgeist – Tennis kennt kein Alter
          </p>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* nuLiga Link */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Alle Senioren-Mannschaften
            </h3>
            <p className="text-white mb-6">
              Die Mitglieder und Ergebnisse unserer Senioren-Mannschaften finden Sie
              auf der Seite des Badischen Tennisverbandes:
            </p>
            <a
              href="https://baden.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=33129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              nuLiga TC Schwarz-Gelb Heidelberg
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-xl font-bold text-white">
                Ansprechpartnerin für alle Senioren-Mannschaften: <a href="mailto:katharina.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-yellow hover:underline">Katharina Kukaras</a>
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeniorenDE;
