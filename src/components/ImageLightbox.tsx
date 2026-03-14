import React, { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen || images.length === 0) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, images.length, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const safeIndex = ((currentIndex % images.length) + images.length) % images.length;
  const current = images[safeIndex];
  const isLogo = current.alt.toLowerCase().includes("logo");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-50 text-white hover:text-tennis-yellow transition-colors"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        className="absolute left-2 md:left-6 z-50 text-white hover:text-tennis-yellow transition-colors p-2"
        aria-label="Previous"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className={`max-w-full max-h-[85vh] rounded-lg shadow-2xl ${isLogo ? "object-contain bg-gray-100 p-4" : "object-contain"}`}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); handleNext(); }}
        className="absolute right-2 md:right-6 z-50 text-white hover:text-tennis-yellow transition-colors p-2"
        aria-label="Next"
      >
        <ChevronRight size={40} />
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm">
        {current.alt}
      </div>
    </div>
  );
};

export default ImageLightbox;
