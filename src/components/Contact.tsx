"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

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

export default function Contact() {
  const contactMethods = [
    {
      name: "Instagram",
      detail: "@aniqsalon_annojiguda",
      action: "Follow & DM Us",
      url: "https://www.instagram.com/aniqsalon_annojiguda",
      icon: <InstagramIcon className="w-8 h-8 text-accent" />,
      color: "hover:border-accent/40",
    },
    {
      name: "WhatsApp",
      detail: "+91 8522942128",
      action: "Instant Booking",
      url: "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.",
      icon: <MessageCircle className="w-8 h-8 text-accent fill-current" />,
      color: "hover:border-accent/40",
    },
    {
      name: "Google Maps",
      detail: "Beside Sri Balaji Bakery",
      action: "Get Map Directions",
      url: "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38",
      icon: <MapPin className="w-8 h-8 text-accent" />,
      color: "hover:border-accent/40",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Get In Touch
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Connect With ANIQ Salon
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`bg-ivory p-6 border border-primary/5 shadow-sm transition-all duration-300 relative group flex flex-col justify-between items-center text-center cursor-pointer ${method.color}`}
            >
              {/* Top accent border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-accent transition-colors duration-300" />
              
              {/* Icon */}
              <div className="mb-4 p-3 bg-white rounded-none group-hover:bg-accent/10 transition-colors duration-300">
                {method.icon}
              </div>

              {/* Name */}
              <h3 className="font-serif text-base font-bold text-primary mb-1.5">
                {method.name}
              </h3>

              {/* Detail */}
              <p className="text-xs text-primary/70 mb-5 font-light">
                {method.detail}
              </p>

              {/* Action */}
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-accent font-bold group-hover:text-primary transition-colors duration-300">
                {method.action}
                <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
