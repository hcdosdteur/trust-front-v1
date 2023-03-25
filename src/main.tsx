import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/router/Main';
import { globalCss } from '@stitches/react';
import '@css/index.scss';

globalCss({
  ':root': {
    fontSize: '10px',
  },
  '*': {
    fontSize: '1.6rem',
    boxSizing: 'border-box',
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },
  body: {
    backgroundColor: '#fff',
    margin: 0,
  },
});

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
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
