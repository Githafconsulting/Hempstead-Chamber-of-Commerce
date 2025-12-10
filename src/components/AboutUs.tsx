import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  const highlights = [
    { label: "Established", value: "1931" },
    { label: "Member Businesses", value: "200+" },
    { label: "Years of Service", value: "90+" },
  ];

  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Growth & Prosperity",
      description: "Advocating for economic development and business success",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community First",
      description: "Bringing together businesses and community leaders",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Support & Resources",
      description: "Providing tools and opportunities for business growth",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column: Image with overlay highlights */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image1.png"
                alt="Hempstead Chamber of Commerce"
                width={960}
                height={600}
                className="w-full h-auto block"
              />
              {/* Overlay highlights */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary-900/95 backdrop-blur-sm p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-white font-heading">
                        {item.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300 mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              About Our Chamber
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-heading mt-2 mb-6">
              Building a Stronger Business Community
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              The Hempstead Chamber of Commerce is dedicated to promoting and supporting local businesses in the Incorporated Village of Hempstead. We serve as the voice of our business community, advocating for growth, prosperity, and economic development.
            </p>

            {/* Values Grid */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 font-heading mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
            >
              Learn More About Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
