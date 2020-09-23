import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ResetPassword from './components/auth/ResetPassword';
import Bootcamps from './components/bootcamps/Bootcamps';
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/resetPassword' component={ResetPassword} />

          <Route exact path='/bootcamps' component={Bootcamps} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
