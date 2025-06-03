import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function Routes() {
  toast.success('Hello World!');
  toast.error('erro');
  return (
    <Switch>
      <MyRoute path="/" component={Login} isClosed={false} />
      <MyRoute path="*" component={NotFound} isClosed={false} />
    </Switch>
  );
}
