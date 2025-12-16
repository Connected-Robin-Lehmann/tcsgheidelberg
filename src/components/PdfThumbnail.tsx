import React, { useEffect, useRef, useState } from 'react';
import { FileText } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Set the worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PdfThumbnailProps {
  pdfUrl: string;
  year: number;
}

const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ pdfUrl, year }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pdfUrl) {
      setLoading(false);
      setError(true);
      return;
    }

    const loadPdf = async () => {
      try {
        setLoading(true);
        setError(false);

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Calculate scale to fit the container while maintaining aspect ratio
        const containerWidth = 300;
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        await page.render({
          canvasContext: context,
          viewport: scaledViewport,
        }).promise;

        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError(true);
        setLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  if (error || !pdfUrl) {
    return (
      <div className="aspect-[3/4] bg-muted flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-primary mx-auto mb-2" />
          <span className="text-2xl font-bold text-foreground">{year}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[3/4] bg-muted flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
          <span className="text-sm text-muted-foreground">Laden...</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`max-w-full max-h-full object-contain ${loading ? 'hidden' : ''}`}
      />
    </div>
  );
};

export default PdfThumbnail;
