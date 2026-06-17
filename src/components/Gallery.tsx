"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

export default function Gallery() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoHoverStart = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleVideoHoverEnd = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const mediaItems = [
    {
      type: "video",
      src: "/assets/salon-intro.mp4",
      alt: "ANIQ Salon Video Tour",
      caption: "Experience ANIQ (Video Tour)",
      sizeClass: "md:col-span-2 aspect-[16/10] md:h-[300px]",
    },
    {
      type: "image",
      src: "/assets/gallery-1.jpg",
      alt: "ANIQ Salon Pedicure Hair Wash Station",
      caption: "Pedicure & Hair Wash Lounge",
      sizeClass: "aspect-square h-full",
    },
    {
      type: "image",
      src: "/assets/gallery-2.jpg",
      alt: "ANIQ Salon Hair Styling Stations",
      caption: "Gold-backlit Styling Station",
      sizeClass: "aspect-square h-full",
    },
    {
      type: "image",
      src: "/assets/gallery-3.jpg",
      alt: "ANIQ Salon Kids Styling Mirror",
      caption: "Kids Grooming Mirrors",
      sizeClass: "aspect-square h-full",
    },
    {
      type: "image",
      src: "/assets/gallery-4.jpg",
      alt: "ANIQ Salon Kids Car Grooming Chair",
      caption: "Fun Kids Styling Space",
      sizeClass: "aspect-square h-full",
    },
    {
      type: "image",
      src: "/assets/gallery-5.jpg",
      alt: "ANIQ Salon Special Styling Tattoo Zone",
      caption: "Private Cut & Tattoo Zone",
      sizeClass: "aspect-square h-full",
    },
    {
      type: "image",
      src: "/assets/exterior.jpg",
      alt: "ANIQ Salon Exterior Entrance",
      caption: "Our Exterior Frontage",
      sizeClass: "aspect-square h-full",
    },
    {
      type: "image",
      src: "/assets/transformation-1.webp",
      alt: "ANIQ Hair Treatment Smooth Styling",
      caption: "Precision Styling Finish",
      sizeClass: "aspect-square h-full",
    },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Our Gallery
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            A Glimpse of Salon Luxury
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr max-w-5xl mx-auto">
          {mediaItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden border border-primary/5 bg-ivory shadow-sm ${item.sizeClass}`}
              onMouseEnter={item.type === "video" ? handleVideoHoverStart : undefined}
              onMouseLeave={item.type === "video" ? handleVideoHoverEnd : undefined}
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
                  <div className="absolute top-4 right-4 z-20 p-2.5 bg-primary/80 backdrop-blur-sm text-accent rounded-full border border-accent/20">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                </div>
              )}

              {/* Inner gold frame outline on hover */}
              <div className="absolute inset-4 border border-accent/0 group-hover:border-accent/30 transition-all duration-500 z-20 pointer-events-none" />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 z-10" />

              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-20 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[9px] tracking-widest uppercase text-accent font-semibold block mb-0.5">
                  ANIQ ANNOJIGUDA
                </span>
                <p className="font-serif text-sm font-bold text-white">
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
