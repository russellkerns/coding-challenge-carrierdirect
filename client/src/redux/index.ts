import { combineReducers } from 'redux';
import frostingsReducer from './frostings';
import basesReducer from './bases';
import toppingReducer from './toppings';
import orderReducer from './orders';

const appReducer = combineReducers({
  frostings: frostingsReducer,
  bases: basesReducer,
  toppings: toppingReducer,
  orders: orderReducer,
});

export default appReducer;
