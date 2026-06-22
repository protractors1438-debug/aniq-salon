"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Heart, Gem, Palette, MessageCircle } from "lucide-react";

type ServiceBlock = {
  id: string;
  category: string;
  title: string;
  description: string;
  startingPrice: string;
  icon: React.ReactNode;
  image: string;
};

export default function Services() {
  const services: ServiceBlock[] = [
    {
      id: "hair",
      category: "Hair Services",
      title: "Precision Hair Sculpting & Treatments",
      description: "Elevate your look with custom haircuts, global color streaks, keratin treatments, and intensive Matrix or L'Oréal hair spas tailored by certified experts.",
      startingPrice: "₹149",
      icon: <Scissors className="w-5 h-5 text-gold" />,
      image: "/assets/gallery-2.jpg",
    },
    {
      id: "beauty",
      category: "Beauty Services",
      title: "Nourishing Skin Rituals & Waxing",
      description: "Pamper your skin with fruit, whitening, or O3+ professional facials, deep cleanups, and clean, hygienic waxing and threading services.",
      startingPrice: "₹149",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
      image: "/assets/gallery-1.jpg",
    },
    {
      id: "bridal",
      category: "Bridal Services",
      title: "Signature Bridal Glamour",
      description: "Experience premium bridal makeovers, engagement styling, saree draping, and party makeup. Crafted to make you look radiant on your big day.",
      startingPrice: "₹999",
      icon: <Heart className="w-5 h-5 text-gold" />,
      image: "/assets/bridal-makeup.png",
    },
    {
      id: "nails",
      category: "Nail Services",
      title: "Luxury Extensions & Nail Art",
      description: "Indulge in flawless gel or acrylic nail extensions, custom 3D art, French overlay styling, and premium polish finishes with absolute care.",
      startingPrice: "₹99",
      icon: <Gem className="w-5 h-5 text-gold" />,
      image: "/assets/transformation-1.webp",
    },
    {
      id: "tattoo",
      category: "Tattoo Services",
      title: "Bespoke Permanent Ink Tattoos",
      description: "Express your story with highly detailed, safe, and sterile custom tattoos. Designed in our private zone by experienced resident artists.",
      startingPrice: "₹999",
      icon: <Palette className="w-5 h-5 text-gold" />,
      image: "/assets/gallery-5.jpg",
    },
  ];

  const getWhatsAppLink = (title: string) => {
    return `https://wa.me/918522942128?text=Hi%20ANIQ%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(title)}.`;
  };

  return (
    <section id="services" className="py-20 bg-ivory relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-2">
            Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Curated Beauty & Styling Rituals
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        {/* Alternating Layout List */}
        <div className="space-y-24 md:space-y-36">
          {services.map((service, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden border border-gold/15 shadow-xl bg-charcoal ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized
                    className="object-cover hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Subtle inner gold frame */}
                  <div className="absolute inset-4 border border-gold/15 pointer-events-none" />
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Category & Premium Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-charcoal text-gold border border-gold/10">
                      {service.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-4 leading-tight">
                    {service.title}
                  </h3>

                  {/* Divider Line */}
                  <div className="w-10 h-[1px] bg-gold mb-5" />

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-primary/75 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Price info & CTA */}
                  <div className="flex items-center justify-between border-t border-gold/15 pt-5 mt-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-primary/50 font-bold block">
                        Starting Price
                      </span>
                      <span className="font-serif text-lg font-bold text-gold">
                        {service.startingPrice}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-3 bg-charcoal hover:bg-gold text-white hover:text-primary font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border border-charcoal hover:border-gold cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      Book Now
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
