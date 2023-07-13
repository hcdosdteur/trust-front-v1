import { useMediaQuery } from 'react-responsive';

import { PcMainPage, MobileMainPage } from '@/component/SlideAnimation';
import ProgressBar from '@/component/ProgressBar';
import { useEffect, useState } from 'react';

export const MainPage = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });

  useEffect(() => {
    console.log(isPc, isMobile);
  }, []);

  return (
    <>
      <ProgressBar />
      {isPc && <PcMainPage />}
      {isMobile && <MobileMainPage />}
    </>
  );
};
