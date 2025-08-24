import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Startseite', href: '#home' },
    { name: 'Der Club', href: '#club' },
    { name: 'Aktuelles', href: '#news' },
    { name: 'Mannschaften', href: '#teams' },
    { name: 'Turniere', href: '#tournaments' },
    { name: 'Training', href: '#training' },
    { name: 'Gastronomie', href: '#gastronomy' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-tennis-black text-white py-2 px-4 text-sm">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm text-center">Restaurant: 0174-6808685 | Vereinshotline: 06221-4337096</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">tennis@schwarzgelb-heidelberg.de</span>
              </div>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/tc.schwarzgelb.3" className="hover:text-tennis-yellow transition-colors text-xs sm:text-sm">
                Facebook
              </a>
              <a href="https://twitter.com/sgheidelberg" className="hover:text-tennis-yellow transition-colors text-xs sm:text-sm">
                Twitter
              </a>
              <a href="https://www.instagram.com/tc_schwarzgelb_heidelberg/" className="hover:text-tennis-yellow transition-colors text-xs sm:text-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center justify-center flex-1 lg:flex-none lg:justify-start">
              <img 
                src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg" 
                alt="TC Schwarz-Gelb Heidelberg e.V." 
                className="h-12 sm:h-16 md:h-20 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link text-sm xl:text-base" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button - Hidden when mobile menu is available */}
            <div className="hidden lg:block">
              <Button 
                variant="default" 
                className="btn-hero text-sm xl:text-base"
                style={{ fontFamily: 'Arial, sans-serif' }}
                onClick={() => window.open('https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//', '_blank')}
              >
                Platz reservieren
              </Button>
            </div>

            {/* Mobile Menu Button - Positioned to avoid overlap */}
            <div className="lg:hidden">
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="nav-link py-2"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  variant="default" 
                  className="btn-hero w-full mt-4"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                  onClick={() => {
                    window.open('https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Platz reservieren
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
