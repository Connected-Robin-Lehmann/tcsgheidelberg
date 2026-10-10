import { FileText } from 'lucide-react';
import PdfThumbnail from './PdfThumbnail';

interface EventAttachmentPreviewProps {
  url: string;
  label?: string;
}

const IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg', 'avif'];

/**
 * Small inline preview of an event attachment (image or PDF).
 * Clicking opens the file in a new tab; the download button stays separate.
 */
const EventAttachmentPreview: React.FC<EventAttachmentPreviewProps> = ({ url, label }) => {
  const ext = url.split('.').pop()?.toLowerCase() ?? '';
  const isImage = IMAGE_EXTS.includes(ext);
  const isPdf = ext === 'pdf';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? 'Vorschau öffnen'}
      className="group block w-28 sm:w-36 shrink-0 rounded-lg border bg-muted overflow-hidden hover:shadow-md transition-shadow"
    >
      {isImage ? (
        <img
          src={url}
          alt={label ?? 'Anhang-Vorschau'}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      ) : isPdf ? (
        <PdfThumbnail pdfUrl={url} year={0} />
      ) : (
        <div className="aspect-[3/4] flex items-center justify-center">
          <FileText className="w-10 h-10 text-primary" />
        </div>
      )}
    </a>
  );
};

export default EventAttachmentPreview;
