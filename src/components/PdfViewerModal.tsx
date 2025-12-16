import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

interface PdfViewerModalProps {
  pdfUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({ pdfUrl, title, isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scale, setScale] = useState(1.2);
  const [loading, setLoading] = useState(true);

  // Load PDF document
  useEffect(() => {
    if (!isOpen || !pdfUrl) return;

    const loadPdf = async () => {
      try {
        setLoading(true);
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdfDoc = await loadingTask.promise;
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
        setCurrentPage(1);
        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setLoading(false);
      }
    };

    loadPdf();

    return () => {
      setPdf(null);
    };
  }, [isOpen, pdfUrl]);

  // Render current page
  useEffect(() => {
    if (!pdf || !canvasRef.current) return;

    const renderPage = async () => {
      try {
        const page = await pdf.getPage(currentPage);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;
      } catch (err) {
        console.error('Error rendering page:', err);
      }
    };

    renderPage();
  }, [pdf, currentPage, scale]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentPage(p => Math.max(1, p - 1));
      if (e.key === 'ArrowRight') setCurrentPage(p => Math.min(totalPages, p + 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, totalPages]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full h-full flex flex-col bg-background/95 max-w-6xl max-h-[95vh] mx-4 my-4 rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground truncate">{title}</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-center gap-4 p-2 border-b border-border bg-muted/50">
          {/* Page navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[100px] text-center">
              Seite {currentPage} von {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Zoom controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setScale(s => Math.max(0.5, s - 0.2))}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground min-w-[60px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setScale(s => Math.min(3, s + 0.2))}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-auto p-4 flex items-start justify-center bg-muted/30">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <span className="text-muted-foreground">PDF wird geladen...</span>
              </div>
            </div>
          ) : (
            <canvas
              ref={canvasRef}
              className="shadow-lg rounded"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
