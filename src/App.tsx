import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Club pages
import DerClub from "./pages/club/DerClub";
import Vorstand from "./pages/club/Vorstand";
import Tradition from "./pages/club/Tradition";
import Ansprechpartner from "./pages/club/Ansprechpartner";
import Foerderverein from "./pages/club/Foerderverein";

// Membership pages
import Mitgliedschaft from "./pages/membership/Mitgliedschaft";
import Beitragsordnung from "./pages/membership/Beitragsordnung";
import Satzung from "./pages/membership/Satzung";
import Regelwerk from "./pages/membership/Regelwerk";
import Platzordnung from "./pages/membership/Platzordnung";

// Teams pages
import Mannschaften from "./pages/teams/Mannschaften";
import Herren from "./pages/teams/Herren";
import Damen from "./pages/teams/Damen";
import Jugend from "./pages/teams/Jugend";
import Senioren from "./pages/teams/Senioren";

// Training pages
import Training from "./pages/training/Training";
import UnsereTrainer from "./pages/training/UnsereTrainer";
import TennisschulePTSKukaras from "./pages/training/TennisschulePTSKukaras";
import TennisschuleSeibold from "./pages/training/TennisschuleSeibold";

// Facilities pages
import Tennisplaetze from "./pages/facilities/Tennisplaetze";
import Gastronomie from "./pages/facilities/Gastronomie";

// Events pages
import Veranstaltungen from "./pages/events/Veranstaltungen";
import Turniere from "./pages/events/Turniere";
import TurnierAnmeldung from "./pages/events/TurnierAnmeldung";
import RheinNeckarOpen from "./pages/events/RheinNeckarOpen";
import SchwarzGelbCup from "./pages/events/SchwarzGelbCup";

// News pages
import Aktuelles from "./pages/news/Aktuelles";
import TiebreakingNews from "./pages/news/TiebreakingNews";
import Pressemeldungen from "./pages/news/Pressemeldungen";

// Projects pages
import Projekte from "./pages/projects/Projekte";
import Crowdfunding from "./pages/projects/Crowdfunding";

// Sponsors pages
import Sponsoring from "./pages/sponsors/Sponsoring";

// Info pages
import TennisInfoHeft from "./pages/info/TennisInfoHeft";
import FAQ from "./pages/info/FAQ";

// Legal pages
import Impressum from "./pages/legal/Impressum";
import Datenschutz from "./pages/legal/Datenschutz";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
