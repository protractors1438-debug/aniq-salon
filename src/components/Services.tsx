"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, User, Sparkles, Heart, Palette, MessageCircle } from "lucide-react";

type Service = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

type ServiceCategory = {
  id: string;
  name: string;
  tabIcon: React.ReactNode;
  services: Service[];
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("hair");

  const categories: ServiceCategory[] = [
    {
      id: "hair",
      name: "Hair Services",
      tabIcon: <Scissors className="w-4 h-4" />,
      services: [
        {
          name: "Hair Cut",
          description: "Precision cuts tailored to your face structure by senior stylists.",
          icon: <Scissors className="w-6 h-6 text-accent" />,
        },
        {
          name: "Hair Styling",
          description: "Elegant styling, blowouts, and settings for any special occasion.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
        {
          name: "Hair Spa",
          description: "Deep conditioning and therapeutic scalp treatments to restore hair health.",
          icon: <Heart className="w-6 h-6 text-accent" />,
        },
        {
          name: "Hair Coloring",
          description: "Global color, highlights, balayage, and root touch-ups using premium products.",
          icon: <Palette className="w-6 h-6 text-accent" />,
        },
        {
          name: "Keratin Treatment",
          description: "Intense protein therapy to eliminate frizz, adding luxury shine and smoothness.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
        {
          name: "Smoothening",
          description: "Long-lasting straightening treatment for sleek, manageable, silky hair.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
      ],
    },
    {
      id: "grooming",
      name: "Grooming Services",
      tabIcon: <User className="w-4 h-4" />,
      services: [
        {
          name: "Beard Styling",
          description: "Precision trimming, lining, and shaping to define your facial features.",
          icon: <User className="w-6 h-6 text-accent" />,
        },
        {
          name: "Shaving",
          description: "Classic hot towel straight razor shave for ultimate cleanliness and skin comfort.",
          icon: <User className="w-6 h-6 text-accent" />,
        },
        {
          name: "Men's Grooming",
          description: "Complete packages including face cleanups, haircut, and beard detailing.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
      ],
    },
    {
      id: "beauty",
      name: "Beauty Services",
      tabIcon: <Sparkles className="w-4 h-4" />,
      services: [
        {
          name: "Facial",
          description: "Premium skin brightening and anti-aging treatments using organic elements.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
        {
          name: "Cleanup",
          description: "Deep pore cleansing to remove tan, dirt, and refresh tired skin instantly.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
        {
          name: "Waxing",
          description: "Hygienic and smooth hair removal using top-grade wax formulas.",
          icon: <Heart className="w-6 h-6 text-accent" />,
        },
        {
          name: "Threading",
          description: "Precision eyebrow shaping and facial hair threading by experts.",
          icon: <Scissors className="w-6 h-6 text-accent" />,
        },
      ],
    },
    {
      id: "makeup",
      name: "Makeup Services",
      tabIcon: <Heart className="w-4 h-4" />,
      services: [
        {
          name: "Party Makeup",
          description: "Stunning, camera-ready glam tailored for parties and celebrations.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
        {
          name: "Bridal Makeup",
          description: "Luxury, high-definition bridal makeup packages for your big day.",
          icon: <Heart className="w-6 h-6 text-accent" />,
        },
      ],
    },
    {
      id: "tattoo",
      name: "Tattoo Services",
      tabIcon: <Palette className="w-4 h-4" />,
      services: [
        {
          name: "Custom Tattoos",
          description: "Bring your vision to life with custom illustrations designed by our tattoo artists.",
          icon: <Palette className="w-6 h-6 text-accent" />,
        },
        {
          name: "Permanent Tattoos",
          description: "Safe, sterile, and highly detailed permanent ink tattoos in various styles.",
          icon: <Sparkles className="w-6 h-6 text-accent" />,
        },
      ],
    },
  ];

  const getWhatsAppLink = (serviceName: string) => {
    return `https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(
      serviceName
    )}.`;
  };

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="services" className="py-16 md:py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Our Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Curated Beauty & Grooming Rituals
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-primary/5 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-[10px] tracking-widest uppercase font-medium border transition-all duration-300 cursor-pointer ${
                activeTab === category.id
                  ? "bg-primary border-primary text-accent shadow-sm"
                  : "bg-white border-primary/5 text-primary hover:border-accent/40"
              }`}
            >
              {category.tabIcon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeCategory.services.map((service, idx) => (
                <div
                  key={service.name}
                  className="bg-white p-6 border border-primary/5 shadow-[0_10px_30px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle top border bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-accent transition-colors duration-300" />
                  
                  <div>
                    {/* Icon and Title */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-ivory group-hover:bg-accent/10 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <span className="text-[9px] tracking-widest uppercase text-accent font-semibold bg-accent/5 px-2 py-0.5">
                        Premium
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-bold text-primary mb-2">
                      {service.name}
                    </h3>
                    
                    <p className="text-xs text-primary/70 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Book Button */}
                  <a
                    href={getWhatsAppLink(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-3 bg-primary/95 text-white group-hover:bg-accent group-hover:text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-primary/95 group-hover:border-accent cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    Book on WhatsApp
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
