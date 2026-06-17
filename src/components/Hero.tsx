"use client";

import { motion } from "framer-motion";
import { MessageCircle, Navigation, Star, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";
  const mapsUrl = "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38";

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover scale-[1.03]"
        style={{ filter: "brightness(0.35)" }}
      >
        <source src="/assets/salon-intro.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ivory to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Tag */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-[9px] sm:text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            Annojiguda&apos;s Premium Salon Experience
          </span>

          {/* Headline */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight max-w-4xl">
            Transform Your Look at Annojiguda&apos;s Premium Salon
          </h1>

          {/* Subheading */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-white/85 max-w-2xl mb-8 leading-relaxed font-light">
            Professional Hair, Beauty, Grooming & Tattoo Services by Experienced Stylists. Trusted by Local Customers with a 4.9★ Google Rating.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/90 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-accent/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Book on WhatsApp
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-accent">
                <Star className="w-4 h-4 fill-accent text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">4.9/5 Google Rating</p>
                <p className="text-[10px] text-white/60">Loved by 100+ clients</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs">
                💇
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Professional Stylists</p>
                <p className="text-[10px] text-white/60">Franchise-trained experts</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-full bg-white/5 border border-white/10 text-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Prime Location</p>
                <p className="text-[10px] text-white/60">Near NTPC Chowrasta</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
