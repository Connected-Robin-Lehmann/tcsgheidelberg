import React, { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: t("header.home"),
      href: "/",
    },
    {
      name: t("header.club"),
      href: "/der-club",
      submenu: [
        { name: t("header.board"), href: "/der-club/vorstand" },
        { name: t("header.tradition"), href: "/der-club/tradition" },
        { name: t("header.tennisCourts"), href: "/der-club/tennisplaetze" },
        { name: t("header.membership"), href: "/der-club/mitgliedschaft" },
        { name: t("header.membershipFees"), href: "/der-club/beitragsordnung" },
        { name: t("header.statute"), href: "/der-club/satzung" },
        { name: t("header.sponsors"), href: "/der-club/sponsoring" },
        {
          name: t("header.supportingAssociation"),
          href: "/der-club/foerderverein",
        },
        { name: t("header.courtRules"), href: "/der-club/platzordnung" },
      ],
    },
    {
      name: t("header.info"),
      href: "/faq",
    },
    {
      name: t("header.news.current"),
      href: "/aktuelles",
      submenu: [
        { name: t("header.news.news"), href: "/aktuelles/nachrichten" },
        { name: t("header.events"), href: "/aktuelles/veranstaltungen" },
        { name: t("header.crowdfunding"), href: "/aktuelles/crowdfunding" },
        { name: t("header.projects"), href: "/aktuelles/projekte" },
        {
          name: t("header.news.tiebreaking"),
          href: "/aktuelles/tiebreaking-news",
        },
        {
          name: t("header.news.pressReleases"),
          href: "/aktuelles/pressemeldungen",
        },
        {
          name: t("header.tennisInfoBooklet"),
          href: "/aktuelles/tennis-info-heft",
        },
        { name: t("header.contacts"), href: "/aktuelles/ansprechpartner" },
      ],
    },
    {
      name: t("header.teams"),
      href: "/mannschaften",
      submenu: [
        { name: t("header.youth"), href: "/mannschaften/jugend" },
        { name: t("header.regulations"), href: "/mannschaften/regelwerk" },
      ],
    },
    {
      name: t("header.tournaments"),
      href: "/turniere",
    },
    {
      name: t("header.training"),
      href: "/training",
      submenu: [
        {
          name: t("header.tennisSchoolPTS"),
          href: "/training/tennisschule-pts-kukaras",
        },
        {
          name: t("header.tennisSchoolSeibold"),
          href: "/training/tennisschule-seibold",
        },
      ],
    },
    {
      name: t("header.gastronomy"),
      href: "/gastronomie",
    },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile for cleaner look */}
      <div className="hidden md:block bg-tennis-black text-tennis-yellow py-2 px-4 text-sm border-b border-tennis-yellow/20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">
                  Restaurant: 0174-6808685 | Vereinshotline: 06221-4337096
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">
                  tennis@schwarzgelb-heidelberg.de
                </span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tc.schwarzgelb.3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/sgheidelberg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors text-sm"
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
              <a href="/" onClick={closeDropdowns}>
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
                  <li key={item.name} className="relative">
                    {item.submenu ? (
                      <div className="group">
                        <a
                          href={item.href}
                          className="flex items-center space-x-1 px-4 py-3 text-tennis-black hover:text-tennis-yellow hover:bg-tennis-black transition-all duration-200 font-medium text-sm xl:text-base rounded-md"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                        </a>
                        {/* Desktop Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white border-2 border-tennis-yellow shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60]">
                          <div className="p-2">
                            <a
                              href={item.href}
                              className="block px-4 py-3 text-tennis-black hover:bg-tennis-yellow hover:text-tennis-black font-semibold border-b border-tennis-yellow/20 mb-2 rounded-md transition-colors duration-200"
                            >
                              {item.name} {t("header.overview")}
                            </a>
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-tennis-black/80 hover:bg-tennis-yellow/20 hover:text-tennis-black rounded-md text-sm transition-colors duration-200"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-tennis-black hover:text-tennis-yellow hover:bg-tennis-black transition-all duration-200 font-medium text-sm xl:text-base rounded-md"
                      >
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Switcher & CTA Button */}
            <div className="hidden xl:flex items-center gap-2">
              <LanguageSwitcher />
              <Button
                className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold px-6 py-3 text-sm xl:text-base transition-all duration-300"
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

            {/* Mobile Menu Button & Language Switcher */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className="p-2 text-tennis-black hover:text-tennis-yellow transition-colors"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setOpenDropdown(null);
                }}
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
            <div className="lg:hidden py-4 border-t-2 border-tennis-yellow bg-white shadow-lg max-h-[70vh] overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <a
                            href={item.href}
                            className="flex-1 py-4 px-4 text-tennis-black hover:bg-tennis-yellow hover:text-tennis-black font-semibold text-lg transition-colors rounded-md"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {item.name} Übersicht
                          </a>
                          <button
                            className="p-4 text-tennis-black hover:text-tennis-yellow transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDropdownToggle(item.name);
                            }}
                          >
                            <ChevronDown
                              className={`h-5 w-5 transform transition-transform duration-200 ${
                                openDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {/* Mobile Dropdown */}
                        {openDropdown === item.name && (
                          <div className="bg-tennis-yellow/10 rounded-md ml-4 mr-4 mb-2 border border-tennis-yellow/30">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-4 px-6 text-tennis-black/80 hover:bg-tennis-yellow hover:text-tennis-black text-lg transition-colors rounded-md border-b border-tennis-yellow/20 last:border-b-0"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-4 px-4 text-tennis-black hover:bg-tennis-yellow hover:text-tennis-black font-semibold text-lg transition-colors rounded-md"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold w-full mt-4 py-4 text-lg transition-all duration-300"
                  onClick={() => {
                    window.open(
                      "https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//",
                      "_blank"
                    );
                    setIsMenuOpen(false);
                    setOpenDropdown(null);
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
