import { styled, keyframes } from '#/stitches.config';
import { Link } from 'react-router-dom';

import { ReactComponent as Home } from '@/assets/icon/home.svg';

export const MainMenu: React.FC<{ top: boolean }> = ({ top }) => {
  return (
    <Menu display={top}>
      <Link to="/">
        <Home />
      </Link>
      <Link to="/loading ">
        <Home />
      </Link>
      <Link to="/member">
        <Home />
      </Link>
      <Link to="/awards">
        <Home />
      </Link>
      <Link to="/assignment">
        <Home />
      </Link>
    </Menu>
  );
};

const fadein = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const Menu = styled('div', {
  display: 'flex',
  position: 'inherit',
  width: '100%',
  height: '100%',
  padding: '.5rem',
  justifyContent: 'space-evenly',
  svg: {
    cursor: 'pointer',
    fill: '#404040',
    transition: '.1s ease-out',
    '&:hover': {
      fill: '#e2e2e2',
      scale: 1.1,
    },
  },
  variants: {
    display: {
      true: {
        animation: `${fadein} .25s`,
        visibility: 'visible',
      },
      false: {
        animation: `${fadeout} .25s`,
        visibility: 'hidden',
      },
    },
  },
});
