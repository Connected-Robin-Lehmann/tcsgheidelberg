import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const IndexDE = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    // Load modal settings from database
    const loadModalSettings = async () => {
      const { data, error } = await supabase
        .from("modal_settings")
        .select("*")
        .limit(1)
        .single();

      if (data && !error) {
        setModalTitle(data.title);
        setModalContent(data.content);
        setIsModalActive(data.is_active);

        // Check if dialog has been shown in this session
        const hasSeenDialog = sessionStorage.getItem("hasSeenMemberDialog");
        if (!hasSeenDialog && data.is_active) {
          setShowDialog(true);
        }
      }
    };

    loadModalSettings();
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("hasSeenMemberDialog", "true");
    setShowDialog(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventSection />
      <StatsSection />
      <VideoSection />
      <SponsorsSection />
      <Footer />

      {isModalActive && (
        <Dialog
          open={showDialog}
          onOpenChange={(open) => !open && handleClose()}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-tennis-black">
                <span
                  className="underline"
                  dangerouslySetInnerHTML={{ __html: modalTitle }}
                />
              </DialogTitle>
              <DialogDescription className="text-left space-y-4 pt-4">
                <div
                  className="prose prose-sm max-w-none [&_p]:text-tennis-black [&_p]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: modalContent }}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default IndexDE;
