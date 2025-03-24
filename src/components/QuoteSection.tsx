
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import ScrollAnimation from './ScrollAnimation';
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Sent",
        description: "We've received your request and will get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <ScrollAnimation animation="fade-in-left">
            <div className="pr-0 lg:pr-12">
              <p className="uppercase text-blue-500 font-semibold tracking-wider mb-2">GET IN TOUCH</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Start Your Tiling Project</h2>
              <p className="text-gray-600 text-lg mb-10">
                Ready to transform your space? Fill out the form and our team will 
                get back to you promptly to discuss your tiling needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-700 font-semibold">Phone</h3>
                    <p className="text-blue-500 font-medium">0800 TILING</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-gray-700 font-semibold">Email</h3>
                    <p className="text-blue-500 font-medium">info@aucklandtilingexperts.co.nz</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          {/* Right side form */}
          <ScrollAnimation animation="fade-in-right">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <User className="h-5 w-5" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your tiling project"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 resize-none"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
