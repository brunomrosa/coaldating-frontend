import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
/* import SignUp from '../pages/SignUp'; */

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/*  <Route path="/signup" exact component={SignUp} /> */}
    </Switch>
  );
};

export default Routes;
