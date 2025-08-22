
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tennis-black via-gray-900 to-tennis-court overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Willkommen im
            <span className="block text-tennis-yellow mt-2">
              TC Schwarz-Gelb
            </span>
            <span className="block text-3xl md:text-4xl mt-2 font-light">
              Heidelberg e.V.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Tradition trifft Moderne - Ihr Tennisverein im Herzen Heidelbergs seit vielen Jahren
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button className="btn-hero text-lg px-8 py-4">
              Club entdecken
            </Button>
            <Button variant="outline" className="btn-hero-outline text-lg px-8 py-4">
              Mitglied werden
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-tennis-yellow mr-2" />
                <span className="stat-counter">612</span>
              </div>
              <p className="stat-label text-white">Mitglieder</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-tennis-yellow mr-2" />
                <span className="stat-counter">10</span>
              </div>
              <p className="stat-label text-white">Außenplätze</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-tennis-yellow mr-2" />
                <span className="stat-counter">30</span>
              </div>
              <p className="stat-label text-white">Mannschaften</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-8 w-8 text-tennis-yellow mr-2" />
                <span className="stat-counter">35%</span>
              </div>
              <p className="stat-label text-white">Jugendanteil</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tennis-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tennis-yellow rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
