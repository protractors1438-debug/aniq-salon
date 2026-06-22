"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      author: "Rahul Sharma",
      rating: 5,
      content: "Liked the ambience and the professional staff. They are well experienced and did a great job with my haircut.",
      service: "Haircut & Styling",
    },
    {
      author: "Priyanka Reddy",
      rating: 5,
      content: "Excellent and professional service at affordable prices.",
      service: "Facial & Cleanup",
    },
    {
      author: "Sneha Kapoor",
      rating: 5,
      content: "Very good suggestions about beauty care and excellent hair spa experience.",
      service: "Hair Spa",
    },
    {
      author: "Anitha Rao",
      rating: 5,
      content: "Very happy with my keratin treatment. My hair feels smooth, shiny and manageable.",
      service: "Keratin Treatment",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const slidePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const blurFocusVariants: Variants = {
    enter: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.96,
    },
    center: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.96,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <section id="reviews" className="py-20 bg-primary relative overflow-hidden border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            CLIENT REVIEWS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream uppercase tracking-wide">
            Loved by Customers Across Annojiguda
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        {/* Global Google Rating Stats */}
        <div className="flex flex-col items-center justify-center gap-2 mb-12">
          <div className="flex gap-1 text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-serif text-2xl font-bold text-cream tracking-wide">
            4.9★ / 5.0 Rating
          </p>
          <p className="text-[10px] uppercase tracking-widest text-gold font-bold">
            Based on 120+ Google Reviews
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto px-2 sm:px-12 min-h-[300px] flex items-center justify-center">
          
          {/* Arrow Buttons */}
          <button
            onClick={slidePrev}
            className="absolute left-0 sm:left-4 z-20 p-2.5 bg-secondary-black hover:bg-gold text-gold hover:text-primary transition-all duration-300 border border-gold/20 focus:outline-none cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={slideNext}
            className="absolute right-0 sm:right-4 z-20 p-2.5 bg-secondary-black hover:bg-gold text-gold hover:text-primary transition-all duration-300 border border-gold/20 focus:outline-none cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Testimonial card slider */}
          <div className="w-full overflow-hidden py-4">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                variants={blurFocusVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-secondary-black border border-gold/20 p-8 sm:p-12 shadow-2xl text-center relative max-w-2xl mx-auto flex flex-col items-center"
              >
                {/* Decorative borders */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/25" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/25" />

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-gold/20 fill-gold/5 mb-4" />

                {/* Rating Stars */}
                <div className="flex gap-0.5 text-gold mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-cream/90 font-light leading-relaxed mb-6 italic">
                  &ldquo;{reviews[currentIndex].content}&rdquo;
                </p>

                {/* Divider Line */}
                <div className="w-6 h-[1px] bg-gold mb-4" />

                {/* Author */}
                <h4 className="font-serif text-sm font-bold text-cream">
                  {reviews[currentIndex].author}
                </h4>
                <span className="text-[9px] tracking-widest uppercase text-gold font-bold mt-1">
                  Verified Client • {reviews[currentIndex].service}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2.5 mt-4">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "bg-gold scale-125" : "bg-gold/20 hover:bg-gold/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
