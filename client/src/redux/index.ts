import { combineReducers } from 'redux';
import frostingsReducer from './frostings';
import basesReducer from './bases';

const appReducer = combineReducers({
  frostings: frostingsReducer,
  bases: basesReducer,
});

export default appReducer;
