
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
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Restaurant: 0174-6808685 | Vereinshotline: 06221-4337096</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>tennis@schwarzgelb-heidelberg.de</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="https://www.facebook.com/tc.schwarzgelb.3" className="hover:text-tennis-yellow transition-colors">
              Facebook
            </a>
            <a href="https://twitter.com/sgheidelberg" className="hover:text-tennis-yellow transition-colors">
              Twitter
            </a>
            <a href="https://www.instagram.com/tc_schwarzgelb_heidelberg/" className="hover:text-tennis-yellow transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg" 
                alt="TC Schwarz-Gelb Heidelberg e.V." 
                className="h-12 w-auto"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-tennis-black">TC Schwarz-Gelb</h1>
                <p className="text-sm text-muted-foreground">Heidelberg e.V.</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="nav-link">
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="default" className="btn-hero">
                Platz reservieren
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="default" className="btn-hero w-full mt-4">
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
