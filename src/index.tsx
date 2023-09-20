import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { globalCss } from '#/stitches.config';

import { BranchRouting } from '@/component/auth/auth';
import Signup from '@/component/auth/Signup';
import { Main, Login } from '@/pages/index';

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
    width: 'inherit',
    height: 'inherit',
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
      <Route path="/register" element={<Signup />} />
      <Route path="/awards" element={<BranchRouting screens={Main} />} />
      <Route path="/loading" element={<BranchRouting screens={Main} />} />
      <Route path="/member" element={<BranchRouting screens={Main} />} />
      <Route path="/assignment" element={<BranchRouting screens={Main} />} />
      <Route path="/" element={<BranchRouting screens={Main} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </RecoilRoot>,
);
