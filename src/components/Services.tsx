"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles, Heart, Gem, Palette, User, ChevronDown, MessageCircle, Crown, Award } from "lucide-react";

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: ServiceItem[];
};

export default function Services() {
  // Default to hair on mobile so there's always an active list showing under the tabs
  const [activeCategory, setActiveCategory] = useState<string | null>("hair");

  const categories: ServiceCategory[] = [
    {
      id: "hair",
      title: "Hair Services",
      icon: <Scissors className="w-5 h-5 text-gold" />,
      items: [
        { name: "Men's Haircut (Any Style)", price: "₹149" },
        { name: "Kids Haircut", price: "₹149" },
        { name: "Ladies U / V / Straight Cut", price: "₹399" },
        { name: "Ladies Multi Layer / Feather Cut", price: "₹599" },
        { name: "Creative Layer Cut", price: "₹649" },
        { name: "Blow Dry & Silk Press Styling", price: "₹399" },
      ],
    },
    {
      id: "hair-treatment",
      title: "Hair Treatment",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      items: [
        { name: "Basic Hair Spa", price: "₹799" },
        { name: "L'Oréal Premium Hair Spa", price: "₹1399" },
        { name: "Hair Spa (Matrix)", price: "₹699" },
        { name: "Smoothening (Upto Shoulder)", price: "₹7999" },
        { name: "Smoothening (Upto Mid-Back)", price: "₹9999" },
        { name: "Keratin / Botox Therapy (Upto Shoulder)", price: "₹3999" },
        { name: "Keratin Therapy (Upto Mid-Back)", price: "₹5999" },
      ],
    },
    {
      id: "beauty",
      title: "Beauty Services",
      icon: <Award className="w-5 h-5 text-gold" />,
      items: [
        { name: "Regular Face Cleanup", price: "₹449" },
        { name: "Gold / Silver Cleanup", price: "₹599" },
        { name: "Regular Head Massage (20 Min)", price: "₹349" },
        { name: "L'Oréal Head Massage", price: "₹699" },
        { name: "Full Arms Waxing (Ladies)", price: "₹499" },
        { name: "Full Legs Waxing (Ladies)", price: "₹999" },
        { name: "Full Body Waxing (Ladies)", price: "₹2999" },
      ],
    },
    {
      id: "womens-services",
      title: "Women's Services",
      icon: <Heart className="w-5 h-5 text-gold" />,
      items: [
        { name: "Basic Facial (Fruit/Papaya)", price: "₹699" },
        { name: "Pearl / Silver Facial", price: "₹999" },
        { name: "Gold / Diamond Facial", price: "₹1499" },
        { name: "Lotus Bridal Special Facial", price: "₹1699" },
        { name: "O3+ Professional Facial", price: "₹2499" },
        { name: "Ladies Threading (Eyebrows)", price: "₹50" },
      ],
    },
    {
      id: "bridal",
      title: "Bridal Services",
      icon: <Crown className="w-5 h-5 text-gold" />,
      items: [
        { name: "Bridal Makeover (Indoor)", price: "₹9999" },
        { name: "Bridal Makeover (Outdoor)", price: "₹19999" },
        { name: "Engagement Makeup", price: "₹3999" },
        { name: "Party Makeup", price: "₹999" },
        { name: "Saree Draping", price: "₹499" },
        { name: "Complete Bridal Package", price: "₹7999" },
      ],
    },
    {
      id: "nails",
      title: "Nail Services",
      icon: <Gem className="w-5 h-5 text-gold" />,
      items: [
        { name: "Gel Nail Polish", price: "₹849" },
        { name: "Gel Nail Extensions", price: "₹2499" },
        { name: "Acrylic Nail Extensions", price: "₹2499" },
        { name: "Special Nail Art (Per Finger)", price: "₹99" },
        { name: "Basic Manicure", price: "₹299" },
        { name: "Basic Pedicure", price: "₹399" },
        { name: "Crystal Pedicure", price: "₹699" },
        { name: "Luxury Pedicure", price: "₹999" },
      ],
    },
    {
      id: "tattoos",
      title: "Tattoo Services",
      icon: <Palette className="w-5 h-5 text-gold" />,
      items: [
        { name: "Custom Black & Grey Tattoo", price: "Starting at ₹999" },
        { name: "Color Ink Tattoo", price: "Starting at ₹1200" },
        { name: "Minimalist Line Art Tattoo", price: "Starting at ₹1500" },
        { name: "Premium Cover-up Tattoo", price: "Starting at ₹1800" },
        { name: "Tattoo Touch-up Work", price: "Starting at ₹999" },
      ],
    },
    {
      id: "men",
      title: "Men's Grooming",
      icon: <User className="w-5 h-5 text-gold" />,
      items: [
        { name: "Men's Haircut (Any Style)", price: "₹149" },
        { name: "Shaving / Beard Grooming", price: "₹149" },
        { name: "Men's Premium Hair Spa", price: "₹799" },
        { name: "Men's Detan (Face)", price: "₹249" },
        { name: "L'Oréal Hair Colouring", price: "₹999" },
      ],
    },
    {
      id: "special-packages",
      title: "Special Packages",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      items: [
        { name: "Elite Grooming Deal (Boys)", price: "₹199" },
        { name: "Luxe Makeover Deal (Girls)", price: "₹449" },
        { name: "Complete Grooming Package (Men)", price: "₹999" },
        { name: "Special Hair Treatment Combo", price: "₹2499" },
        { name: "VIP Couple Salon Ritual", price: "₹4999" },
      ],
    },
  ];

  const handleToggle = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  const getWhatsAppLink = (title: string) => {
    return `https://wa.me/918522942128?text=Hi%20ANIQ%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(title)}.`;
  };

  return (
    <section id="services" className="py-20 bg-primary relative overflow-hidden border-t border-gold/15">
      {/* Background vector rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            SERVICES & CATALOGUE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-cream uppercase tracking-wide">
            Curated Beauty & Styling Rituals
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        {/* 1. MOBILE ONLY VIEW: Horizontal Tabs + Active Table list */}
        <div className="md:hidden flex flex-col max-w-xl mx-auto">
          {/* Horizontal Scroll tab strip */}
          <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth border-b border-gold/10">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 snap-start flex items-center gap-2 px-4 py-3 border text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gold border-gold text-primary shadow-lg shadow-gold/15"
                      : "bg-secondary-black border-gold/15 text-cream"
                  }`}
                >
                  {category.icon}
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Render Active Category List below */}
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 bg-secondary-black border border-gold/15 p-6 relative"
          >
            {/* Decorative gold highlights */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold/25" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold/25" />

            <h3 className="font-serif text-base font-bold text-gold uppercase tracking-widest border-b border-gold/10 pb-2 mb-4 flex items-center gap-2">
              {currentCategory.icon}
              {currentCategory.title}
            </h3>

            <div className="space-y-4">
              {currentCategory.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-end gap-2 py-1 border-b border-gold/5">
                  <span className="text-xs font-sans font-medium text-cream/90">
                    {item.name}
                  </span>
                  <div className="flex-1 border-b border-dotted border-gold/25 mx-2 mb-1" />
                  <span className="text-xs font-serif font-bold text-gold">
                    {item.price}
                  </span>
                </div>
              ))}

              <div className="pt-4">
                <a
                  href={getWhatsAppLink(currentCategory.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold/15"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  Book {currentCategory.title}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. DESKTOP ONLY VIEW: 3-column accordion grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`bg-secondary-black border ${
                  isActive ? "border-gold shadow-lg shadow-gold/15" : "border-gold/15"
                } p-5 transition-all duration-300 relative flex flex-col justify-between`}
              >
                {/* Decorative gold highlights */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gold/20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gold/20" />

                <div>
                  <button
                    onClick={() => handleToggle(category.id)}
                    className="w-full flex items-center justify-between py-2 cursor-pointer text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary border border-gold/25 text-gold flex-shrink-0">
                        {category.icon}
                      </div>
                      <h3 className="font-serif text-base font-bold text-cream uppercase tracking-wider transition-colors duration-300 hover:text-gold">
                        {category.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gold"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                </div>

                {/* Accordion Panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-3.5 border-t border-gold/10 mt-3">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-end gap-2 py-1.5 border-b border-gold/5 group">
                            <span className="text-xs sm:text-sm font-sans font-medium text-cream/90 group-hover:text-gold transition-colors duration-300">
                              {item.name}
                            </span>
                            <div className="flex-1 border-b border-dotted border-gold/25 mx-2 mb-1" />
                            <span className="text-xs sm:text-sm font-serif font-bold text-gold">
                              {item.price}
                            </span>
                          </div>
                        ))}

                        <div className="pt-4 flex justify-center">
                          <a
                            href={getWhatsAppLink(category.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold hover:bg-gold/90 text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 shadow-md shadow-gold/15 cursor-pointer w-full justify-center"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            Book {category.title}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
