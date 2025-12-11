import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-white/90 font-medium text-sm">Join 200+ Local Businesses</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-6 leading-tight">
            Ready to Grow Your
            <span className="block text-primary-300">Business?</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the Hempstead Chamber of Commerce and become part of a thriving community dedicated to local business success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="group inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-white/25"
            >
              <span>Become a Member</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-10 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">90+</p>
                <p className="text-sm text-white/60">Years Serving</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">200+</p>
                <p className="text-sm text-white/60">Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-white/60">Events/Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
