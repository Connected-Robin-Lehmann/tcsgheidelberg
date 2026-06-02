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

const FoerdervereinEN = () => {
  const boardMembers = [
    { position: "1st Chairman", name: "Matthias Slawik" },
    { position: "Treasurer", name: "Nodir Yunuskhodjaev" },
    { position: "Board Member Sponsoring", name: "Katharina Kukaras" },
    { position: "Board Member Sports", name: "Aleksandar Kukaras" },
  ];

  const supportOptions = [
    {
      icon: <Users className="h-8 w-8 text-tennis-yellow" />,
      title: "Association Member in the Support Association",
      description:
        "The membership fee in the support association is at least €25 per year. Higher amounts are possible and can be determined by you.",
      action: "Download membership application",
      href: "/downloads/Foerderverein-Beitrittserklaerung-2026.pdf",
    },
    {
      icon: <Award className="h-8 w-8 text-tennis-yellow" />,
      title: "About the Support Association",
      description:
        "TC Schwarz-Gelb Heidelberg is one of the most successful tennis clubs in the region. We are a large tennis family of almost 600 members (from beginners to competitive players), with a 35% youth share, 10 of our own courts, 5 of them with floodlights, and we are proud of our successful club history. With our support association, our goal is to promote tennis in Heidelberg and to advance the sporting development of our young talents. Feel free to contact us with any questions or interest.",
      action: "About the Support Association",
      href: "/downloads/Foerderverein-Infos-Allgemein-2026.pdf",
      contactLabel: "Contact:",
      contactName: "Katharina Kukaras",
      contactEmail: "katharina.kukaras@schwarzgelb-heidelberg.de",
    },
    {
      icon: <Heart className="h-8 w-8 text-tennis-yellow" />,
      title: "Become a Sponsor or Patron",
      description:
        "Support us as a sponsor, as a patron or as a volunteer. Without your help we cannot secure the sporting future of our talents and continue the success of our club. Your support enables us to give young people the opportunity to develop their potential and achieve their sporting goals in a supportive community.",
      action: "Sponsoring, advertising and support options",
      href: "/downloads/Foerderverein-Werbung-Sponsoring-2026.pdf",
    },
  ];

  const workAreas = [
    "Support of high-level teams such as the 1st women's team",
    "Support of our own talents through the existing funding system of TC SG Heidelberg",
    "Development of the facility as the ‘business card’ of the tennis club",
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
                Non-profit Association
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Our Support Association
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When support goes even further…
            </p>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8">
                ABOUT US
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  For many years, TC Schwarz Gelb Heidelberg has been one of the
                  most successful tennis clubs in Heidelberg. Not everything
                  that needs to be done to maintain the complex structure—and
                  especially high-performance sports and talent development at a
                  high quality—can be financed solely through membership fees.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  For this reason, the Association for the Promotion of TC
                  Schwarz Gelb Heidelberg, referred to simply as the “Support
                  Association,” has set itself the goal of supporting TC Schwarz
                  Gelb Heidelberg in the realization of special, particularly
                  athletic projects through financial and material assistance.
                </p>

                <div className="bg-tennis-yellow/10 rounded-2xl p-6">
                  <p className="text-tennis-black font-semibold">
                    The support association is recognized as a non-profit
                    organization and is registered in the association register.
                  </p>
                </div>
              </div>

              {/* Work Areas */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Our Main Areas of Work
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
                  As one of the oldest Heidelberg clubs, we have long been
                  committed to youth development and contribute to a diverse
                  sports culture in our city. Even Boris Becker played for our
                  men's team at the age of 14–16 before he made tennis history
                  in 1985 as the youngest Wimbledon champion of all time.
                </p>
                <p className="leading-relaxed">
                  The goal of our support association is to continue to rely on
                  our own young talents and strengthen our teams with suitable
                  top performers from the region.
                </p>
              </div>
            </div>
          </div>

          {/* Support Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-tennis-black text-center mb-12">
              YOU CAN SUPPORT US AS:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <SupportCard
                  key={index}
                  {...option}
                  readMoreLabel="Read more"
                  readLessLabel="Show less"
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
                    1st Chairman Support Association Schwarz-Gelb Heidelberg
                    e.V.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  “The support association works with funds from sports-related
                  donations and sponsorships. We in the support association are
                  therefore very happy about new members. In addition, anyone
                  can economically support high-performance sports at
                  Schwarz-Gelb, or our players individually, through donations
                  and sponsorship—directly or for a specific purpose.”
                </p>
              </div>

              <p className="text-tennis-black font-semibold">
                I look forward to hearing from you!
                <br />
                Yours, Matthias
              </p>
            </div>
          </div>

          {/* Board Members */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-tennis-black mb-8 text-center">
                Our Support Association – the New Board (since the election on
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
                    src={vorstandImage.url}
                    alt="Board of the Support Association TC Schwarz-Gelb Heidelberg"
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
                CONTACT
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
                    <div>
                      Support Association TC Schwarz Gelb Heidelberg e.V.
                    </div>
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
                Bank Details
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
                  Support Association TC Schwarz Gelb Heidelberg e.V.
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

export default FoerdervereinEN;
