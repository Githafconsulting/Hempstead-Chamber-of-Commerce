"use client";

import { useState, useEffect, useRef } from "react";

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
  {
    quote: "The educational workshops provided by the Chamber have been invaluable. I've learned strategies that directly increased my revenue by 40% this year.",
    name: "David Chen",
    business: "Chen Digital Marketing",
    role: "CEO",
  },
  {
    quote: "Being a Chamber member has opened doors I never knew existed. The business connections and referrals have been amazing for my company's growth.",
    name: "Sarah Williams",
    business: "Williams Consulting Group",
    role: "Managing Partner",
  },
  {
    quote: "The Chamber team is always available to help. They connected me with local vendors and helped me navigate the challenges of starting my first business.",
    name: "Michael Brown",
    business: "Brown's Bakery & Cafe",
    role: "Owner",
  },
  {
    quote: "I've attended every Chamber event this year. The quality of connections and the supportive community atmosphere is unlike anything I've experienced before.",
    name: "Jennifer Martinez",
    business: "Martinez Financial Services",
    role: "Financial Advisor",
  },
  {
    quote: "The Chamber's advocacy for small businesses in Hempstead makes a real difference. They truly care about helping local businesses succeed and thrive.",
    name: "Robert Taylor",
    business: "Taylor Home Services",
    role: "President",
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate number of slides based on screen size (3 testimonials per slide on desktop)
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (slideIndex: number) => {
    if (isAnimating || slideIndex === activeSlide) return;
    setIsAnimating(true);
    setActiveSlide(slideIndex);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeSlide, isPaused, isAnimating]);

  // Get testimonials for current slide
  const getCurrentTestimonials = () => {
    const startIdx = activeSlide * itemsPerSlide;
    return testimonials.slice(startIdx, startIdx + itemsPerSlide);
  };

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 font-heading mb-3 sm:mb-4">
            What Our Members Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Hear from business owners who are part of our community
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              key={activeSlide}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideIn"
            >
              {getCurrentTestimonials().map((testimonial, idx) => (
                <div
                  key={`${activeSlide}-${idx}`}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
                >
                  {/* Quote Icon */}
                  <div className="text-primary-100 mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-primary-900 font-heading">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.business}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors disabled:opacity-50"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors disabled:opacity-50"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide
                  ? "bg-primary-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              } disabled:cursor-not-allowed`}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Pause Indicator */}
        {isPaused && (
          <div className="text-center mt-4">
            <span className="text-xs text-gray-400">
              Paused - Move mouse away to resume
            </span>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
