import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { PcMainPage, MoblieMainPage } from '@/component/SlideAnimation';

export const MainPage = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });

  return (
    <>
      {isPc && <PcMainPage />}
      {isMobile && <MoblieMainPage />}
    </>
  );
};
