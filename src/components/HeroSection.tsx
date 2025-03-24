
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { TextRotate } from '@/components/ui/text-rotate';
import { Link } from 'react-router-dom';

const images = [
  "/lovable-uploads/3e220ebf-07be-4913-8047-07446025fa55.png", // Bathroom
  "/lovable-uploads/ec3a22fa-5536-45c1-b37c-2b19541595f3.png", // Hexagonal tiles
  "/lovable-uploads/43ddcf7c-d006-4a57-ba92-2a089682b03a.png"  // Installation
];

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-[90vh] w-full bg-black overflow-hidden"
    >
      {/* Floating images */}
      <motion.div 
        className="absolute top-[15%] left-[10%] w-48 h-48 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ transform: 'rotate(-12deg)' }}
      >
        <img 
          src={images[0]} 
          alt="Tiling" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[20%] left-[8%] w-56 h-56 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{ transform: 'rotate(-4deg)' }}
      >
        <img 
          src={images[1]} 
          alt="Tiling" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        className="absolute top-[10%] right-[10%] w-48 h-48 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{ transform: 'rotate(6deg)' }}
      >
        <img 
          src={images[2]} 
          alt="Tiling" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[15%] right-[8%] w-64 h-64 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{ transform: 'rotate(10deg)' }}
      >
        <img 
          src={images[0]} 
          alt="Tiling" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
            Make your{" "}
            <span className="block mt-2">
              website{" "}
              <span className="relative inline-block">
                <TextRotate
                  texts={[
                    "pop ✨",
                    "fancy",
                    "lovely ♥",
                    "fun",
                    "🔥🔥🔥",
                    "cool 🕶️",
                    "go 🚀",
                  ]}
                  mainClassName="text-blue-600 inline-block overflow-hidden"
                  staggerDuration={0.03}
                  staggerFrom="first"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              </span>
            </span>
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            with a growing library of ready-to-use react components
            <br /> & microinteractions. free & open source.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              variant="outline" 
              className="bg-white text-black font-semibold px-8 py-6 rounded-full text-lg h-auto"
              asChild
            >
              <Link to="#about">
                Check docs →
              </Link>
            </Button>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full text-lg h-auto"
              asChild
            >
              <Link to="#quote">
                ★ on GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
