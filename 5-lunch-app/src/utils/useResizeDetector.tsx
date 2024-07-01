import { useEffect, useState } from 'react';
import breakpoints from '../styles/variables/_mediaBreakpoints.module.scss';

interface ResizeParameters {
  isPhone: boolean;
  isTabletPortrait: boolean;
  isTabletLandscape: boolean;
  isTabletDesktop: boolean;
  isDesktop: boolean;
  isBigDesktop: boolean;
}

function useResizeDetector(): ResizeParameters {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const isPhone = width < parseInt(breakpoints.min_tablet_portrait_width, 10);
  const isTabletPortrait = width < parseInt(breakpoints.min_tablet_landscape_width, 10);
  const isTabletLandscape = width < parseInt(breakpoints.min_tablet_desktop_width, 10);
  const isTabletDesktop = width < parseInt(breakpoints.min_desktop_width, 10);
  const isDesktop = width < parseInt(breakpoints.min_big_desktop_width, 10);
  const isBigDesktop = width >= parseInt(breakpoints.min_big_desktop_width, 10);

  return { isPhone, isTabletPortrait, isTabletLandscape, isTabletDesktop, isDesktop, isBigDesktop };
}

export default useResizeDetector;
