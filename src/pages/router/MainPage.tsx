import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import ProgressBar from '@/component/ProgressBar';
import { PcMainPage, MobileMainPage } from '@/component/slideAnimation';

export const MainPage = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });

  useEffect(() => {
    // console.log(isPc, isMobile);
  }, []);

  return (
    <>
      <ProgressBar />
      {isPc && <PcMainPage />}
      {isMobile && <MobileMainPage />}
    </>
  );
};
