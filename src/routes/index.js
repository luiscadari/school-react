import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Student from '../pages/Student';
import Students from '../pages/Students';

export default function Routes() {
  toast.success('Hello World!');
  toast.error('erro');
  return (
    <Switch>
      <MyRoute path="/" component={Login} isClosed={false} />
      <MyRoute path="/photos" component={Photos} isClosed />
      <MyRoute path="/register" component={Register} isClosed={false} />
      <MyRoute path="/student" component={Student} isClosed />
      <MyRoute path="/students" component={Students} isClosed />
      <MyRoute path="*" component={NotFound} isClosed={false} />
    </Switch>
  );
}
