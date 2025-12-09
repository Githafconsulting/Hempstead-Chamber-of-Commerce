import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const upcomingEvents = [
  {
    title: "Monthly Networking Mixer",
    date: "December 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Hempstead Village Hall",
    description: "Join fellow business owners for an evening of networking and refreshments.",
  },
  {
    title: "Small Business Workshop",
    date: "January 10, 2025",
    time: "10:00 AM - 12:00 PM",
    location: "Chamber Office",
    description: "Learn essential marketing strategies to grow your business in the new year.",
  },
  {
    title: "Annual Awards Gala",
    date: "February 22, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Hempstead Golf & Country Club",
    description: "Celebrate the achievements of our outstanding member businesses.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 font-heading mb-3 sm:mb-4">
            Upcoming Events
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Connect, learn, and grow with our community events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Date Badge */}
              <div className="bg-primary-600 text-white px-4 sm:px-6 py-3 sm:py-4">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide opacity-80">
                  {event.date}
                </div>
                <div className="text-xs sm:text-sm">
                  {event.time}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-primary-900 font-heading mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/event-highlights"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-primary-700 transition-colors text-sm sm:text-base"
          >
            View All Events
            <ArrowOutwardIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
