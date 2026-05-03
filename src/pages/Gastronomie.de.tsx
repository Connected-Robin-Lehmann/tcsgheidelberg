import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Calendar } from 'lucide-react';

const GastronomieDE = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tennis-black to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Clubgastronomie <em>„La Trattoria"</em>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
             Italienisches Flair mit Biergarten – eröffnet seit dem 28. April 2026
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
                    Clubgastronomie <em>„La Trattoria"</em> mit Biergarten
                  </h2>
                  
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Liebe Mitglieder und Gäste,</p>
                    <p>
                      mit großer Freude eröffnen wir unsere <em>„La Trattoria"</em> und sind stolz,
                      dass hier etwas Neues entstanden ist – ein Ort zum Genießen und Wohlfühlen.
                    </p>
                    <p>
                      Freuen Sie sich auf frische italienische, traditionelle Küche, ausgewählte
                      italienische Weine und eine gemütliche Atmosphäre, die ein kleines Stück
                      Italien in diesen Tennisclub bringt.
                    </p>
                    <p>
                      Ob ein entspannter Abend oder private Feiern in besonderem Rahmen – bei uns
                      sind Sie herzlich willkommen, bei uns ist alles möglich!
                    </p>
                    <p>Wir freuen uns auf Sie!</p>
                    <p className="font-semibold text-tennis-black">Pasquale und Team</p>
                    <p className="font-semibold text-tennis-black">
                      Herzlich willkommen und Benvenuti in der <em>„La Trattoria"</em>! 🍝🍷
                    </p>
                    <p>
                      <a
                        href="https://www.la-trattoria-hd.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tennis-yellow font-semibold hover:underline"
                      >
                        www.la-trattoria-hd.de
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              {/* La Trattoria Image Card */}
              <Card className="card-tennis mb-8 overflow-hidden">
                <img 
                  src="/images/la-trattoria-banner.png" 
                  alt="La Trattoria - Cucina Italiana, Pizza & Vinothek, Biergarten" 
                  className="w-full h-auto object-contain"
                />
              </Card>

              {/* Restaurant Interior Image */}
              <Card className="card-tennis mb-8 overflow-hidden">
                <img
                  src="/images/gastronomie/la-trattoria-interior.jpg"
                  alt="La Trattoria Innenbereich"
                  className="w-full h-auto object-cover"
                />
              </Card>

              {/* Restaurant Info Card */}
              <Card className="card-tennis border-l-4 border-l-tennis-yellow">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-tennis-black mb-4 underline">
                    Restaurant „La Trattoria" mit Biergarten
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    (ehem. „Dotti's breakpoint", davor „ODEM", vor langer Zeit auch bekannt als „Secret Garden")
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-tennis-yellow mr-3 mt-1" />
                      <div>
                        <p className="font-semibold text-tennis-black">Lage & Anfahrt für Lieferanten:</p>
                        <p className="text-gray-600">Carl-Bosch-Strasse 10/1, 69115 Heidelberg</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-tennis-yellow mr-3 mt-1" />
                      <div>
                        <p className="font-bold text-tennis-black">Postadresse & Gästeparkplatz:</p>
                        <p className="text-gray-700 font-medium">Schwindstrasse 9, 69126 Heidelberg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>


              {/* Additional Restaurant Images - masonry layout to avoid uneven rows */}
              <div className="mt-8 sm:columns-2 gap-4 [column-fill:_balance]">
                {[
                  { src: "/images/gastronomie/la-trattoria-dining.jpg", alt: "Speisesaal La Trattoria" },
                  { src: "/images/gastronomie/la-trattoria-bar.jpg", alt: "Bar- und Tresenbereich La Trattoria" },
                  { src: "/images/gastronomie/la-trattoria-aperol.jpg", alt: "Italienisches Ambiente mit Aperol" },
                  { src: "/images/gastronomie/la-trattoria-biergarten.jpg", alt: "Biergarten mit Stehtisch und Antipasto-Tafel" },
                ].map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-contain rounded-lg shadow-lg mb-4 break-inside-avoid"
                  />
                ))}
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
                      Euer Pasquale
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p className="font-bold italic">
                      „Seit dem 28. April haben mein Team und ich die Gastronomie des Tennisclubs Schwarz-Gelb offiziell übernommen."
                    </p>
                    
                    <p className="font-bold italic">
                      „Mein Name ist Pasquale Dimauro. Ich bin ein erfahrener Gastronom mit Leidenschaft und Tradition.
                      Ich freue mich, Sie mit 30 Jahren erfolgreicher Tätigkeit in der Gastronomie, 
                      zukünftig mit italienischer Herzlichkeit und Küche zu verwöhnen."
                    </p>
                    
                    <p className="font-bold italic">
                      „Unter dem Namen ‚La Trattoria' erwartet Sie eine Mischung aus italienischen Klassikern, 
                      Pizza, frischen Gerichten und Pasta, eine Auswahl an italienischen Weinen und Spirituosen, 
                      selbstverständlich auch mit deutschem Bier, und gemütlicher Atmosphäre – für Mitglieder, 
                      Gäste und Genießer. Gerne auch für private Feiern und Events."
                    </p>
                    
                    <p className="font-bold italic">
                      „Wir freuen uns auf einen genussvollen Neustart im Clubhaus!"
                    </p>
                    
                    <p className="font-bold italic text-tennis-black">
                      „Benvenuti & allzeit Buon Appetito,"<br />
                      „Pasquale Dimauro und Team"
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
                      Aktuelle Öffnungszeiten (Sommer 2025)
                    </h3>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Montag - Dienstag:</span>
                      <span className="font-medium text-red-600">Geschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mittwoch - Freitag:</span>
                      <span className="font-medium text-green-600">18:00 - 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wochenende:</span>
                      <span className="font-medium text-green-600">Nach Verfügbarkeit</span>
                    </div>
                  </div>
                </div>
              </Card>
              */}
              {/* Future Opening */}
              <Card className="card-tennis border-l-4 border-l-red-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-tennis-black">
                      Bereits eröffnet
                    </h3>
                  </div>

                  <p className="text-green-600 font-bold text-center text-lg">
                    Seit 28. April
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Italienisches Restaurant mit umfangreichem Speisenangebot
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

export default GastronomieDE;
