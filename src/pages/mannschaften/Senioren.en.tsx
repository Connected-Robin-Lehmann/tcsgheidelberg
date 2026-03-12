import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Users, Trophy, Star } from "lucide-react";

const SeniorenEN = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Senior Teams
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Experience, passion and team spirit – tennis knows no age
          </p>
        </div>
      </section>

      <main className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Damen 60 Feature Article */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Star className="w-6 h-6 text-tennis-black" />
              </div>
              <span className="bg-tennis-yellow text-tennis-black px-3 py-1 rounded-full text-sm font-bold">
                NEW 2026
              </span>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Premiere with Power: The New Ladies 60 of TC Schwarz-Gelb Heidelberg
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                With the start of the 2026 season, a new team takes the stage at 
                TC Schwarz-Gelb Heidelberg – and they bring plenty of experience, joy of playing 
                and team spirit: Our Ladies 60 team celebrates its premiere in competitive play!
              </p>
              
              <p>
                What started as a loose idea has now become a real team with clear goals. 
                Players who have been loyal to our club for years – some for decades – 
                have come together to officially show their passion for tennis in the 
                Meden league again. The step to their own Ladies 60 team was only logical.
              </p>
              
              <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-tennis-black mb-3">
                  Experience Meets Enthusiasm
                </h3>
                <p>
                  The new team combines everything that makes successful team tennis: 
                  routine from countless matches, tactical understanding, mental strength – and above 
                  all a great desire to compete. Many of the players have already played in women's 
                  or age group teams in previous years or are still active. Now they bring their 
                  skills and composure to the court together.
                </p>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Strong Community On and Off the Court
                </h3>
                <p>
                  It's not just about points and league positions – equally important are the 
                  cohesion and joy of playing together on match days.
                </p>
              </div>
              
              <p>
                The club is very pleased about this new team and wishes the Ladies 60 much success 
                for their first season, injury-free matches and above all many wonderful moments 
                together on the court.
              </p>
              
              <p className="text-xl font-bold text-tennis-black text-center py-4">
                Welcome to the Meden League 2026 – Ladies 60! 🎾
              </p>
            </div>
          </Card>

          {/* Contact Person */}
          <Card className="p-8 border-tennis-yellow border-2 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-tennis-yellow rounded-full">
                <Users className="w-6 h-6 text-tennis-black" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Contact Person</h2>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              The contact person for all senior teams is also Katharina Kukaras (<a href="mailto:katharina.kukaras@schwarzgelb-heidelberg.de" className="text-tennis-yellow hover:underline font-semibold">katharina.kukaras@schwarzgelb-heidelberg.de</a>).
            </p>
          </Card>

          {/* nuLiga Link */}
          <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              All Senior Teams
            </h3>
            <p className="text-white mb-6">
              Find the members and results of our senior teams on the 
              Baden Tennis Association website:
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

export default SeniorenEN;
