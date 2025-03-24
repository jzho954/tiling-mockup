
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const services = [
  {
    title: "Indoor Tiling",
    description: "Transform your kitchens, bathrooms, and living areas with stunning tiles. We specialize in intricate patterns and designs that elevate Auckland homes.",
    icon: "🏠",
  },
  {
    title: "Outdoor Tiling",
    description: "Weather-resistant tiling for patios, pool surrounds, and outdoor living spaces. Durable solutions perfect for Auckland's varied climate.",
    icon: "🌿",
  },
  {
    title: "Waterproofing",
    description: "Expert waterproofing services for bathrooms, showers, and wet areas. Essential protection for Auckland properties to prevent moisture damage.",
    icon: "💧",
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <ScrollAnimation animation="slide-up" delay={delay}>
      <Card className="glass-card hover-scale h-full">
        <CardHeader>
          <div className="text-4xl mb-4">{icon}</div>
          <CardTitle className="text-xl font-bold text-brand-blue">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-700 text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </ScrollAnimation>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
