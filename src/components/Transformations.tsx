"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Play } from "lucide-react";
import { useRef, useState } from "react";

type TransformItem = {
  type: "video" | "image";
  src: string;
  title: string;
  category: string;
  description: string;
};

function TransformCard({ item }: { item: TransformItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden aspect-[9/16] border border-primary/5 shadow-md bg-black cursor-pointer"
    >
      {item.type === "image" ? (
        <Image
          src={item.src}
          alt={item.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            src={item.src}
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Play/Hover indicator */}
          <div className="absolute top-4 right-4 z-20 p-2 bg-primary/80 backdrop-blur-sm text-accent rounded-full border border-accent/20">
            <Play className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>
      )}

      {/* Gold Border Outline on hover */}
      <div className="absolute inset-4 border border-accent/0 group-hover:border-accent/30 transition-all duration-500 z-20 pointer-events-none" />

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 z-10" />

      {/* Text & Action */}
      <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col justify-end h-1/2">
        <span className="text-[9px] tracking-widest uppercase text-accent font-semibold mb-1">
          {item.category}
        </span>
        <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-1.5">
          {item.title}
        </h3>
        <p className="text-[11px] text-white/75 leading-relaxed font-light mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {item.description}
        </p>
        <div className="w-6 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
      </div>
    </div>
  );
}

export default function Transformations() {
  const items: TransformItem[] = [
    {
      type: "video",
      src: "/assets/customer-video-1.mp4",
      category: "Hair Styling",
      title: "Precision Haircut & Style",
      description: "Sophisticated modern haircut followed by detailed franchise-standard beard shaping.",
    },
    {
      type: "video",
      src: "/assets/customer-video-2.mp4",
      category: "Hair Treatment",
      title: "Luxury Hair Spa",
      description: "Deep oil conditioning and hot-steam follicle therapy for intensive smoothness.",
    },
    {
      type: "video",
      src: "/assets/customer-video-3.mp4",
      category: "Smoothening",
      title: "Signature Keratin Therapy",
      description: "Organic Keratin protein seal providing frizz-free volume and reflective glossy shine.",
    },
    {
      type: "image",
      src: "/assets/transformation-1.webp",
      category: "Grooming",
      title: "Silk Press Finish",
      description: "High-end blow dry styling and smooth hair press for custom local customer confidence.",
    },
  ];

  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20a%20consultation%20for%20a%20transformation.";

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Real Transformations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Real Transformations. Real Confidence.
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TransformCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/90 text-primary font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-accent/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Book Your Transformation Now
          </a>
        </div>

      </div>
    </section>
  );
}
