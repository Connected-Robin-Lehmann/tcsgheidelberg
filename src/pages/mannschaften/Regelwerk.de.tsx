import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileDown } from "lucide-react";

const RegelwerkDE = () => {
  const documents = [
    {
      title: "ITF Tennisregeln",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/ITF-Tennisregeln.pdf",
    },
    {
      title: "BTV Wettspielordnung (WSpO)",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/BTV-Wettspielordnung.pdf",
    },
    {
      title: "DTB Empfehlungen für das Spiel ohne Schiedsrichter",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/DTB-Empfehlungen-für-das-Spiel-ohne-Schiedsrichter.pdf",
    },
    {
      title: "Regel-Präsentation für Medenspiele",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Regelpräsentation-für-Medenspiele.pdf",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Wichtige Regelwerke
          </h1>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Auch im Tennis gibt es ein festes Regelwerk. So sollte sich jeder
              Spieler einmal damit vertraut machen, um in Wettkampfsituationen
              nach strittigen Entscheidungen als Spieler unseres Vereins
              sachlich und – trotz der oft hohen emotionalen Anspannung –
              kompetent auftreten zu können.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Zum Download als Dokument (PDF-Format) stehen folgende Regelwerke
              zur Verfügung:
            </p>

            <div className="space-y-4">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors group"
                >
                  <FileDown className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-medium group-hover:text-primary transition-colors">
                    {doc.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegelwerkDE;
