import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DerClub from "./pages/DerClub";
import Vorstand from "./pages/Vorstand";
import Tradition from "./pages/Tradition";
import Tennisplaetze from "./pages/Tennisplaetze";
import Mitgliedschaft from "./pages/Mitgliedschaft";
import Beitragsordnung from "./pages/Beitragsordnung";
import Satzung from "./pages/Satzung";
import Sponsoring from "./pages/Sponsoring";
import Foerderverein from "./pages/Foerderverein";
import Platzordnung from "./pages/Platzordnung";
import FAQ from "./pages/FAQ";
import Aktuelles from "./pages/Aktuelles";
import Veranstaltungen from "./pages/Veranstaltungen";
import Crowdfunding from "./pages/Crowdfunding";
import Projekte from "./pages/Projekte";
import TiebreakingNews from "./pages/TiebreakingNews";
import Pressemeldungen from "./pages/Pressemeldungen";
import TennisInfoHeft from "./pages/TennisInfoHeft";
import Ansprechpartner from "./pages/Ansprechpartner";
import Mannschaften from "./pages/Mannschaften";
import Jugend from "./pages/Jugend";
import Damen from "./pages/Damen";
import Herren from "./pages/Herren";
import Senioren from "./pages/Senioren";
import Regelwerk from "./pages/Regelwerk";
import Turniere from "./pages/Turniere";
import SchwarzGelbCup from "./pages/SchwarzGelbCup";
import RheinNeckarOpen from "./pages/RheinNeckarOpen";
import TurnierAnmeldung from "./pages/TurnierAnmeldung";
import Training from "./pages/Training";
import UnsereTrainer from "./pages/UnsereTrainer";
import TennisschulePTSKukaras from "./pages/TennisschulePTSKukaras";
import TennisschuleSeibold from "./pages/TennisschuleSeibold";
import Gastronomie from "./pages/Gastronomie";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Der Club Routes */}
          <Route path="/der-club" element={<DerClub />} />
          <Route path="/der-club/vorstand" element={<Vorstand />} />
          <Route path="/der-club/tradition" element={<Tradition />} />
          <Route path="/der-club/tennisplaetze" element={<Tennisplaetze />} />
          <Route path="/der-club/mitgliedschaft" element={<Mitgliedschaft />} />
          <Route path="/der-club/beitragsordnung" element={<Beitragsordnung />} />
          <Route path="/der-club/satzung" element={<Satzung />} />
          <Route path="/der-club/sponsoring" element={<Sponsoring />} />
          <Route path="/der-club/foerderverein" element={<Foerderverein />} />
          <Route path="/der-club/platzordnung" element={<Platzordnung />} />
          
          {/* FAQ Route */}
          <Route path="/faq" element={<FAQ />} />
          
          {/* Aktuelles Routes */}
          <Route path="/aktuelles" element={<Aktuelles />} />
          <Route path="/aktuelles/veranstaltungen" element={<Veranstaltungen />} />
          <Route path="/aktuelles/crowdfunding" element={<Crowdfunding />} />
          <Route path="/aktuelles/projekte" element={<Projekte />} />
          <Route path="/aktuelles/tiebreaking-news" element={<TiebreakingNews />} />
          <Route path="/aktuelles/pressemeldungen" element={<Pressemeldungen />} />
          <Route path="/aktuelles/tennis-info-heft" element={<TennisInfoHeft />} />
          <Route path="/aktuelles/ansprechpartner" element={<Ansprechpartner />} />
          
          {/* Mannschaften Routes */}
          <Route path="/mannschaften" element={<Mannschaften />} />
          <Route path="/mannschaften/jugend" element={<Jugend />} />
          <Route path="/mannschaften/damen" element={<Damen />} />
          <Route path="/mannschaften/herren" element={<Herren />} />
          <Route path="/mannschaften/senioren" element={<Senioren />} />
          <Route path="/mannschaften/regelwerk" element={<Regelwerk />} />
          
          {/* Turniere Routes */}
          <Route path="/turniere" element={<Turniere />} />
          <Route path="/turniere/schwarz-gelb-cup" element={<SchwarzGelbCup />} />
          <Route path="/turniere/rhein-neckar-open" element={<RheinNeckarOpen />} />
          <Route path="/turniere/anmeldung" element={<TurnierAnmeldung />} />
          
          {/* Training Routes */}
          <Route path="/training" element={<Training />} />
          <Route path="/training/unsere-trainer" element={<UnsereTrainer />} />
          <Route path="/training/tennisschule-pts-kukaras" element={<TennisschulePTSKukaras />} />
          <Route path="/training/tennisschule-seibold" element={<TennisschuleSeibold />} />
          
          {/* Gastronomie Route */}
          <Route path="/gastronomie" element={<Gastronomie />} />
          
          {/* Legal Routes */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
