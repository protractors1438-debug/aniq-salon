"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PriceItem = {
  name: string;
  price: string;
};

type PriceCategory = {
  id: string;
  name: string;
  items: PriceItem[];
};

export default function PriceList() {
  const [activeCategory, setActiveCategory] = useState("hair");

  const categories: PriceCategory[] = [
    {
      id: "hair",
      name: "Hair & Styling",
      items: [
        { name: "Men's Haircut (Any Style)", price: "₹149" },
        { name: "Kids Haircut", price: "₹149" },
        { name: "Ladies U / V / Straight Cut", price: "₹399" },
        { name: "Ladies Multi Layer / Feather Cut", price: "₹599" },
        { name: "Creative Layer Cut", price: "₹649" },
        { name: "Regular Global Hair Colour", price: "₹999" },
        { name: "Root Touch-up", price: "₹999" },
        { name: "Basic Hair Spa", price: "₹799" },
        { name: "L'Oréal Premium Hair Spa", price: "₹1399" },
        { name: "Smoothening (Upto Shoulder)", price: "₹7999" },
        { name: "Keratin / Botox Therapy (Upto Shoulder)", price: "₹3999" },
      ],
    },
    {
      id: "skin",
      name: "Skin & Facials",
      items: [
        { name: "Tan Removal (Face)", price: "₹249" },
        { name: "Face Cleanup (Fruit/Papaya)", price: "₹449" },
        { name: "Gold / Silver Cleanup", price: "₹599" },
        { name: "Basic Facial (Fruit/Papaya)", price: "₹699" },
        { name: "Pearl / Silver Facial", price: "₹999" },
        { name: "Gold / Diamond Facial", price: "₹1499" },
        { name: "Lotus Bridal Special Facial", price: "₹1699" },
        { name: "O3+ Professional Facial", price: "₹2499" },
        { name: "Full Arms Waxing (Ladies)", price: "₹499" },
        { name: "Full Legs Waxing (Ladies)", price: "₹999" },
        { name: "Full Body Waxing (Ladies)", price: "₹2999" },
      ],
    },
    {
      id: "nails",
      name: "Nails & Care",
      items: [
        { name: "Basic Manicure", price: "₹299" },
        { name: "Crystal Manicure", price: "₹499" },
        { name: "Basic Pedicure", price: "₹399" },
        { name: "Crystal Pedicure", price: "₹699" },
        { name: "Luxury Pedicure", price: "₹999" },
        { name: "Gel Nail Polish", price: "₹849" },
        { name: "Gel Nail Extensions", price: "₹2499" },
        { name: "Acrylic Nail Extensions", price: "₹2499" },
        { name: "Special Nail Art (Per Finger)", price: "₹99" },
      ],
    },
    {
      id: "bridal-tattoo",
      name: "Bridal & Tattoos",
      items: [
        { name: "Bridal Makeover (Indoor)", price: "₹9999" },
        { name: "Bridal Makeover (Outdoor)", price: "₹19999" },
        { name: "Engagement Makeup", price: "₹3999" },
        { name: "Party Makeup", price: "₹999" },
        { name: "Saree Draping", price: "₹499" },
        { name: "Complete Bridal Package", price: "₹7999" },
        { name: "Custom Tattoos (Per Sq. Inch)", price: "Starting at ₹999" },
      ],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="portfolio" className="py-20 bg-cream/40 relative overflow-hidden border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">
            Pricing
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Luxury Service Menu
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 text-[10px] tracking-widest uppercase font-medium border transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-charcoal border-charcoal text-gold shadow-sm"
                  : "bg-white border-gold/15 text-primary hover:border-gold"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Price Table Grid */}
        <div className="max-w-4xl mx-auto bg-white border border-gold/15 p-6 sm:p-10 shadow-xl relative">
          {/* Decorative Corner borders */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-gold/30" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-gold/30" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-gold/30" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-gold/30" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            >
              {currentCategory.items.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-between py-2 border-b border-gold/10 group">
                  <div className="flex justify-between items-end gap-4">
                    <span className="font-sans text-xs sm:text-sm font-medium text-charcoal group-hover:text-gold transition-colors duration-300">
                      {item.name}
                    </span>
                    {/* Dotted Divider line */}
                    <div className="flex-1 border-b border-dotted border-gold/30 mx-2 mb-1" />
                    <span className="font-serif text-xs sm:text-sm font-bold text-gold">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Table Footer WhatsApp Note */}
          <p className="text-center text-[10px] text-primary/50 font-light mt-8">
            * Note: Prices may vary depending on hair length, texture, and custom consultation.
          </p>
        </div>

      </div>
    </section>
  );
}
