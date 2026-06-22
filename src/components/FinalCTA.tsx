"use client";

import { motion } from "framer-motion";
import { MessageCircle, Navigation } from "lucide-react";

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";
  const mapsUrl = "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38";

  return (
    <section className="py-20 bg-primary text-cream relative overflow-hidden text-center border-t border-gold/15">
      {/* Background Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(201,168,106,0.08),rgba(255,255,255,0))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-3">
            RESERVATION
          </span>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight uppercase tracking-wide">
            Ready for Your Next Transformation?
          </h2>
          
          <p className="text-xs sm:text-sm text-cream/70 max-w-xl mb-8 leading-relaxed font-light">
            Book your appointment today and experience professional grooming, beauty, and styling services from experienced franchise professionals.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 bg-gold hover:bg-gold/90 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Book on WhatsApp
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-8 py-3.5 border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-xs cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
