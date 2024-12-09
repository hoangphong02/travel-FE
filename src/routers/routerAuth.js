import { v4 as uuidv4 } from 'uuid';

import { routesAuth } from '~/configs';
import { LoginPage } from '~/pages/Auth';


export const routerAuth = [
    {
    id: `user-${uuidv4()}`,
    path: routesAuth.login,
    component: LoginPage,
  },
];
