import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Alert from '../layouts/Alert';
import NotFound from '../layouts/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Bootcamps from '../bootcamps/Bootcamps';
import ResetPassword from '../auth/ResetPassword';
import Login from '../auth/Login';

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/resetPassword' component={ResetPassword} />
        <PrivateRoute exact path='/bootcamps' component={Bootcamps} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
