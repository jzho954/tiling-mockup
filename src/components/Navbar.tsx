
import React, { useState, useEffect } from 'react';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Reviews', href: '#reviews' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = ['hero', 'about', 'services', 'reviews', 'quote'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-xl md:text-2xl font-bold text-brand-blue hover:text-brand-blue-light transition-colors duration-300"
          >
            Auckland Tiling
          </a>
          
          <div className="flex items-center space-x-1 md:space-x-4">
            <div className="hidden md:flex space-x-1 md:space-x-4">
              {navLinks.map((link) => (
                <a 
                  key={link.title} 
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.title}
                </a>
              ))}
            </div>
            
            <a 
              href="#quote" 
              className={`btn-primary text-sm ${isScrolled ? 'py-2 px-4' : 'py-2.5 px-5'} ml-3`}
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
