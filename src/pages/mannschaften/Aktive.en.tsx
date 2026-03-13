import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Target } from "lucide-react";

const AktiveEN = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Adult Teams
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Our women's and men's teams in competitive play
          </p>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Women's Section */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Target className="w-6 h-6 text-tennis-black" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Women's Teams
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                Our flagship team: <strong>Women 1</strong> currently plays in the 
                <strong> 2nd Bundesliga</strong> and has worked their way up through 
                the Badenliga and Regionalliga into the professional ranks.
              </p>
              <p>
                In addition, we have more women's teams in various divisions 
                who embody team sports at Schwarz-Gelb.
              </p>
            </div>
          </Card>

          {/* Men's Section */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Users className="w-6 h-6 text-tennis-black" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Men's Teams
              </h2>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                Our men's teams are represented in various divisions and offer 
                the right challenge for every player – from ambitious competitive 
                tennis to social team play.
              </p>
            </div>
          </Card>

          {/* Contact Person */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                The contact person for all adult teams is Katharina Kukaras (<a href="mailto:katharina.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-yellow hover:underline font-semibold">katharina.kukaras@schwarzgelb-heidelberg.de</a>).
              </p>
            </div>
          </Card>

          {/* nuLiga Link */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              All Adult Teams
            </h3>
            <p className="text-white mb-6">
              Find the members and results of our women's and men's teams 
              on the Baden Tennis Association website:
            </p>
            <a
              href="https://baden.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubTeams?club=33129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              nuLiga TC Schwarz-Gelb Heidelberg
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AktiveEN;
