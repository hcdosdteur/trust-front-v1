import { styled } from '@stitches/react';
import { Link } from 'react-router-dom';

import { ReactComponent as Home } from '@/assets/icon/home.svg';

export const MainMenu = () => {
  return (
    <Menu>
      <Link to="/">
        <Home />
      </Link>
      <Link to="/awards">
        <Home />
      </Link>
      <Link to="/">
        <Home />
      </Link>
      <Link to="/">
        <Home />
      </Link>
      <Link to="/">
        <Home />
      </Link>
    </Menu>
  );
};

const Menu = styled('div', {
  display: 'flex',
  position: 'absolute',
  bottom: '1rem',
  minWidth: '35rem',
  height: '5.5rem',
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
});
