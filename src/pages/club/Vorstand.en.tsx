import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const VorstandEN = () => {
  const boardMembers = [
    {
      name: "Aleksandar Kukaras",
      position: "Chairman",
      email: "aleksandar.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Bild1-e1741965335756.png",
      description: "Alex is the face of our traditional club. He is responsible for club management, its overall coordination and represents our club both externally and internally. He organizes board meetings and general assemblies, maintains regular contact with associations and is also intensively involved in training, tournament and youth work."
    },
    {
      name: "Dr. Frank Schöneborn",
      position: "Vice Chairman / Finance",
      email: "frank.schoeneborn@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Dr-Frank-Schöneborn.jpg",
      description: "Frank is responsible for finances, membership administration and general administration in our club. Nothing works financially without him, as his responsibilities include asset management, bookkeeping, annual balance sheet, budget plan, tax returns and insurance, as well as collecting membership fees and issuing donation receipts."
    },
    {
      name: "Marvin Tawasi",
      position: "Men's Sports Director (Active)",
      email: "marvin.tawasi@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/08/Marvin-Tawasi-2020-e1742127517989.jpg",
      description: "Marvin is our active sports director and also a B-licensed trainer (Tennis Academy Alex Kukaras). In adult competitive sports (team sports), he takes care of the team registrations of the active men's teams in the league rounds as well as the smooth running of the individual matches and is thus an important link between the board and our men's teams."
    },
    {
      name: "Marc Homsy",
      position: "Senior Sports Director",
      email: "marc.homsy@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Marc-Homsy.jpg",
      description: "Marc is the sports director for the senior teams and takes care of the registrations of the currently 6 teams (W40.1, M50.1, W50.1, M40, W40.2 and M55.1) in the league rounds, the smooth running of the individual matches and acts as their representative on the board."
    },
    {
      name: "Karolin Kukaras",
      position: "Youth Director",
      email: "karolin.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Karolin-Kukaras.jpg",
      description: "Karo, as youth director, has the best connection to our young talents. She is responsible for all club members up to 18 years old. She helps plan youth training and organizes youth tournaments. Her other tasks include talent promotion, attracting kids and young people to the club and representing their interests on the board."
    },
    {
      name: "Tanya Thouw",
      position: "Secretary",
      email: "tanya.thouw@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Tanya-e1742127659488.jpg",
      description: "Tanya is our secretary and a great support for general board work."
    },
    {
      name: "Manfred Seibold",
      position: "Facilities Manager", 
      email: "manfred.seibold@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Manfred-Seibold.jpg",
      description: "Manfred is responsible for everything related to our tennis facility. He works hand in hand with our groundskeeper Sharif in many cases. His goal is to keep our club facility in the best possible condition and to improve it whenever possible. All necessary repairs are therefore under his care."
    },
    {
      name: "Terezie Zuna-Homsy",
      position: "Social Events Coordinator",
      email: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Terezie-e1741973196281.jpg",
      description: "Terezie is our social events coordinator, but behind her is a whole team that takes care of the social side of club life and always has great ideas for joint events. Among other things, an 80s/90s party is planned, as well as a Nuit Blanche in addition to the traditional flower tournament and the doubles tournament at the end of the season. We can look forward to it."
    },
    {
      name: "Katharina Kukaras",
      position: "Assistant - Women's Sports",
      email: "kati.kukaras@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/IMG_3690-e1741973256127.jpg",
      description: "Kati is only an 'assistant' in the official board title - she is de facto the sports director for the active women's teams, plays in the 1st women's team and is a B-licensed trainer (Tennis Academy Alex Kukaras). She takes care of the team registrations of the active women's teams in the league rounds as well as the smooth running of the individual matches and is thus an equally important link between the board and the women's teams."
    },
    {
      name: "Sonja Althoff",
      position: "Assistant - Press Relations",
      email: "sonja.althoff@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Sonja_6-e1741973362391.jpg",
      description: "Sonja supports the club as assistant for press relations."
    },
    {
      name: "Britta Müller", 
      position: "Assistant - Media",
      email: "britta.mueller@schwarzgelb-heidelberg.de",
      image: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/20240713_201252-scaled-e1741973410235.jpg",
      description: "Britta supports the club as assistant in updating the website and creating the Tennis Info."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-tennis-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-tennis-yellow">
            Board
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The leadership team of TC Schwarz-Gelb Heidelberg e.V.
          </p>
        </div>
      </section>

      {/* Board Photo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/03/Vorstand2023-e1741964818524.jpg"
              alt="Board 2023"
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
              Our new board - right after the election on September 24, 2023
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Those who decide to volunteer in sports - including tennis clubs - want to redefine the club's goals and successfully implement them in the interest of the club members. This requires above all a high level of commitment from all board members.
              </p>
              
              <p>
                The current board of our tennis club was re-elected for two years at the general meeting on September 24, 2023, in accordance with our statutes, and continues to devote itself with great energy to the continuous renewal, modernization and further improvement of our historic traditional club TC Schwarz-Gelb Heidelberg e.V. in the heart of our beautiful and world-famous city.
              </p>
              
              <p>
                As a board, we are happy about everyone who would like to help shape our club. Members and interested parties are therefore welcome to suggest their own projects, which can then be implemented together. Members and interested parties are welcome to contact us at any time at{' '}
                <a 
                  href="mailto:vorstand@schwarzgelb-heidelberg.de" 
                  className="text-tennis-yellow hover:text-tennis-black font-semibold transition-colors"
                >
                  vorstand@schwarzgelb-heidelberg.de
                </a>.
              </p>
              
              <p className="text-center font-semibold text-tennis-black">
                The following overview shows our current board members with their area of responsibility.
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

export default VorstandEN;
