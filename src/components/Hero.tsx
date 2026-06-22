"use client";

import { motion } from "framer-motion";
import { MessageCircle, Navigation, Star, MapPin, Award, Clock } from "lucide-react";

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
        style={{ filter: "brightness(0.55)" }}
      >
        <source src="/assets/salon-intro.mp4" type="video/mp4" />
      </video>

      {/* Reduced overlay opacity (approx 40%) so the salon ambience is clearly visible */}
      <div className="absolute inset-0 bg-primary/40 pointer-events-none z-10" />
      
      {/* Soft gradient fade at bottom to blend into sections */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary via-primary/50 to-transparent pointer-events-none z-10" />

      {/* Gold Accent Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-[12%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-[18%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-10 left-10 w-[1px] h-[30%] bg-gradient-to-b from-gold/20 to-transparent" />
        <div className="absolute bottom-10 right-10 w-[1px] h-[30%] bg-gradient-to-t from-gold/20 to-transparent" />
      </div>

      {/* Subtle 3D-feeling Floating Elements (Gold Rings & Rotating Frames) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[22%] left-[10%] w-24 h-24 rounded-full border-2 border-gold/10 border-t-gold/30 pointer-events-none hidden md:block z-10"
      />
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -12, 0], scale: [1, 0.96, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[28%] right-[8%] w-20 h-20 rounded-full border border-gold/10 border-b-gold/25 pointer-events-none hidden md:block z-10"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[18%] right-[15%] w-32 h-32 border border-gold/10 pointer-events-none hidden lg:block z-10"
      />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream flex flex-col items-center justify-center h-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Tagline */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/15 border border-gold/30 text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6">
            Where Style Meets Confidence
          </span>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-cream mb-4 uppercase">
            ANIQ SALON & TATTOOS
          </h1>

          {/* Subheading tag */}
          <p className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] text-gold font-bold mb-6">
            Luxury Grooming • Beauty • Bridal • Tattoos
          </p>

          {/* Body Sub-text */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-cream/80 max-w-xl mb-8 font-light leading-relaxed">
            Premium Unisex Salon & Tattoo Studio in Annojiguda. Crafted for those who appreciate high-end aesthetics, luxury care, and custom artistry.
          </p>

          {/* Trust Badges - Emojis replaced with Gold Lucide Icons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 max-w-3xl">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/60 border border-gold/10 backdrop-blur-xs">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-cream/90 uppercase">4.9 Rating</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/60 border border-gold/10 backdrop-blur-xs">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-cream/90 uppercase">Annojiguda</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/60 border border-gold/10 backdrop-blur-xs">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-cream/90 uppercase">Professional Stylists</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/60 border border-gold/10 backdrop-blur-xs">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-cream/90 uppercase">Open 9 AM – 10 PM</span>
            </div>
          </div>

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
