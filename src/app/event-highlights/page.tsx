"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/highlights/1059216777490267-0-400.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/1059219487489996-0-400.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/1059220884156523-0-400.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/1226837457394864-0-400.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/485062194_9301716583240204_8615276154064412215_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/485156190_1087471683409197_592034467281624493_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/485719272_1087471906742508_4446947970512022654_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/505068408_9875660845845772_5568949611153697256_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/506053914_9928172470594609_8093414347783878004_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/508303912_9953580994720423_3983089642568954888_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/508339454_9951889488222907_6200407796366887100_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/508681017_9959340974144425_1128987695195319470_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/508830097_9954289907982865_101481004878060619_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/509360252_9974143712664151_4431309747412328761_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/509420035_9951157981629391_2649150585504347783_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/509880059_9961659073912615_4553106411448137018_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/570164624_1270488478440849_5302483448733912357_n.jpg", alt: "Chamber Event Highlight" },
  { src: "/highlights/595430508_1308990737923956_6054344805697401537_n.jpg", alt: "Chamber Event Highlight" },
];

export default function EventHighlightsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-200 font-semibold uppercase tracking-wide text-sm">
            Community Moments
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mt-2 mb-4">
            Event Highlights
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            A glimpse into our community activities and events
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Event Highlight"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
