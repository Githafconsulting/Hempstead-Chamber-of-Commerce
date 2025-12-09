"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const upcomingEvents = [
  {
    title: "Monthly Networking Mixer",
    date: "Dec 15",
    time: "6:00 PM",
  },
  {
    title: "Small Business Workshop",
    date: "Jan 10",
    time: "10:00 AM",
  },
  {
    title: "Annual Awards Gala",
    date: "Feb 22",
    time: "7:00 PM",
  },
];

const partners = [
  { src: "/one.png", alt: "Partner 1" },
  { src: "/two.png", alt: "Partner 2" },
  { src: "/3.png", alt: "Partner 3" },
  { src: "/4.png", alt: "Partner 4" },
  { src: "/5.png", alt: "Partner 5" },
  { src: "/6.png", alt: "Partner 6" },
];

export default function EventsAndPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-3xl font-bold text-primary-900 font-heading mb-8">
              Upcoming Events
            </h2>

            <div className="space-y-4 mb-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  {/* Date Badge */}
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                    <span className="text-lg font-bold">{event.date.split(" ")[0]}</span>
                    <span className="text-xs uppercase">{event.date.split(" ")[1]}</span>
                  </div>

                  {/* Event Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-900 group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>

                  {/* Arrow */}
                  <ArrowOutwardIcon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
              ))}
            </div>

            <Link
              href="/event-highlights"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View all events
              <ArrowOutwardIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Partners / Support Local */}
          <div>
            <h2 className="text-3xl font-bold text-primary-900 font-heading mb-4">
              We Support Local
            </h2>
            <p className="text-gray-600 mb-8">
              Proud to partner with amazing businesses in our community
            </p>

            {/* Partner Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Link
              href="/join"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Become a partner
              <ArrowOutwardIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
