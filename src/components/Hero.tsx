import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";
import { useTranslation } from 'react-i18next';
interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
}
const Hero = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [latestNews, setLatestNews] = useState<NewsItem | null>(null);
  const locale = i18n.language === 'de' ? de : enUS;
  useEffect(() => {
    const fetchLatestNews = async () => {
      const {
        data,
        error
      } = await supabase.from("news_items").select("*").order("created_at", {
        ascending: false
      }).limit(1).maybeSingle();
      if (data && !error) {
        setLatestNews(data);
      }
    };
    fetchLatestNews();
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tennis-black via-gray-900 to-tennis-court overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white animate-fade-in">
          {/* Logo Integration */}
          <div className="mb-8"></div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12 leading-tight">
            Willkommen im
            <span className="block text-tennis-yellow mt-2">
              TC Schwarz-Gelb
            </span>
            <span className="block text-xl md:text-3xl lg:text-4xl mt-2 font-light">
              Heidelberg e.V.
            </span>
          </h1>

          {/* News Highlight */}
          {latestNews && <div className="max-w-3xl mx-auto mt-16 animate-slide-up">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-tennis-yellow/50 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-tennis-yellow rounded-full p-3 flex-shrink-0">
                    <Calendar className="w-6 h-6 text-tennis-black" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-tennis-yellow mb-3">
                      {latestNews.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base mb-4">
                      {format(new Date(latestNews.date), "d. MMMM yyyy", {
                    locale
                  })}
                    </p>
                    <a href="/aktuelles/nachrichten" className="inline-flex items-center text-tennis-yellow hover:text-yellow-300 font-semibold transition-colors">
                      {t('common.readMore')}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;