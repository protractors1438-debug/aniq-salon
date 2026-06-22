"use client";

import { motion } from "framer-motion";

export default function BrandsWeUse() {
  const brands = [
    "L'ORÉAL",
    "WELLA",
    "SCHWARZKOPF",
    "MATRIX",
    "O.P.I",
    "M.A.C",
    "KRYOLAN",
    "DYSON",
  ];

  return (
    <section className="bg-secondary-black border-y border-gold/15 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Subtle Brand Header */}
        <p className="text-center text-[9px] tracking-widest uppercase text-gold/60 font-semibold mb-6">
          Premium Brands We Trust & Use
        </p>

        {/* Scrolling Strip */}
        <div className="flex items-center justify-around flex-wrap gap-6 md:gap-12 opacity-80">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="text-beige/70 font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.25em] font-medium hover:text-gold hover:scale-105 transition-all duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
