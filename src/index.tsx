import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { globalCss } from '#/stitches.config';
import Main from '@/pages/main';

import '@/assets/fonts/index.css';

globalCss({
  ':root': {
    fontSize: '10px',
  },
  '*': {
    fontFamily: 'SFpro',
    fontSize: '1.6rem',
    boxSizing: 'border-box',
    color: '$main',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  '*::-webkit-scrollbar': {
    // display: 'none',
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
})();

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/awards" element={<Main />} />
      <Route path="/loading" element={<Main />} />
      <Route path="/member" element={<Main />} />
      <Route path="/assignment" element={<Main />} />
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
