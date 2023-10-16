import loadable from '@loadable/component';

export const Main = loadable(() => import('./main'));
export const Assignment = {
  Admin: loadable(() => import('./router/assignment/Admin')),
  User: loadable(() => import('./router/assignment/User')),
};
export const Login = loadable(() => import('./Login'));
