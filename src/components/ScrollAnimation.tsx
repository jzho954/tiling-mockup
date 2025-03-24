import React, { useEffect, useRef, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Reset animation state on navigation
    if (elementRef.current) {
      elementRef.current.classList.remove('animated');
    }
  }, [location.pathname]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add('animated');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={elementRef} 
      className={`animate-on-scroll ${className}`}
      style={{ 
        animationName: animation,
        animationDuration: '0.6s',
        animationFillMode: 'forwards',
        animationDelay: `${delay}ms`,
        animationPlayState: 'paused'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
