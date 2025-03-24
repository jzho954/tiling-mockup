
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '@/components/ServicesSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <div className="py-20 text-center">Service not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="section-container">
          <Link to="/#services">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to services
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="text-5xl mr-4">{service.icon}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-blue">{service.title}</h1>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
                {service.detailDescription || service.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                <h2 className="text-xl font-semibold mb-4">Why choose our {service.title.toLowerCase()} service?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-blue mr-2">✓</span>
                    <span>Professional installation by certified tilers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue mr-2">✓</span>
                    <span>High-quality materials and workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue mr-2">✓</span>
                    <span>Attention to detail and clean finish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-blue mr-2">✓</span>
                    <span>Comprehensive service from consultation to completion</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a href="#quote" className="btn-primary">
                  Get a Quote for {service.title}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
