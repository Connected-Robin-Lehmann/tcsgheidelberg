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
            Clubgastronomie „La Trattoria"
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Italienisches Flair mit Biergarten - Herzliche Gastfreundschaft und authentische Küche
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
                    Clubgastronomie <em>„La Trattoria"</em> mit Biergarten
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                      Wir freuen uns bekannt zu geben, dass unser neuer Wirt{' '}
                      <span className="text-red-600 font-bold">Pasquale Dimauro</span>{' '}
                      die Gastronomie unseres Tennisclubs übernommen hat und ab 2026 ein frisches 
                      und italienisches Flair in unseren Club bringen wird. Freut euch auf herzliche 
                      Gastfreundschaft, eine gemütliche Atmosphäre ein leckeres Speisenangebot.
                    </p>
                    
                    <div className="bg-tennis-yellow/10 border-l-4 border-tennis-yellow p-4 rounded-r-lg">
                      <p className="font-bold">
                        Grundsätzlich ist Pasquale in diesem Sommer (2025) an den Wochenenden mit 
                        einem kleinen Speisenangebot und Getränken präsent. Mittwoch bis Freitag 
                        ist er von 18:00 bis 21:00 Uhr für Sie da. Montag und Dienstag ist geschlossen.
                      </p>
                    </div>
                    
                    <p>
                      Wir ermuntern alle, das neue Angebot zu testen – nicht nur das Essen ist sicher 
                      wunderbar – einen spritzigen Prosecco oder ein kühles Bier nach dem Training bei 
                      unseren Tennisschulen oder dem freien Spiel haben sich sicher schon viele wieder gewünscht!
                    </p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                      <p className="text-red-600 font-bold">
                        Im April 2026 findet dann offiziell die Eröffnung eines italienischen 
                        Restaurants <em>„La Trattoria"</em> mit umfangreichen Speisenangebot statt.
                      </p>
                    </div>
                    
                    <p>
                      Wir sind überzeugt, es wird ein perfekter Ort für ein geselliges Beisammensein 
                      nach dem Match oder ein entspanntes Essen mit Familie und Freunden.
                    </p>
                    
                    <p>
                      Für Geburtstage, Hochzeiten und Veranstaltungen aller Art können dann auch 
                      wieder Reservierungen bei Pasquale vorgenommen werden.
                    </p>
                  </div>
                </div>
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

              {/* Club Statement */}
              <div className="mt-6 p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 leading-relaxed">
                  Der Vorstand ist sich bewusst, dass unsere Vereinsgastronomie für viele unserer 
                  Mitglieder einen sehr wichtigen Teil des Vereinslebens darstellt und auch dem 
                  Vorstand ist ein schönes Gastronomieerlebnis in ansprechender und zu unserem 
                  Club passender Atmosphäre wichtig.
                </p>
              </div>

              {/* Restaurant Image */}
              <div className="mt-8">
                <img 
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2020/07/Metin-Gastronomie-Geburtstagsfeier-2.jpg" 
                  alt="Restaurant Innenbereich bei einer Geburtstagsfeier" 
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
                      Euer Pasquale
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                    <p className="font-bold italic">
                      „Ab April 2026 übernimmt mein Team und ich die Gastronomie des Tennisclubs Schwarz-Gelb."
                    </p>
                    
                    <p className="font-bold italic">
                      „Mein Name ist Pasquale Dimauro. Ich bin ein erfahrener Gastronom mit Leidenschaft und Tradition.
                      Ich freue mich, Sie mit 30 Jahren erfolgreicher Tätigkeit in der Gastronomie, 
                      zukünftig mit italienischer Herzlichkeit und Küche zu verwöhnen."
                    </p>
                    
                    <p className="font-bold italic">
                      „Ich werde offiziell ab April 2026 meine langjährige Erfahrung, mein kulinarisches 
                      Know-how und mein Gespür für Gastfreundschaft mit in den Club bringen."
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

              {/* Opening Hours Card */}
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

              {/* Future Opening */}
              <Card className="card-tennis border-l-4 border-l-red-500">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-red-500 mr-3" />
                    <h3 className="text-lg font-bold text-tennis-black">
                      Offizielle Eröffnung
                    </h3>
                  </div>
                  
                  <p className="text-red-600 font-bold text-center text-lg">
                    April 2026
                  </p>
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Vollständiges italienisches Restaurant mit umfangreichem Speisenangebot
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
