"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles, MapPin } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Star className="w-5 h-5 fill-accent text-accent" />,
      value: "4.9 Rating",
      label: "On Google Reviews",
    },
    {
      icon: <span className="text-lg">💇</span>,
      value: "Skilled Stylists",
      label: "Franchise-Expertise",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-accent" />,
      value: "Premium Ambience",
      label: "Comfort & Luxury",
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      value: "Convenient Location",
      label: "Near NTPC Chowrasta",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden border border-primary/5 shadow-2xl"
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
              <div className="absolute inset-4 border border-accent/20 pointer-events-none" />
            </motion.div>
            
            {/* Absolute Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/5 -z-10" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
                About Our Salon
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                Annojiguda&apos;s Signature Beauty & Grooming Space
              </h2>
              <div className="w-12 h-[1px] bg-accent mb-6" />
              
              <p className="text-xs sm:text-sm text-primary/80 mb-8 leading-relaxed font-light">
                ANIQ Salon Annojiguda is a premium unisex salon offering professional hair, beauty, grooming, and tattoo services. Backed by the trusted ANIQ brand, we focus on delivering personalized styling, quality products, experienced professionals, and exceptional customer satisfaction.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-primary/10 pt-6">
                {stats.map((stat, idx) => (
                  <div key={stat.value} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 p-2 bg-ivory text-accent">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-primary">
                        {stat.value}
                      </h4>
                      <p className="text-[10px] text-primary/60 mt-0.5 font-light">
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
