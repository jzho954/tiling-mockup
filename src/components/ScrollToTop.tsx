
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);
    
    // Set scroll position again after a slight delay to ensure all content has rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      
      // For Safari and some mobile browsers
      document.body.scrollTop = 0;
      // For Chrome, Firefox, IE and Opera
      document.documentElement.scrollTop = 0;
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
