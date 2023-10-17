import { useMediaQuery } from 'react-responsive';

export const isMobile = () => {
  const result = useMediaQuery({
    query: '(max-width:1023px)',
  });
  return result;
};

export const isPc = () => {
  const result = useMediaQuery({
    query: '(min-width:1024px)',
  });
  return result;
};
