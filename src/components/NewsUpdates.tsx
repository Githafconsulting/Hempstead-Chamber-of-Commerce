import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Small Business Saturday",
    excerpt: "Support local businesses this Small Business Saturday! Shop local and help our community thrive.",
    date: "5 days ago",
    category: "Event",
    image: "/news/small-business-saturday.jpg",
    link: "/news-updates#small-business-saturday",
    hashtags: ["#shoplocal", "#SmallBusinessSaturday"],
  },
  {
    id: 2,
    title: "Chamber Networking Event Success",
    excerpt: "Thank you to all members who attended our monthly networking mixer. Great connections were made!",
    date: "1 week ago",
    category: "Networking",
    image: "/news/networking-event.jpg",
    link: "/news-updates#networking-event",
    hashtags: ["#networking", "#community"],
  },
  {
    id: 3,
    title: "New Member Welcome",
    excerpt: "We're excited to welcome three new businesses to our chamber family this month.",
    date: "2 weeks ago",
    category: "Membership",
    image: "/news/new-members.jpg",
    link: "/news-updates#new-members",
    hashtags: ["#welcome", "#growth"],
  },
];

export default function NewsUpdates() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
            Stay Informed
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 font-heading mt-2 mb-4">
            News & Updates
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest news, events, and announcements from the Hempstead Chamber of Commerce
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-48 bg-primary-100 relative overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-primary-900 font-heading mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-primary-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/news-updates"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-primary-700 transition-colors"
          >
            View All News & Updates
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
