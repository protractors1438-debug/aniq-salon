"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles, MapPin, Scissors } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Star className="w-4 h-4 fill-gold text-gold" />,
      value: "4.9 Rating",
      label: "On Google Reviews",
    },
    {
      icon: <Scissors className="w-4 h-4 text-gold" />,
      value: "Certified Stylists",
      label: "Franchise-Expertise",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-gold" />,
      value: "Premium Ambience",
      label: "Comfort & Luxury",
    },
    {
      icon: <MapPin className="w-4 h-4 text-gold" />,
      value: "Convenient Location",
      label: "Near NTPC Chowrasta",
    },
  ];

  return (
    <section id="about" className="py-20 bg-charcoal text-cream relative overflow-hidden border-t border-gold/15">
      {/* Background vector details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden border border-gold/20 shadow-2xl bg-charcoal"
            >
              <Image
                src="/assets/gallery-2.jpg"
                alt="ANIQ Salon Annojiguda Premium Styling Stations"
                fill
                unoptimized
                className="object-cover hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Gold Accent Overlay Border */}
              <div className="absolute inset-4 border border-gold/25 pointer-events-none" />
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
                OUR STORY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mb-6 leading-tight uppercase tracking-wide">
                Annojiguda&apos;s Signature Beauty & Grooming Space
              </h2>
              <div className="w-12 h-[1px] bg-gold mb-6" />
              
              <p className="text-xs sm:text-sm text-cream/70 mb-8 leading-relaxed font-light">
                ANIQ Salon Annojiguda is a premium unisex salon offering professional hair, beauty, grooming, and tattoo services. Backed by the trusted ANIQ franchise standards, we focus on delivering personalized styling, quality imported products, certified professionals, and exceptional customer satisfaction in a private, high-end environment.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-gold/15 pt-6">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex gap-3.5 items-start">
                    <div className="flex-shrink-0 p-2.5 bg-primary border border-gold/15 text-gold">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-cream">
                        {stat.value}
                      </h4>
                      <p className="text-[10px] text-cream/60 mt-0.5 font-light">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
