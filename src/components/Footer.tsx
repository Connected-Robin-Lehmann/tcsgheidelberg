
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tennis-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <img 
              src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg" 
              alt="TC Schwarz-Gelb Logo" 
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-tennis-yellow mb-4">
              TC Schwarz-Gelb Heidelberg e.V.
            </h3>
            <p className="text-gray-300">
              Tradition trifft Moderne - Ihr Tennisverein im Herzen Heidelbergs
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-tennis-yellow mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-tennis-yellow" />
                <div>
                  <div>Restaurant: 0174-6808685</div>
                  <div>Vereinshotline: 06221-4337096</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-tennis-yellow" />
                <span>tennis@schwarzgelb-heidelberg.de</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-tennis-yellow mt-1" />
                <div>
                  <div>Tennisclub Schwarz-Gelb</div>
                  <div>Heidelberg e.V.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-tennis-yellow mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-tennis-yellow transition-colors">Platzreservierung</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tennis-yellow transition-colors">SG-Forum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tennis-yellow transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tennis-yellow transition-colors">Mitgliedschaft</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tennis-yellow transition-colors">Anfahrt</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tennis-yellow transition-colors">Wetter</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-tennis-yellow mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/tc.schwarzgelb.3" 
                className="bg-gray-800 p-3 rounded-full hover:bg-tennis-yellow hover:text-tennis-black transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/sgheidelberg" 
                className="bg-gray-800 p-3 rounded-full hover:bg-tennis-yellow hover:text-tennis-black transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/tc_schwarzgelb_heidelberg/" 
                className="bg-gray-800 p-3 rounded-full hover:bg-tennis-yellow hover:text-tennis-black transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-tennis-yellow mb-2">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-3">
                Bleiben Sie informiert über Vereinsnews
              </p>
              <button className="btn-hero text-sm px-4 py-2">
                Anmelden
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 TC Schwarz-Gelb Heidelberg e.V. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-tennis-yellow text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-tennis-yellow text-sm transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
