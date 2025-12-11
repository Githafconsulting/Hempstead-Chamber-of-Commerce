"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Business = {
  name: string;
  location: string;
  description: string;
  slug: string;
  category: string;
  image?: string;
};

const categories = [
  "All",
  "Automotive",
  "Non-Profit",
  "Professional Services",
  "Fuel & Food",
  "Women Empowerment",
  "Art & Framing",
  "Childcare",
  "Technology",
];

const featuredBusinesses: Business[] = [
  {
    name: "A-CARR AUTO REPAIR & TIRES",
    location: "Hempstead, NY",
    description:
      "Your trusted destination for comprehensive automotive care with quality service.",
    slug: "a-carr-auto-repair",
    category: "Automotive",
    image: "/business/LOGO-150x150.jpg",
  },
  {
    name: "AHRC Nassau",
    location: "Freeport, NY",
    description:
      "Empowering people to live fulfilling lives together with family and community.",
    slug: "ahrc-nassau",
    category: "Non-Profit",
    image: "/business/AHRC-logo-blue-typeset-2018-150x150.jpg",
  },
  {
    name: "ALEEM Professional Services",
    location: "Uniondale, NY",
    description:
      "Trusted provider of comprehensive tax, accounting, and financial services.",
    slug: "aleem-professional-services",
    category: "Professional Services",
    image: "/business/AIorK4xhMDgt9cSJt-cbkViRph7zFVxp40lPc9di9gQq2kwuBanoh2V7-RElEipXJ3Ua9OsFA5YvUkw-1-150x150.png",
  },
  {
    name: "Green Market",
    location: "Hempstead, NY",
    description:
      "Serving communities with healthy food and environment-friendly fuel.",
    slug: "green-market",
    category: "Fuel & Food",
    image: "/business/green-market-1-Jerusalem-Ave-Logo-150x150.jpg",
  },
  {
    name: "Grown Girls NYC",
    location: "Uniondale, NY",
    description:
      "Empowering women who have established themselves as leaders to grow and succeed.",
    slug: "grown-girls-nyc",
    category: "Women Empowerment",
    image: "/business/gg-logo-150x150.png",
  },
  {
    name: "H&M Fine Art & Framing",
    location: "Carle Place, NY",
    description:
      "High quality solid wood custom frames and shadowboxes for art and memorabilia.",
    slug: "hm-fine-art-framing",
    category: "Art & Framing",
    image: "/business/WhatsApp-Image-2024-05-05-at-22.38.25.jpeg",
  },
  {
    name: "Alula Bright",
    location: "Hempstead, NY",
    description:
      "Childcare program focused on empowering young children for a bright future.",
    slug: "alula-bright",
    category: "Childcare",
    image: "/business/Alula-Bright-Logo-Files_Icon-150x150.png",
  },
  {
    name: "StevenTechs",
    location: "Queens, NY",
    description:
      "IT/Tech provider helping businesses grow with technology solutions.",
    slug: "steventechs",
    category: "Technology",
    image: "/business/Stevtechs-Logo-image-size-less-150x150.jpg",
  },
];

export default function FeaturedBusinesses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = featuredBusinesses.filter((business) => {
    const matchesCategory =
      activeCategory === "All" || business.category === activeCategory;
    const matchesSearch =
      business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      business.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 sm:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-primary-700 font-semibold text-sm">Our Members</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-4">
            Featured Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the local businesses that make our community thrive
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-10 border border-gray-100">
          {/* Search */}
          <div className="relative mb-6">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, category, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base transition-all"
            />
          </div>

          {/* Category Pills - Scrollable on mobile */}
          <div className="relative -mx-4 sm:mx-0">
            {/* Gradient fade indicators for mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none sm:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none sm:hidden" />

            <div className="flex gap-2 overflow-x-auto scrollbar-hide px-4 sm:px-0 sm:flex-wrap sm:justify-center pb-2 sm:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeCategory === category
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clear Filters Button - Only show when filters are active */}
        {(activeCategory !== "All" || searchQuery) && (
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              <span className="font-bold text-primary-900">{filteredBusinesses.length}</span>{" "}
              {filteredBusinesses.length === 1 ? "business" : "businesses"} found
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
            >
              Clear filters
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Business Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredBusinesses.map((business) => (
            <Link
              key={business.slug}
              href={`/business-directory/${business.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-primary-200">
                {/* Business Image */}
                <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {business.image ? (
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-600">
                          {business.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-semibold shadow-lg">
                      {business.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
                    {business.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{business.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-grow">
                    {business.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm pt-4 border-t border-gray-100 group-hover:gap-3 transition-all">
                    <span>View Profile</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* View All CTA */}
        {filteredBusinesses.length > 0 && (
          <div className="text-center">
            <Link
              href="/business-directory"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30"
            >
              View Full Directory
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
