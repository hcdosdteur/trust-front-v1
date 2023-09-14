import { styled } from '#/stitches.config';
import { NavLink as RRNavLink } from 'react-router-dom';

export const SubMenu = () => {
  return (
    <Wrapper>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/member">Member</NavLink>
      </div>
      <div>
        <NavLink to="/awards">Awards</NavLink>
      </div>
      <div>
        <NavLink to="/assignment">Assignment</NavLink>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  top: '4.5rem',
  justifyContent: 'center',
  backgroundColor: '#000',
  textAlign: 'center',
  gap: '9rem',
  zIndex: 999,
});

const NavLink = styled(RRNavLink, {
  fontSize: '2rem',
  fontWeight: 600,
  opacity: 0.5,
  cursor: 'pointer',
  transition: '.1s ease-out',
  '&:hover': {
    opacity: 1,
  },
  '&.active': {
    opacity: 1,
  },
});
