"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/eWiln5-oD3s?autoplay=1&mute=1&loop=1&playlist=eWiln5-oD3s&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1"
          title="Hempstead Chamber Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full"
          style={{ border: 'none' }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-900/60 to-primary-950/80" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
          <span className="text-white/90 font-medium text-sm tracking-wide">
            Serving Hempstead Since 1931
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 max-w-5xl leading-[1.1] px-4 sm:px-0">
          Hempstead Chamber
          <span className="block text-primary-300">of Commerce</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-2xl font-light leading-relaxed px-4 sm:px-0">
          Empowering local businesses and building a stronger community together
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none sm:w-auto px-4 sm:px-0">
          <Link
            href="/join"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wide text-primary-900 bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 text-center"
          >
            <span className="relative z-10">Become a Member</span>
            <div className="absolute inset-0 bg-primary-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
          <Link
            href="/business-directory"
            className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold tracking-wide text-white border-2 border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
          >
            Explore Directory
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
