import Link from "next/link";

const upcomingEvents = [
  {
    title: "Monthly Networking Mixer",
    date: "Dec 15",
    year: "2024",
    time: "6:00 PM - 8:00 PM",
    location: "Hempstead Village Hall",
    description: "Join fellow business owners for an evening of networking, refreshments, and valuable connections.",
    type: "Networking",
  },
  {
    title: "Small Business Workshop",
    date: "Jan 10",
    year: "2025",
    time: "10:00 AM - 12:00 PM",
    location: "Chamber Office",
    description: "Learn essential marketing strategies to grow your business in the new year.",
    type: "Workshop",
  },
  {
    title: "Annual Awards Gala",
    date: "Feb 22",
    year: "2025",
    time: "7:00 PM - 10:00 PM",
    location: "Hempstead Golf Club",
    description: "Celebrate the achievements of our outstanding member businesses at our annual gala.",
    type: "Gala",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full" />
              <span className="text-primary-700 font-semibold text-sm">Events Calendar</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-heading mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Connect, learn, and grow with our community events
            </p>
          </div>
          <Link
            href="/event-highlights"
            className="hidden lg:inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
          >
            View All Events
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Date Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-white">{event.date.split(' ')[0]}</span>
                    <span className="text-xl text-white/80">{event.date.split(' ')[1]}</span>
                  </div>
                  <div className="text-white/60 text-sm">{event.year}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Event Type Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-semibold mb-4">
                  {event.type}
                </div>

                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {event.title}
                </h3>

                {/* Time & Location */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Register Button */}
                <Link
                  href="/event-highlights"
                  className="inline-flex items-center gap-2 w-full justify-center py-3 bg-gray-50 text-primary-600 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-colors group-hover:bg-primary-600 group-hover:text-white"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center lg:hidden">
          <Link
            href="/event-highlights"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25"
          >
            View All Events
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
