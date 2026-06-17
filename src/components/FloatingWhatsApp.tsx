"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center border border-white/20 group cursor-pointer"
      aria-label="Book appointment on WhatsApp"
    >
      {/* Pulse effect rings */}
      <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping pointer-events-none group-hover:hidden" />
      
      {/* Icon */}
      <MessageCircle className="w-7 h-7 fill-current" />
      
      {/* Tooltip text showing on hover */}
      <span className="absolute right-16 bg-primary text-accent text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-accent/20">
        Book Appointment
      </span>
    </motion.a>
  );
}
