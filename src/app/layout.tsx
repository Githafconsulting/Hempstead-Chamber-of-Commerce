import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: {
    default: "Hempstead Chamber of Commerce",
    template: "%s | Hempstead Chamber of Commerce",
  },
  description: "Supporting local businesses and building a stronger community in the Village of Hempstead since 1931. Join 200+ member businesses today.",
  keywords: ["Hempstead", "Chamber of Commerce", "Long Island", "New York", "local business", "networking", "business directory"],
  authors: [{ name: "Hempstead Chamber of Commerce" }],
  creator: "Hempstead Chamber of Commerce",
  publisher: "Hempstead Chamber of Commerce",
  metadataBase: new URL("https://hempsteadchamber.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hempsteadchamber.org",
    siteName: "Hempstead Chamber of Commerce",
    title: "Hempstead Chamber of Commerce",
    description: "Supporting local businesses and building a stronger community in the Village of Hempstead since 1931.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hempstead Chamber of Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hempstead Chamber of Commerce",
    description: "Supporting local businesses and building a stronger community in the Village of Hempstead since 1931.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hempstead Chamber of Commerce",
              description: "Supporting local businesses and building a stronger community in the Village of Hempstead since 1931.",
              url: "https://hempsteadchamber.org",
              logo: "https://hempsteadchamber.org/logo.png",
              foundingDate: "1931",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1776 Denton Park",
                addressLocality: "Hempstead",
                addressRegion: "NY",
                postalCode: "11550",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-516-292-3800",
                contactType: "customer service",
                email: "info@hempsteadchamber.org",
              },
              sameAs: [
                "https://www.facebook.com/hempsteadchamber",
                "https://www.instagram.com/hempsteadchamber",
                "https://www.linkedin.com/company/hempsteadchamber",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
