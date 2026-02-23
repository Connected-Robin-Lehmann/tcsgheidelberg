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

const FAQDE = () => {
  const faqs = [
    {
      icon: <Users className="h-6 w-6 text-tennis-yellow" />,
      question: "Wie kann ich im TC Schwarz-Gelb Mitglied werden?",
      answer:
        "Du hast Lust auf Tennis in toller Atmosphäre mitten in Heidelberg? Du möchtest selbst den Schläger erstmals oder nach vielen Jahren der Pause wieder in die Hand nehmen, um Ball und Gegner über den Platz zu treiben? Dann freuen wir uns auf dich als neues Mitglied in unserem Traditionsverein – Mitgliedsantrag ausfüllen und abschicken, schon bist du dabei! Freue dich auf Spaß am Spiel und neue Freunde – mit unseren vielen, unterschiedlich starken und ambitionierten Spielern stehen Dir in jedem Fall viele nette Menschen zur Seite, die den Tennissport genauso lieben wie Du! Für Familien, Jugendliche und Studenten haben wir ermäßigte Tarife. Auch bieten wir im ersten Jahr der Aufnahme bei Eintritt nach dem 15.07. ermäßigte Beträge bis zum Jahresende.",
      links: [
        {
          text: "Mitgliedsantrag (PDF)",
          url: "/downloads/Aufnahmeantrag-komplett-ab-2023.pdf",
        },
        {
          text: "Beitragsordnung",
          url: "/der-club/beitragsordnung",
        },
      ],
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-tennis-yellow" />,
      question: "Gibt es ein Probe-/Schnuppertraining?",
      answerJsx: (
        <p className="text-gray-700 leading-relaxed mb-6">
          Ansprechpartner zu Schnupperstunde, Trainingskosten und der sonstigen Organisation der Trainings sind die beiden Tennisschulen{" "}
          <Link to="/training/tennisschule-pts-kukaras" className="text-tennis-yellow font-semibold hover:underline">Kukaras</Link>
          {" "}und{" "}
          <Link to="/training/tennisschule-seibold" className="text-tennis-yellow font-semibold hover:underline">Seibold</Link>
          , siehe auch{" "}
          <Link to="/training" className="text-tennis-yellow font-semibold hover:underline">Training</Link>.
        </p>
      ),
    },
    {
      icon: <MapPin className="h-6 w-6 text-tennis-yellow" />,
      question:
        "Wo finde ich Informationen zu den Tennisplätzen/Spielmöglichkeiten im Sommer und Winter?",
      answerJsx: (
        <p className="text-gray-700 leading-relaxed mb-6">
          Im Sommer stehen dem Verein 10 Sandplätze zur Verfügung, davon sind fünf bei Flutlicht bis 22 Uhr bespielbar. Weitere Info, siehe{" "}
          <Link to="/der-club/tennisplaetze" className="text-tennis-yellow font-semibold hover:underline">Tennisplätze</Link>.
        </p>
      ),
    },
    {
      icon: <Calendar className="h-6 w-6 text-tennis-yellow" />,
      question: "Wie funktioniert die Platzreservierung?",
      answer: `Der Zugang zum Buchungssystem erfolgt von der Club-Webseite www.schwarzgelb-heidelberg.de 
  oder direkt über den Link https://ssl.forumedia.eu/schwarzgelb-heidelberg.net. Hier können mit jedem 
  internetfähigen Gerät Reservierungen vorgenommen und die aktuelle Belegung eingesehen werden. 
  Reservierungen können zusätzlich auch vor Ort am Clubhaus an einem Touchdisplay vorgenommen werden. 
  Das System steht selbstverständlich allen Mitgliedern kostenfrei zur Verfügung (es ist also nicht erforderlich, 
  die im System integrierte Guthabenfunktion zu nutzen). Online und auf dem Display am Clubhaus wird "real-time" 
  die aktuelle Belegung und Buchungssituation inklusive der Namen der Spieler angezeigt.`,
      details: [
        "Die Plätze BERK, 1 bis 4 und 6 bis 10 können im Sommer, sofern kein Training stattfindet, online von 8:00 Uhr bis 22:00 Uhr für freies Spielen gebucht werden",
        "Nach 18:00 Uhr stehen die Plätze vorzugsweise erwachsenen Mitgliedern zum Spiel miteinander oder mit ihren Kindern zur Verfügung",
        "Eine Platzbuchung nach 18:00 Uhr muss mindestens einen Erwachsenen oder einen Jugendlichen ab 16 Jahre umfassen",
        "Pro Spieler kann nur ein Slot pro Tag gebucht werden und auch immer nur für den aktuellen Tag",
        "Die Slots betragen immer pro Spieler 30 Minuten, beginnend jeweils zur vollen Stunde",
        "Externe Spieler, die nicht aktives Mitglied unseres Vereins sind, können keine Plätze buchen",
      ],
      accessInfo: {
        title: "Wie komme ich rein?",
        steps: [
          "Mitgliedsnummer (4-stellig) eingeben, z.B.: 001234 (00 und Mitgliedsnummer)",
          "Geburtsdatum ohne Punkte in acht Zahlen eingeben, z.B.: 12101985 (wenn Sie am 12.10.1985 geboren sind)",
          "Links auf das X gehen, Buchung auswählen, entsprechenden Platz auswählen und gewünschte Uhrzeit reservieren",
        ],
      },
    },
    {
      icon: <ExternalLink className="h-6 w-6 text-tennis-yellow" />,
      question: "Wo finde ich die Spieltage der einzelnen Mannschaften?",
      answer:
        "Die Vereinsinfo sowie alles rund um die einzelnen Begegnungen, Namentliche Meldungen der VereinsspielerInnen, die einzelnen Mannschaften und die LK-Vereinsübersicht findet sich unter dem Badischen Tennisverband auf NuLiga.",
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
                Häufige Fragen
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              FAQ
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um
              unseren Tennisclub
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
                Weitere Fragen?
              </h3>
              <p className="text-white mb-6">
                Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!
              </p>
              <a
                href="mailto:vorstand@schwarzgelb-heidelberg.de"
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>

          {/* Social Media / Instagram Section */}
          <div className="mt-16 bg-tennis-black rounded-2xl p-8 text-center">
            <Instagram className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Aktuelle Informationen
            </h3>
            <p className="text-white mb-6">
              Zudem finden sich aktuelle Informationen auf Instagram:
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
                Tennisschule Kukaras
              </a>
              <a
                href="https://www.instagram.com/tennisschule_seibold/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tennis-yellow text-tennis-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                Tennisschule Seibold
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQDE;
