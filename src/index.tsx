import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { globalCss } from '#/stitches.config';
import Main from '@/pages/main';
import Login from '@/Login';
import Signup from '@/Signup';

import '@/assets/fonts/index.css';

globalCss({
  ':root': {
    '@moblie': { fontSize: '6px' },
    '@pc': { fontSize: '10px' },
  },
  '*': {
    fontFamily: 'SFpro',
    fontSize: '1.6rem',
    boxSizing: 'border-box',
    color: '$main',
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  '*::-webkit-scrollbar': {
    display: 'none',
    width: '.6rem',
  },
  '*::-webkit-scrollbar-thumb': {
    width: '4rem',
    background: '#adadad7b',
    borderRadius: '1rem',
  },
  body: {
    backgroundColor: '#000',
    margin: 0,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  p: {
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    margin: 0,
  },
})();

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/awards" element={<Main />} />
      <Route path="/loading" element={<Main />} />
      <Route path="/member" element={<Main />} />
      <Route path="/assignment" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
);
