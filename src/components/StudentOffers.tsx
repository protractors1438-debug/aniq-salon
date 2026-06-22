"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, Check, GraduationCap } from "lucide-react";

export default function StudentOffers() {
  const boysOffers = [
    { name: "Basic Haircut", price: "₹149" },
    { name: "Haircut + Detan Combo", price: "₹199" },
    { name: "Face Cleanup (Fruit)", price: "₹249" },
    { name: "Premium Face D-Tan", price: "₹199" },
    { name: "Eyebrow Threading", price: "Absolutely FREE" },
  ];

  const girlsOffers = [
    { name: "Basic Haircut (U/V/Straight)", price: "₹199" },
    { name: "Basic Haircut + Detan Combo", price: "₹299" },
    { name: "Premium Layer Haircut", price: "₹349" },
    { name: "Layer Haircut + Detan Combo", price: "₹449" },
    { name: "Eyebrow Threading", price: "Absolutely FREE" },
  ];

  const getWhatsAppLink = (pkgName: string) => {
    return `https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20the%20Student%20${encodeURIComponent(pkgName)}%20Offer.`;
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 45, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden border-t border-gold/15">
      {/* Background vector rings */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            ACADEMIC SPECIALS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream flex items-center justify-center gap-3 uppercase tracking-wide">
            <GraduationCap className="w-6 h-6 text-gold" />
            Exclusive Student Privileges
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
          <p className="text-xs text-cream/70 font-light mt-4 max-w-md mx-auto leading-relaxed">
            Flash your valid student ID card to unlock these bespoke luxury grooming packages at unmatched student pricing.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Boys Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 40px rgba(201, 168, 106, 0.15)",
              borderColor: "#C9A86A" 
            }}
            className="bg-secondary-black border border-gold/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            {/* Top gold highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
            
            {/* Corner highlights */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/10" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/10" />

            {/* Subtle gold glow arrival flash overlay */}
            <motion.div 
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-gold/25 via-gold/10 to-transparent pointer-events-none z-10"
            />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold block mb-1">
                    GENTLEMEN STUDENT
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream transition-colors duration-300 group-hover:text-gold">
                    Elite Grooming Deal
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest text-gold/70 font-bold uppercase">ID REQUIRED</span>
              </div>

              <div className="w-8 h-[1px] bg-gold mb-6" />

              <div className="space-y-4 mb-8">
                {boysOffers.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end gap-2 py-1.5 border-b border-gold/5">
                    <div className="flex items-center gap-2">
                      <div className="p-0.5 bg-gold/10 rounded-full text-gold flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-cream/90 font-medium">{item.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-serif font-bold text-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10 mt-auto">
              <a
                href={getWhatsAppLink("Gentlemen Student Package")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold/90 text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold/15 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                Claim Student Offer
              </a>
            </div>
          </motion.div>

          {/* Girls Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 40px rgba(201, 168, 106, 0.15)",
              borderColor: "#C9A86A" 
            }}
            className="bg-secondary-black border border-gold/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            {/* Top gold highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold/40 group-hover:bg-gold transition-colors duration-300" />
            
            {/* Corner highlights */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/10" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/10" />

            {/* Subtle gold glow arrival flash overlay */}
            <motion.div 
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-gold/25 via-gold/10 to-transparent pointer-events-none z-10"
            />

            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-gold font-bold block mb-1">
                    LADIES STUDENT
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream transition-colors duration-300 group-hover:text-gold">
                    Luxe Makeover Deal
                  </h3>
                </div>
                <span className="text-[10px] tracking-widest text-gold/70 font-bold uppercase">ID REQUIRED</span>
              </div>

              <div className="w-8 h-[1px] bg-gold mb-6" />

              <div className="space-y-4 mb-8">
                {girlsOffers.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-end gap-2 py-1.5 border-b border-gold/5">
                    <div className="flex items-center gap-2">
                      <div className="p-0.5 bg-gold/10 rounded-full text-gold flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-cream/90 font-medium">{item.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-serif font-bold text-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10 mt-auto">
              <a
                href={getWhatsAppLink("Ladies Student Package")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold hover:bg-gold/90 text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold/15 cursor-pointer"
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
