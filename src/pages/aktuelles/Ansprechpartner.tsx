
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Users, Trophy, Heart, Settings, Newspaper } from 'lucide-react';

const Ansprechpartner = () => {
  const contacts = [
    {
      name: "Aleksandar",
      role: "Sport / Trainings / Turniere",
      icon: Trophy,
      description: "Alex ist der richtige Ansprechpartner, wenn es um Anfragen zur Mitgliedschaft, zum Spielen in Mannschaften wie auch um Trainings etc. geht. Auch übergeordnete organisatorische Angelegenheiten des Vereins, wie etwa die Zusammenarbeit mit Schulen und Verbänden wie auch Ausrüstern organisiert Alex.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Frank",
      role: "Sponsoren, Spenden, Finanzen",
      icon: Users,
      description: "Wenn sich Fragen in Bezug auf die aktuelle Mitgliedschaft oder die Beitragsordnung ergeben oder Fragen zur Vereinsverwaltung aufkommen, meldet man sich am besten bei Frank. Das gleiche gilt auch für aktuelle und interessierte Sponsoren unseres Vereins oder für Mitglieder, die sich an unserer Crowdfunding-Initiative beteiligen wollen.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Karo",
      role: "Jugend",
      icon: Heart,
      description: "Wer Fragen rund um unsere Jugendarbeit hat und wissen möchte, welche Mannschaften für den eigenen Nachwuchs zu Beginn oder auch als fortgeschrittener Spieler in Frage kommt, meldet sich einfach bei Karo. Das gleiche gilt auch für entsprechende Mannschaftsmeldungen oder unsere Jugendturniere.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Janusch",
      role: "Platzinstandhaltung",
      icon: Settings,
      description: "Sharif ist der richtige Ansprechpartner, wenn sich Probleme auf unserer Tennisanlage ergeben. Dies betrifft insbesondere Fragen der Bewässerung und Reinigung bzw. Instandhaltung der Tennisplätze. Auch auf die Einrichtungen in unserem Clubhaus und in die Umkleiden hat Sharif ein Auge.",
      image: "/placeholder-person.jpg"
    },
    {
      name: "Sonja",
      role: "Presse",
      icon: Newspaper,
      description: "Natürlich ist unser Traditionsverein medial auf allen Kanälen präsent. Sonja kümmert sich um Pressemeldungen. So bleiben alle Mitglieder, Fans und sonstig Interessierten immer auf dem aktuellen Stand, was neueste Entwicklungen in unserem Verein betrifft.",
      image: "/placeholder-person.jpg"
    }
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
                Ihr direkter Draht
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Ansprechpartner
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompetente Betreuung für alle Ihre Fragen rund um unseren Verein
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  In reizvoller Umgebung und doch sehr zentral liegen unsere gepflegten Tennisplätze 
                  mitten in Heidelberg und stehen nur für unsere Mitglieder zur Verfügung.
                </p>

                <div className="bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4">
                    Interesse am Tennis?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Wer noch kein Tennis spielt, aber daran interessiert ist, es zu lernen, kann ein 
                    kostenloses Schnupper-Trainingsangebot bekommen. Dann ist es einfacher, sich für 
                    eine Mitgliedschaft im TC Schwarz-Gelb-Heidelberg zu entscheiden.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Es gibt für alle Mitglieder die Möglichkeit, an Mannschaftsspielen teilzunehmen. 
                    Für Anfänger besteht aber kein Grund zur Sorge, es ist für jede Leistungsklasse 
                    etwas dabei!
                  </p>
                </div>

                <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                    Für unsere Mitglieder
                  </h3>
                  <div className="flex items-center mb-4">
                    <Mail className="h-5 w-5 text-tennis-yellow mr-3" />
                    <span className="font-semibold">mitgliederservice@schwarzgelb-heidelberg.de</span>
                  </div>
                  <p className="leading-relaxed">
                    Fragen zur Änderung der Mitgliedschaft, zu Beitragsrechnungen und zu Änderungen 
                    der Stammdaten (etwa Adresse, Email, Bankverbindung, Telefonnummer etc.) teilen 
                    Sie uns bitte ausschließlich unter dieser E-Mail-Adresse mit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Persons */}
          <div className="grid gap-8">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-tennis-yellow/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/4 bg-gradient-to-br from-tennis-yellow to-tennis-yellow/80 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-tennis-black rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-10 w-10 text-tennis-yellow" />
                      </div>
                      <h3 className="text-2xl font-bold text-tennis-black mb-2">
                        {contact.name}
                      </h3>
                      <p className="text-tennis-black font-semibold text-sm">
                        {contact.role}
                      </p>
                    </div>
                    <div className="md:w-3/4 p-8">
                      <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-tennis-yellow/10 to-tennis-yellow/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-tennis-black mb-4">
              Bereit für den Einstieg?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Also, was hindert jetzt noch, einfach Mitglied zu werden und loszulegen? Einfach noch 
              eine Freundin oder einen Freund oder gar die ganze Familie überzeugen, das macht ein 
              Eingewöhnen vielleicht noch leichter.
            </p>
            <p className="text-gray-700 font-medium">
              Vereinbaren Sie einen Termin mit einem der Ansprechpartner, schauen Sie einfach mal 
              unverbindlich vorbei und sehen sich alles an. Die Ansprechpartner stehen natürlich 
              auch während der Mitgliedschaft bei Fragen aller Art zur Verfügung.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ansprechpartner;
