"use client";

import { motion } from "framer-motion";
import { Award, Gem, Sparkles, ShieldCheck, Heart, Sparkle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "Certified Stylists",
      description: "Our stylists are highly trained franchise experts who understand contemporary hair sculpting and classic aesthetics.",
    },
    {
      icon: <Gem className="w-6 h-6 text-gold" />,
      title: "Luxury Within Reach",
      description: "Indulge in high-end brand therapies, premium bridal glams, and custom ink work at highly competitive pricing.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Tailored Consultation",
      description: "Receive customized hair, beauty, and tattoo recommendations tailored specifically to your unique look and skin type.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
      title: "Hygienic private zones",
      description: "We maintain strict hospital-grade sterilization protocols and offer a luxurious, relaxing ambiance for your ultimate comfort.",
    },
  ];

  return (
    <section className="py-20 bg-ivory relative overflow-hidden border-t border-gold/15">
      {/* Decorative background vectors */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 -translate-y-1/2 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            THE ANIQ DIFFERENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Uncompromising Excellence, Luxury Ambience
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 border border-gold/15 shadow-[0_10px_30px_rgba(201,168,106,0.04)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-gold transition-colors duration-300" />
              
              {/* Corner accent border details */}
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-gold/0 group-hover:border-gold/30 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-gold/0 group-hover:border-gold/30 transition-colors duration-300" />

              {/* Icon Container */}
              <div className="mb-6 inline-block p-3.5 bg-cream/30 border border-gold/10 group-hover:bg-charcoal group-hover:border-gold/20 transition-all duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-base font-bold text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-primary/75 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
