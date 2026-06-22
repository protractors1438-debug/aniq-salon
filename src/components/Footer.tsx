"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

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

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Offers", href: "#offers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      url: "https://www.instagram.com/aniqsalon_annojiguda",
      label: "Instagram",
    },
    {
      icon: <MessageCircle className="w-5 h-5 fill-current" />,
      url: "https://wa.me/918522942128",
      label: "WhatsApp",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      url: "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38",
      label: "Google Maps",
    },
  ];

  return (
    <footer className="bg-primary text-cream border-t border-gold/15 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Info column */}
          <div className="flex flex-col space-y-6">
            <Link href="#home" className="inline-block">
              <Image
                src="/assets/logo-transparent.png"
                alt="ANIQ Logo"
                width={130}
                height={40}
                className="brightness-100"
              />
            </Link>
            <p className="text-xs text-cream/60 leading-relaxed font-light">
              Annojiguda&apos;s premium destination for professional hair, grooming, beauty, and tattooing services. Experience luxury, redefined.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3 flex flex-col">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-cream/70 hover:text-gold font-light transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase mb-6 text-gold">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+918522942128" className="text-xs text-cream/70 hover:text-gold font-light transition-colors">
                  +91 8522942128
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-xs text-cream/70 font-light">
                  9:00 AM – 10:00 PM (Daily)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-xs text-cream/70 font-light">
                  Annojiguda, Hyderabad
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="font-serif text-sm font-bold tracking-widest uppercase mb-6 text-gold">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="p-3 bg-white/5 border border-white/10 hover:border-gold/40 text-cream hover:text-gold rounded-none transition-colors duration-300 cursor-pointer"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-center gap-4">
          <p className="text-[10px] uppercase tracking-wider text-cream/40 font-light">
            &copy; {new Date().getFullYear()} ANIQ Salon Annojiguda. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-wider text-cream/40 font-light">
            Designed for Premium Conversion
          </p>
        </div>

      </div>
    </footer>
  );
}
