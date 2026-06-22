"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, Check, GraduationCap } from "lucide-react";

export default function StudentOffers() {
  const boysOffers = [
    "Precision Haircut tailored to your style.",
    "Insta-Ready Hair Styling & Blow Dry.",
    "Premium D-Tan Face Clearance Treatment.",
    "Applicable on all weekdays (Mon-Fri).",
  ];

  const girlsOffers = [
    "Premium Haircut (Choice of Layer, U, or V Cut).",
    "Complimentary Eyebrow Threading (Absolutely FREE).",
    "Premium D-Tan Face Clearance Treatment.",
    "Applicable on all weekdays (Mon-Fri).",
  ];

  const getWhatsAppLink = (pkgName: string) => {
    return `https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20the%20Student%20${encodeURIComponent(pkgName)}%20Offer.`;
  };

  return (
    <section className="py-20 bg-cream/30 relative overflow-hidden border-t border-gold/15">
      {/* Decorative lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            ACADEMIC SPECIALS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-3">
            <GraduationCap className="w-6 h-6 text-gold" />
            Exclusive Student Privileges
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
          <p className="text-xs text-primary/60 font-light mt-4 max-w-md mx-auto">
            Flash your student ID card to unlock these bespoke luxury grooming packages at unmatched student pricing.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Boys Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-gold/15 p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Top Border Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-charcoal" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold block mb-1">
                    GENTLEMEN STUDENT
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary group-hover:text-gold transition-colors duration-300">
                    Elite Grooming Deal
                  </h3>
                </div>
                <div className="bg-charcoal text-gold font-serif text-lg font-bold px-4 py-2 border border-gold/20">
                  ₹199
                </div>
              </div>

              <div className="w-8 h-[1px] bg-gold mb-6" />

              <div className="space-y-4 mb-8">
                {boysOffers.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 bg-gold/10 rounded-full text-gold flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs sm:text-sm text-primary/80 font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10 mt-auto">
              <a
                href={getWhatsAppLink("Gentlemen Student Package")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-charcoal hover:bg-gold text-white hover:text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border border-charcoal hover:border-gold cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Claim Student Offer
              </a>
            </div>
          </motion.div>

          {/* Girls Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white border border-gold/15 p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Top Border Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold animate-pulse" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold font-bold block mb-1">
                    LADIES STUDENT
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary group-hover:text-gold transition-colors duration-300">
                    Luxe Makeover Deal
                  </h3>
                </div>
                <div className="bg-charcoal text-gold font-serif text-lg font-bold px-4 py-2 border border-gold/20">
                  ₹449
                </div>
              </div>

              <div className="w-8 h-[1px] bg-gold mb-6" />

              <div className="space-y-4 mb-8">
                {girlsOffers.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 bg-gold/10 rounded-full text-gold flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs sm:text-sm text-primary/80 font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10 mt-auto">
              <a
                href={getWhatsAppLink("Ladies Student Package")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-charcoal hover:bg-gold text-white hover:text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border border-charcoal hover:border-gold cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Claim Student Offer
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
