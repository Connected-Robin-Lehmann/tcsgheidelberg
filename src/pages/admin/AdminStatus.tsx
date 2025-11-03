import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AdminStatus = () => {
  const implementedFeatures = [
    {
      category: 'Allgemein',
      items: [
        'Responsive Design (Desktop, Tablet, Mobile)',
        'Zweisprachige Website (Deutsch/Englisch)',
        'SEO-Optimierung',
        'Header mit Navigation',
        'Footer mit Links und Kontaktinformationen',
        'Hero Section mit neuesten Nachrichten',
      ],
    },
    {
      category: 'Seiten',
      items: [
        'Startseite',
        'Der Club (Über uns, Tradition, Vorstand)',
        'Tennisplätze',
        'Mitgliedschaft & Beitragsordnung',
        'Satzung & Platzordnung',
        'Training & Tennisschulen',
        'Mannschaften (Jugend & Erwachsene)',
        'Turniere (Rhein-Neckar Open, Schwarz-Gelb Cup)',
        'Aktuelles (Nachrichten, Pressemeldungen, Veranstaltungen)',
        'Gastronomie',
        'FAQ',
        'Impressum & Datenschutz',
      ],
    },
    {
      category: 'Backend & Admin',
      items: [
        'Lovable Cloud Integration',
        'Supabase Datenbank',
        'Admin Login System',
        'Nachrichten-Verwaltung',
        'Modal-Verwaltung',
        'Benutzerrollen (Admin)',
      ],
    },
    {
      category: 'Funktionen',
      items: [
        'Platzreservierung (externes System)',
        'Event-Anzeige',
        'Statistik-Anzeige',
        'Video-Einbettung',
        'Sponsoren-Sektion',
        'Newsletter-Anmeldung',
      ],
    },
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

  const issues = [
    {
      title: 'Mobile Navigation',
      status: 'resolved',
      description: 'Navigation wurde für mobile Geräte optimiert',
    },
    {
      title: 'Hero Section Layout',
      status: 'resolved',
      description: 'Hero Section für mobile Ansicht angepasst',
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

  return (
    <div className="space-y-6">
      {/* Implemented Features */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-bold">Implementierte Features</h2>
        </div>
        <div className="space-y-6">
          {implementedFeatures.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold text-tennis-yellow mb-3">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Pending Features */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Circle className="w-6 h-6 text-yellow-600" />
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

      {/* Known Issues */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Bekannte Probleme & Fixes</h2>
        </div>
        <div className="space-y-3">
          {issues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{issue.title}</h3>
                <p className="text-sm text-muted-foreground">{issue.description}</p>
                <Badge variant="outline" className="mt-2">
                  {issue.status === 'resolved' ? 'Gelöst' : 'Offen'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Technical Info */}
      <Card className="p-6 bg-gray-50">
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
