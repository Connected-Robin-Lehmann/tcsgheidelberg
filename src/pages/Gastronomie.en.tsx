import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Calendar } from 'lucide-react';

const GastronomieEN = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Club Gastronomy "La Trattoria"
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Italian Flair with Beer Garden - Warm Hospitality and Authentic Cuisine
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              <Card className="card-tennis mb-8">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-tennis-black mb-6">
                    Club Gastronomy <em>"La Trattoria"</em> with Beer Garden
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      We are pleased to announce that our new host{' '}
                      <span className="text-red-600 font-bold">Pasquale Dimauro</span>{' '}
                      has taken over the gastronomy of our tennis club and will bring fresh 
                      Italian flair to our club starting in 2026. Look forward to warm hospitality, 
                      a cozy atmosphere and a delicious menu.
                    </p>
                    
                    <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow p-4 rounded-r-lg">
                      <p className="font-bold">
                        Generally, Pasquale is present on weekends this summer (2025) with 
                        a small menu and drinks. Wednesday to Friday he is available for you 
                        from 6:00 PM to 9:00 PM. Monday and Tuesday are closed.
                      </p>
                    </div>
                    
                    <p>
                      We encourage everyone to try the new offer – not only is the food sure to be 
                      wonderful – many have surely been wishing for a sparkling prosecco or a cold 
                      beer after training at our tennis schools or free play!
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-red-600 font-bold">
                        In April 2026, the official opening of an Italian 
                        restaurant <em>"La Trattoria"</em> with an extensive menu will take place.
                      </p>
                    </div>
                    
                    <p>
                      We are convinced it will be a perfect place for a sociable gathering 
                      after the match or a relaxed meal with family and friends.
                    </p>
                    
                    <p>
                      For birthdays, weddings and events of all kinds, reservations can then 
                      also be made with Pasquale again.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Restaurant Info Card */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4 underline">
                    Restaurant "La Trattoria" with Beer Garden
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    (formerly "Dotti's breakpoint", before that "ODEM", long ago also known as "Secret Garden")
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-tennis-yellow mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-tennis-black">Location & Directions for Suppliers:</p>
                        <p className="text-gray-600">Carl-Bosch-Strasse 10/1, 69115 Heidelberg</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-tennis-yellow mr-3 mt-1" />
                      <div>
                        <p className="font-bold text-tennis-black">Postal Address & Guest Parking:</p>
                        <p className="text-gray-700 font-medium">Schwindstrasse 9, 69126 Heidelberg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Club Statement */}
              <div className="mt-6 p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  The board is aware that our club gastronomy represents a very important part of 
                  club life for many of our members, and a nice gastronomic experience in an appealing 
                  atmosphere that suits our club is also important to the board.
                </p>
              </div>

              {/* Restaurant Image */}
              <div className="mt-8">
                <img 
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/07/Metin-Gastronomie-Geburtstagsfeier-2.jpg" 
                  alt="Restaurant interior during a birthday party" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Column - Pasquale Info */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Pasquale Photo */}
              <div className="text-center">
                <img 
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/06/Foto_Pasquale_Dimauro_kompakt.jpg" 
                  alt="Pasquale Dimauro" 
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Pasquale Testimonial */}
              <Card className="card-tennis border-l-4 border-l-green-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🇮🇹</span>
                    </div>
                    <h3 className="text-xl font-bold text-tennis-black">
                      Your Pasquale
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p className="font-bold italic">
                      "Starting April 2026, my team and I will take over the gastronomy of the Schwarz-Gelb tennis club."
                    </p>
                    
                    <p className="font-bold italic">
                      "My name is Pasquale Dimauro. I am an experienced restaurateur with passion and tradition.
                      I look forward to pampering you with 30 years of successful work in gastronomy, 
                      in the future with Italian warmth and cuisine."
                    </p>
                    
                    <p className="font-bold italic">
                      "I will officially bring my many years of experience, my culinary 
                      know-how and my sense of hospitality to the club starting April 2026."
                    </p>
                    
                    <p className="font-bold italic">
                      "Under the name 'La Trattoria' you can expect a mix of Italian classics, 
                      pizza, fresh dishes and pasta, a selection of Italian wines and spirits, 
                      of course also with German beer, and a cozy atmosphere – for members, 
                      guests and connoisseurs. Also gladly for private parties and events."
                    </p>
                    
                    <p className="font-bold italic">
                      "We look forward to a delicious fresh start in the clubhouse!"
                    </p>
                    
                    <p className="font-bold italic text-tennis-black">
                      "Benvenuti & always Buon Appetito,"<br />
                      "Pasquale Dimauro and Team"
                    </p>
                  </div>
                </div>
              </Card>

              {/* Opening Hours Card */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-tennis-yellow mr-3" />
                    <h3 className="text-lg font-bold text-tennis-black">
                      Current Opening Hours (Summer 2025)
                    </h3>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Tuesday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wednesday - Friday:</span>
                      <span className="font-medium text-green-600">6:00 PM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekend:</span>
                      <span className="font-medium text-green-600">As Available</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Future Opening */}
              <Card className="card-tennis border-l-4 border-l-red-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-red-500 mr-3" />
                    <h3 className="text-lg font-bold text-tennis-black">
                      Official Opening
                    </h3>
                  </div>
                  
                  <p className="text-red-600 font-bold text-center text-lg">
                    April 2026
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Full Italian restaurant with extensive menu
                  </p>
                </div>
              </Card>

            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GastronomieEN;
