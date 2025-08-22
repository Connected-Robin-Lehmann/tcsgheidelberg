import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Award, MapPin } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tennis-black via-gray-900 to-tennis-court overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white animate-fade-in">
          {/* Logo Integration */}
          <div className="mb-8">
            
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{
          fontFamily: 'Arial, sans-serif'
        }}>
            Willkommen im
            <span className="block text-tennis-yellow mt-2">
              TC Schwarz-Gelb
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl mt-2 font-light" style={{
            fontFamily: 'Arial, sans-serif'
          }}>
              Heidelberg e.V.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{
          fontFamily: 'Arial, sans-serif'
        }}>
            Tradition trifft Moderne - Ihr Tennisverein im Herzen Heidelbergs seit vielen Jahren
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button className="btn-hero text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto" style={{
            fontFamily: 'Arial, sans-serif'
          }}>
              Club entdecken
            </Button>
            <Button variant="outline" className="btn-hero-outline text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto" style={{
            fontFamily: 'Arial, sans-serif'
          }} onClick={() => window.open('https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//', '_blank')}>
              Platz reservieren
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-tennis-yellow mb-1 sm:mb-0 sm:mr-2" />
                <span className="stat-counter text-2xl md:text-4xl" style={{
                fontFamily: 'Arial, sans-serif'
              }}>612</span>
              </div>
              <p className="stat-label text-white text-xs md:text-sm" style={{
              fontFamily: 'Arial, sans-serif'
            }}>Mitglieder</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.4s'
          }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <MapPin className="h-6 w-6 md:h-8 md:w-8 text-tennis-yellow mb-1 sm:mb-0 sm:mr-2" />
                <span className="stat-counter text-2xl md:text-4xl" style={{
                fontFamily: 'Arial, sans-serif'
              }}>10</span>
              </div>
              <p className="stat-label text-white text-xs md:text-sm" style={{
              fontFamily: 'Arial, sans-serif'
            }}>Außenplätze</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.6s'
          }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-tennis-yellow mb-1 sm:mb-0 sm:mr-2" />
                <span className="stat-counter text-2xl md:text-4xl" style={{
                fontFamily: 'Arial, sans-serif'
              }}>30</span>
              </div>
              <p className="stat-label text-white text-xs md:text-sm" style={{
              fontFamily: 'Arial, sans-serif'
            }}>Mannschaften</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{
            animationDelay: '0.8s'
          }}>
              <div className="flex flex-col sm:flex-row items-center justify-center mb-2">
                <Calendar className="h-6 w-6 md:h-8 md:w-8 text-tennis-yellow mb-1 sm:mb-0 sm:mr-2" />
                <span className="stat-counter text-2xl md:text-4xl" style={{
                fontFamily: 'Arial, sans-serif'
              }}>35%</span>
              </div>
              <p className="stat-label text-white text-xs md:text-sm" style={{
              fontFamily: 'Arial, sans-serif'
            }}>Jugendanteil</p>
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
    </section>;
};
export default Hero;