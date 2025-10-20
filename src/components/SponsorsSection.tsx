import React from 'react';
import { Link } from 'react-router-dom';

const SponsorsSection = () => {
  const mainSponsors = [
    {
      name: 'Stadtwerke Heidelberg',
      logo: 'https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Stadtwerke-Heidelberg.jpg',
      url: 'https://www.swhd.de/'
    },
    {
      name: 'Engelhorn Sports',
      logo: 'https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/engelhorn-sports.jpg',
      url: 'https://info.engelhorn.de/sport/'
    },
    {
      name: 'Heidelberger Volksbank',
      logo: 'https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Heidelberger-Volksbank.jpg',
      url: 'https://www.heidelberger-volksbank.de/'
    }
  ];

  const tennisSchools = [
    {
      name: 'Tennisschule PTS Kukaras',
      logo: 'https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennisschule-PTS-Kukaras.jpg',
      url: '#'
    },
    {
      name: 'Tennisschule Seibold',
      logo: 'https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Tennisschule-Seibold.jpg',
      url: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tennis-black mb-4">
            Unsere Partner & Sponsoren
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir danken unseren wertvollen Partnern für ihre Unterstützung
          </p>
        </div>

        {/* Main Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-tennis-black mb-8">
            Hauptsponsoren
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {mainSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <a 
                  href={sponsor.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="sponsor-logo w-full h-20 object-contain mx-auto"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Tennis Schools */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-tennis-black mb-8">
            Unsere Tennisschulen
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {tennisSchools.map((school, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <a 
                  href={school.url} 
                  className="block"
                >
                  <img 
                    src={school.logo} 
                    alt={school.name}
                    className="sponsor-logo w-full h-20 object-contain mx-auto"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Interesse an einer Partnerschaft?
          </p>
          <Link to="/sponsoring" className="btn-hero">
            Sponsoring-Möglichkeiten
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
