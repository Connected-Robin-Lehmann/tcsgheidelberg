
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Calendar, Award, ExternalLink } from 'lucide-react';

const Training = () => {
  const trainingsAngebote = [
    "Einzeltraining",
    "Gruppentraining mit passenden Sparringspartnern",
    "Mannschaftstraining",
    "Camps",
    "Turniere",
    "Intensives Training zur Einzelförderung"
  ];

  const philosophie = [
    "Qualitätsanspruch in allen Trainings",
    "Spaß am Tennissport",
    "Professionalität bei allen Veranstaltungen",
    "Neue Perspektiven aufzeigen",
    "Individuelle Weiterentwicklung"
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
                Professionelles Training
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Training
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trainingsmöglichkeiten für jeden Anspruch - von Anfängern bis zu ambitionierten Leistungssportlern
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8 border-l-4 border-tennis-yellow">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Trainingsmöglichkeiten im Club
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ob Einzeltraining, Gruppentraining mit passenden Sparringspartnern, Mannschaftstraining, 
                    Camps, Turniere oder intensives Training zur Einzelförderung besonders talentierter 
                    Junioren und Juniorinnen – bei uns findet jeder, was er sucht.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    So vertraut unser TC Schwarz-Gelb Heidelberg e.V. seit sehr vielen Jahren im 
                    Trainingsbetrieb auf das Know-How der Tennisschulen Kukaras und Manfred Seibold.
                  </p>
                </div>

                {/* Training Options Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-tennis-black rounded-2xl p-6 text-white">
                    <div className="flex items-center mb-4">
                      <Target className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-yellow">
                        Unser Trainingsangebot
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {trainingsAngebote.map((angebot, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                          <span className="text-sm">{angebot}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-tennis-yellow mr-3" />
                      <h4 className="text-xl font-bold text-tennis-black">
                        Unsere Philosophie
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {philosophie.map((punkt, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-tennis-black rounded-full mr-3"></div>
                          <span className="text-sm text-gray-800">{punkt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white border-2 border-tennis-yellow/20 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Für alle Altersgruppen
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unsere beiden Tennisschulen bieten Kinder- und Jugendtrainings, Erwachsenentrainings 
                    und hier gleichermaßen auch Einzel- und Mannschaftstrainings sowie Lehrgänge und 
                    Camps im In- und Ausland an.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Vom Tennis für Anfänger bis zum ambitionierten leistungsorientierten Tennissport 
                    sind Qualitätsanspruch, Spaß und gleichermaßen Professionalität in allen Trainings 
                    und Veranstaltungen der gemeinsame Nenner.
                  </p>
                </div>

                <div className="bg-tennis-yellow/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Unser Ziel
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Zielsetzung von Verein und Tennisschulen ist es, sowohl jungen, wie auch 
                    erwachsenen SpielerInnen neue Perspektiven aufzuzeigen und sie in Ihrem 
                    individuellen Können weiterzuentwickeln.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tennisschulen Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-tennis-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-tennis-black" />
                </div>
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Tennisschule Kukaras
                </h3>
                <p className="text-gray-700 mb-6">
                  Professionelle Jugend- und Nachwuchsarbeit mit der höchsten DTB A-Lizenz. 
                  Spezialisiert auf die Entwicklung junger Talente.
                </p>
                <a
                  href="/training/tennisschule-pts-kukaras"
                  className="inline-flex items-center bg-tennis-yellow text-tennis-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-yellow/80 transition-colors"
                >
                  Mehr erfahren
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-tennis-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-10 w-10 text-tennis-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Tennisschule Seibold
                </h3>
                <p className="text-gray-700 mb-6">
                  Erfahrener Coach für Neueinsteiger, Hobbyspieler und Senioren. 
                  Fokus auf Breitensport und Vereinsintegration.
                </p>
                <a
                  href="/training/tennisschule-seibold"
                  className="inline-flex items-center bg-tennis-black text-tennis-yellow font-semibold px-6 py-3 rounded-lg hover:bg-tennis-black/80 transition-colors"
                >
                  Mehr erfahren
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-tennis-black mb-4">
              Interesse am Training?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Wenn Sie Interesse oder Fragen haben, nehmen Sie bitte direkt mit unseren 
              Tennisschulen Kontakt auf. Unsere erfahrenen Trainer beraten Sie gerne 
              und finden das passende Training für Ihre Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/training/tennisschule-pts-kukaras"
                className="bg-tennis-yellow text-tennis-black font-semibold px-6 py-3 rounded-lg hover:bg-tennis-yellow/80 transition-colors"
              >
                Zur Tennisschule Kukaras
              </a>
              <a
                href="/training/tennisschule-seibold"
                className="bg-tennis-black text-tennis-yellow font-semibold px-6 py-3 rounded-lg hover:bg-tennis-black/80 transition-colors"
              >
                Zur Tennisschule Seibold
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
