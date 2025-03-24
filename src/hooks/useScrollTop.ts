import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to reset scroll position when navigating between routes
 */
export const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position immediately
    window.scrollTo(0, 0);
    
    // Handle any delayed content loading with a fallback
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
}; 