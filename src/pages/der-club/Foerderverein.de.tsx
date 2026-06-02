import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Heart,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  CreditCard,
} from "lucide-react";
import SupportCard from "@/components/SupportCard";

const FoerdervereinDE = () => {
  const boardMembers = [
    { position: "1. Vorsitzender", name: "Matthias Slawik" },
    { position: "Schatzmeister", name: "Nodir Yunuskhodjaev" },
    { position: "Beisitzer Sponsoring", name: "Katharina Kukaras" },
    { position: "Beisitzer Sport", name: "Aleksandar Kukaras" },
  ];

  const supportOptions = [
    {
      icon: <Users className="h-8 w-8 text-tennis-yellow" />,
      title: "Vereinsmitglied im Förderverein",
      description:
        "Der Mitgliederbeitrag im Förderverein beträgt mindestens 25 € pro Jahr, höhere Beträge sind möglich und können von Ihnen selbst festgelegt werden.",
      action: "Beitrittserklärung herunterladen",
      href: "/downloads/Foerderverein-Beitrittserklaerung-2026.pdf",
    },
    {
      icon: <Award className="h-8 w-8 text-tennis-yellow" />,
      title: "Über den Förderverein",
      description:
        "Der TC Schwarz-Gelb Heidelberg gehört zu den erfolgreichsten Tennisvereinen der Region. Wir sind eine große Tennisfamilie aus fast 600 Mitglieder (Anfänger bis Leistungssportler), mit 35% Jugendanteil, haben 10 eigene Plätzen, 5 davon mit Flutlicht, und sind stolz auf unsere erfolgreiche Vereinsgeschichte. Mit unserem Förderverein haben wir das Ziel, den Tennissport in Heidelberg zu fördern und die sportliche Entwicklung unserer jungen Talente voranzutreiben. Sprechen Sie uns bei Fragen und Interesse gerne an.",
      action: "Über den Förderverein",
      href: "/downloads/Foerderverein-Infos-Allgemein-2026.pdf",
      contactLabel: "Ansprechpartner:",
      contactName: "Katharina Kukaras",
      contactEmail: "katharina.kukaras@schwarzgelb-heidelberg.de",
    },
    {
      icon: <Heart className="h-8 w-8 text-tennis-yellow" />,
      title: "Sponsor oder Mäzen werden",
      description:
        "Unterstützen Sie uns als Sponsor, als Mäzen oder als ehrenamtliche Helfer. Ohne Ihre Hilfe können wir die sportliche Zukunft unserer Talente nicht sichern und den Erfolg unseres Vereins nicht fortsetzen. Ihre Unterstützung ermöglicht es uns, jungen Menschen die Möglichkeit zu geben, ihr Potenzial zu entfalten und in einer unterstützenden Gemeinschaft ihre sportlichen Ziele zu erreichen.",
      action: "Sponsoring, Werbe- und Fördermöglichkeiten",
      href: "/downloads/Foerderverein-Werbung-Sponsoring-2026.pdf",
    },
  ];

  const workAreas = [
    "Unterstützung der hochklassig spielenden Mannschaften wie z.B. der 1. Damenmannschaft",
    "Unterstützung eigener Talente durch das bestehende Fördersystem des TC SG Heidelberg",
    "Förderung der Anlage als 'Visitenkarte' des Tennisclubs",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                Gemeinnütziger Verein
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Unser Förderverein
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wenn Unterstützung noch viel weiter geht...
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8">
                WIR ÜBER UNS
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Der TC Schwarz Gelb Heidelberg ist seit Jahren einer der
                  erfolgreichsten Vereine im Bereich Tennis in Heidelberg. Nicht
                  alles, was durchgeführt werden muss, um das komplexe Gebilde
                  und insbesondere den Leistungssport und die Talentförderung
                  qualitativ hochwertig aufrechtzuerhalten, kann alleine durch
                  die Mitgliedsbeiträge finanziert werden.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Der Verein zur Förderung des TC Schwarz Gelb Heidelberg, kurz:
                  „Förderverein" genannt, hat sich aus diesem Grund das Ziel
                  gesetzt, den TC Schwarz Gelb Heidelberg durch finanzielle und
                  materielle Hilfe bei der Verwirklichung spezieller, insb.
                  sportlicher Vorhaben zu unterstützen.
                </p>

                <div className="bg-tennis-yellow/10 rounded-2xl p-6">
                  <p className="text-tennis-black font-semibold">
                    Der Förderverein ist als gemeinnütziger Verein anerkannt und
                    in das Vereinsregister eingetragen.
                  </p>
                </div>
              </div>

              {/* Work Areas */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Unsere Arbeitsschwerpunkte
                </h3>
                <div className="space-y-4">
                  {workAreas.map((area, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-4 mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{area}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-tennis-black rounded-2xl p-8 text-white">
                <p className="leading-relaxed mb-4">
                  Als einer der ältesten Heidelberger Vereine engagieren wir uns
                  seit langem für die Jugendförderung und tragen zu einer
                  vielseitigen Sportkultur in unserer Stadt bei. Schon Boris
                  Becker spielte im Alter von 14-16 Jahren für unsere
                  Herrenmannschaft bevor er 1985 als jüngster Wimbledon-Sieger
                  aller Zeiten Tennisgeschichte schrieb.
                </p>
                <p className="leading-relaxed">
                  Das Ziel unseres Fördervereins ist es, auch weiterhin auf den
                  eigenen Nachwuchs zu setzen und mit passenden Leistungsträgern
                  der Region die Mannschaften unseres Vereins zu verstärken.
                </p>
              </div>
            </div>
          </div>

          {/* Support Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-tennis-black text-center mb-12">
              UNTERSTÜTZEN KÖNNEN SIE UNS ALS:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <SupportCard
                  key={index}
                  {...option}
                  readMoreLabel="Weiterlesen"
                  readLessLabel="Weniger anzeigen"
                />
              ))}
            </div>
          </div>

          {/* Chairman Message */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-tennis-yellow rounded-full flex items-center justify-center mr-6">
                  <span className="text-tennis-black font-bold text-xl">
                    MS
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-tennis-black">
                    Matthias Slawik
                  </h3>
                  <p className="text-gray-600">
                    1. Vorsitzender Förderverein Schwarz-Gelb Heidelberg e.V.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  „Der Förderverein arbeitet mit den Mitteln aus sportbezogenen
                  Spenden und Sponsoring. Wir im Förderverein freuen uns deshalb
                  sehr über neue Mitglieder. Darüber hinaus kann jeder über den
                  Förderverein durch Spenden und Sponsoring auch gezielt oder
                  zweckgebunden ökonomisch den Leistungssport bei Schwarz-Gelb
                  und unsere Spieler einzeln fördern."
                </p>
              </div>

              <p className="text-tennis-black font-semibold">
                Ich freue mich auf Ihre / Eure Kontaktaufnahme!
                <br />
                Euer Matthias
              </p>
            </div>
          </div>

          {/* Board Members */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-tennis-black mb-8 text-center">
                Unser Förderverein – der neue Vorstand (seit der Wahl am
                08.03.2026)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {boardMembers.slice(0, 2).map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 text-center flex flex-col justify-center"
                  >
                    <h4 className="font-bold text-tennis-black mb-2">
                      {member.position}
                    </h4>
                    <p className="text-gray-700">{member.name}</p>
                  </div>
                ))}
                <div className="bg-gray-50 rounded-xl overflow-hidden md:col-span-2 lg:col-span-1 lg:row-span-2">
                  <img
                    src="/images/foerderverein/vorstand-portrait.jpg"
                    alt="Vorstand des Fördervereins TC Schwarz-Gelb Heidelberg"
                    className="w-full h-full object-cover"
                  />
                </div>
                {boardMembers.slice(2).map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 text-center flex flex-col justify-center"
                  >
                    <h4 className="font-bold text-tennis-black mb-2">
                      {member.position}
                    </h4>
                    <p className="text-gray-700">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-lg border-4 border-tennis-yellow/20 p-8">
              <h3 className="text-2xl font-bold text-tennis-black mb-6">
                KONTAKTAUFNAHME
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-tennis-yellow mr-3" />
                  <a
                    href="mailto:Foerderverein@schwarzgelb-heidelberg.de"
                    className="text-gray-700 hover:text-tennis-black"
                  >
                    Foerderverein@schwarzgelb-heidelberg.de
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-tennis-yellow mr-3 mt-1" />
                  <div className="text-gray-700">
                    <div>Förderverein TC Schwarz Gelb Heidelberg e.V.</div>
                    <div>Matthias Slawik</div>
                    <div>Bergstrasse 76 a</div>
                    <div>69120 Heidelberg</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-tennis-black rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                Bankverbindung
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-tennis-yellow mr-3" />
                  <div>
                    <div>Volksbank Heidelberg-Neckartal eG</div>
                    <div className="font-mono">
                      DE26 6729 1000 0149 6109 01
                    </div>
                    <div className="font-mono text-sm text-gray-300 mt-1">
                      BIC: GENODE61NGD
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-tennis-yellow/20 rounded-xl">
                <p className="text-sm">
                  Förderverein TC Schwarz Gelb Heidelberg e.V.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoerdervereinDE;
