import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Small Business Saturday",
    excerpt: "Support local businesses this Small Business Saturday! Shop local and help our community thrive.",
    date: "5 days ago",
    category: "Event",
    image: "/highlights/509360252_9974143712664151_4431309747412328761_n.jpg",
    link: "/news-updates#small-business-saturday",
  },
  {
    id: 2,
    title: "Chamber Networking Event Success",
    excerpt: "Thank you to all members who attended our monthly networking mixer. Great connections were made!",
    date: "1 week ago",
    category: "Networking",
    image: "/highlights/508830097_9954289907982865_101481004878060619_n.jpg",
    link: "/news-updates#networking-event",
  },
  {
    id: 3,
    title: "New Member Welcome",
    excerpt: "We're excited to welcome three new businesses to our chamber family this month.",
    date: "2 weeks ago",
    category: "Membership",
    image: "/highlights/485156190_1087471683409197_592034467281624493_n.jpg",
    link: "/news-updates#new-members",
  },
];

export default function NewsUpdates() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-700 font-semibold text-sm">Stay Informed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-heading mb-4">
              News & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              The latest from the Hempstead Chamber community
            </p>
          </div>
          <Link
            href="/news-updates"
            className="hidden lg:inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View All News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* News Grid - Featured layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Featured Article */}
          <article className="group lg:row-span-2 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src={newsItems[0].image}
                alt={newsItems[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-semibold">
                  {newsItems[0].category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {newsItems[0].date}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {newsItems[0].title}
                </h3>
                <p className="text-white/80 leading-relaxed hidden sm:block">
                  {newsItems[0].excerpt}
                </p>
              </div>
            </div>
            <div className="p-6 lg:hidden">
              <p className="text-gray-600 leading-relaxed mb-4">
                {newsItems[0].excerpt}
              </p>
              <Link
                href={newsItems[0].link}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </article>

          {/* Secondary Articles */}
          {newsItems.slice(1).map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 flex flex-col sm:flex-row lg:flex-col"
            >
              <div className="relative h-48 sm:h-auto sm:w-1/3 lg:w-full lg:h-48 overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1.5 bg-primary-600 text-white rounded-lg text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {item.excerpt}
                </p>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center lg:hidden">
          <Link
            href="/news-updates"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25"
          >
            View All News
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
