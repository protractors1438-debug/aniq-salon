"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Navigation } from "lucide-react";

// Floating Gold Icons as elegant line art SVGs
const ScissorsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-gold opacity-15">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="9.53" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const CombIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-20 h-10 text-gold opacity-15">
    <path d="M2 4h20v6H2z" />
    <path d="M4 10v10M8 10v10M12 10v10M16 10v10M20 10v10" />
  </svg>
);

const MirrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-24 text-gold opacity-15">
    <ellipse cx="12" cy="10" rx="8" ry="8" />
    <path d="M12 18v4M8 22h8" />
  </svg>
);

export default function Hero() {
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover scale-[1.02]"
        style={{ filter: "brightness(0.25)" }}
      >
        <source src="/assets/salon-intro.mp4" type="video/mp4" />
      </video>

      {/* Luxury Cinematic Gradient & Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/95 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent pointer-events-none" />

      {/* Gold Geometric Lines in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[2px] h-[30%] bg-gradient-to-b from-gold/30 to-transparent" />
        <div className="absolute bottom-10 right-10 w-[2px] h-[30%] bg-gradient-to-t from-gold/30 to-transparent" />
        <div className="absolute top-1/4 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      {/* Floating Subtle Luxury Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] pointer-events-none hidden md:block"
      >
        <ScissorsIcon />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[8%] pointer-events-none hidden md:block"
      >
        <MirrorIcon />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] right-[12%] pointer-events-none hidden md:block"
      >
        <CombIcon />
      </motion.div>

      <div className="absolute bottom-[20%] right-[8%] pointer-events-none hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-gold opacity-10">
          <polygon points="50,15 90,85 10,85" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Header Sub-tag */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30 text-gold text-[9px] sm:text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Where Style Meets Confidence
          </span>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-cream mb-4 uppercase">
            ANIQ SALON & TATTOOS
          </h1>

          {/* Subheading tag */}
          <p className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-widest text-gold font-medium mb-6">
            Luxury Grooming • Beauty • Bridal • Tattoos
          </p>

          {/* Body Sub-text */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-cream/70 max-w-xl mb-10 font-light leading-relaxed">
            Premium Unisex Salon & Tattoo Studio in Annojiguda. Crafted for those who appreciate high-end aesthetics, luxury care, and custom artistry.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold/90 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-xs cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
