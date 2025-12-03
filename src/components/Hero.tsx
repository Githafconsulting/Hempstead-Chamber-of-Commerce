"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type MenuItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

const mainNavItems: MenuItem[] = [
  {
    label: "Business Directory",
    href: "/business-directory",
    subItems: [
      { label: "Browse Directory", href: "/business-directory" },
      { label: "Resource Directory", href: "/business-directory/resources" },
    ],
  },
  { label: "Events", href: "/event-highlights" },
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "Our Mission", href: "/about/mission" },
      { label: "Membership Committees", href: "/about/committees" },
      { label: "Youth Services", href: "/youth-services" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Hero() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Sequence-01_YouTube_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-950/50" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation Bar on Video - becomes sticky with background on scroll */}
        <div
          className={`w-full px-6 lg:px-10 py-4 transition-all duration-300 ${
            isScrolled
              ? "fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
              : ""
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Hempstead Chamber of Commerce"
                width={280}
                height={120}
                className={`h-20 w-auto transition-all duration-300 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2 font-heading">
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-4 py-2 text-base font-semibold transition-colors tracking-wide ${
                      isScrolled
                        ? "text-gray-800 hover:text-primary-600"
                        : "text-white hover:text-primary-200"
                    }`}
                  >
                    {item.label}
                    {item.subItems && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.subItems && openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3 font-heading">
              <Link
                href="/donate"
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wide border-2 rounded-full transition-colors ${
                  isScrolled
                    ? "text-primary-600 border-primary-600 hover:bg-primary-600 hover:text-white"
                    : "text-white border-white hover:bg-white hover:text-primary-700"
                }`}
              >
                Donate
              </Link>
              <Link
                href="/join"
                className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wide rounded-full transition-colors ${
                  isScrolled
                    ? "text-white bg-primary-600 hover:bg-primary-700"
                    : "text-primary-700 bg-white hover:bg-primary-50"
                }`}
              >
                Join the Chamber
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:text-primary-600"
                  : "text-white hover:text-primary-200"
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-xl p-4">
              {/* Mobile CTA Buttons */}
              <div className="flex gap-3 mb-4 font-heading">
                <Link
                  href="/donate"
                  className="flex-1 text-center px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-600 border-2 border-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate
                </Link>
                <Link
                  href="/join"
                  className="flex-1 text-center px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join the Chamber
                </Link>
              </div>

              {/* Mobile Nav Items */}
              <nav className="space-y-1 font-heading">
                {mainNavItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        item.subItems
                          ? setOpenDropdown(openDropdown === item.label ? null : item.label)
                          : setMobileMenuOpen(false)
                      }
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      {item.subItems ? (
                        <span>{item.label}</span>
                      ) : (
                        <Link
                          href={item.href}
                          className="w-full text-left"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                      {item.subItems && (
                        <svg
                          className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>

                    {/* Mobile Submenu */}
                    {item.subItems && openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 mt-40">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Hempstead Chamber of Commerce
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl font-medium">
            Representing the Businesses of the Incorporated Village of Hempstead
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 font-heading">
            <Link
              href="/join"
              className="px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-700 bg-white rounded-full hover:bg-primary-50 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/business-directory"
              className="px-8 py-4 text-base font-bold uppercase tracking-wide text-white border-2 border-white rounded-full hover:bg-white hover:text-primary-700 transition-colors"
            >
              Explore Directory
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
