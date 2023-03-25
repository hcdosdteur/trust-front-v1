import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { globalCss } from '@stitches/react';
import Main from '@/router/Main';

globalCss({
  ':root': {
    fontSize: '10px',
  },
  '*': {
    fontSize: '1.6rem',
    boxSizing: 'border-box',
    color: '#fff',
    fontWeight: 700,
    letterSpacing: '-0.01em',
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
      {/* <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} /> */}
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
