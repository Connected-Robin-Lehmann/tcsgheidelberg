
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventSection from '@/components/EventSection';
import VideoSection from '@/components/VideoSection';
import StatsSection from '@/components/StatsSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventSection />
      <StatsSection />
      <VideoSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
