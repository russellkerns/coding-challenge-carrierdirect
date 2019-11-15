import { combineReducers } from 'redux';
import frostingsReducer from './frostings';
import basesReducer from './bases';
import toppingReducer from './toppings';

const appReducer = combineReducers({
  frostings: frostingsReducer,
  bases: basesReducer,
  toppings: toppingReducer,
});

export default appReducer;
