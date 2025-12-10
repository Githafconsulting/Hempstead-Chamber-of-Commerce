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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
            Our Members
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mt-2 mb-4">
            Featured Business Listings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover local businesses that make our community thrive
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
              placeholder="Search businesses by name, category, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === category
                    ? "bg-primary-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing <span className="font-bold text-primary-600">{filteredBusinesses.length}</span>{" "}
            {filteredBusinesses.length === 1 ? "business" : "businesses"}
            {activeCategory !== "All" && (
              <span className="text-gray-500">
                {" "}
                in <span className="font-semibold text-primary-600">{activeCategory}</span>
              </span>
            )}
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredBusinesses.map((business) => (
            <Link
              key={business.slug}
              href={`/business-directory/${business.slug}`}
              className="group"
            >
              <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary-300 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Business Image - Square */}
                <div className="relative w-full aspect-square bg-gray-50 overflow-hidden flex-shrink-0">
                  {business.image ? (
                    <Image
                      src={business.image}
                      alt={business.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary-600 font-heading">
                          {business.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-primary-600 shadow-md">
                      {business.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Business Name */}
                  <h3 className="font-heading text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {business.name}
                  </h3>

                  {/* Location */}
                  <div className="flex items-start gap-2 text-gray-500 mb-4">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
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
                    <span className="text-sm">{business.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {business.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-gray-400"
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
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No businesses found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 hover:shadow-xl transition-all"
            >
              View All Businesses
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
