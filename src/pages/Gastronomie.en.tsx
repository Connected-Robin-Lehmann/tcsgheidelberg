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
            Club Gastronomy <em>"La Trattoria"</em>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Italian Flair with Beer Garden - Opening April 2026
          </p>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Main Content */}
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
                      In April 2026, the new <em>"La Trattoria"</em> will open its doors at the tennis club. 
                      Look forward to authentic Italian cuisine, exquisite wines, a lovingly redesigned 
                      restaurant with a cozy beer garden, and warm hospitality. Events and celebrations 
                      can also be booked in this special atmosphere in the future.
                    </p>
                    
                    <p className="font-semibold text-tennis-black">
                      Pasquale Dimauro and his team look forward to welcoming you for 
                      delightful hours.
                    </p>
                  </div>
                </div>
              </Card>

              {/* La Trattoria Image Card */}
              <Card className="card-tennis mb-8 overflow-hidden">
                <img 
                  src="/images/la-trattoria-banner.png" 
                  alt="La Trattoria - Coming Soon April 2026" 
                  className="w-full h-auto object-contain"
                />
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


              {/* Restaurant Image */}
              <div className="mt-8">
                <img 
                  src="/images/gastronomie/Metin-Gastronomie-Geburtstagsfeier-2.jpg" 
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
                  src="/images/gastronomie/Foto_Pasquale_Dimauro_kompakt.jpg" 
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

              {/* Opening Hours Card - temporarily hidden
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
              */}

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
                    Italian restaurant with extensive menu
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
