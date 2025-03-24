import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { useScrollTop } from '../hooks/useScrollTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Use the custom scroll hook to manage scroll position
  useScrollTop();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout; 