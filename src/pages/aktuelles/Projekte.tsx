
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Clock, Wrench } from 'lucide-react';

const Projekte = () => {
  const projects = [
    { name: "Digitale Platzreservierung", status: "completed" },
    { name: "Flutlichtbeleuchtung", status: "completed" },
    { name: "Sanierung BERK-Tribüne", status: "completed" },
    { name: "Sanierung Elektrik Clubhaus", status: "in-progress" },
    { name: "Sanierung Gastronomieeinrichtung", status: "completed" },
    { name: "Sitzbereich Jugendplätze", status: "completed" },
    { name: "Sanierung Ballwand-Areal", status: "in-progress" },
    { name: "Sanierung Gehweg", status: "in-progress" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Wrench className="h-5 w-5 text-tennis-yellow" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Abgeschlossen';
      case 'in-progress':
        return 'In Arbeit / Planung';
      default:
        return 'Geplant';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Innovation & Infrastruktur
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Projekte
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative Maßnahmen und infrastrukturelle Großprojekte für die Zukunft unseres Vereins
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Innovative Maßnahmen und infrastrukturelle Großprojekte, die nur mittelbar den Tennissport 
                  direkt betreffen, stellen heute ganz neue Anforderungen an einen Tennisverein wie unseren 
                  TC Schwarz-Gelb Heidelberg e.V.. Auch hier gilt grundsätzlich hohe Seriosität und Qualität 
                  bei der Umsetzung neuer Ideen und Projekte in unserem Verein.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  An dieser Stelle möchten wir deshalb über anstehende Großprojekte und Vorhaben informieren 
                  und eine Plattform bieten, alle Mitglieder schon frühzeitig von der ersten Idee bis hin zur 
                  Konzeption und Umsetzung eines zukünftigen Projektes strukturiert mit relevanten Informationen 
                  zu versorgen.
                </p>

                {/* Projects Overview */}
                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-6">
                    Projektübersicht 2024/2025
                  </h3>
                  
                  <div className="grid gap-4">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white rounded-xl border-l-4 border-tennis-yellow hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(project.status)}
                          <span className="font-medium text-gray-800">{project.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === 'completed'
                              ? 'bg-green-100 text-green-800'
                              : project.status === 'in-progress'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {getStatusText(project.status)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-tennis-black rounded-xl p-6 text-center text-white">
                    <div className="text-3xl font-bold text-tennis-yellow mb-2">6</div>
                    <div className="text-sm font-medium">Abgeschlossene Projekte</div>
                  </div>
                  <div className="bg-tennis-yellow rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-tennis-black mb-2">3</div>
                    <div className="text-sm font-medium text-tennis-black">Laufende Projekte</div>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">2024</div>
                    <div className="text-sm font-medium text-gray-600">Aktuelle Projektphase</div>
                  </div>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    Qualität und Seriosität
                  </h3>
                  <p className="leading-relaxed">
                    Jedes unserer Projekte wird mit höchster Sorgfalt geplant und umgesetzt. Dabei stehen 
                    die Bedürfnisse unserer Mitglieder und die langfristige Entwicklung des Vereins im 
                    Mittelpunkt. Transparenz und regelmäßige Information über den Fortschritt sind uns 
                    dabei besonders wichtig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projekte;
