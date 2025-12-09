"use client";

import Image from "next/image";

const images = [
  { src: "/one.png", alt: "Local Business 1" },
  { src: "/two.png", alt: "Local Business 2" },
  { src: "/3.png", alt: "Local Business 3" },
  { src: "/4.png", alt: "Local Business 4" },
  { src: "/5.png", alt: "Local Business 5" },
  { src: "/6.png", alt: "Local Business 6" },
];

export default function SupportLocalBusinesses() {
  return (
    <section className="py-10 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 font-heading text-center mb-2 sm:mb-4">
          We Support Local Businesses
        </h2>
        <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Proud to partner with amazing businesses in our community
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Track */}
        <div className="flex animate-marquee">
          {/* First set of images */}
          {images.map((image, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-2 sm:mx-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-2 sm:mx-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Third set for wider screens */}
          {images.map((image, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 mx-2 sm:mx-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
