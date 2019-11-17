import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Welcome';
import OrderForm from './OrderForm';
import OrderScreen from './OrderScreen';

const Root: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/order" component={OrderForm} />
      <Route path="/order/history" component={OrderScreen} />
    </Switch>
  );
};

export default Root;
