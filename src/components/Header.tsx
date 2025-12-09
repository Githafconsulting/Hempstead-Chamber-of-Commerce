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

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "px-0 pt-0"
            : "px-4 sm:px-6 lg:px-8 pt-4"
        }`}
      >
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-xl rounded-none"
            : "bg-white shadow-lg rounded-full"
        }`}
      >
        <div className={`py-1 transition-all duration-300 ${
          isScrolled ? "px-6 sm:px-8 lg:px-12" : "px-4 sm:px-6"
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="Hempstead Chamber of Commerce"
                width={80}
                height={80}
                className="h-16 w-16 transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-1 font-heading">
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                  >
                    {item.label}
                    {item.subItems && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.subItems && openDropdown === item.label && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
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
                className="px-5 py-2 text-sm font-bold uppercase tracking-wide border-2 rounded-full transition-colors text-primary-600 border-primary-600 hover:bg-primary-600 hover:text-white"
              >
                Donate
              </Link>
              <Link
                href="/join"
                className="px-5 py-2 text-sm font-bold uppercase tracking-wide rounded-full transition-colors text-white bg-primary-600 hover:bg-primary-700"
              >
                Join Chamber
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-gray-800 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200/50">
              {/* Mobile Nav Items */}
              <nav className="space-y-1 font-heading mb-4">
                {mainNavItems.map((item) => (
                  <div key={item.label}>
                    {item.subItems ? (
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.label ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold rounded-lg transition-colors text-gray-800 hover:bg-gray-100"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-sm font-semibold rounded-lg transition-colors text-gray-800 hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mobile Submenu */}
                    {item.subItems && openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 pl-4 border-primary-200">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-sm transition-colors text-gray-600 hover:text-primary-600"
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

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 font-heading pb-4">
                <Link
                  href="/donate"
                  className="flex-1 text-center px-4 py-3 text-sm font-bold uppercase tracking-wide border-2 rounded-full transition-colors text-primary-600 border-primary-600 hover:bg-primary-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate
                </Link>
                <Link
                  href="/join"
                  className="flex-1 text-center px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-full transition-colors text-white bg-primary-600 hover:bg-primary-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Chamber
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
