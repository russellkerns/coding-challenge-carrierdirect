import { combineReducers } from 'redux';
import frostingsReducer from './frostings';

const appReducer = combineReducers({
  frostings: frostingsReducer,
});

export default appReducer;
