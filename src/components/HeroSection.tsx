
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-[80vh] w-full bg-gray-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')",
          backgroundPosition: "center center",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Auckland's Premier Tiling Experts
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Quality for Kiwi Homes & Businesses
        </p>
        <a 
          href="#quote" 
          className="btn-primary text-lg shadow-lg"
        >
          Get Quote
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
