"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Networking",
    description: "Connect with local business owners and community leaders.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Visibility",
    description: "Get featured in our directory and promotional materials.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Resources",
    description: "Access workshops and educational programs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Advocacy",
    description: "We advocate for policies that help businesses thrive.",
  },
];

export default function AboutAndBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - About Content */}
          <div>
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              About Our Chamber
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 font-heading mt-2 mb-6">
              Building a Stronger Business Community Since 1931
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Hempstead Chamber of Commerce is dedicated to promoting and supporting local businesses in the Incorporated Village of Hempstead. We serve as the voice of our business community, advocating for growth, prosperity, and economic development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We bring together entrepreneurs, established businesses, and community leaders to build a stronger Hempstead where everyone thrives.
            </p>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/image1.png"
                alt="Hempstead Chamber of Commerce"
                width={600}
                height={350}
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Right Side - Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-primary-900 font-heading mb-8">
              Why Join the Chamber?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-primary-900 font-heading mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
            >
              Become a Member
              <ArrowOutwardIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
