import loadable from '@loadable/component';

// export const Main = {
//   Student: loadable(() => import('./Main/Student')),
//   Teacher: loadable(() => import('./Main/Teacher')),
// };

export const Login = loadable(() => import('../component/auth/Login'));
