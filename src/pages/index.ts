import loadable from '@loadable/component';

export const Main = {
  Admin: loadable(() => import('./admin')),
  User: loadable(() => import('./user')),
};

export const Login = loadable(() => import('../component/auth/Login'));
