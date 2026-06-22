"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, MapPin, X, HelpCircle, Navigation } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function QuickActions() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneUrl = "tel:+918522942128";
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";
  const instagramUrl = "https://www.instagram.com/aniqsalon_annojiguda";
  const mapsUrl = "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38";

  const actions = [
    {
      name: "Call Us",
      icon: <Phone className="w-5 h-5" />,
      url: phoneUrl,
      bg: "bg-amber-600 text-white",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-5 h-5" />,
      url: instagramUrl,
      bg: "bg-pink-600 text-white",
    },
    {
      name: "Directions",
      icon: <MapPin className="w-5 h-5" />,
      url: mapsUrl,
      bg: "bg-blue-600 text-white",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5 fill-current" />,
      url: whatsappUrl,
      bg: "bg-emerald-600 text-white",
    },
  ];

  return (
    <>
      {/* 1. Mobile Bottom Sticky Conversion Bar (Visible only on < lg screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary-black/95 backdrop-blur-md border-t border-gold/20 lg:hidden shadow-2xl h-16 flex items-center justify-around px-2 pb-safe">
        
        {/* Call Action */}
        <a 
          href={phoneUrl}
          className="flex flex-col items-center justify-center text-cream/70 hover:text-gold transition-colors duration-300 w-1/4 h-full"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-wider mt-1 font-medium">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-cream/70 hover:text-gold transition-colors duration-300 w-1/4 h-full relative"
        >
          {/* Subtle pulse for WhatsApp */}
          <span className="absolute top-2 right-1/3 w-1.5 h-1.5 bg-gold rounded-full animate-ping" />
          <MessageCircle className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-wider mt-1 font-medium font-semibold text-gold">WhatsApp</span>
        </a>

        {/* Instagram Action */}
        <a 
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-cream/70 hover:text-gold transition-colors duration-300 w-1/4 h-full"
        >
          <InstagramIcon className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-wider mt-1 font-medium">Instagram</span>
        </a>

        {/* Directions Action */}
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-cream/70 hover:text-gold transition-colors duration-300 w-1/4 h-full"
        >
          <Navigation className="w-4 h-4" />
          <span className="text-[9px] uppercase tracking-wider mt-1 font-medium">Map</span>
        </a>

      </div>

      {/* 2. Desktop Floating Expandable Widget (Visible only on >= lg screens) */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:flex flex-col items-end gap-3">
        
        {/* Expandable Action Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              className="flex flex-col items-end gap-3 mb-1"
            >
              {actions.map((action, idx) => (
                <motion.a
                  key={action.name}
                  href={action.url}
                  target={action.name !== "Call Us" ? "_blank" : undefined}
                  rel={action.name !== "Call Us" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, x: -2 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  {/* Tooltip Label */}
                  <span className="bg-secondary-black text-cream text-[10px] tracking-widest font-bold uppercase py-2 px-3 shadow-lg border border-gold/15 rounded-none opacity-90 group-hover:opacity-100 transition-opacity">
                    {action.name}
                  </span>
                  {/* Icon Round Button */}
                  <div className={`p-3 rounded-full shadow-lg ${action.bg} flex items-center justify-center border border-white/10`}>
                    {action.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Trigger Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 bg-gold text-primary rounded-full shadow-2xl flex items-center justify-center border border-gold/20 cursor-pointer relative group"
          aria-label="Toggle contact menu"
        >
          {/* Subtle pulse ring when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping pointer-events-none" />
          )}

          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 fill-current" />}

          {/* Quick Helper Tooltip on Hover */}
          {!isOpen && (
            <span className="absolute right-16 bg-secondary-black text-gold text-[10px] font-bold tracking-widest uppercase py-2.5 px-4 shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gold/15">
              Book Appointment
            </span>
          )}
        </motion.button>

      </div>
    </>
  );
}
