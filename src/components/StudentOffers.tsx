"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, Check, GraduationCap } from "lucide-react";

export default function StudentOffers() {
  const boysOffers = [
    { name: "Haircut", price: "₹100" },
    { name: "Beard/shape", price: "₹50" },
    { name: "Detan", price: "₹150" },
    { name: "Cleanup", price: "₹300" },
    { name: "Fruit facial", price: "₹400" },
    { name: "Whitening facial", price: "₹500" },
    { name: "Wine facial", price: "₹600" },
    { name: "Gold facial", price: "₹700" },
    { name: "Brightening facial", price: "₹700" },
    { name: "Advance facial", price: "₹900" },
    { name: "Hair spa", price: "₹600" },
    { name: "Dandruff treatment", price: "₹800" },
    { name: "Hair fall treatment", price: "₹800" },
    { name: "Oil massage", price: "₹100" },
    { name: "Hair wash", price: "₹50" },
    { name: "Hair setting", price: "₹50" },
    { name: "Ear piercing", price: "₹100" },
    { name: "Pedicure", price: "₹500" },
    { name: "Manicure", price: "₹400" },
    { name: "Hair colour highlights", price: "₹500" },
  ];

  const girlsOffers = [
    { name: "Detan", price: "₹200" },
    { name: "Cleanup", price: "₹300" },
    { name: "Fruit facial", price: "₹400" },
    { name: "Whitening facial", price: "₹500" },
    { name: "Wine facial", price: "₹600" },
    { name: "Gold facial", price: "₹700" },
    { name: "Brightening facial", price: "₹700" },
    { name: "Advance facial", price: "₹900" },
    { name: "Hair spa", price: "₹600" },
    { name: "Dandruff treatment", price: "₹800" },
    { name: "Head oil massage", price: "₹300" },
    { name: "Pedicure", price: "₹400" },
    { name: "Manicure", price: "₹300" },
    { name: "U,V,Straight Haircut", price: "₹150" },
    { name: "Layer Haircut", price: "₹349" },
    { name: "Butterfly Haircut", price: "₹449" },
    { name: "Feather Haircut", price: "₹499" },
    { name: "Hair wash", price: "₹100" },
    { name: "Blow dry setting", price: "₹200" },
    { name: "Full arms wax", price: "₹499" },
    { name: "Half arms wax", price: "₹399" },
    { name: "Half legs wax", price: "₹399" },
    { name: "Permanent Hair straightening / keratin/Botox", price: "₹3000" },
  ];

  const getWhatsAppLink = (pkgName: string) => {
    return `https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20the%20Student%20${encodeURIComponent(pkgName)}%20Offer.`;
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.75, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 12,
        mass: 1,
      },
    },
  };

  return (
    <section id="offers" className="py-20 bg-primary relative overflow-hidden border-t border-gold/15">
      {/* Background vector rings */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-gold/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-gold/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2 px-3 py-1 border border-gold/25 rounded-full inline-block bg-secondary-black/80 shadow-sm">
            ACADEMIC SPECIALS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream flex items-center justify-center gap-3 uppercase tracking-wide mt-3">
            <GraduationCap className="w-6 h-6 text-gold animate-bounce" />
            Exclusive Student Privileges
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
          <p className="text-xs text-cream/70 font-light mt-4 max-w-md mx-auto leading-relaxed">
            Flash your valid student ID card to unlock these bespoke luxury grooming packages at unmatched student pricing.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Boys Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              y: -15, 
              scale: 1.04,
              boxShadow: "0 30px 60px rgba(201, 168, 106, 0.35)"
            }}
            className="bg-secondary-black border-2 border-gold/70 hover:border-gold p-6 sm:p-8 shadow-[0_0_35px_rgba(201,168,106,0.18)] relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            {/* Top gold badge */}
            <div className="absolute top-0 right-6 transform -translate-y-1/2 z-20">
              <span className="bg-gold text-primary text-[8px] font-extrabold uppercase tracking-widest px-3 py-1 shadow-md">
                Gents Special
              </span>
            </div>

            {/* Absolute inner border */}
            <div className="absolute inset-1.5 border border-gold/20 group-hover:border-gold/45 pointer-events-none transition-colors duration-300 z-10" />

            {/* Rich Gold Corner brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />

            {/* Ambient gold glow behind text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.15),transparent_60%)] transition-all duration-500 pointer-events-none" />

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
                    Elite Grooming Menu
                  </h3>
                </div>
                <span className="text-[9px] tracking-widest text-gold/70 font-bold uppercase px-2 py-0.5 border border-gold/15 bg-primary/80">ID REQUIRED</span>
              </div>

              <div className="w-8 h-[1px] bg-gold mb-6" />

              {/* 2 Column Responsive List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-8">
                {boysOffers.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-2 py-1.5 border-b border-gold/5">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <div className="p-0.5 bg-gold/10 rounded-full text-gold flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-cream/90 font-medium leading-tight">{item.name}</span>
                    </div>
                    <span className="text-xs font-serif font-bold text-gold flex-shrink-0">{item.price}</span>
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
              y: -15, 
              scale: 1.04,
              boxShadow: "0 30px 60px rgba(201, 168, 106, 0.35)"
            }}
            className="bg-secondary-black border-2 border-gold/70 hover:border-gold p-6 sm:p-8 shadow-[0_0_35px_rgba(201,168,106,0.18)] relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
          >
            {/* Top gold badge */}
            <div className="absolute top-0 right-6 transform -translate-y-1/2 z-20">
              <span className="bg-gold text-primary text-[8px] font-extrabold uppercase tracking-widest px-3 py-1 shadow-md">
                Ladies Special
              </span>
            </div>

            {/* Absolute inner border */}
            <div className="absolute inset-1.5 border border-gold/20 group-hover:border-gold/45 pointer-events-none transition-colors duration-300 z-10" />

            {/* Rich Gold Corner brackets */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold group-hover:scale-110 transition-all duration-300 pointer-events-none z-10" />

            {/* Ambient gold glow behind text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.06),transparent_60%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(201,168,106,0.15),transparent_60%)] transition-all duration-500 pointer-events-none" />

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
                    Luxe Makeover Menu
                  </h3>
                </div>
                <span className="text-[9px] tracking-widest text-gold/70 font-bold uppercase px-2 py-0.5 border border-gold/15 bg-primary/80">ID REQUIRED</span>
              </div>

              <div className="w-8 h-[1px] bg-gold mb-6" />

              {/* 2 Column Responsive List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mb-8">
                {girlsOffers.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-baseline gap-2 py-1.5 border-b border-gold/5">
                    <div className="flex items-start gap-1.5 min-w-0">
                      <div className="p-0.5 bg-gold/10 rounded-full text-gold flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-cream/90 font-medium leading-tight">{item.name}</span>
                    </div>
                    <span className="text-xs font-serif font-bold text-gold flex-shrink-0">{item.price}</span>
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
