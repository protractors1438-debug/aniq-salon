"use client";

import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  const address = "Door No. 6-99/2, First Floor, Beside Sri Balaji Bakery, Near NTPC Chowrasta, Annojiguda, Hyderabad";
  const mapsUrl = "https://maps.app.goo.gl/T2S6M2FPc7sZ9Yp38";
  const whatsappUrl = "https://wa.me/918522942128?text=Hi%20ANIQ%20Salon%20Annojiguda,%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <section id="location" className="py-16 md:py-24 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2">
            Find Us
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Visit ANIQ Salon Annojiguda
          </h2>
          <div className="w-12 h-[1px] bg-accent mx-auto mt-3" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 border border-primary/5 shadow-sm h-full flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-primary mb-5">
                  Salon Address & Hours
                </h3>
                
                {/* Location Item */}
                <div className="flex gap-3 items-start mb-6">
                  <div className="p-2.5 bg-ivory text-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-primary mb-0.5">
                      Our Location
                    </h4>
                    <p className="text-xs text-primary/70 leading-relaxed font-light">
                      {address}
                    </p>
                  </div>
                </div>

                {/* Timing Item */}
                <div className="flex gap-3 items-start mb-6">
                  <div className="p-2.5 bg-ivory text-accent">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-primary mb-0.5">
                      Opening Hours
                    </h4>
                    <p className="text-xs text-primary/70 leading-relaxed font-light">
                      Open Every Day: 9:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex gap-3 items-start mb-6">
                  <div className="p-2.5 bg-ivory text-accent">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-primary mb-0.5">
                      Contact Number
                    </h4>
                    <a href="tel:+918522942128" className="text-xs text-primary/70 hover:text-accent leading-relaxed font-light transition-colors">
                      +91 8522942128
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-primary/5">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-accent hover:bg-accent/90 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-accent/10 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-primary text-white hover:bg-accent hover:text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 border border-primary hover:border-accent cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  Book on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 h-[300px] lg:h-auto min-h-[350px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full border border-primary/5 shadow-md overflow-hidden aspect-video lg:aspect-auto"
            >
              <iframe
                title="ANIQ Salon Annojiguda Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5627258380277!2d78.63351937583688!3d17.432888983463665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f7ca5e462d7%3A0xe543c7b2e61a6fd!2sNTPC%20Chowrasta%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718640000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Outer gold border accent */}
              <div className="absolute inset-3 border border-accent/20 pointer-events-none z-10" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
