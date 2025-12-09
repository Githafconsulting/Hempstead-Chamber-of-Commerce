"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const testimonials = [
  {
    quote: "Joining the Hempstead Chamber was one of the best decisions for my business. The networking opportunities alone have brought in several new clients.",
    name: "Maria Rodriguez",
    business: "Rodriguez Legal Services",
    role: "Owner",
  },
  {
    quote: "The Chamber truly advocates for small businesses. They helped us navigate permits and connected us with resources we didn't know existed.",
    name: "James Thompson",
    business: "Thompson's Auto Repair",
    role: "Founder",
  },
  {
    quote: "As a new business owner, the workshops and mentorship programs gave me the confidence and skills to grow. The community here is incredibly supportive.",
    name: "Aisha Johnson",
    business: "Bright Futures Childcare",
    role: "Director",
  },
];

const upcomingEvents = [
  {
    title: "Monthly Networking Mixer",
    date: "Dec 15",
    time: "6:00 PM",
    location: "Hempstead Village Hall",
  },
  {
    title: "Small Business Workshop",
    date: "Jan 10",
    time: "10:00 AM",
    location: "Chamber Office",
  },
  {
    title: "Annual Awards Gala",
    date: "Feb 22",
    time: "7:00 PM",
    location: "Hempstead Golf & Country Club",
  },
];

export default function TestimonialsAndEvents() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Testimonial */}
          <div>
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Member Stories
            </span>
            <h2 className="text-3xl font-bold text-primary-900 font-heading mt-2 mb-8">
              What Our Members Say
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 relative min-h-[280px]">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-100">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary-900 font-heading">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].business}
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex
                        ? "bg-primary-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Events */}
          <div>
            <span className="text-primary-600 font-semibold uppercase tracking-wide text-sm">
              Mark Your Calendar
            </span>
            <h2 className="text-3xl font-bold text-primary-900 font-heading mt-2 mb-8">
              Upcoming Events
            </h2>

            <div className="space-y-4 mb-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all group flex gap-4"
                >
                  {/* Date Badge */}
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex flex-col items-center justify-center text-white flex-shrink-0">
                    <span className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</span>
                    <span className="text-xs uppercase mt-1">{event.date.split(" ")[1]}</span>
                  </div>

                  {/* Event Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary-900 font-heading group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {event.time} • {event.location}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowOutwardIcon className="w-5 h-5 text-gray-300 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1" />
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
        </div>
      </div>
    </section>
  );
}
