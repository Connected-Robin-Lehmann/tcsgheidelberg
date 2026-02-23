import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Users,
  Calendar,
  MapPin,
  Download,
  ExternalLink,
  Instagram,
} from "lucide-react";

const FAQEN = () => {
  const faqs = [
    {
      icon: <Users className="h-6 w-6 text-tennis-yellow" />,
      question: "How can I become a member of TC Schwarz-Gelb?",
      answer:
        "Do you want to play tennis in a great atmosphere in the heart of Heidelberg? Would you like to pick up a racket for the first time or after many years of pause to chase the ball and your opponent across the court? Then we look forward to welcoming you as a new member to our traditional club – just fill out and submit the membership application, and you're in! Look forward to having fun and making new friends – with our many players of different levels and ambitions, you will definitely find nice people who love tennis as much as you do! We have reduced rates for families, youth and students. We also offer reduced fees until the end of the year for first-year members who join after July 15th.",
      links: [
        {
          text: "Membership Application (PDF)",
          url: "/downloads/Aufnahmeantrag-komplett-ab-2023.pdf",
        },
        {
          text: "Fee Schedule",
          url: "/der-club/beitragsordnung",
        },
      ],
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-tennis-yellow" />,
      question: "Is there a trial/taster training session?",
      answerJsx: (
        <p className="text-gray-700 leading-relaxed mb-6">
          The contacts for trial sessions, training costs and other training organization are the two tennis schools{" "}
          <Link to="/training/tennisschule-pts-kukaras" className="text-tennis-yellow font-semibold hover:underline">Kukaras</Link>
          {" "}and{" "}
          <Link to="/training/tennisschule-seibold" className="text-tennis-yellow font-semibold hover:underline">Seibold</Link>
          , see also{" "}
          <Link to="/training" className="text-tennis-yellow font-semibold hover:underline">Training</Link>.
        </p>
      ),
    },
    {
      icon: <MapPin className="h-6 w-6 text-tennis-yellow" />,
      question:
        "Where can I find information about tennis courts/playing opportunities in summer and winter?",
      answerJsx: (
        <p className="text-gray-700 leading-relaxed mb-6">
          In summer, the club has 10 clay courts available, five of which are floodlit and playable until 10 PM. For more info, see{" "}
          <Link to="/der-club/tennisplaetze" className="text-tennis-yellow font-semibold hover:underline">Tennis Courts</Link>.
        </p>
      ),
    },
    {
      icon: <Calendar className="h-6 w-6 text-tennis-yellow" />,
      question: "How does court reservation work?",
      answer: `Access to the booking system is via the club website www.schwarzgelb-heidelberg.de 
  or directly via the link https://ssl.forumedia.eu/schwarzgelb-heidelberg.net. Here reservations 
  can be made and current occupancy can be viewed with any internet-enabled device. Reservations 
  can also be made on-site at the clubhouse using a touch display. The system is of course available 
  to all members free of charge (so it is not necessary to use the credit function integrated into the 
  system). Online and on the display at the clubhouse, the current occupancy and booking situation 
  including player names is shown in real-time.`,
      details: [
        "Courts BERK, 1 to 4 and 6 to 10 can be booked online in summer from 8:00 AM to 10:00 PM for free play, provided no training is taking place",
        "After 6:00 PM, the courts are preferentially available for adult members to play with each other or with their children",
        "A court booking after 6:00 PM must include at least one adult or a youth aged 16 or older",
        "Only one slot per player per day can be booked, and only for the current day",
        "Slots are always 30 minutes per player, starting on the hour",
        "External players who are not active members of our club cannot book courts",
      ],
      accessInfo: {
        title: "How do I get in?",
        steps: [
          "Enter membership number (4 digits), e.g.: 001234 (00 and membership number)",
          "Enter date of birth without dots in eight numbers, e.g.: 12101985 (if you were born on October 12, 1985)",
          "Go to the X on the left, select booking, choose the corresponding court and reserve the desired time",
        ],
      },
    },
    {
      icon: <ExternalLink className="h-6 w-6 text-tennis-yellow" />,
      question: "Where can I find the match days of individual teams?",
      answer:
        "Club information as well as everything about individual matches, nominal registrations of club players, individual teams and the LK club overview can be found under the Baden Tennis Association on NuLiga.",
      links: [
        {
          text: "NuLiga - TC Schwarz-Gelb",
          url: "https://baden.liga.nu/cgi-bin/WebObjects/nuLigaTENDE.woa/wa/clubInfoDisplay?club=33129",
        },
      ],
    },
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
                Frequently Asked Questions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              FAQ
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here you will find answers to the most frequently asked questions about our tennis club
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20"
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4 mt-1">{faq.icon}</div>
                    <h3 className="text-2xl font-bold text-tennis-black">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="ml-10">
                    {faq.answerJsx ? faq.answerJsx : (
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {faq.answer}
                      </p>
                    )}

                    {faq.details && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-tennis-black mb-4">
                          Details:
                        </h4>
                        <ul className="space-y-2">
                          {faq.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {faq.accessInfo && (
                      <div className="bg-tennis-yellow/10 rounded-2xl p-6 mb-6">
                        <h4 className="text-lg font-semibold text-tennis-black mb-4">
                          {faq.accessInfo.title}
                        </h4>
                        <ol className="space-y-2">
                          {faq.accessInfo.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="bg-tennis-yellow text-tennis-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                {idx + 1}
                              </span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {faq.links && (
                      <div className="flex flex-wrap gap-4">
                        {faq.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target={
                              link.url.startsWith("http") ? "_blank" : "_self"
                            }
                            rel={
                              link.url.startsWith("http")
                                ? "noopener noreferrer"
                                : ""
                            }
                            className="inline-flex items-center bg-tennis-black text-tennis-yellow px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
              <MessageCircle className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                More Questions?
              </h3>
              <p className="text-white mb-6">
                Do you have more questions? Feel free to contact us!
              </p>
              <a
                href="mailto:vorstand@schwarzgelb-heidelberg.de"
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Social Media / Instagram Section */}
          <div className="mt-16 bg-tennis-black rounded-2xl p-8 text-center">
            <Instagram className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Current Information
            </h3>
            <p className="text-white mb-6">
              You can also find current information on Instagram:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/tc_schwarzgelb_heidelberg/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                TC SG Heidelberg
              </a>
              <a
                href="https://www.instagram.com/tennisakademiekukaras/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                Kukaras Tennis School
              </a>
              <a
                href="https://www.instagram.com/tennisschule_seibold/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                Seibold Tennis School
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQEN;
