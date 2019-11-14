import axios from 'axios';
import Frosting from '../types/Frosting';

const SET_FROSTINGS: string = 'SET_FROSTINGS';

export const setFrostings = (frostings: Frosting[]) => ({
  type: SET_FROSTINGS,
  frostings,
});

export const fetchFrostings = () => {
  return async (dispatch: any) => {
    const { data } = await axios.get(
      'http://localhost:4000/cupcakes/frostings'
    );
    console.log(data);
    dispatch(setFrostings(data.frostings));
  };
};

const initialState: Frosting[] = [];

const frostingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FROSTINGS:
      return action.frostings;
    default:
      return state;
  }
};

export default frostingReducer;
