import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileDown } from "lucide-react";

const RegelwerkEN = () => {
  const documents = [
    {
      title: "ITF Tennis Rules",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/ITF-Tennisregeln.pdf",
    },
    {
      title: "BTV Match Regulations (WSpO)",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/BTV-Wettspielordnung.pdf",
    },
    {
      title: "DTB Recommendations for Play Without Umpire",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/DTB-Empfehlungen-für-das-Spiel-ohne-Schiedsrichter.pdf",
    },
    {
      title: "Rule Presentation for League Matches",
      url: "https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Regelpräsentation-für-Medenspiele.pdf",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Important Rules
          </h1>

          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Tennis has a fixed set of rules. Every player should familiarize
              themselves with them to be able to handle disputed situations in
              competitions calmly and competently, even under high emotional
              tension, as a member of our club.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              The following rulebooks are available for download in PDF format:
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

export default RegelwerkEN;
