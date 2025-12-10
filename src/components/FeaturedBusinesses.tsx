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
    location: "Hempstead, New York",
    description:
      "A-CARR Auto Repair & Tire shop is your trusted destination for comprehensive automotive care. With a steadfast commitment to quality service...",
    slug: "a-carr-auto-repair",
    category: "Automotive",
    image: "/business/LOGO-150x150.jpg",
  },
  {
    name: "AHRC Nassau",
    location: "Freeport, New York",
    description:
      "AHRC Nassau empowers people to live fulfilling lives. Together with Family – Friends – Community. A family-led organization...",
    slug: "ahrc-nassau",
    category: "Non-Profit",
    image: "/business/AHRC-logo-blue-typeset-2018-150x150.jpg",
  },
  {
    name: "ALEEM PROFESSIONAL SERVICES INC",
    location: "Uniondale, New York",
    description:
      "ALEEM PROFESSIONAL SERVICES, INC. is a trusted provider of comprehensive tax, accounting, and financial services. We serve communities with trusted expertise...",
    slug: "aleem-professional-services",
    category: "Professional Services",
    image: "/business/AIorK4xhMDgt9cSJt-cbkViRph7zFVxp40lPc9di9gQq2kwuBanoh2V7-RElEipXJ3Ua9OsFA5YvUkw-1-150x150.png",
  },
  {
    name: "Green Market",
    location: "Hempstead, New York",
    description:
      "Proud to serve communities with healthy food service, environment friendly high-quality fuel and exceptional customer care...",
    slug: "green-market",
    category: "Fuel & Food",
    image: "/business/green-market-1-Jerusalem-Ave-Logo-150x150.jpg",
  },
  {
    name: "Grown Girls NYC INC",
    location: "Uniondale, New York",
    description:
      "We started our mission representing powerful women who have established themselves as leaders as they empower all women to grow and succeed...",
    slug: "grown-girls-nyc",
    category: "Women Empowerment",
    image: "/business/gg-logo-150x150.png",
  },
  {
    name: "H&M Fine Art and Custom Framing Corporation",
    location: "Carle Place, New York",
    description:
      "H&M Art and Home Décor / Harlem Art and Frame manufactures high quality, solid wood custom frames and shadowboxes for all your art and memorabilia...",
    slug: "hm-fine-art-framing",
    category: "Art & Framing",
    image: "/business/WhatsApp-Image-2024-05-05-at-22.38.25.jpeg",
  },
  {
    name: "Alula Bright",
    location: "Hempstead, New York",
    description:
      "Alula Bright is a childcare program focused on empowering every young child to fill their minds with richness and prepare them for a bright future...",
    slug: "alula-bright",
    category: "Childcare",
    image: "/business/Alula-Bright-Logo-Files_Icon-150x150.png",
  },
  {
    name: "StevenTechs",
    location: "Queens, New York",
    description:
      "Supercharge Your Business with StevenTechs – Save Money & Boost Efficiency! IT/Tech Provider helping businesses grow with technology solutions...",
    slug: "steventechs",
    category: "Technology",
    image: "/business/Stevtechs-Logo-image-size-less-150x150.jpg",
  },
];

export default function FeaturedBusinesses() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
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
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Featured Business Listings
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover local businesses that make our community thrive
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 md:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Search */}
            <div className="relative w-full">
              <svg
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Category Filter + View Toggle Row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              {/* Category Filter */}
              <div className="flex-1 overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
                <div className="flex gap-2 pb-2 sm:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                        activeCategory === category
                          ? "bg-primary-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle - Hidden on mobile */}
              <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  aria-label="Grid view"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-white text-primary-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  aria-label="List view"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
          Showing <span className="font-semibold">{filteredBusinesses.length}</span> businesses
          {activeCategory !== "All" && (
            <span>
              {" "}
              in <span className="font-semibold text-primary-600">{activeCategory}</span>
            </span>
          )}
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredBusinesses.map((business) => (
              <div
                key={business.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                {/* Business Image */}
                <div className="h-32 sm:h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative overflow-hidden">
                  {business.image ? (
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/80 flex items-center justify-center">
                      <span className="text-xl sm:text-3xl font-bold text-primary-600 font-heading">
                        {business.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 rounded-full text-[10px] sm:text-xs font-semibold text-primary-600">
                    {business.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5">
                  <h3 className="font-heading font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1 text-sm sm:text-base">
                    {business.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="truncate">{business.location}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 hidden sm:block">
                    {business.description}
                  </p>
                  <Link
                    href={`/business-directory/${business.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Read More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-4">
            {filteredBusinesses.map((business) => (
              <div
                key={business.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Business Image */}
                  <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shrink-0 relative overflow-hidden">
                    {business.image ? (
                      <Image
                        src={business.image}
                        alt={business.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary-600 font-heading">
                          {business.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {business.name}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{business.location}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary-50 rounded-full text-sm font-semibold text-primary-600">
                        {business.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{business.description}</p>
                    <Link
                      href={`/business-directory/${business.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
                    >
                      View Details
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-10 sm:py-16">
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
              No businesses found
            </h3>
            <p className="text-sm sm:text-base text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/business-directory"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wide text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors font-heading"
          >
            View All Businesses
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
