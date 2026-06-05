import { Analytics } from "@vercel/analytics/react"; 
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Der Club pages
import DerClub from "./pages/der-club/DerClub";
import Vorstand from "./pages/der-club/Vorstand";
import Tradition from "./pages/der-club/Tradition";
import Foerderverein from "./pages/der-club/Foerderverein";
import Tennisplaetze from "./pages/der-club/Tennisplaetze";
import Mitgliedschaft from "./pages/der-club/Mitgliedschaft";
import Beitragsordnung from "./pages/der-club/Beitragsordnung";

import Satzung from "./pages/der-club/Satzung";
import Platzordnung from "./pages/der-club/Platzordnung";
import Sponsoring from "./pages/der-club/Sponsoring";
import Anfahrt from "./pages/der-club/Anfahrt";

// Aktuelles pages
import Aktuelles from "./pages/aktuelles/Aktuelles";
import Nachrichten from "./pages/aktuelles/Nachrichten";
import TiebreakingNews from "./pages/aktuelles/TiebreakingNews";
import Veranstaltungen from "./pages/aktuelles/Veranstaltungen";
import Projekte from "./pages/aktuelles/Projekte";
import TennisInfoHeft from "./pages/aktuelles/TennisInfoHeft";


// Mannschaften pages
import Mannschaften from "./pages/mannschaften/Mannschaften";
import Jugend from "./pages/mannschaften/Jugend";
import Aktive from "./pages/mannschaften/Aktive";
import Senioren from "./pages/mannschaften/Senioren";
import Regelwerk from "./pages/mannschaften/Regelwerk";
import Spielberichtsbogen from "./pages/mannschaften/Spielberichtsbogen";
import Mannschaftsfuehrer from "./pages/mannschaften/Mannschaftsfuehrer";

// Training pages
import Training from "./pages/training/Training";
import UnsereTrainer from "./pages/training/UnsereTrainer";
import TennisschulePTSKukaras from "./pages/training/TennisschulePTSKukaras";
import TennisschuleSeibold from "./pages/training/TennisschuleSeibold";

// Root pages
import Gastronomie from "./pages/Gastronomie";
import FAQ from "./pages/FAQ";

// Events pages (root level - tournaments)
import Turniere from "./pages/Turniere";

// Legal pages
import Impressum from "./pages/legal/Impressum";
import Datenschutz from "./pages/legal/Datenschutz";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminNews from "./pages/admin/AdminNews";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Analytics />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsent />
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
          <Route path="/anfahrt" element={<Anfahrt />} />

          {/* FAQ Route */}
          <Route path="/faq" element={<FAQ />} />

          {/* Aktuelles Routes */}
          <Route path="/aktuelles" element={<Aktuelles />} />
          <Route path="/aktuelles/nachrichten" element={<Nachrichten />} />
          <Route
            path="/aktuelles/veranstaltungen"
            element={<Veranstaltungen />}
          />
          <Route path="/aktuelles/projekte" element={<Projekte />} />
          <Route
            path="/aktuelles/tennis-info-heft"
            element={<TennisInfoHeft />}
          />
          <Route
            path="/aktuelles/tiebreaking-news"
            element={<TiebreakingNews />}
          />

          {/* Mannschaften Routes */}
          <Route path="/mannschaften" element={<Mannschaften />} />
          <Route path="/mannschaften/jugend" element={<Jugend />} />
          <Route path="/mannschaften/aktive" element={<Aktive />} />
          <Route path="/mannschaften/senioren" element={<Senioren />} />
          <Route path="/mannschaften/regelwerk" element={<Regelwerk />} />
          <Route path="/mannschaften/spielberichtsbogen" element={<Spielberichtsbogen />} />
          <Route path="/mannschaften/mannschaftsfuehrer" element={<Mannschaftsfuehrer />} />

          {/* Turniere Routes */}
          <Route path="/turniere" element={<Turniere />} />

          {/* Training Routes */}
          <Route path="/training" element={<Training />} />
          <Route path="/training/unsere-trainer" element={<UnsereTrainer />} />
          <Route
            path="/training/tennisschule-pts-kukaras"
            element={<TennisschulePTSKukaras />}
          />
          <Route
            path="/training/tennisschule-seibold"
            element={<TennisschuleSeibold />}
          />

          {/* Gastronomie Route */}
          <Route path="/gastronomie" element={<Gastronomie />} />

          {/* Legal Routes */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/news" element={<AdminNews />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
