
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';
import { Link } from 'react-router-dom';
import { ArrowRight, PaintRoller, Hammer, Droplets } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailDescription?: string;
}

export const services: Service[] = [
  {
    id: "indoor-tiling",
    title: "Indoor Tiling",
    description: "Transform your kitchens, bathrooms, and living areas with stunning tiles. We specialize in intricate patterns and designs that elevate Auckland homes.",
    icon: <Hammer className="w-10 h-10 text-brand-blue" />,
    detailDescription: "Our indoor tiling service covers all aspects of interior tiling, from kitchen backsplashes to bathroom floors and walls. We work with a wide range of materials including ceramic, porcelain, natural stone, and mosaic tiles. Our team specializes in creating custom patterns and designs that complement your home's aesthetic. We handle everything from surface preparation to grouting and sealing, ensuring a flawless finish that will last for years to come."
  },
  {
    id: "outdoor-tiling",
    title: "Outdoor Tiling",
    description: "Weather-resistant tiling for patios, pool surrounds, and outdoor living spaces. Durable solutions perfect for Auckland's varied climate.",
    icon: <PaintRoller className="w-10 h-10 text-brand-blue" />,
    detailDescription: "Our outdoor tiling solutions are designed to withstand Auckland's weather conditions while enhancing your exterior spaces. We install slip-resistant tiles for pool areas, frost-resistant options for patios, and decorative tiles for garden paths. Our team selects materials that can endure UV exposure, temperature fluctuations, and moisture without compromising on style. We ensure proper drainage installation and use specialized outdoor grouts and sealants to protect your investment for years to come."
  },
  {
    id: "waterproofing",
    title: "Waterproofing",
    description: "Expert waterproofing services for bathrooms, showers, and wet areas. Essential protection for Auckland properties to prevent moisture damage.",
    icon: <Droplets className="w-10 h-10 text-brand-blue" />,
    detailDescription: "Our waterproofing services provide crucial protection for wet areas in your home or commercial property. We apply industry-leading membrane systems that create a watertight barrier before tiling. Our team follows New Zealand building code requirements and uses certified waterproofing products that come with manufacturer guarantees. We specialize in shower recesses, bathrooms, laundries, balconies, and other areas prone to water exposure. Our thorough approach includes proper preparation, membrane application, and quality testing to ensure complete water resistance."
  }
];

interface ServiceCardProps {
  service: Service;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
  return (
    <ScrollAnimation animation="slide-up" delay={delay}>
      <Link to={`/services/${service.id}`} className="block h-full">
        <Card className="glass-card hover-scale h-full transition-all hover:shadow-lg">
          <CardHeader>
            <div className="flex justify-center items-center h-20 mb-4">
              {service.icon}
            </div>
            <CardTitle className="text-xl font-bold text-brand-blue">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-700 text-base">
              {service.description}
            </CardDescription>
            <div className="flex items-center mt-4 text-brand-blue font-medium">
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </CardContent>
        </Card>
      </Link>
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
              key={service.id}
              service={service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
