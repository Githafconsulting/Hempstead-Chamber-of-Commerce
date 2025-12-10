"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const allNews = [
  {
    id: 1,
    title: "Small Business Saturday - Shop Local",
    content: "Support local businesses this Small Business Saturday! Shop local and help our community thrive. The Hempstead Chamber of Commerce encourages all residents to visit our local merchants and discover the unique products and services they offer. Small businesses are the backbone of our community, and your support makes a real difference.",
    date: "November 25, 2024",
    category: "Event",
    image: "/highlights/509360252_9974143712664151_4431309747412328761_n.jpg",
    hashtags: ["#shoplocal", "#SmallBusinessSaturday"],
    engagement: { likes: 2, shares: 3, comments: 0 },
    source: "Facebook",
  },
  {
    id: 2,
    title: "Chamber Networking Event Success",
    content: "Thank you to all members who attended our monthly networking mixer at Hempstead Village Hall. Over 50 business owners and community leaders gathered to forge new connections and strengthen existing partnerships. The event featured speed networking sessions, a business showcase, and refreshments. Great connections were made and we look forward to seeing everyone at next month's event!",
    date: "November 20, 2024",
    category: "Networking",
    image: "/highlights/508830097_9954289907982865_101481004878060619_n.jpg",
    hashtags: ["#networking", "#community", "#hempsteadbusiness"],
    engagement: { likes: 15, shares: 4, comments: 8 },
    source: "Facebook",
  },
  {
    id: 3,
    title: "New Member Welcome - December 2024",
    content: "We're excited to welcome three new businesses to our chamber family this month! Join us in congratulating StevenTechs IT Solutions, Alula Bright Childcare, and Green Market on Jackson Avenue. These dynamic businesses bring innovation, quality services, and community spirit to Hempstead. Learn more about them in our member directory.",
    date: "December 1, 2024",
    category: "Membership",
    image: "/highlights/485156190_1087471683409197_592034467281624493_n.jpg",
    hashtags: ["#welcome", "#growth", "#newmembers"],
    engagement: { likes: 20, shares: 6, comments: 5 },
    source: "Facebook",
  },
  {
    id: 4,
    title: "Holiday Business Workshop Series",
    content: "Join us for our special Holiday Business Workshop Series throughout December. Topics include: Digital Marketing for the Holiday Season, Year-End Tax Planning, and Customer Retention Strategies. All workshops are free for chamber members. Register now as space is limited!",
    date: "December 5, 2024",
    category: "Workshop",
    image: "/highlights/508681017_9959340974144425_1128987695195319470_n.jpg",
    hashtags: ["#workshop", "#businessgrowth", "#learning"],
    engagement: { likes: 12, shares: 8, comments: 3 },
    source: "Chamber",
  },
  {
    id: 5,
    title: "Community Giving Initiative",
    content: "The Hempstead Chamber of Commerce is partnering with local businesses to support families in need this holiday season. Our members have donated gift cards, toys, and essential items. Thank you to everyone who contributed to making this season brighter for our community!",
    date: "December 10, 2024",
    category: "Community",
    image: "/highlights/509420035_9951157981629391_2649150585504347783_n.jpg",
    hashtags: ["#givingback", "#community", "#holidays"],
    engagement: { likes: 45, shares: 12, comments: 15 },
    source: "Facebook",
  },
];

const categories = ["All", "Event", "Networking", "Membership", "Workshop", "Community"];

export default function NewsUpdatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews = activeCategory === "All"
    ? allNews
    : allNews.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-200 font-semibold uppercase tracking-wide text-sm">
            Stay Connected
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-heading mt-2 mb-4">
            News & Updates
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Keep up with the latest news, events, and announcements from the Hempstead Chamber of Commerce
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
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
      </section>

      {/* News Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredNews.length}</span> {filteredNews.length === 1 ? 'update' : 'updates'}
              {activeCategory !== "All" && (
                <span> in <span className="font-semibold text-primary-600">{activeCategory}</span></span>
              )}
            </p>
          </div>

          <div className="space-y-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                id={item.title.toLowerCase().replace(/\s+/g, "-")}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="md:col-span-1 h-64 md:h-auto bg-primary-100 relative">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-20 h-20 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item.date}</span>
                      </div>
                      <span className="text-xs text-gray-400">via {item.source}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 font-heading mb-3">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.content}
                    </p>

                    {/* Hashtags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.hashtags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm text-primary-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        <span>{item.engagement.likes} Likes</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        <span>{item.engagement.shares} Shares</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{item.engagement.comments} Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No updates found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
            Stay Connected with Us
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Follow us on social media to get the latest updates and news
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://facebook.com/hempsteadchamber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-primary-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
