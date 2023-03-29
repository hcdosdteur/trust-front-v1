import { styled } from '#/stitches.config';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const SubMenu = () => {
  return (
    <Wrapper>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
      >
        Home
      </NavLink>
      <NavLink
        to="/member"
        style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
      >
        Member
      </NavLink>
      <NavLink
        to="/awards"
        style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
      >
        Awards
      </NavLink>
      <NavLink
        to="/assignment"
        style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
      >
        Assignment
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  position: 'sticky',
  width: '100%',
  top: '4.5rem',
  justifyContent: 'center',
  gap: '9rem',
});

const defaultStyle = {
  fontSize: '2rem',
  fontWeight: 600,
  opacity: 0.5,
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
};

const activeStyle = {
  fontSize: '2rem',
  fontWeight: 600,
  cursor: 'pointer',
  opacity: 1,
};
