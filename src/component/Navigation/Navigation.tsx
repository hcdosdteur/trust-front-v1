import { Awards, MainPage } from '@/pages/router';
import React from 'react';
import { Loading } from '@/component/Loading/Loading';

interface ComponentItem {
  [key: string]: Array<{ Component: React.FC }>;
}

export const NavigatedComponent: ComponentItem = {
  '/': [{ Component: MainPage }],
  '/loading': [{ Component: Loading }],
  '/awards': [{ Component: Awards }],
};
