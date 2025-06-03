import react from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} isClosed={false} />
      <MyRoute path="*" component={NotFound} isClosed={false} />
    </Switch>
  );
}
