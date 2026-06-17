"use client";

import { motion } from "framer-motion";
import { MessageCircle, Navigation } from "lucide-react";

export default function FinalCTA() {
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";
  const mapsUrl = "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38";

  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden text-center">
      {/* Background Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.08),rgba(255,255,255,0))]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-3">
            Reservation
          </span>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 max-w-2xl leading-tight">
            Ready for Your Next Transformation?
          </h2>
          
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mb-8 leading-relaxed font-light">
            Book your appointment today and experience professional grooming, beauty, and styling services from experienced professionals.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-accent hover:bg-accent/90 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-accent/10 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Book on WhatsApp
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 border border-white/20 hover:border-white hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
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
