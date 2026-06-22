"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Crown, Sparkles, Check, MessageCircle } from "lucide-react";
import React, { useRef } from "react";

function Card3D({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map motion values to degrees of rotation
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[1.58/1] rounded-2xl overflow-hidden shadow-2xl border border-gold/25 cursor-grab active:cursor-grabbing group transition-shadow duration-300 hover:shadow-gold/10"
    >
      {/* Glossy reflection overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          transform: "translateZ(20px)",
        }}
      />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
        unoptimized
      />
    </motion.div>
  );
}

export default function VipMembership() {
  const privileges = [
    "Flat 15% OFF on all hair, skin, and grooming services for 1 year.",
    "1 Complimentary Luxury Hair Spa & Face Cleanup upon enrollment.",
    "Priority VIP booking with zero waiting times and dedicated lounge access.",
    "Direct booking access to senior stylists and master tattoo artists.",
    "Exclusive Birthday & Anniversary discounts of 25% OFF.",
    "Fully transferable privileges to up to 2 immediate family members.",
  ];

  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I'm%20interested%20in%20becoming%20a%20VIP%20Member.%20Could%20you%20share%20the%20details?";

  return (
    <section id="offers" className="py-20 bg-charcoal text-cream relative overflow-hidden border-t border-gold/15">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            VIP CLUB
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-cream flex items-center justify-center gap-3">
            <Crown className="w-6 h-6 text-gold" />
            ANIQ Elite VIP Membership
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* VIP Privileges Block */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                Exclusive Privileges
              </span>
            </div>
            
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-6 leading-tight">
              Unlock a Year of Premium Luxury and Tailored Styling
            </h3>
            
            <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed mb-8">
              Step into the inner circle of ANIQ Salon Annojiguda. Designed for individuals who demand consistent perfection, our VIP membership offers unparalleled benefits, priority services, and luxury privileges.
            </p>

            <div className="space-y-4 mb-8">
              {privileges.map((privilege, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 p-0.5 bg-gold/15 rounded-full border border-gold/30 text-gold flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-cream/80 font-light leading-relaxed">
                    {privilege}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold/90 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-gold/10 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Inquire About VIP Membership
              </a>
            </div>
          </motion.div>

          {/* Cards Showcase Block */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-8 justify-center items-center"
          >
            {/* Front Card */}
            <div className="w-full max-w-md transform transition-transform duration-500 hover:scale-[1.02]">
              <span className="text-[9px] uppercase tracking-widest text-gold/75 font-semibold block mb-2 text-center lg:text-left">
                VIP CARD - FRONT
              </span>
              <Card3D src="/assets/vip-card-front.png" alt="ANIQ VIP Card Front" />
            </div>

            {/* Back Card */}
            <div className="w-full max-w-md transform transition-transform duration-500 hover:scale-[1.02]">
              <span className="text-[9px] uppercase tracking-widest text-gold/75 font-semibold block mb-2 text-center lg:text-left">
                VIP CARD - BACK
              </span>
              <Card3D src="/assets/vip-card-back.png" alt="ANIQ VIP Card Back" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
