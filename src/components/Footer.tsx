import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/logo.png"
                alt="Hempstead Chamber of Commerce"
                width={80}
                height={80}
                className="h-12 w-12 sm:h-16 sm:w-16"
              />
            </Link>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Representing the Businesses of the Incorporated Village of Hempstead
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold font-heading mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/business-directory" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Business Directory
                </Link>
              </li>
              <li>
                <Link href="/event-highlights" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Become a Member
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold font-heading mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs sm:text-sm">1776 Denton Park<br />Hempstead, NY 11550</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:516-292-3800" className="hover:text-white transition-colors text-xs sm:text-sm">
                  (516) 292-3800
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@hempsteadchamber.org" className="hover:text-white transition-colors text-xs sm:text-sm break-all">
                  info@hempsteadchamber.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base sm:text-lg font-bold font-heading mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-6">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58.01,4.85.07,1.17.05,1.8.25,2.23.41.56.22.96.48,1.38.9.42.42.68.82.9,1.38.16.43.36,1.06.41,2.23.06,1.27.07,1.65.07,4.85s-.01,3.58-.07,4.85c-.05,1.17-.25,1.8-.41,2.23-.22.56-.48.96-.9,1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68,1.38-.9.43-.16,1.06-.36,2.23-.41,1.27-.06,1.65-.07,4.85-.07M12,0C8.74,0,8.33.01,7.05.07,5.78.13,4.9.33,4.14.63c-.78.3-1.44.71-2.1,1.37-.66.66-1.07,1.32-1.37,2.1-.3.76-.5,1.64-.56,2.91C.05,8.33,0,8.74,0,12s.01,3.67.07,4.95c.06,1.27.26,2.15.56,2.91.3.78.71,1.44,1.37,2.1.66.66,1.32,1.07,2.1,1.37.76.3,1.64.5,2.91.56,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c1.27-.06,2.15-.26,2.91-.56.78-.3,1.44-.71,2.1-1.37.66-.66,1.07-1.32,1.37-2.1.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.78-.71-1.44-1.37-2.1-.66-.66-1.32-1.07-2.1-1.37-.76-.3-1.64-.5-2.91-.56C15.67.01,15.26,0,12,0Z" />
                  <path d="M12,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z" />
                  <circle cx="18.41" cy="5.59" r="1.44" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.45,20.45H16.9V14.88c0-1.33-.02-3.04-1.85-3.04-1.85,0-2.14,1.45-2.14,2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9,1.64-1.85,3.37-1.85,3.6,0,4.27,2.37,4.27,5.46v6.28ZM5.34,7.43c-1.14,0-2.07-.93-2.07-2.07s.93-2.07,2.07-2.07,2.07.93,2.07,2.07-.93,2.07-2.07,2.07ZM7.12,20.45H3.56V9h3.56v11.45ZM22.22,0H1.78C.8,0,0,.8,0,1.78v20.45C0,23.2.8,24,1.78,24h20.45c.98,0,1.78-.8,1.78-1.78V1.78C24,.8,23.2,0,22.22,0Z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Stay connected with local business news and Chamber events.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Hempstead Chamber of Commerce. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
