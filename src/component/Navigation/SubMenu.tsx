import { NavLink as RRNavLink } from 'react-router-dom';

import { keyframes, styled } from '#/stitches.config';

import { navigation } from '.';

export const SubMenu = () => {
  return (
    <Wrapper>
      {navigation.map((item, idx) => {
        if (item[1] !== 'login')
          return (
            <div key={idx}>
              <NavLink to={item[0]}>
                {item[1].charAt(0).toUpperCase() + item[1].slice(1)}
              </NavLink>
            </div>
          );
      })}
    </Wrapper>
  );
};

const show = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const Wrapper = styled('div', {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  paddingTop: '4.5rem',
  paddingBottom: '3rem',
  boxShadow: '0 0 2rem 2rem #000',
  top: 0,
  justifyContent: 'center',
  backgroundColor: '#000',
  textAlign: 'center',
  gap: '9rem',
  zIndex: 999,
  div: {
    transition: 'all ease-in-out',
    animation: `${show} .5s`,
  },
});

const NavLink = styled(RRNavLink, {
  fontSize: '2rem',
  opacity: 0.5,
  cursor: 'pointer',
  transition: '.1s ease-out',
  '&:hover': {
    opacity: 1,
  },
  '&.active': {
    opacity: 1,
  },
  userSelect: 'none',
});
