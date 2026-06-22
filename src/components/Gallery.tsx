"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

type GalleryItem = {
  type: "video" | "image";
  src: string;
  alt: string;
  caption: string;
  aspectClass: string;
  shapeClass: string;
};

export default function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const mediaItems: GalleryItem[] = [
    {
      type: "video",
      src: "/assets/salon-intro.mp4",
      alt: "ANIQ Salon Video Tour",
      caption: "Experience ANIQ (Video Tour)",
      aspectClass: "aspect-video",
      shapeClass: "rounded-t-[80px] rounded-b-[20px]",
    },
    {
      type: "image",
      src: "/assets/gallery-1.jpg",
      alt: "ANIQ Salon Pedicure Hair Wash Station",
      caption: "Pedicure & Hair Wash Lounge",
      aspectClass: "aspect-[4/5]",
      shapeClass: "rounded-[120px_20px_120px_20px]",
    },
    {
      type: "image",
      src: "/assets/gallery-2.jpg",
      alt: "ANIQ Salon Hair Styling Stations",
      caption: "Gold-backlit Styling Station",
      aspectClass: "aspect-square",
      shapeClass: "rounded-t-full",
    },
    {
      type: "image",
      src: "/assets/gallery-3.jpg",
      alt: "ANIQ Salon Kids Styling Mirror",
      caption: "Kids Grooming Mirrors",
      aspectClass: "aspect-[4/3]",
      shapeClass: "rounded-[20px_120px_20px_120px]",
    },
    {
      type: "image",
      src: "/assets/gallery-4.jpg",
      alt: "ANIQ Salon Kids Car Grooming Chair",
      caption: "Fun Kids Styling Space",
      aspectClass: "aspect-[4/5]",
      shapeClass: "rounded-b-full",
    },
    {
      type: "image",
      src: "/assets/gallery-5.jpg",
      alt: "ANIQ Salon Special Styling Tattoo Zone",
      caption: "Private Cut & Tattoo Zone",
      aspectClass: "aspect-[3/4]",
      shapeClass: "rounded-[100px_20px_100px_20px]",
    },
    {
      type: "image",
      src: "/assets/exterior.jpg",
      alt: "ANIQ Salon Exterior Entrance",
      caption: "Our Exterior Frontage",
      aspectClass: "aspect-video",
      shapeClass: "rounded-t-[100px] rounded-b-[20px]",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-primary text-cream relative overflow-hidden border-t border-gold/15">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-2">
            PORTFOLIO
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-cream uppercase">
            A Glimpse of Salon Luxury
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-3" />
        </div>

        {/* Pinterest Masonry columns layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
          {mediaItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`break-inside-avoid group relative overflow-hidden border border-gold/15 bg-secondary-black shadow-2xl mb-6 cursor-pointer ${item.aspectClass} ${item.shapeClass}`}
              onMouseEnter={item.type === "video" ? handleMouseEnter : undefined}
              onMouseLeave={item.type === "video" ? handleMouseLeave : undefined}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  {/* Play icon badge */}
                  {!isPlaying && (
                    <div className="absolute top-4 right-4 z-20 p-2 bg-gold text-primary rounded-full border border-gold/20 shadow-md">
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  )}
                </div>
              )}

              {/* Inner gold frame outline on hover */}
              <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 transition-all duration-500 z-20 pointer-events-none" />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/50 transition-colors duration-500 z-10" />

              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[9px] tracking-widest uppercase text-gold font-bold block mb-0.5">
                  ANIQ ANNOJIGUDA
                </span>
                <p className="font-serif text-sm font-bold text-cream">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
