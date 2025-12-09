"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/eWiln5-oD3s?autoplay=1&mute=1&loop=1&playlist=eWiln5-oD3s&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
          title="Hempstead Chamber Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%] sm:w-[177.78vh] sm:h-[56.25vw] min-w-full min-h-full object-cover"
          style={{ border: 'none' }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-950/60" />

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <span className="text-primary-300 font-semibold uppercase tracking-widest mb-3 sm:mb-4 text-xs sm:text-sm">
          Est. 1931
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight">
          Hempstead Chamber of Commerce
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl font-medium px-2">
          Representing the Businesses of the Incorporated Village of Hempstead
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-heading w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/join"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wide text-primary-700 bg-white rounded-full hover:bg-primary-50 transition-colors text-center"
          >
            Become a Member
          </Link>
          <Link
            href="/business-directory"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wide text-white border-2 border-white rounded-full hover:bg-white hover:text-primary-700 transition-colors text-center"
          >
            Explore Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
