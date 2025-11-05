import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

const AdminStatus = () => {
  const queryClient = useQueryClient();

  // Fetch pages from database
  const { data: pages = [], isLoading } = useQuery({
    queryKey: ['page-status'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_status')
        .select('*')
        .eq('implemented', true)
        .order('page_name');
      
      if (error) throw error;
      return data;
    },
  });

  // Mutation to update finalized status
  const updateFinalized = useMutation({
    mutationFn: async ({ id, finalized }: { id: string; finalized: boolean }) => {
      const { error } = await supabase
        .from('page_status')
        .update({ finalized })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['page-status'] });
      toast.success('Status aktualisiert');
    },
    onError: () => {
      toast.error('Fehler beim Aktualisieren');
    },
  });

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
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Lädt...
                  </TableCell>
                </TableRow>
              ) : (
                pages.map((page) => (
                  <TableRow key={page.id}>
                    <TableCell className="font-medium">
                      <a 
                        href={page.page_path} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {page.page_name}
                      </a>
                    </TableCell>
                    <TableCell className="text-center">
                      <StatusIcon status={page.implemented} />
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center">
                        <Switch
                          checked={page.finalized}
                          onCheckedChange={(checked) =>
                            updateFinalized.mutate({ id: page.id, finalized: checked })
                          }
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <StatusIcon status={page.translated} />
                    </TableCell>
                  </TableRow>
                ))
              )}
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
