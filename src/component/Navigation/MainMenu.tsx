import { useEffect, useState } from 'react';
import { styled, keyframes } from '#/stitches.config';
import { Link } from 'react-router-dom';

import { ReactComponent as Home } from '@/assets/icon/home.svg';

export const MainMenu: React.FC<{ top: boolean }> = ({ top }) => {
  return (
    <Menu display={top}>
      <Text>
        <Link to="/login">LOGIN</Link>
      </Text>
      <Text>
        <Link to="/member">MEMBER</Link>
      </Text>
      <Text>
        <Link to="/awards">AWARD</Link>
      </Text>
      <Text>
        <Link to="/assignment">ASSIGNMENT</Link>
      </Text>
    </Menu>
  );
};

const fadein = keyframes({
  from: { transform: 'translateY(6rem)' },
  to: { transform: 'translateY(0)' },
});

const fadeout = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(6rem)' },
});

const Menu = styled('div', {
  display: 'flex',
  position: 'inherit',
  width: '100%',
  hetommight: '100%',
  padding: '.5rem',
  justifyContent: 'space-between',
  transition: 'all .2s ease-in-out',
  transform: 'translateY(6rem)',
  variants: {
    display: {
      true: {
        animation: `${fadein} .2s`,
        animationFillMode: 'forwards',
      },
      false: {
        animation: `${fadeout} .2s`,
        animationFillMode: 'forwards',
      },
    },
  },
});

const Text = styled('span', {
  transition: 'all .1s ease-in-out',
  opacity: 0.5,
  '&:hover': {
    opacity: 1,
  },
});
