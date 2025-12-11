import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support the Hempstead Chamber of Commerce and help strengthen our local business community.",
};

const impactAreas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Youth Programs",
    description: "Supporting educational initiatives and youth entrepreneurship programs in our community.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Small Business Support",
    description: "Providing resources, training, and assistance to help local businesses succeed.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Community Events",
    description: "Organizing events that bring together businesses and residents to strengthen our community.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Economic Development",
    description: "Advocating for policies and initiatives that promote economic growth in Hempstead.",
  },
];

const donationAmounts = [
  { amount: "$25", description: "Supports youth program materials" },
  { amount: "$50", description: "Sponsors a small business workshop" },
  { amount: "$100", description: "Funds networking event refreshments" },
  { amount: "$250", description: "Supports quarterly community events" },
  { amount: "$500", description: "Sponsors a full training session" },
  { amount: "Custom", description: "Choose your own amount" },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full" />
            <span className="text-white/90 font-medium text-sm">Support Our Mission</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Make a Donation
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your contribution helps us strengthen the Hempstead business community and create opportunities for growth.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every donation directly supports programs that make a difference in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {area.icon}
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Choose Your Contribution
            </h2>
            <p className="text-lg text-gray-600">
              Select a donation amount or enter a custom amount
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {donationAmounts.map((item, index) => (
              <button
                key={index}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all text-center"
              >
                <span className="block text-2xl font-bold text-primary-900 group-hover:text-primary-600 mb-1">
                  {item.amount}
                </span>
                <span className="text-sm text-gray-500">{item.description}</span>
              </button>
            ))}
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Donation Details</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="amount"
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Add a personal message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25"
              >
                Complete Donation
              </button>

              <p className="text-center text-sm text-gray-500">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Other Ways to Support
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Not ready to donate? There are other ways you can help strengthen our community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/join"
              className="p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors group"
            >
              <h3 className="font-bold text-primary-900 group-hover:text-primary-600 mb-2">
                Become a Member
              </h3>
              <p className="text-sm text-gray-600">
                Join the Chamber and access exclusive benefits
              </p>
            </Link>

            <Link
              href="/event-highlights"
              className="p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors group"
            >
              <h3 className="font-bold text-primary-900 group-hover:text-primary-600 mb-2">
                Attend Events
              </h3>
              <p className="text-sm text-gray-600">
                Participate in community and networking events
              </p>
            </Link>

            <Link
              href="/contact"
              className="p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors group"
            >
              <h3 className="font-bold text-primary-900 group-hover:text-primary-600 mb-2">
                Volunteer
              </h3>
              <p className="text-sm text-gray-600">
                Give your time to support Chamber initiatives
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
