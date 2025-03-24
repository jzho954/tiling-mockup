
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Auckland Tiling</h3>
            <p className="text-gray-300">
              Professional tiling services across the Auckland region.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              09 123 4567
            </p>
            <p className="text-gray-300 mb-2">
              info@aucklandtiling.co.nz
            </p>
            <p className="text-gray-300">
              Auckland, New Zealand
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
            <p className="text-gray-300">
              Auckland CBD, North Shore, West Auckland, East Auckland, South Auckland
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Auckland Tiling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
