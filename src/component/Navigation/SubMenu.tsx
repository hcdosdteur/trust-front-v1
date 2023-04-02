import { styled } from '#/stitches.config';
import { useState, useEffect } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

export const SubMenu = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/member">Member</NavLink>
      <NavLink to="/awards">Awards</NavLink>
      <NavLink to="/assignment">Assignment</NavLink>
    </Wrapper>
  );
};

//https://13akstjq.github.io/react/2019/11/08/React-Transition-Group-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0.html

const Wrapper = styled('div', {
  display: 'flex',
  position: 'fixed',
  width: '100%',
  top: '4.5rem',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '9rem',
  zIndex: '10',
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
