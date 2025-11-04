import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminStatus = () => {
  const pages = [
    { name: 'Startseite', path: '/', implemented: true, finalized: true, translated: true },
    { name: 'Der Club', path: '/der-club', implemented: true, finalized: true, translated: true },
    { name: 'Tradition', path: '/tradition', implemented: true, finalized: true, translated: true },
    { name: 'Vorstand', path: '/vorstand', implemented: true, finalized: true, translated: true },
    { name: 'Tennisplätze', path: '/tennisplaetze', implemented: true, finalized: true, translated: false },
    { name: 'Mitgliedschaft', path: '/mitgliedschaft', implemented: true, finalized: true, translated: false },
    { name: 'Beitragsordnung', path: '/beitragsordnung', implemented: true, finalized: true, translated: false },
    { name: 'Satzung', path: '/satzung', implemented: true, finalized: true, translated: false },
    { name: 'Platzordnung', path: '/platzordnung', implemented: true, finalized: true, translated: false },
    { name: 'Förderverein', path: '/foerderverein', implemented: true, finalized: true, translated: false },
    { name: 'Sponsoring', path: '/sponsoring', implemented: true, finalized: true, translated: false },
    { name: 'Training', path: '/training', implemented: true, finalized: true, translated: false },
    { name: 'Tennisschule PTS Kukaras', path: '/tennisschule-pts-kukaras', implemented: true, finalized: true, translated: false },
    { name: 'Tennisschule Seibold', path: '/tennisschule-seibold', implemented: true, finalized: true, translated: false },
    { name: 'Unsere Trainer', path: '/unsere-trainer', implemented: true, finalized: true, translated: false },
    { name: 'Mannschaften', path: '/mannschaften', implemented: true, finalized: true, translated: false },
    { name: 'Jugend', path: '/jugend', implemented: true, finalized: true, translated: false },
    { name: 'Regelwerk', path: '/regelwerk', implemented: true, finalized: true, translated: false },
    { name: 'Turniere', path: '/turniere', implemented: true, finalized: true, translated: false },
    { name: 'Rhein-Neckar Open', path: '/rhein-neckar-open', implemented: true, finalized: true, translated: false },
    { name: 'Schwarz-Gelb Cup', path: '/schwarz-gelb-cup', implemented: true, finalized: true, translated: false },
    { name: 'Turnieranmeldung', path: '/turnieranmeldung', implemented: true, finalized: false, translated: false },
    { name: 'Aktuelles', path: '/aktuelles', implemented: true, finalized: true, translated: false },
    { name: 'Nachrichten', path: '/nachrichten', implemented: true, finalized: true, translated: false },
    { name: 'Pressemeldungen', path: '/pressemeldungen', implemented: true, finalized: true, translated: false },
    { name: 'Veranstaltungen', path: '/veranstaltungen', implemented: true, finalized: true, translated: false },
    { name: 'Ansprechpartner', path: '/ansprechpartner', implemented: true, finalized: true, translated: false },
    { name: 'Projekte', path: '/projekte', implemented: true, finalized: true, translated: false },
    { name: 'Crowdfunding', path: '/crowdfunding', implemented: true, finalized: true, translated: false },
    { name: 'Tennis Info Heft', path: '/tennis-info-heft', implemented: true, finalized: true, translated: false },
    { name: 'Tiebreaking News', path: '/tiebreaking-news', implemented: true, finalized: true, translated: false },
    { name: 'Gastronomie', path: '/gastronomie', implemented: true, finalized: true, translated: true },
    { name: 'FAQ', path: '/faq', implemented: true, finalized: true, translated: false },
    { name: 'Impressum', path: '/impressum', implemented: true, finalized: true, translated: false },
    { name: 'Datenschutz', path: '/datenschutz', implemented: true, finalized: true, translated: false },
  ];

  const pendingFeatures = [
    {
      feature: 'Mitglieder-Login Portal',
      priority: 'medium',
      description: 'Mitglieder können sich einloggen und persönliche Daten verwalten',
    },
    {
      feature: 'Turnieranmeldung Backend',
      priority: 'high',
      description: 'Direkte Online-Anmeldung für Turniere',
    },
    {
      feature: 'Bildergalerie',
      priority: 'low',
      description: 'Galerie für Club-Fotos und Event-Bilder',
    },
    {
      feature: 'Kontaktformular',
      priority: 'medium',
      description: 'Direktes Kontaktformular statt nur E-Mail-Links',
    },
    {
      feature: 'Veranstaltungskalender',
      priority: 'medium',
      description: 'Interaktiver Kalender für alle Club-Events',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'Hoch';
      case 'medium':
        return 'Mittel';
      case 'low':
        return 'Niedrig';
      default:
        return priority;
    }
  };

  const StatusIcon = ({ status }: { status: boolean }) => (
    status ? (
      <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-600 mx-auto" />
    )
  );

  return (
    <div className="space-y-6">
      {/* Pages Status Table */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-6 h-6 text-tennis-yellow" />
          <h2 className="text-2xl font-bold">Seiten-Status</h2>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Page</TableHead>
                <TableHead className="text-center font-semibold">Implemented</TableHead>
                <TableHead className="text-center font-semibold">Finalized</TableHead>
                <TableHead className="text-center font-semibold">Translated (English available)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">
                    <a 
                      href={page.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {page.name}
                    </a>
                  </TableCell>
                  <TableCell className="text-center">
                    <StatusIcon status={page.implemented} />
                  </TableCell>
                  <TableCell className="text-center">
                    <StatusIcon status={page.finalized} />
                  </TableCell>
                  <TableCell className="text-center">
                    <StatusIcon status={page.translated} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Pending Features */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-6 h-6 text-tennis-yellow" />
          <h2 className="text-2xl font-bold">Geplante Features</h2>
        </div>
        <div className="space-y-4">
          {pendingFeatures.map((feature, idx) => (
            <div key={idx} className="border-l-4 border-tennis-yellow pl-4 py-2">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold">{feature.feature}</h3>
                <Badge variant={getPriorityColor(feature.priority)}>
                  {getPriorityLabel(feature.priority)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Technical Info */}
      <Card className="p-6 bg-muted/50">
        <h2 className="text-xl font-bold mb-3">Technische Informationen</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Framework:</span> React + Vite
          </div>
          <div>
            <span className="font-semibold">Styling:</span> Tailwind CSS
          </div>
          <div>
            <span className="font-semibold">Backend:</span> Lovable Cloud (Supabase)
          </div>
          <div>
            <span className="font-semibold">Authentifizierung:</span> Supabase Auth
          </div>
          <div>
            <span className="font-semibold">UI Components:</span> Shadcn/ui
          </div>
          <div>
            <span className="font-semibold">Icons:</span> Lucide React
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminStatus;
