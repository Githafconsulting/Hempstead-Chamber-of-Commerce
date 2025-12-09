"use client";

import { useState } from "react";

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

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 font-heading mb-3 sm:mb-4">
            What Our Members Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Hear from business owners who are part of our community
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 md:p-12 relative">
          {/* Quote Icon */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-primary-100">
            <svg className="w-10 h-10 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Quote Text */}
          <div className="relative z-10 pt-8 sm:pt-6">
            <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-primary-900 font-heading text-sm sm:text-base">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].business}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === activeIndex
                  ? "bg-primary-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
