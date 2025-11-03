import React from 'react';
import { Users, Award, MapPin, Calendar, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Users, number: '612', label: t('home.stats.members'), color: 'text-blue-600' },
    { icon: Target, number: '35%', label: 'Jugendanteil', color: 'text-green-600' },
    { icon: Award, number: '16', label: 'Erwachsenen-Mannschaften', color: 'text-purple-600' },
    { icon: MapPin, number: '10', label: t('home.stats.courts'), color: 'text-tennis-yellow' },
    { icon: Trophy, number: '14', label: 'Jugendmannschaften', color: 'text-red-600' },
    { icon: Calendar, number: '9', label: 'Trainer', color: 'text-indigo-600' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tennis-black mb-4">
            {t('home.stats.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diese Zahlen zeigen die Größe und Vielfalt unserer Tennisgemeinschaft
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gray-50 rounded-2xl p-6 mb-4 group-hover:bg-tennis-yellow-light transition-colors duration-300">
                <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color} group-hover:text-tennis-black transition-colors duration-300`} />
                <div className="stat-counter text-tennis-black group-hover:text-tennis-black">
                  {stat.number}
                </div>
              </div>
              <p className="stat-label text-tennis-black font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Werden Sie Teil unserer großen Tennisfamilie
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/der-club/mitgliedschaft" className="btn-hero">
              {t('home.hero.joinButton')}
            </Link>
            <Link to="/der-club/mitgliedschaft" className="btn-hero-outline">
              Probetraining vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
