import ProgressBar from '@/component/ProgressBar';
import { PcMainPage, MobileMainPage } from '@/component/slideAnimation';
import { isMobile, isPc } from '@/utils/mediaQuery';

export const MainPage = () => {
  return (
    <>
      <ProgressBar />
      {isPc() && <PcMainPage />}
      {isMobile() && <MobileMainPage />}
    </>
  );
};
