import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download, Users, Heart, Trophy } from "lucide-react";

const MitgliedschaftDE = () => {
  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-tennis-yellow" />,
      title: "Gemeinschaft",
      description: "Neue Freunde finden und Teil einer Tennisfamilie werden",
    },
    {
      icon: <Heart className="h-8 w-8 text-tennis-yellow" />,
      title: "Tolle Atmosphäre",
      description: "Tennis spielen in entspannter und freundlicher Umgebung",
    },
    {
      icon: <Trophy className="h-8 w-8 text-tennis-yellow" />,
      title: "Vielfältiges Angebot",
      description: "Verschiedene Spielstärken und Ambitionslevel für jeden",
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
                Jetzt beitreten
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Mitgliedschaft
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Werden Sie Teil unserer Tennisfamilie im TC Schwarz-Gelb
              Heidelberg e.V.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-tennis-yellow/20 hover:border-tennis-yellow/40 transition-colors"
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <CardTitle className="text-tennis-black">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-12">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-tennis-black mb-8">
                Lust auf Tennis in toller Atmosphäre?
              </h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sie haben Lust auf Tennis in toller Atmosphäre mitten in
                  Heidelberg? Sie möchten selbst den Schläger erstmals oder nach
                  vielen Jahren der Pause wieder in die Hand nehmen um Ball und
                  Gegner über den Platz zu treiben? Dann freuen wir uns auf Sie
                  als neues Mitglied in unserem Traditionsverein.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Als neues Mitglied können Sie sich sicher sein, dass Sie nicht
                  nur Spaß am Spiel, sondern auch neue Freunde finden werden.
                  Mit unseren vielen, unterschiedlich starken und ambitionierten
                  Spielern stehen Ihnen in jedem Fall viele nette Menschen zur
                  Seite, die den Tennissport genauso lieben wie Sie!
                </p>
              </div>

              {/* Membership Info */}
              <div className="bg-tennis-yellow/10 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Beitragsinformationen
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    • Ermäßigte Tarife für Familien, Jugendliche und Studenten
                  </li>
                  <li>
                    • Ermäßigte Beträge bei Eintritt nach dem 15.7. bis
                    Jahresende
                  </li>
                  <li>
                    • Neue Beitragsordnung ab 01.01.2021 (beschlossen am
                    11.10.2020)
                  </li>
                  <li>
                    • Keine "Probe-" oder "Schnupper"-Mitgliedschaften verfügbar
                  </li>
                </ul>
              </div>

              {/* Payment Info */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-tennis-black mb-6">
                  Zahlungsmodalitäten
                </h3>
                <p className="text-gray-700 mb-4">
                  Wir empfehlen die Erteilung eines SEPA-Mandats zum Bankeinzug.
                  Andernfalls werden bei Selbstüberweisung gemäß Beitragsordnung
                  zusätzlich EUR 25,- als Bearbeitungsgebühr fällig.
                </p>
                <p className="text-gray-700 font-semibold">
                  Alle Beiträge sind stets in voller Höhe zu entrichten.
                  Ausnahmen von der geltenden Beitragsordnung oder sonstige
                  Vergünstigungen werden keine gewährt.
                </p>
              </div>

              {/* Infrastructure Fee */}
              <div className="bg-tennis-black rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold text-tennis-yellow mb-6">
                  Hinweis zur Infrastrukturabgabe
                </h3>
                <p className="mb-4">
                  Im Jahr 2023 werden zusätzlich (gemäß Beschluß der
                  Mitgliederversammlung vom 18.09.2022) einmalig EUR 20,- pro
                  aktivem erwachsenen Mitglied (25-65 Jahre alt) als
                  Infrastrukturabgabe erhoben.
                </p>
                <p>
                  Für alle Folgejahre (2024 ff.) entscheidet die
                  Mitgliederversammlung jährlich über eine eventuelle
                  Infrastrukturabgabe und deren Höhe.
                </p>
              </div>

              {/* Downloads */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold p-6 h-auto"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2021/01/Beitragsordnung-ab-2021-komplett.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Beitragsordnung (PDF)
                </Button>
                <Button
                  className="bg-tennis-yellow text-tennis-black hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow font-semibold p-6 h-auto"
                  onClick={() =>
                    window.open(
                      "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2023/01/Aufnahmeantrag-komplett-ab-2023.pdf",
                      "_blank"
                    )
                  }
                >
                  <Download className="h-5 w-5 mr-2" />
                  Aufnahmeantrag (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Existing Members Section */}
          <Card className="border-tennis-yellow/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tennis-black">
                Sie sind bereits Mitglied?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Fragen zur Änderung der Mitgliedschaft, zu Beitragsrechnungen
                und zu Änderungen der Stammdaten (etwa Adresse, Email,
                Bankverbindung, Telefonnummer etc.) teilen Sie uns bitte
                ausschließlich unter:
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="h-5 w-5 text-tennis-yellow" />
                <a
                  href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
                  className="font-bold text-tennis-black hover:text-tennis-yellow transition-colors"
                >
                  mitgliederservice@schwarzgelb-heidelberg.de
                </a>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-800 font-semibold">
                  Wichtig: Eine Kündigungs- bzw. Austrittserklärung muss dem
                  Vorstand spätestens zum Ablauf des 30.09. eines jeden Jahres
                  in Schriftform (Brief oder E-Mail) vorliegen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <a
              href="mailto:mitgliederservice@schwarzgelb-heidelberg.de"
              className="inline-block bg-tennis-yellow text-tennis-black px-8 py-4 rounded-full font-bold hover:bg-tennis-black hover:text-tennis-yellow border-2 border-tennis-yellow transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Jetzt Mitglied werden
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MitgliedschaftDE;
