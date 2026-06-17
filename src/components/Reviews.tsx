"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      slideNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Client Testimonials
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Loved by Customers Across Annojiguda
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Global Google Rating Stats */}
        <div className="flex flex-col items-center justify-center gap-1.5 mb-12">
          <div className="flex gap-0.5 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <p className="font-serif text-xl font-bold text-primary">
            4.9 / 5.0 Stars
          </p>
          <p className="text-[9px] uppercase tracking-widest text-primary/60 font-semibold">
            Based on 120+ Google Reviews
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12 min-h-[260px] flex items-center justify-center">
          
          {/* Arrow Buttons */}
          <button
            onClick={slidePrev}
            className="absolute left-0 sm:left-4 z-20 p-2.5 bg-ivory hover:bg-accent text-primary hover:text-primary transition-all duration-300 border border-primary/5 focus:outline-none cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={slideNext}
            className="absolute right-0 sm:right-4 z-20 p-2.5 bg-ivory hover:bg-accent text-primary hover:text-primary transition-all duration-300 border border-primary/5 focus:outline-none cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Testimonial card slider */}
          <div className="w-full overflow-hidden py-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-ivory border border-primary/5 p-6 sm:p-10 shadow-sm text-center relative max-w-2xl mx-auto flex flex-col items-center"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-accent/25 fill-accent mb-4" />

                {/* Rating Stars */}
                <div className="flex gap-0.5 text-accent mb-4">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-primary/95 font-light leading-relaxed mb-6 italic">
                  &ldquo;{reviews[currentIndex].content}&rdquo;
                </p>

                {/* Divider Line */}
                <div className="w-6 h-[1px] bg-accent mb-3" />

                {/* Author */}
                <h4 className="font-serif text-sm font-bold text-primary">
                  {reviews[currentIndex].author}
                </h4>
                <span className="text-[9px] tracking-widest uppercase text-accent font-semibold mt-0.5">
                  Verified Client • {reviews[currentIndex].service}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2 h-2 transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? "bg-accent scale-125" : "bg-primary/10 hover:bg-primary/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
