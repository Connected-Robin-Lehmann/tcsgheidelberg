import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SponsorsSection = () => {
  const { t } = useTranslation();
  
  const mainSponsors = [
    {
      name: 'Stadtwerke Heidelberg',
      logo: '/images/sponsors/Stadtwerke-Heidelberg.jpg',
      url: 'https://www.swhd.de/'
    },
    {
      name: 'Engelhorn Sports',
      logo: '/images/sponsors/engelhorn-sports.jpg',
      url: 'https://info.engelhorn.de/sport/'
    },
    {
      name: 'Heidelberger Volksbank',
      logo: '/images/sponsors/Heidelberger-Volksbank.jpg',
      url: 'https://www.heidelberger-volksbank.de/'
    }
  ];

  const tennisSchools = [
    {
      name: 'Tennisschule PTS Kukaras',
      logo: '/images/sponsors/Tennisschule-PTS-Kukaras.jpg',
      url: '/training/tennisschule-pts-kukaras'
    },
    {
      name: 'Tennisschule Seibold',
      logo: '/images/sponsors/Tennisschule-Seibold.jpg',
      url: '/training/tennisschule-seibold'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-3 md:mb-4">
            {t('home.sponsors.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            {t('home.sponsors.subtitle')}
          </p>
        </div>

        {/* Main Sponsors */}
        <div className="mb-10 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-tennis-black mb-4 sm:mb-6 md:mb-8">
            {t('home.sponsors.mainSponsors')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {mainSponsors.map((sponsor, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <a 
                  href={sponsor.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="sponsor-logo w-full h-12 sm:h-16 md:h-20 object-contain mx-auto"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Tennis Schools */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-tennis-black mb-4 sm:mb-6 md:mb-8">
            {t('home.sponsors.tennisSchools')}
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            {tennisSchools.map((school, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <a 
                  href={school.url} 
                  className="block"
                >
                  <img 
                    src={school.logo} 
                    alt={school.name}
                    className="sponsor-logo w-full h-12 sm:h-16 md:h-20 object-contain mx-auto"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 px-2">
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6">
            {t('home.sponsors.partnershipInterest')}
          </p>
          <Link to="/der-club/sponsoring" className="btn-hero">
            {t('home.sponsors.sponsorshipOptions')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
