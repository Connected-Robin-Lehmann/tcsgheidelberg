
import React, { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Startseite",
      href: "/",
    },
    {
      name: "Der Club",
      href: "/der-club",
      submenu: [
        { name: "Vorstand", href: "/der-club/vorstand" },
        { name: "Tradition", href: "/der-club/tradition" },
        { name: "Tennisplätze", href: "/der-club/tennisplaetze" },
        { name: "Mitgliedschaft", href: "/der-club/mitgliedschaft" },
        { name: "Beitragsordnung", href: "/der-club/beitragsordnung" },
        { name: "Satzung", href: "/der-club/satzung" },
        { name: "Sponsoring", href: "/der-club/sponsoring" },
        { name: "Unser Förderverein", href: "/der-club/foerderverein" },
        { name: "Platzordnung", href: "/der-club/platzordnung" },
      ],
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Aktuelles",
      href: "/aktuelles",
      submenu: [
        { name: "Veranstaltungen", href: "/aktuelles/veranstaltungen" },
        { name: "Crowdfunding", href: "/aktuelles/crowdfunding" },
        { name: "Projekte", href: "/aktuelles/projekte" },
        { name: "Tiebreaking News", href: "/aktuelles/tiebreaking-news" },
        { name: "Pressemeldungen", href: "/aktuelles/pressemeldungen" },
        { name: "Tennis-Info Heft", href: "/aktuelles/tennis-info-heft" },
        { name: "Ansprechpartner", href: "/aktuelles/ansprechpartner" },
      ],
    },
    {
      name: "Mannschaften",
      href: "/mannschaften",
      submenu: [
        { name: "Jugend", href: "/mannschaften/jugend" },
        { name: "Damen", href: "/mannschaften/damen" },
        { name: "Herren", href: "/mannschaften/herren" },
        { name: "Senioren", href: "/mannschaften/senioren" },
        { name: "Regelwerk", href: "/mannschaften/regelwerk" },
      ],
    },
    {
      name: "Turniere",
      href: "/turniere",
      submenu: [
        { name: "Schwarz-Gelb-Cup", href: "/turniere/schwarz-gelb-cup" },
        { name: "Rhein-Neckar Open", href: "/turniere/rhein-neckar-open" },
        { name: "Anmeldung", href: "/turniere/anmeldung" },
      ],
    },
    {
      name: "Training",
      href: "/training",
      submenu: [
        { name: "Unsere Trainer", href: "/training/unsere-trainer" },
        {
          name: "Tennisschule PTS Kukaras",
          href: "/training/tennisschule-pts-kukaras",
        },
        {
          name: "Tennisschule Seibold",
          href: "/training/tennisschule-seibold",
        },
      ],
    },
    {
      name: "Gastronomie",
      href: "/gastronomie",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-tennis-black text-tennis-yellow py-2 px-4 text-sm border-b border-tennis-yellow/20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm text-center">
                  Restaurant: 0174-6808685 | Vereinshotline: 06221-4337096
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">
                  tennis@schwarzgelb-heidelberg.de
                </span>
              </div>
            </div>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/tc.schwarzgelb.3"
                className="hover:text-white transition-colors text-xs sm:text-sm"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/sgheidelberg"
                className="hover:text-white transition-colors text-xs sm:text-sm"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                className="hover:text-white transition-colors text-xs sm:text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-tennis-yellow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center justify-center flex-1 lg:flex-none lg:justify-start">
              <a href="/">
                <img
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg"
                  alt="TC Schwarz-Gelb Heidelberg e.V."
                  className="h-12 sm:h-16 md:h-20 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.submenu ? (
                      <>
                        <a
                          href={item.href}
                          className="flex items-center space-x-1 px-4 py-3 text-tennis-black hover:text-tennis-yellow hover:bg-tennis-black/5 transition-all duration-200 font-medium text-sm xl:text-base rounded-md"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                        </a>
                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white border-2 border-tennis-yellow shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-60">
                          <div className="p-2">
                            <a
                              href={item.href}
                              className="block px-4 py-3 text-tennis-black hover:bg-tennis-yellow hover:text-tennis-black font-semibold border-b border-tennis-yellow/20 mb-2 rounded-md transition-colors duration-200"
                              style={{ fontFamily: "Arial, sans-serif" }}
                            >
                              {item.name} Übersicht
                            </a>
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-tennis-black/80 hover:bg-tennis-yellow/20 hover:text-tennis-black rounded-md text-sm transition-colors duration-200"
                                style={{ fontFamily: "Arial, sans-serif" }}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-tennis-black hover:text-tennis-yellow hover:bg-tennis-black/5 transition-all duration-200 font-medium text-sm xl:text-base rounded-md"
                        style={{ fontFamily: "Arial, sans-serif" }}
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:block">
              <Button
                className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-6 py-3 text-sm xl:text-base transition-all duration-300"
                style={{ fontFamily: "Arial, sans-serif" }}
                onClick={() =>
                  window.open(
                    "https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//",
                    "_blank"
                  )
                }
              >
                Platz reservieren
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="p-2 text-tennis-black hover:text-tennis-yellow transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t-2 border-tennis-yellow bg-tennis-black/5">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="group">
                        <div className="flex items-center justify-between">
                          <a
                            href={item.href}
                            className="flex-1 py-4 px-4 text-tennis-black hover:bg-tennis-yellow hover:text-tennis-black font-semibold text-lg transition-colors rounded-md"
                            style={{ fontFamily: "Arial, sans-serif" }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name} Übersicht
                          </a>
                          <button
                            className="p-4 text-tennis-black hover:text-tennis-yellow transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              const submenu = e.currentTarget.nextElementSibling;
                              if (submenu) {
                                submenu.classList.toggle('hidden');
                              }
                            }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="hidden bg-tennis-yellow/10 rounded-md ml-4 mr-4 mb-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-3 px-6 text-tennis-black/80 hover:bg-tennis-yellow hover:text-tennis-black text-base transition-colors rounded-md"
                              style={{ fontFamily: "Arial, sans-serif" }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-4 px-4 text-tennis-black hover:bg-tennis-yellow hover:text-tennis-black font-semibold text-lg transition-colors rounded-md"
                        style={{ fontFamily: "Arial, sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold w-full mt-4 py-4 text-lg transition-all duration-300"
                  style={{ fontFamily: "Arial, sans-serif" }}
                  onClick={() => {
                    window.open(
                      "https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//",
                      "_blank"
                    );
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
