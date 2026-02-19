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
      image: "/images/vorstand/alex-kukaras.jpg",
      description: "Alex verantwortet die Vereinsleitung, deren Gesamtkoordination und repräsentiert unseren Club nach außen wie nach innen. Er organisiert Vorstandssitzungen und Mitgliederversammlungen, steht in regelmäßigem Kontakt zu Verbänden und ist als Leiter einer Tennisschule auch intensiv in die Trainings-, Turnier- und Jugendarbeit involviert."
    },
    {
      name: "Marc Homsy",
      position: "2. Vorsitzender",
      email: "marc.homsy@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/marc-homsy.jpg",
      description: "Marc ist Stellvertreter von Alex und in die Gesamtkoordination des Vereins eingebunden. Er kümmert sich auch um das Tagesgeschäft im Rahmen der Geschäftsführung des Vereins. Dazu gehören beispielsweise die Beantragung von Zuschüssen bei der Stadt Heidelberg und Verbänden oder die Auftragsvergabe für Arbeiten zur Erhaltung der Platzanlage und des Clubhauses."
    },
    {
      name: "Timo Schulz",
      position: "Kassenwart",
      email: "timo.schulz@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/timo-schulz.jpg",
      description: "Timo ist neu im Vorstand und fungiert als Kassenwart und hat auch die Budgetplanung übernommen."
    },
    {
      name: "Ulrike Nuber",
      position: "Mitgliederverwaltung",
      email: "ulrike.nuber@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/ulrike-nuber.jpg",
      description: "Uli spielt seit 1980 Tennis und ist mit ihrer Familie seit 2019 im Schwarz-Gelb. Seit einiger Zeit ist sie leidenschaftliche Mannschaftsführerin des Damen-50-Teams. Bei Fragen rund um die Mitgliedschaft oder Problemen mit dem Platzbuchungssystem erreicht ihr sie unter mitgliederservice@schwarz-gelb-heidelberg.de"
    },
    {
      name: "Ursula Fernández Lamarche",
      position: "stellv. Mitgliederverwaltung",
      email: "ursula.fernandez-lamarche@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/ursula-fernandez.jpg",
      description: "Ursula ist Sportwissenschaftlerin und als Beisitzerin Teil des Vorstands, Schwerpunkt Mitgliederverwaltung. Mit Leidenschaft und fachlicher Kompetenz engagiert sie sich für ein aktives, gesundes und lebendiges Vereinsleben."
    },
    {
      name: "Katharina Kukaras",
      position: "Sportwartin",
      email: "katharina.kukaras@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/kati-kukaras.jpg",
      description: "Kati ist unsere Sportwartin und kümmert sich um die Mannschaftsmeldungen der Aktiven und der Senioren Mannschaften, sowie den reibungslosen Ablauf der einzelnen Begegnungen."
    },
    {
      name: "Karolin Kukaras",
      position: "Jugendwartin",
      email: "karolin.kukaras@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/karo-kukaras.jpg",
      description: "Karo hat als Jugendwartin den besten Draht zu unserem Nachwuchs. Sie ist für alle Vereinsmitglieder bis 18 Jahre zuständig. Sie hilft bei der Planung der Jugendtrainings und organisiert Jugendturniere. Zu ihren weiteren Aufgaben zählen die Talentförderung, das Gewinnen von Kids und Jugendlichen für den Verein und das Vertreten deren Interessen im Vorstand."
    },
    {
      name: "Tanya Thouw",
      position: "Schriftführerin und Mitgliederkommunikation",
      email: "tanya.thouw@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/tanya-thouw.jpg",
      description: "Tanya ist seit 2020 im Vorstand aktiv und protokolliert in allen Vorstandssitzungen und Mitgliederversammlungen, seit der letzten Vorstandswahl ist sie auch für die Mitgliederkommunikation zuständig. Ihr werdet sie aber auch sonst überall antreffen, denn sie hilft wann immer notwendig."
    },
    {
      name: "Terezie Homsy",
      position: "Vergnügungswartin",
      email: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/terezie-homsy.jpg",
      description: "Terezie ist unsere Vergnügungswartin, doch hinter ihr steckt ein ganzes Team, das sich gemeinsam um den geselligen Teil im Vereinsleben kümmert und immer wieder tolle Ideen für gemeinsame Veranstaltungen hat. So finden neben dem traditionellen Blümchenturnier und dem Doppelturnier zu Saisonabschluss unter anderem eine 80er/90er-Jahre-Party und eine Nuit Blanche statt. Wir dürfen gespannt bleiben ..."
    },
    {
      name: "Manfred Seibold",
      position: "Platzreferent",
      email: "manfred.seibold@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/manfred-seibold.jpg",
      description: "Manfred ist neben der Leitung seiner Tennisschule Seibold verantwortlich für alles, was mit unserer Tennisanlage zu tun hat. Er arbeitet im Verbund mit der Vorstandschaft und unserem Platzwart Sharif, um unsere Anlage im bestmöglichen Zustand zu halten und sie nach Möglichkeit noch zu verbessern."
    },
    {
      name: "Sonja Althoff & Britta Müller",
      position: "Beisitzerinnen Media und Presse",
      email: "sonja.althoff@schwarzgelb-heidelberg.de",
      image: null,
      description: "Britta ist 2022 von Volleyball auf Tennis umgeschwenkt. Sie spielt in der aktuellen D40.1 (BK1) und kümmert sich für den Verein um die Homepage. Sonja, die für uns den Kontakt zur Presse unterhält, war schon als Kind Mitglied in unserem Verein. Somit war es nur folgerichtig, dass sie sich auch im Vorstand engagiert. Sie liebt Texte in jeder Form und so passt das Ressort 'Media und Presse' perfekt zu ihr. Beide gemeinsam kümmern sich seit 2024 um Satz und Redaktion der zweijährlich erscheinenden Tennisinfo.",
      secondEmail: "britta.mueller@schwarzgelb-heidelberg.de",
      images: [
        "/images/vorstand/sonja-althoff.jpg",
        "/images/vorstand/britta-mueller.jpg"
      ]
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
              src="/images/vorstand/vorstand-gemeinsam.jpg"
              alt="Vorstand TC Schwarz-Gelb Heidelberg"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Hier unsere aktuellen Vorstandsmitglieder mit ihrem jeweiligen Zuständigkeitsbereich.
                Mitglieder und Interessierte können uns gern jederzeit ansprechen oder anschreiben unter{' '}
                <a 
                  href="mailto:vorstand@schwarzgelb-heidelberg.de" 
                  className="text-tennis-yellow hover:text-tennis-black font-semibold transition-colors"
                >
                  vorstand@schwarzgelb-heidelberg.de
                </a>.
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
                  {member.image ? (
                    <div className="md:w-1/3 lg:w-1/4">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : member.images ? (
                    <div className="md:w-1/3 lg:w-1/4 flex flex-col">
                      {member.images.map((img, i) => (
                        <div key={i} className="aspect-square overflow-hidden">
                          <img
                            src={img}
                            alt={member.name.split(' & ')[i]}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="md:w-2/3 lg:w-3/4 p-8">
                    <h3 className="text-2xl font-bold text-tennis-black mb-2">
                      {member.name}
                    </h3>
                    <p className="text-tennis-yellow font-semibold text-lg mb-4">
                      {member.position}
                    </p>
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-tennis-yellow mr-3 flex-shrink-0" />
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-tennis-black hover:text-tennis-yellow font-semibold transition-colors break-all"
                        >
                          {member.email}
                        </a>
                      </div>
                      {member.secondEmail && (
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-tennis-yellow mr-3 flex-shrink-0" />
                          <a 
                            href={`mailto:${member.secondEmail}`}
                            className="text-tennis-black hover:text-tennis-yellow font-semibold transition-colors break-all"
                          >
                            {member.secondEmail}
                          </a>
                        </div>
                      )}
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
