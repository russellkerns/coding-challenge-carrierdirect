import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import OrderForm from './OrderForm';

const Root: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/order" component={OrderForm} />
    </Switch>
  );
};

export default Root;
