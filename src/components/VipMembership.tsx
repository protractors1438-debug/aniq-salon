"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Crown, Sparkles, Check, MessageCircle, Barcode } from "lucide-react";
import React, { useRef } from "react";

function FrontCard({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-[1.58/1] rounded-2xl overflow-hidden shadow-2xl border border-gold/30 cursor-grab active:cursor-grabbing group hover:shadow-gold/15 transition-shadow duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Image src={src} alt="ANIQ VIP Card Front" fill className="object-cover" sizes="40vw" unoptimized />
    </motion.div>
  );
}

function BackCard() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-[1.58/1] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary-black via-primary to-secondary-black border border-gold/30 p-5 flex flex-col justify-between cursor-grab active:cursor-grabbing group hover:shadow-gold/15 transition-shadow duration-300"
    >
      {/* Glossy reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Gold Card Borders Frame */}
      <div className="absolute inset-2 border border-gold/15 rounded-xl pointer-events-none" />
      <div className="absolute inset-3 border border-gold/5 rounded-lg pointer-events-none" />

      {/* Top Section */}
      <div className="relative z-10 flex justify-between items-center border-b border-gold/10 pb-2">
        <div className="flex items-center gap-1.5">
          <Crown className="w-4 h-4 text-gold" />
          <span className="font-serif text-[10px] tracking-[0.25em] font-bold text-gold uppercase">ANIQ ELITE CLUB</span>
        </div>
        <span className="text-[7px] tracking-widest text-gold/70 font-semibold uppercase">MEMBERSHIP CARD</span>
      </div>

      {/* Middle Section (Privileges) */}
      <div className="relative z-10 my-2 px-1">
        <ul className="space-y-1 text-[8px] sm:text-[9px] text-cream/90 font-medium">
          <li className="flex items-center gap-1.5">
            <Check className="w-2.5 h-2.5 text-gold flex-shrink-0" />
            <span>15% Discount (Monday–Friday)</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Check className="w-2.5 h-2.5 text-gold flex-shrink-0" />
            <span>10% Discount (Weekend)</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Check className="w-2.5 h-2.5 text-gold flex-shrink-0" />
            <span>20% Discount (Tuesday & Friday)</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Check className="w-2.5 h-2.5 text-gold flex-shrink-0" />
            <span>Exclusive Birthday Benefits</span>
          </li>
          <li className="flex items-center gap-1.5">
            <Check className="w-2.5 h-2.5 text-gold flex-shrink-0" />
            <span>Marriage Anniversary Special Privileges</span>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 flex justify-between items-end pt-2 border-t border-gold/10">
        <div>
          <span className="text-[6px] text-gold/50 block tracking-widest font-semibold">MEMBER NO.</span>
          <span className="font-mono text-[9px] text-cream font-bold tracking-wider">AQ - 8522 9421 28</span>
        </div>
        <div className="flex flex-col items-end">
          <Barcode className="w-8 h-4 text-gold opacity-65" />
          <span className="text-[5px] text-gold/40 block mt-0.5 uppercase">T&C APPLY</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function VipMembership() {
  const privileges = [
    "15% Discount on all grooming services valid Monday to Friday.",
    "10% Discount on premium treatments and beauty packages during Weekends.",
    "Special 20% Discount on haircuts and tattoo consultations every Tuesday & Friday.",
    "Complimentary birthday benefits, treatments, and custom surprises.",
    "Exclusive anniversary specials, including double reward points and gift vouchers.",
  ];

  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I'm%20interested%20in%20becoming%20a%20VIP%20Member.%20Could%20you%20share%20the%20details?";

  return (
    <section id="offers" className="py-20 bg-primary text-cream relative overflow-hidden border-t border-gold/15">
      {/* Background vector glow */}
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
                  <p className="text-xs sm:text-sm text-beige/90 font-light leading-relaxed">
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
                Get VIP Membership
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
              <FrontCard src="/assets/vip-card-front.png" />
            </div>

            {/* Redesigned HTML/CSS Back Card */}
            <div className="w-full max-w-md transform transition-transform duration-500 hover:scale-[1.02]">
              <span className="text-[9px] uppercase tracking-widest text-gold/75 font-semibold block mb-2 text-center lg:text-left">
                VIP CARD - BACK (REDESIGNED)
              </span>
              <BackCard />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
