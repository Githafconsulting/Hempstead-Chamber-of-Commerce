import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hempstead Chamber of Commerce",
  description: "Representing the Businesses of the Incorporated Village of Hempstead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />

        {/* Githaforge Chatbot Widget */}
        <Script id="githaforge-chat-config" strategy="beforeInteractive">
          {`
            window.GithafChatConfig = {
              chatbotId: "8d644835-03a3-4c50-a6b3-8e50f207352b",
              apiUrl: "http://localhost:5173",
              backendUrl: "http://localhost:8000",
              primaryColor: "#1e40af",
              accentColor: "#0ea5e9",
              greeting: "Hello! How can I help you today?",
              title: "Hempstead Assistant",
              subtitle: "Chamber of Commerce",
              position: "bottom-right",
              buttonSize: "small",
              theme: "classic",
              paddingX: 20,
              paddingY: 20,
              zIndex: 9999,
              showNotificationBadge: true
            };
          `}
        </Script>
        <Script
          src="http://localhost:5173/widget/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
