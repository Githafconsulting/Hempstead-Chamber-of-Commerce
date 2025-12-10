import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function OurCommunity() {
  const communityGroups = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Business Leaders",
      description: "Entrepreneurs and established business owners shaping our economy",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Educational Partners",
      description: "Schools and institutions investing in our community's future",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Civic Organizations",
      description: "Community groups dedicated to improving quality of life",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Village Residents",
      description: "Community members bringing expertise and local knowledge",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column: Content */}
          <div>
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Join Our Community
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-heading mt-2 mb-6">
              A Diverse Network of Leaders & Innovators
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              The Chamber invites and encourages the involvement and participation of representatives from every aspect of our business, educational, and civic community. We welcome residents to join and bring their expertise and abilities to improve the quality of life in the Village.
            </p>

            {/* Community Groups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {communityGroups.map((group, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                    {group.icon}
                  </div>
                  <h3 className="font-bold text-primary-900 font-heading mb-1 text-sm">
                    {group.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
              >
                Get Involved
                <ArrowOutwardIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right column: Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image2.png"
                alt="Hempstead Community"
                width={960}
                height={600}
                className="w-full h-auto block"
              />
              {/* Decorative element */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 font-heading">
                    Together
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    We Build Success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
