import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const VorstandDE = () => {
  const boardMembers = [
    {
      name: "Aleksandar Kukaras",
      position: "1. Vorsitzender",
      email: "aleksandar.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Bild1-e1741965335756.png",
      description: "Alex ist das Gesicht unseres Traditionsvereins. Er verantwortet die Vereinsleitung, dessen Gesamtkoordination und repräsentiert unseren Club nach außen wie nach innen. Er organisiert Vorstandssitzungen und Mitgliederversammlungen, steht in regelmäßigem Kontakt zu Verbänden und ist auch intensiv in die Trainings-, Turnier- und Jugendarbeit involviert."
    },
    {
      name: "Dr. Frank Schöneborn",
      position: "2. Vorsitzender / Finanzen",
      email: "frank.schoeneborn@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Dr-Frank-Schöneborn.jpg",
      description: "Frank ist für die Finanzen, die Mitgliederverwaltung und die allgemeine Administration in unserem Verein verantwortlich. Ohne ihn geht finanziell nichts, denn zu seinem Ressort zählen die Vermögensverwaltung, die Buchführung, die Jahresbilanz, der Haushaltsplan, die Steuererklärung und Versicherungen, ferner auch das Einziehen der Mitgliederbeiträge und die Erstellung der Spendenbescheinigungen."
    },
    {
      name: "Marvin Tawasi",
      position: "Sportwart Herren (Aktive)",
      email: "marvin.tawasi@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/08/Marvin-Tawasi-2020-e1742127517989.jpg",
      description: "Marvin ist unser Sportwart Aktive und zudem B-Lizenz-Trainer (Tennis Akademie Alex Kukaras). Er kümmert sich im Erwachsenen-Sportbetrieb (Mannschaftssport) insbesondere um die Mannschaftsmeldungen der aktiven Herrenmannschaften bei den Medenrunden sowie den reibungslosen Ablauf der einzelnen Begegnungen und ist damit wichtiges Bindeglied zwischen dem Vorstand und unseren Herren-Mannschaften."
    },
    {
      name: "Marc Homsy",
      position: "Sportwart Senioren",
      email: "marc.homsy@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Marc-Homsy.jpg",
      description: "Marc ist Sportwart für die Senioren-Mannschaften und kümmert sich im Sportbetrieb um die Meldungen der derzeit 6 Mannschaften (D40.1, H50.1, D50.1, H40, D40.2 und H55.1) bei den Medenrunden, den reibungslosen Ablauf der einzelnen Begegnungen und fungiert als deren Interessenvertretung im Vorstand."
    },
    {
      name: "Karolin Kukaras",
      position: "Jugendwart",
      email: "karolin.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Karolin-Kukaras.jpg",
      description: "Karo hat als Jugendwart den besten Draht zu unserem Nachwuchs. Sie ist für alle Vereinsmitglieder bis 18 Jahre zuständig. Sie hilft bei der Planung der Jugendtrainings und organisiert Jugendturniere. Zu ihren weiteren Aufgaben zählen die Talentförderung, das Gewinnen von Kids und Jugendlichen für den Verein und das Vertreten deren Interessen im Vorstand."
    },
    {
      name: "Tanya Thouw",
      position: "Schriftführerin",
      email: "tanya.thouw@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Tanya-e1742127659488.jpg",
      description: "Tanya ist unsere Protokollantin und eine große Stütze für die allgemeine Vorstandsarbeit."
    },
    {
      name: "Manfred Seibold",
      position: "Platzreferent", 
      email: "manfred.seibold@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Manfred-Seibold.jpg",
      description: "Manfred ist verantwortlich für alles, was mit unserer Tennisanlage zu tun hat. Er arbeitet in vielen Fällen Hand in Hand mit unserem Platzwart Sharif. Sein Ziel ist es, unsere Vereinsanlage im bestmöglichen Zustand zu halten und sie nach Möglichkeit noch zu verbessern. Alle anfallenden Reparaturen obliegen daher seiner Obhut."
    },
    {
      name: "Terezie Zuna-Homsy",
      position: "Vergnügungswart",
      email: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Terezie-e1741973196281.jpg",
      description: "Terezie ist unsere Vergnügungswartin, doch hinter ihr steckt ein ganzes Team, das sich gemeinsam um den gesellige Teil im Vereinsleben kümmert und immer wieder tolle Ideen für gemeinsame Veranstaltungen hat. So ist u.a. eine 80er/90er-Jahre-Party geplant, ebenso wie eine Nuit Blanche neben dem bereits traditionellen Blümchenturnier und dem Doppel-Turnier zum Saison-Abschluss. Wir dürfen gespannt bleiben."
    },
    {
      name: "Katharina Kukaras",
      position: "Beisitzerin Damensport",
      email: "kati.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/IMG_3690-e1741973256127.jpg",
      description: "Kati ist nur in der offiziellen Vorstandsbetitelung 'Beisitzerin' – sie ist de Facto Sportwartin für die aktiven Damenmannschaften, spielt in der 1. Damenmannschaft und ist B-Lizenz-Trainerin (Tennis Akademie Alex Kukaras). Sie sich um die Mannschaftsmeldungen der aktiven Damenmannschaften bei den Medenrunden sowie den reibungslosen Ablauf der einzelnen Begegnungen und ist damit ebenso wichtiges Bindeglied zwischen dem Vorstand und den Damenmannschaften."
    },
    {
      name: "Sonja Althoff",
      position: "Beisitzerin Presse",
      email: "sonja.althoff@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Sonja_6-e1741973362391.jpg",
      description: "Sonja unterstützt als Beisitzerin Presse den Verein."
    },
    {
      name: "Britta Müller", 
      position: "Beisitzerin Medien",
      email: "britta.mueller@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/20240713_201252-scaled-e1741973410235.jpg",
      description: "Britta unterstützt als Beisitzer den Verein beim Aktualisieren der Homepage und bei der Erstellung der TennisInfo."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-tennis-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-tennis-yellow">
            Vorstand
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Das Führungsteam des TC Schwarz-Gelb Heidelberg e.V.
          </p>
        </div>
      </section>

      {/* Board Photo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Vorstand2023-e1741964818524.jpg"
              alt="Vorstand 2023"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-tennis-black mb-8 text-center">
              Unser neuer Vorstand - hier gleich nach der Wahl am 24.09.2023
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Wer sich für ein Ehrenamt im Sport - so auch im Tennisverein - entscheidet, möchte die Ziele des Vereins neu definieren und sie im Sinne der Vereinsmitglieder erfolgreich umsetzen. Dies erfordert vor allem auch ein hohes Maß an Engagement aller Vorstandsmitglieder.
              </p>
              
              <p>
                Der aktuelle Vorstand unseres Tennis-Vereins wurde gemäß unserer Satzung in der Mitgliederversammlung am 24.09.2023 für zwei Jahre wiedergewählt und widmet sich weiterhin mit großer Energie der kontinuierlichen Erneuerung, Modernisierung und weiteren Verbesserung unseres geschichtsträchtigen Traditionsvereins TC Schwarz-Gelb Heidelberg e.V. mitten in unserer schönen und weltbekannten Stadt.
              </p>
              
              <p>
                Wir als Vorstand freuen uns über jeden, der unseren Club ebenfalls mitgestalten möchte. Gern können deshalb auch eigene Projekte vorgeschlagen werden, die dann auch gemeinsam umgesetzt werden können. Mitglieder und Interessierte können uns gern jederzeit ansprechen oder anschreiben unter{' '}
                <a 
                  href="mailto:vorstand@schwarzgelb-heidelberg.de" 
                  className="text-tennis-yellow hover:text-tennis-black font-semibold transition-colors"
                >
                  vorstand@schwarzgelb-heidelberg.de
                </a>.
              </p>
              
              <p className="text-center font-semibold text-tennis-black">
                Die folgende Übersicht zeigt unsere aktuellen Vorstandsmitglieder mit ihrem Zuständigkeitsbereich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 max-w-6xl mx-auto">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 lg:w-1/4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 lg:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-tennis-black mb-2">
                      {member.name}
                    </h3>
                    <p className="text-tennis-yellow font-semibold text-lg mb-4">
                      {member.position}
                    </p>
                    <div className="flex items-center mb-4">
                      <Mail className="h-5 w-5 text-tennis-yellow mr-3" />
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-tennis-black hover:text-tennis-yellow font-semibold transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VorstandDE;
