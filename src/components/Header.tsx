"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100"
      }`}
    >
      {/* Top Bar Only */}
      <div className="bg-linear-to-r from-primary-800 via-primary-700 to-primary-600 text-white">
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 text-sm font-heading">
            {/* Left: Contact & Location */}
            <div className="flex items-center gap-6">
              <a href="tel:516-292-3800" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">(516) 292-3800</span>
              </a>
              <div className="hidden md:flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">1776 Denton Park, Hempstead, NY 11550</span>
              </div>
            </div>

            {/* Right: Member Login Button */}
            <Link
              href="/members/account-settings"
              className="flex items-center gap-2 px-4 py-1.5 font-semibold uppercase tracking-wide border-2 border-white rounded-full hover:bg-white hover:text-primary-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Member Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
