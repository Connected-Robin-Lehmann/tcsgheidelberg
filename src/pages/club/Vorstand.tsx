
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const Vorstand = () => {
  const { t } = useTranslation();
  const boardMembers = [
    {
      name: "Aleksandar Kukaras",
      position: "1. Vorsitzender",
      email: "aleksandar.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Bild1-e1741965335756.png",
      descriptionKey: "aleksandar"
    },
    {
      name: "Dr. Frank Schöneborn",
      position: "2. Vorsitzender / Finanzen",
      email: "frank.schoeneborn@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Dr-Frank-Schöneborn.jpg",
      descriptionKey: "frank"
    },
    {
      name: "Marvin Tawasi",
      position: "Sportwart Herren (Aktive)",
      email: "marvin.tawasi@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/08/Marvin-Tawasi-2020-e1742127517989.jpg",
      descriptionKey: "marvin"
    },
    {
      name: "Marc Homsy",
      position: "Sportwart Senioren",
      email: "marc.homsy@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Marc-Homsy.jpg",
      descriptionKey: "marc"
    },
    {
      name: "Karolin Kukaras",
      position: "Jugendwart",
      email: "karolin.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Karolin-Kukaras.jpg",
      descriptionKey: "karolin"
    },
    {
      name: "Tanya Thouw",
      position: "Schriftführerin",
      email: "tanya.thouw@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Tanya-e1742127659488.jpg",
      descriptionKey: "tanya"
    },
    {
      name: "Manfred Seibold",
      position: "Platzreferent", 
      email: "manfred.seibold@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Manfred-Seibold.jpg",
      descriptionKey: "manfred"
    },
    {
      name: "Terezie Zuna-Homsy",
      position: "Vergnügungswart",
      email: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Terezie-e1741973196281.jpg",
      descriptionKey: "terezie"
    },
    {
      name: "Katharina Kukaras",
      position: "Beisitzerin Damensport",
      email: "kati.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/IMG_3690-e1741973256127.jpg",
      descriptionKey: "katharina"
    },
    {
      name: "Sonja Althoff",
      position: "Beisitzerin Presse",
      email: "sonja.althoff@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Sonja_6-e1741973362391.jpg",
      descriptionKey: "sonja"
    },
    {
      name: "Britta Müller", 
      position: "Beisitzerin Medien",
      email: "britta.mueller@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/20240713_201252-scaled-e1741973410235.jpg",
      descriptionKey: "britta"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-tennis-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-tennis-yellow">
            {t('board.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('board.subtitle')}
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
              {t('board.photoTitle')}
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                {t('board.intro.paragraph1')}
              </p>
              
              <p>
                {t('board.intro.paragraph2')}
              </p>
              
              <p>
                {t('board.intro.paragraph3')}{' '}
                <a 
                  href="mailto:vorstand@schwarzgelb-heidelberg.de" 
                  className="text-tennis-yellow hover:text-tennis-black font-semibold transition-colors"
                >
                  vorstand@schwarzgelb-heidelberg.de
                </a>.
              </p>
              
              <p className="text-center font-semibold text-tennis-black">
                {t('board.intro.closing')}
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
                      {t(`board.members.${member.descriptionKey}`)}
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

export default Vorstand;
