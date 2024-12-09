import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import routers
import { routerAuth, routerUser } from '~/routers';

// import layouts
import { AdminLayout, AuthLayout, UserLayout } from '~/layouts';

// import others
import { NotFoundPage } from '~/pages/Other';
import { routerAdmin } from '~/routers/routerAdmin';

export const Routing = () => (
  <Switch>
    {routerAuth.map(({ id, path, component }) => (
      <AuthLayout key={id} path={path} component={component} exact />
    ))}
    {routerUser.map(({ id, path, component }) => (
      <UserLayout key={id} path={path} component={component} exact />
    ))}
     {routerAdmin.map(({ id, path, component }) => (
      <AdminLayout key={id} path={path} component={component} exact />
    ))}
    <Route path="*" component={NotFoundPage} exact />
  </Switch>
);
