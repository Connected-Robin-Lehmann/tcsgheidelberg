
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Aktuelles = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">
                Aktuelle Termine 2025 in unserem Verein
              </h1>
              
              <div className="space-y-4 mb-8">
                <p className="text-sm">
                  <strong>08.09.-12.09.2025 Sommerferien Tenniscamp, Anmeldung und Info bei </strong>
                  <a href="mailto:tennis@kukaras.de" className="text-red-600 underline hover:text-red-700">
                    A. Kukaras
                  </a>
                </p>
                <p className="text-sm">
                  <strong>12.09.-14.09.2025 Traglufthallenaufbau</strong>
                </p>
                <p className="text-sm">
                  <strong>13.09.-14.09.2025 Badische Mannschaftsmeisterschaften U12w</strong>
                </p>
                <p className="text-sm">
                  <strong>22.09.2025 Beginn Wintertraining, Anmeldung über </strong>
                  <a 
                    href="https://www.sportision.de/club/kukaras-professional-tennis-1" 
                    className="text-red-600 underline hover:text-red-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sportision
                  </a>
                </p>
                <p className="text-sm">
                  <strong>12.10.2025 Mitgliederversammlung um 17 Uhr</strong>
                </p>
                <p className="text-sm">
                  <strong>18.10.2025 Putzete ab 10 Uhr</strong>
                </p>
                <p className="text-sm">
                  <strong>21.11.2025 ab 19 Uhr Gansessen wird Thanksgiving – Truthahnessen in der Rose (Kirchheim)</strong>
                </p>
                <p className="text-sm">
                  <strong>Alle weiteren Termine unter </strong>
                  <a href="/aktuelles/veranstaltungen" className="text-red-600 underline hover:text-red-700">
                    <strong>Veranstaltungen</strong>
                  </a>
                </p>
              </div>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  Scheine für Vereine 2025 – Dank an alle Mitsammler!
                </h3>
                <p className="text-sm mb-4">
                  Durch eure Mithilfe haben wir über die Sammelaktion ‚Scheine für Vereine' 1.679 Scheine 
                  gesammelt und konnten diese gegen acht neue Anzeigetafeln einlösen – ganz herzlichen Dank 
                  an alle, die fleißig mitgesammelt haben!
                </p>
                <div className="flex gap-4 mb-6">
                  <img 
                    src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/07/ScheineFuerVereineAktion-211x300.jpg" 
                    alt="Scheine für Vereine Aktion" 
                    className="w-48 h-auto rounded-lg shadow-md"
                  />
                  <img 
                    src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2025/07/ScheineFuerVereine2025-219x300.jpg" 
                    alt="Scheine für Vereine 2025" 
                    className="w-48 h-auto rounded-lg shadow-md"
                  />
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">Crowdfunding-Initiative</h3>
                <p className="text-sm">
                  Beim Crowdfunding finanziert ein einzelner oder mehrere (die „Crowd") mit kleinen oder auch 
                  größeren individuellen Beträgen ein Projekt für einen guten Zweck. Diese Idee haben wir auch 
                  in unserem Verein zur Verbesserung und Verschönerung unserer Tennis-Infrastruktur aufgenommen. 
                  Vereinsmitglieder, aber auch Mannschaften, Familien und beliebige „Crowds" können für sie 
                  wichtige Maßnahmen in unserem Verein unterstützen. Zur Übersicht der laufenden und abgeschlossen 
                  Projekte{' '}
                  <a href="/aktuelles/crowdfunding" className="text-gray-800 underline hover:text-gray-600">
                    <strong>hier klicken</strong>
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-bold mb-4">Großprojekte & Vereinsvorhaben</h3>
                <p className="text-sm">
                  Innovative und infrastrukturelle Großprojekte, die nur mittelbar den Tennissport direkt betreffen, 
                  stellen viele Anforderungen an unseren TC Schwarz-Gelb Heidelberg e.V.. Zur Übersicht der geplanten 
                  und laufenden Vereinsvorhaben{' '}
                  <a href="/aktuelles/projekte" className="text-gray-800 underline hover:text-gray-600">
                    <strong>hier klicken</strong>
                  </a>
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4">Tie-Break(ing)News</h3>
                <p className="text-sm">
                  Aktuelles rund um den Sport, aber auch geplante Veranstaltungen und neue Entwicklungen und 
                  Planungen im und rund um den Club teilen wir als Vorstand in unserem aktuellen Newsletter 
                  „Tie-Breaking-News" mit. Zum aktuellen und zum Archiv{' '}
                  <a href="/aktuelles/tiebreaking-news" className="text-gray-800 underline hover:text-gray-600">
                    <strong>hier klicken</strong>
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Aktuelles;
