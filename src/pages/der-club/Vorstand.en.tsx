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
      image: "/images/vorstand/alex-kukaras.jpg",
      description: "Alex is responsible for club management, its overall coordination and represents our club both externally and internally. He organizes board meetings and general assemblies, maintains regular contact with associations and, as the head of a tennis academy, is also intensively involved in training, tournament and youth work."
    },
    {
      name: "Marc Homsy",
      position: "Vice Chairman",
      email: "marc.homsy@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/marc-homsy.jpg",
      description: "Marc is Alex's deputy and involved in the overall coordination of the club. He also handles day-to-day business as part of the club's management. This includes, for example, applying for grants from the City of Heidelberg and associations, or commissioning work to maintain the facility and clubhouse."
    },
    {
      name: "Timo Schulz",
      position: "Treasurer",
      email: "timo.schulz@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/timo-schulz.jpg",
      description: "Timo started playing tennis when Boris Becker won Wimbledon for the first time. After moving from Hamburg to Heidelberg, Timo joined TC Schwarz-Gelb Heidelberg in 2011 and served as team captain of the Men's 40 team from 2020 to 2025. He has now handed over that role to dedicate himself to the club's finances."
    },
    {
      name: "Ulrike Nuber",
      position: "Membership Administration",
      email: "ulrike.nuber@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/ulrike-nuber.jpg",
      description: "Uli has been playing tennis since 1980 and has been at Schwarz-Gelb with her family since 2019. She is a passionate team captain of the Women's 50 team. For questions about membership or issues with the court booking system, you can reach her at mitgliederservice@schwarz-gelb-heidelberg.de"
    },
    {
      name: "Ursula Fernández Lamarche",
      position: "Deputy Membership Administration",
      email: "ursula.fernandez-lamarche@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/ursula-fernandez.jpg",
      description: "Ursula is a sports scientist and serves as an assistant on the board, focusing on membership administration. With passion and professional expertise, she is committed to an active, healthy and vibrant club life."
    },
    {
      name: "Katharina Kukaras",
      position: "Sports Director",
      email: "katharina.kukaras@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/kati-kukaras.jpg",
      description: "Kati is our sports director and takes care of the team registrations for the active and senior teams, as well as the smooth running of the individual matches."
    },
    {
      name: "Karolin Kukaras",
      position: "Youth Director",
      email: "karolin.kukaras@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/karo-kukaras.jpg",
      description: "Karo, as youth director, has the best connection to our young talents. She is responsible for all club members up to 18 years old. She helps plan youth training and organizes youth tournaments. Her other tasks include talent promotion, attracting kids and young people to the club and representing their interests on the board."
    },
    {
      name: "Tanya Thouw",
      position: "Secretary & Member Communication",
      email: "tanya.thouw@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/tanya-thouw.jpg",
      description: "Tanya has been active on the board since 2020, taking minutes at all board meetings and general assemblies. Since the last board election, she is also responsible for member communication. You'll find her everywhere else too, as she helps whenever needed."
    },
    {
      name: "Terezie Homsy",
      position: "Social Events Coordinator",
      email: "terezie.zuna-homsy@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/terezie-homsy.jpg",
      description: "Terezie is our social events coordinator, but behind her is a whole team that takes care of the social side of club life and always has great ideas for joint events. In addition to the traditional flower tournament and the doubles tournament at the end of the season, an 80s/90s party and a Nuit Blanche are also on the program. We can look forward to it ..."
    },
    {
      name: "Manfred Seibold",
      position: "Facilities Manager",
      email: "manfred.seibold@schwarzgelb-heidelberg.de",
      image: "/images/vorstand/manfred-seibold.jpg",
      description: "In addition to running his Tennisschule Seibold, Manfred is responsible for everything related to our tennis facility. He works together with the board and our groundskeeper Sharif to keep our facility in the best possible condition and to improve it whenever possible."
    },
    {
      name: "Sonja Althoff & Britta Müller",
      position: "Media & Press Assistants",
      email: "sonja.althoff@schwarzgelb-heidelberg.de",
      image: null,
      description: "Britta switched from volleyball to tennis in 2022. She plays on the current W40.1 (BK1) team and manages the club's website. Sonja, who maintains our press contacts, has been a club member since childhood, making it only natural for her to get involved on the board. She loves writing in all forms, making the 'Media & Press' department a perfect fit. Together, they have been handling the layout and editing of the biannual Tennis Info since 2024.",
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
              src="/images/vorstand/vorstand-gemeinsam.jpg"
              alt="Board of TC Schwarz-Gelb Heidelberg"
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
                Here are our current board members with their respective areas of responsibility.
                Members and interested parties are welcome to contact us at any time at{' '}
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
                  <div className="md:w-2/3 lg:w-3/4 p-8 flex flex-col justify-center">
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

export default VorstandEN;
