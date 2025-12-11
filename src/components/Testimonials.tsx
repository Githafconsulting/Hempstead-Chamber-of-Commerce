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
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeSlide, isPaused, isAnimating]);

  const getCurrentTestimonials = () => {
    const startIdx = activeSlide * itemsPerSlide;
    return testimonials.slice(startIdx, startIdx + itemsPerSlide);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            <span className="text-primary-700 font-semibold text-sm">Member Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 font-heading mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from business owners thriving in our community
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 bg-white rounded-2xl shadow-lg items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100 hover:border-primary-600"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden px-2">
            <div
              key={activeSlide}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-slideIn"
            >
              {getCurrentTestimonials().map((testimonial, idx) => (
                <div
                  key={`${activeSlide}-${idx}`}
                  className="group bg-white rounded-2xl p-8 flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 leading-relaxed mb-8 flex-grow text-lg">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg shadow-primary-500/25">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-primary-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.business}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button - Desktop */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 bg-white rounded-2xl shadow-lg items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100 hover:border-primary-600"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Mobile Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="lg:hidden w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 disabled:opacity-50 border border-gray-100"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                } disabled:cursor-not-allowed`}
                aria-label={`View slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="lg:hidden w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 disabled:opacity-50 border border-gray-100"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
