import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, Info, X, ChevronLeft, ChevronRight } from "lucide-react";

const TennisplaetzeEN = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const facilities = [
    {
      title: "Main Facility Schwindstrasse",
      description:
        'Our central tennis facility around our clubhouse consists of four adjacent courts No. 1 to No. 4, followed by the central Center Court "Max BERK" separated by a hedge towards the club restaurant. These 5 clay courts are also equipped with floodlights and can be booked by our members during the season for free play until 10 p.m., subject to availability. Behind the clubhouse and changing rooms are courts 6-9, where most of our children and youth training takes place.',
      image: "/images/Hauptanlage_Schwindstrasse.jpg",
      features: [
        "10 Clay Courts",
        "Center Court Max-BERK",
        "Children and Youth Training Area",
      ],
    },
    {
      title: "Air-Supported Hall (Winter)",
      description:
        "The air-supported hall belongs to the Kukaras Tennis School and offers two courts with the advantage that training can take place on clay even in winter, resulting in fewer adaptation difficulties when transitioning from outdoor to indoor courts. The hall can be used by our members for free play without a trainer, subject to availability, for a fee. For information on current availability and pricing, please contact Alexandar Kukaras at 0172-66 44 369 or by email: kukaras@t-online.de.",
      image: "/images/Traglufthalle.jpg",
      features: ["2 Clay Courts", "Heated", "October to April"],
    },
    {
      title: "Tennis (Carpet) Hall",
      description:
        "Furthermore, the tennis hall with carpet floor directly at the parking lot in Schwindstrasse is available to us in consultation with the owners.\nThe hall can also be booked directly through the owners (see sign at the entrance).",
      image: "/images/Teppichhalle.jpg",
      features: [
        "Carpet Floor",
        "Available Year-Round",
      ],
    },
  ];

  const galleryImages = [
    {
      src: "/images/Hauptanlage_Schwindstrasse.jpg",
      alt: "Main Facility Tennis Courts",
    },
    {
      src: "/images/Max_Berk.jpg",
      alt: "Center Court Max BERK",
    },
    {
      src: "/images/Platz_10.jpg",
      alt: "Court 10",
    },
    {
      src: "/images/Traglufthalle.jpg",
      alt: "Air-Supported Hall",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-tennis-yellow px-6 py-2 rounded-full mb-6">
              <span className="text-tennis-black font-bold text-sm uppercase tracking-wider">
                10 Clay Courts
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tennis-black mb-6">
              Our Tennis Courts
            </h1>
            <div className="w-24 h-1 bg-tennis-yellow mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our club has 10 clay courts at our headquarters. More information
              can be found further down on this page.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-tennis-black rounded-2xl p-8 mb-16 text-center">
            <Info className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
              Important Notice
            </h3>
            <p className="text-white text-lg">
              An official ("active") membership is required to play at our club.
              <br />
              Renting tennis courts by non-members is not possible, we ask for your understanding.
            </p>
          </div>

          {/* Facilities */}
          <div className="space-y-16 mb-16">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-6">
                      {facility.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                      {facility.description}
                    </p>
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-tennis-yellow rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-tennis-yellow/20 mb-16">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-tennis-black mb-6">
                Court 10 - The Special One
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Court 10 is directly accessible from the parking lot on Schwindstrasse. It is located directly behind the tennis hall.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-tennis-black mb-4">
                Impressions of Our Facility
              </h2>
              <div className="w-24 h-1 bg-tennis-yellow mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-tennis-yellow/20 hover:border-tennis-yellow/60"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-tennis-black/0 group-hover:bg-tennis-black/20 transition-colors duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-tennis-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-tennis-black to-gray-800 rounded-2xl p-8 text-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Schwindstra%C3%9Fe+9+69126+Heidelberg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-110 transition-transform duration-200"
                title="Open in Google Maps"
              >
                <MapPin className="h-8 w-8 text-tennis-yellow mx-auto mb-4" />
              </a>
              <h3 className="text-2xl font-bold text-tennis-yellow mb-4">
                Visit Our Facility and Club Restaurant
              </h3>
              <p className="text-white mb-6">
                See for yourself our first-class tennis courts
              </p>
              <a
                href="/der-club/mitgliedschaft"
                className="inline-block bg-tennis-yellow text-tennis-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-tennis-yellow transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {selectedImageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 text-white hover:text-tennis-yellow transition-colors z-10"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
          )}

          {selectedImageIndex < galleryImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-white hover:text-tennis-yellow transition-colors z-10"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          )}

          <div
            className="max-w-7xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedImageIndex].src}
              alt={galleryImages[selectedImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-white text-lg mt-4 text-center">
              {galleryImages[selectedImageIndex].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TennisplaetzeEN;
