
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { TextRotate } from '@/components/ui/text-rotate';
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/lovable-uploads/3e220ebf-07be-4913-8047-07446025fa55.png", // Bathroom
  "/lovable-uploads/ec3a22fa-5536-45c1-b37c-2b19541595f3.png", // Hexagonal tiles
  "/lovable-uploads/43ddcf7c-d006-4a57-ba92-2a089682b03a.png"  // Installation
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-[80vh] w-full bg-gray-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${images[currentImage]}')`,
          backgroundPosition: "center center",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="absolute z-10 bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
      
      <div className="absolute z-10 left-4 md:left-8 top-1/2 transform -translate-y-1/2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToPrev}
          className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute z-10 right-4 md:right-8 top-1/2 transform -translate-y-1/2">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={goToNext}
          className="rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
            Auckland's{" "}
            <span className="relative inline-block">
              <TextRotate
                texts={[
                  "Premier",
                  "Finest",
                  "Leading",
                  "Expert",
                  "Professional"
                ]}
                mainClassName="text-brand-blue inline-block overflow-hidden"
                staggerDuration={0.03}
                staggerFrom="first"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              />
            </span>
            {" "}Tiling Experts
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
            Quality Craftsmanship for Kiwi Homes & Businesses
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <a 
              href="#quote" 
              className="btn-primary text-lg shadow-lg"
            >
              Get Quote
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
