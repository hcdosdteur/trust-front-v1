import { Link } from 'react-router-dom';

import { styled, keyframes } from '#/stitches.config';

import { navigation } from '.';

export const MainMenu: React.FC<{ top: boolean }> = ({ top }) => {
  return (
    <Menu display={top}>
      {navigation.map((item, idx) => {
        if (item[1] !== 'home')
          return (
            <Text key={idx}>
              <Link to={item[0]}>{item[1].toUpperCase()}</Link>
            </Text>
          );
      })}
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
