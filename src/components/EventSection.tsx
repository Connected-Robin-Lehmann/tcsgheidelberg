
import React from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventSection = () => {
  return (
    <section id="news" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-tennis-black mb-4">
            Aktuelle Termine & Informationen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden mit unseren neuesten Veranstaltungen und wichtigen Vereinsinformationen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mitgliederversammlung */}
          <Card className="card-tennis bg-gradient-to-br from-tennis-yellow-light to-white border-tennis-yellow/20">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-tennis-black mr-3" />
              <h3 className="text-2xl font-bold text-tennis-black">
                Mitgliederversammlung & Sommerfest
              </h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 mr-2" />
                <span>Samstag, 19. Juli 2025 - 17:00 Uhr</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Vereinsgelände TC Schwarz-Gelb</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 mr-2" />
                <span>Alle Vereinsmitglieder</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              Unsere jährliche Mitgliederversammlung mit anschließendem legendären Sommerfest. 
              Freuen Sie sich auf einen geselligen Abend mit tollem Programm!
            </p>

            <Button className="btn-hero w-full">
              Mehr Informationen
            </Button>
          </Card>

          {/* Tagesordnung */}
          <Card className="card-tennis">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-tennis-yellow mr-3" />
              <h3 className="text-2xl font-bold text-tennis-black">
                Tagesordnungspunkte 2025
              </h3>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-tennis-black mb-2">🗳️ Vorstandswahl</h4>
                <p className="text-sm text-gray-600">Neuwahl des Vereinsvorstands</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-tennis-black mb-2">💰 Beitragsordnung</h4>
                <p className="text-sm text-gray-600">Anpassung der Mitgliedsbeiträge</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-tennis-black mb-2">📋 Satzungsanpassung</h4>
                <p className="text-sm text-gray-600">Modernisierung der Vereinssatzung</p>
              </div>
            </div>

            <Button variant="outline" className="btn-hero-outline w-full">
              Einladung mit Details
            </Button>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Button className="btn-hero">
              Club entdecken
            </Button>
            <Button className="btn-hero-outline">
              FAQ für Neulinge
            </Button>
            <Button className="btn-hero">
              Mitglieder-Infos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
