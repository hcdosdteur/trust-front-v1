import React from 'react';

import { Loading } from '@/component/loading/Loading';
import { Awards, MainPage, Member } from '@/pages/router';

interface ComponentItem {
  [key: string]: Array<{ Component: React.FC }>;
}

export const NavigatedComponent: ComponentItem = {
  '/': [{ Component: MainPage }],
  '/loading': [{ Component: Loading }],
  '/awards': [{ Component: Awards }],
  '/member': [{ Component: Member }],
  // '/assignment': [{ Component: Assignment }],
};
