import { useEffect, useRef } from 'react';
import { styled } from '@stitches/react';

const ProgressBar = () => {
  const bar = useRef<HTMLDivElement>(null);

  const scroll = () => {
    let winScroll = window.scrollY;
    let scrolled: number = 0;

    let height = document.body.clientHeight * (5 / 6);
    scrolled = (winScroll / height) * 100;

    if (bar.current !== null) bar.current.style.width = `${scrolled}%`;
  };

  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <Progress>
      <Bar ref={bar} style={{ width: '0%' }}></Bar>
    </Progress>
  );
};

export default ProgressBar;

const bar_h = '.5rem';
const Progress = styled('div', {
  position: 'fixed',
  width: '100%',
  height: bar_h,
  backgroundColor: '#404040',
  zIndex: '10',
  transition: 'all .2s ease-in-out',
});

const Bar = styled('div', {
  height: bar_h,
  backgroundColor: '#fff',
});
