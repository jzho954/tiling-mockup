
import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">About Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollAnimation animation="fade-in-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 10 years of experience transforming Auckland homes and businesses, our team of expert tilers brings craftsmanship and attention to detail to every project.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in Auckland, we understand local styles and requirements, specializing in creating beautiful, durable tiling solutions for Kiwi properties.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From traditional villas in Ponsonby to modern apartments in the CBD, we work closely with our clients to deliver exceptional results that stand the test of time.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-in-right">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/tiling2.jpg" 
                alt="Auckland Tiler at work" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
