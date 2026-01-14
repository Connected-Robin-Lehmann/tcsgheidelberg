import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideoSection = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="py-12 md:py-20 bg-tennis-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t('home.video.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t('home.video.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="video-container bg-gray-900 border-2 border-tennis-yellow/20">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              preload="auto"
              onLoadedData={() => setIsLoaded(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source 
                src="https://www.schwarzgelb-heidelberg.de/wp-content/uploads/2019/09/Video-Tennis-Club-Schwarz-Gelb-Heidelberg_003.mp4" 
                type="video/mp4" 
              />
              {t('home.video.browserNotSupported')}
            </video>
            
            {/* Custom Play Button Overlay - only show when loaded and not playing */}
            {isLoaded && !isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  onClick={handleVideoPlay}
                  className="bg-tennis-yellow/90 hover:bg-tennis-yellow text-tennis-black rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl pointer-events-auto"
                >
                  <Play className="h-12 w-12 ml-1" />
                </button>
              </div>
            )}
          </div>
          
          <div className="text-center mt-6 md:mt-8 px-4">
            <p className="text-gray-300 text-base md:text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
              {t('home.video.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
