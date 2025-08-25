
import React, { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      <div className="bg-tennis-black text-white py-2 px-4 text-sm">
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
                className="hover:text-tennis-yellow transition-colors text-xs sm:text-sm"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/sgheidelberg"
                className="hover:text-tennis-yellow transition-colors text-xs sm:text-sm"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                className="hover:text-tennis-yellow transition-colors text-xs sm:text-sm"
              >
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
              <a href="/">
                <img
                  src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/06/Logo1.jpg"
                  alt="TC Schwarz-Gelb Heidelberg e.V."
                  className="h-12 sm:h-16 md:h-20 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger
                          className="nav-link text-sm xl:text-base bg-transparent hover:bg-accent hover:text-accent-foreground"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-[60]">
                          <div className="grid w-[280px] gap-2 p-4 bg-white shadow-lg border">
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-medium border-b border-gray-200"
                                style={{ fontFamily: "Arial, sans-serif" }}
                              >
                                {item.name} Übersicht
                              </a>
                            </NavigationMenuLink>
                            {item.submenu.map((subItem) => (
                              <NavigationMenuLink key={subItem.name} asChild>
                                <a
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  style={{ fontFamily: "Arial, sans-serif" }}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.name}
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className="nav-link text-sm xl:text-base inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          {item.name}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button - Hidden when mobile menu is available */}
            <div className="hidden xl:block">
              <Button
                variant="default"
                className="btn-hero text-sm xl:text-base"
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
                className="p-2"
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
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button
                            className="nav-link py-4 w-full text-left flex items-center justify-between text-lg font-medium"
                            style={{ fontFamily: "Arial, sans-serif" }}
                          >
                            {item.name}
                            <ChevronDown className="h-5 w-5" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                          className="w-80 bg-white shadow-lg border z-[60] max-h-96 overflow-y-auto"
                          align="start"
                        >
                          <DropdownMenuItem asChild>
                            <a
                              href={item.href}
                              className="w-full py-4 px-6 text-lg font-medium border-b border-gray-200"
                              style={{ fontFamily: "Arial, sans-serif" }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name} Übersicht
                            </a>
                          </DropdownMenuItem>
                          {item.submenu.map((subItem) => (
                            <DropdownMenuItem key={subItem.name} asChild>
                              <a
                                href={subItem.href}
                                className="w-full py-3 px-6 text-base"
                                style={{ fontFamily: "Arial, sans-serif" }}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <a
                        href={item.href}
                        className="nav-link py-4 block text-lg font-medium"
                        style={{ fontFamily: "Arial, sans-serif" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <Button
                  variant="default"
                  className="btn-hero w-full mt-4 py-4 text-lg"
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
