import React, { useEffect } from 'react';
import { services } from '@/components/ServicesSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">Our Services</h1>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Auckland Tiling offers professional tiling and waterproofing services across Auckland. 
              Our team of experienced tilers delivers high-quality results for both residential and commercial projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                // Map service ID to image path
                const serviceImages = {
                  'indoor-tiling': '/lovable-uploads/43ddcf7c-d006-4a57-ba92-2a089682b03a.png',
                  'outdoor-tiling': '/lovable-uploads/ec3a22fa-5536-45c1-b37c-2b19541595f3.png',
                  'waterproofing': '/lovable-uploads/3e220ebf-07be-4913-8047-07446025fa55.png'
                };
                
                const imagePath = serviceImages[service.id as keyof typeof serviceImages] || '/placeholder.svg';
                
                return (
                  <Card key={service.id} className="hover:shadow-lg transition-all overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={imagePath} 
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div>{service.icon}</div>
                        <CardTitle className="text-xl font-bold text-brand-blue">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700 text-base mb-4">
                        {service.description}
                      </CardDescription>
                      <Link to={`/services/${service.id}`} className="flex items-center text-brand-blue font-medium">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
