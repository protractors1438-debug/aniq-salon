"use client";

import { motion } from "framer-motion";
import { Award, Gem, Sparkles, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Experienced Professionals",
      description: "Our stylists are highly trained franchise experts who understand contemporary and classic aesthetics.",
    },
    {
      icon: <Gem className="w-8 h-8 text-accent" />,
      title: "Affordable Premium Services",
      description: "Indulge in high-end luxury styling and treatments at prices that fit your budget perfectly.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "Personalized Beauty Consultation",
      description: "Receive customized hair, beauty, and grooming recommendations tailored specifically to your features.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: "Hygienic & Comfortable Environment",
      description: "We maintain strict hygiene protocols and offer a luxurious, relaxing ambiance for your styling comfort.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Why ANIQ Annojiguda
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Exceptional Care, Luxury Ambiance
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 border border-primary/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-accent transition-colors duration-300" />
              
              {/* Icon Container */}
              <div className="mb-4 inline-block p-2.5 bg-ivory rounded-none group-hover:bg-accent/10 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-base font-bold text-primary mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-primary/70 leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
