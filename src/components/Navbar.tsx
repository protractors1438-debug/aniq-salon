"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "services", "offers", "portfolio", "gallery", "about", "reviews", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Offers", href: "#offers", id: "offers" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Reviews", href: "#reviews", id: "reviews" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-gold/15 py-2.5 shadow-xl"
          : "bg-charcoal/85 backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="flex items-center">
              <Image
                src="/assets/logo-transparent.png"
                alt="ANIQ Logo"
                width={120}
                height={36}
                className="transition-all duration-300"
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] tracking-widest uppercase font-medium transition-all duration-300 relative py-1 hover:text-gold ${
                  activeSection === link.id ? "text-gold font-semibold" : "text-cream/80"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold/90 text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold/10 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cream hover:text-gold transition-colors duration-300 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-cream hover:text-gold p-2"
          aria-label="Close menu"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="flex flex-col items-center space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-serif tracking-widest uppercase transition-colors ${
                activeSection === link.id ? "text-gold" : "text-cream hover:text-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-primary font-bold text-xs uppercase tracking-widest hover:bg-gold/90 transition-all duration-300 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
}
