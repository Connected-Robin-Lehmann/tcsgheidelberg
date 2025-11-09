import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SponsorsSection from "@/components/SponsorsSection";
import { Heart, Award, Users, Download } from "lucide-react";

const SponsoringDE = () => {
  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-tennis-yellow" />,
      title: "Attraktive Werbeflächen",
      description:
        "Rund um den Tennisplatz, auf unserer Homepage oder auf Flyern zu verschiedenen Veranstaltungen",
    },
    {
      icon: <Users className="h-8 w-8 text-tennis-yellow" />,
      title: "Große Reichweite",
      description:
        "Durch unsere Turniere erreichen Sie Tennisbegeisterte aus der ganzen Region Heidelberg",
    },
    {
      icon: <Heart className="h-8 w-8 text-tennis-yellow" />,
      title: "Jugendförderung",
      description:
        "Unterstützen Sie direkt die Talententwicklung und Nachwuchsarbeit in unserem Verein",
    },
  ];

  const projects = [
    "Weitere Tennishalle",
    "Sanierung der Elektrik des Clubhauses",
    "Holzhaus mit Sitzbänken und Tischen hinter Platz 4",
    "Lagerhaus für Arbeitsgeräte und Wintereinlagerung hinter Platz 3",
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
                Partnerschaften & Unterstützung
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Sponsoring und Spenden
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Werden Sie Teil unserer Tennisfamilie und unterstützen Sie den
              traditionsreichsten Tennisclub Heidelbergs
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 leading-relaxed mb-8">
                  Natürlich ist auch in unserem Verein das Sponsoring neben den
                  Mitgliedsbeiträgen ein wesentlicher wichtiger Bestandteil der
                  soliden Vereinsfinanzierung. Die von uns angestrebte
                  langfristige Bindung soll und muss natürlich für beide Seiten
                  eine Bereicherung sein. Unser Sponsoring-Konzept bietet
                  deshalb interessierten Unternehmen und sonstig
                  Tennis-Begeisterten die Gelegenheit, unsere sehr schön
                  gelegene Tennisanlage als attraktive Kulisse für sich bzw. für
                  ihr Unternehmen zu nutzen.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Es ist zudem eine wunderbare Chance, Dienstleistungen oder
                  Produkte anzubieten, ganz einfach Kontakte zu knüpfen und zu
                  pflegen oder nur Ihr Unternehmen zentral in Heidelberg positiv
                  zu präsentieren. Unsere Werbeflächen bieten Ihnen sehr
                  verschiedene unterschiedliche Werbeplattformen, wie z.B. rund
                  um den Tennisplatz, auf unserer Homepage oder auf unseren
                  Flyern zu verschiedenen Veranstaltungen, die bewusst
                  wahrgenommen werden und folglich Ihre Sichtbarkeit erhöhen.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-tennis-black mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-4">
                  Große Turniere - Große Reichweite
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Da wir als TC Schwarz-Gelb Heidelberg einige der größten
                  Tennis-Turniere im ganzen Bezirk des Badischen Tennisverbandes
                  ausrichten, sind diese Werbeflächen eine begehrte und reelle
                  Möglichkeit, den Bekanntheitsgrad Ihres Unternehmens in der
                  Stadt Heidelberg und der Region zu steigern.
                </p>
              </div>
            </div>
          </div>

          {/* Youth Support Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-6">
                Jugendförderung unterstützen
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Sie können uns als Sponsor oder mit einer Spende auch konkret
                unterstützen, die vielfältige Jugend- und Mannschaftsarbeit des
                TC Schwarz-Gelb-Heidelberg e.V. weiterzuentwickeln und unsere
                Jugendarbeit langfristig finanziell abzusichern. Als Sponsor
                oder auch mit einer Spende tragen Sie nicht nur zu einer
                exzellenten Kinder- und Jugendarbeit bei, sondern Sie helfen
                damit auch direkt jugendlichen Talenten.
              </p>

              <div className="bg-tennis-black rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold text-tennis-yellow mb-4">
                  Großprojekte, die Ihre Unterstützung brauchen:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                      <span>{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="bg-gradient-to-r from-tennis-yellow/20 to-tennis-yellow/10 rounded-2xl p-8 mb-16 text-center">
            <Download className="h-8 w-8 text-tennis-black mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-black mb-4">
              Sponsoring-Konzept
            </h3>
            <p className="text-gray-700 mb-6">
              Gerne senden wir Ihnen auf Anfrage unser Sponsoring-Konzept zu.
              Darin erhalten Sie einen Überblick über alle
              Sponsoring-Möglichkeiten und das dafür vorgesehene Engagement.
            </p>
            <a
              href="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2021/02/Foerderverein-TC-Schwarz-Gelb-Sponsoring-Optionen-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tennis-black text-tennis-yellow px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Sponsoring-Optionen (PDF)
            </a>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-tennis-black mb-4">
                Interesse an einer Partnerschaft?
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Für Sponsoring-Anfragen und Spendenideen bzw. weitere Anregungen
                steht Ihnen unser Vorstand jederzeit zur Verfügung.
              </p>
              <a
                href="mailto:vorstand@schwarzgelb-heidelberg.de"
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>

          {/* Thank You Section */}
          <div className="bg-tennis-black rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Herzlichen Dank!
            </h3>
            <p className="text-white leading-relaxed">
              Im Namen des Tennisclubs Schwarz-Gelb Heidelberg e.V. danken wir
              unseren untenstehenden Sponsoren und Gönnern ganz herzlich für
              Ihre bisher geleistete Unterstützung. Ihr Engagement fördert und
              steigert die Attraktivität unseres Clubs, der Tennisanlage sowie
              des Vereins insgesamt.
            </p>
          </div>
        </div>

        {/* Sponsors Section */}
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default SponsoringDE;
