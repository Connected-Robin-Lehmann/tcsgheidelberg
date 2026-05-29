import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-tennis-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <img
              src="/images/Logo1.jpg"
              alt="TC Schwarz-Gelb Logo"
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-tennis-yellow mb-4">
              TC Schwarz-Gelb Heidelberg e.V.
            </h3>
            <p className="text-gray-300">
              Tradition trifft Moderne - <br />
              Ihr Tennisverein im Herzen Heidelbergs
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-tennis-yellow mb-4">
              {t("footer.contact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start text-gray-300 text-sm sm:text-base">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-tennis-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <div>Restaurant: 06221-7152277</div>
                </div>
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-tennis-yellow flex-shrink-0" />
                <span className="break-all">
                  vorstand@schwarzgelb-heidelberg.de
                </span>
              </div>
              <div className="flex items-start text-gray-300 text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-tennis-yellow mt-0.5 flex-shrink-0" />
                <div>
                  <div>Tennisclub Schwarz-Gelb</div>
                  <div>Heidelberg e.V.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-tennis-yellow mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ssl.forumedia.eu/schwarzgelb-heidelberg.net//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-tennis-yellow transition-colors"
                >
                  Platzreservierung
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-tennis-yellow transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/der-club/mitgliedschaft"
                  className="text-gray-300 hover:text-tennis-yellow transition-colors"
                >
                  Mitgliedschaft
                </a>
              </li>
              <li>
                <a
                  href="/anfahrt"
                  className="text-gray-300 hover:text-tennis-yellow transition-colors"
                >
                  Anfahrt
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-tennis-yellow mb-4">
              {t("footer.followUs")}
            </h3>
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
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                className="bg-gray-800 p-3 rounded-full hover:bg-tennis-yellow hover:text-tennis-black transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              TC Schwarz-Gelb Heidelberg e.V.{" "}
              {t("footer.allRightsReserved")}
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/impressum"
                className="text-gray-400 hover:text-tennis-yellow text-sm transition-colors"
              >
                {t("header.legal.imprint")}
              </a>
              <a
                href="/datenschutz"
                className="text-gray-400 hover:text-tennis-yellow text-sm transition-colors"
              >
                {t("header.legal.privacy")}
              </a>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <a
              href="https://connected-webdesign.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-tennis-yellow hover:text-white transition-colors font-medium"
            >
              Website managed by Connected Webdesign
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
