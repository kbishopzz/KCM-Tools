// Helps the app adjust to different screen sizes (mobile, tablet, desktop)
import { useState, useEffect } from 'react';

// Breakpoint constants
export const BREAKPOINTS = {
  mobileSm: 479,
  mobile: 767,
  tablet: 1023,
  desktop: 1399,
};

// Get items per page based on screen width
export const getItemsPerPage = (width) => {
  if (width >= BREAKPOINTS.desktop) return 12; // 4 columns × 3 rows
  if (width >= BREAKPOINTS.tablet) return 9;    // 3 columns × 3 rows
  if (width >= BREAKPOINTS.mobile) return 9;     // 3 columns × 3 rows
  if (width >= BREAKPOINTS.mobileSm) return 8;  // 2 columns × 4 rows
  return 6; // 1 column × 6 rows
};

// Custom hook for responsive values
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobileSm: windowSize.width <= BREAKPOINTS.mobileSm,
    isMobile: windowSize.width <= BREAKPOINTS.mobile,
    isTablet: windowSize.width <= BREAKPOINTS.tablet,
    isDesktop: windowSize.width > BREAKPOINTS.tablet,
  };
};
