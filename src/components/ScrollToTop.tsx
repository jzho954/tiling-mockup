import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const isInitialMount = useRef(true);
  
  useEffect(() => {
    // Skip scroll reset on first render (initial page load)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    // Force immediate scroll reset
    window.scrollTo(0, 0);
    
    // Make sure to set both scroll positions to cover all browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Use requestAnimationFrame for more reliable scroll reset after DOM updates
    const frameId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    return () => cancelAnimationFrame(frameId);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
