import axios from 'axios';
import base from '../types/Base';

const SET_BASES: string = 'SET_BASES';

export const setBases = (bases: base[]) => ({
  type: SET_BASES,
  bases,
});

export const fetchBases = () => {
  return async (dispatch: any) => {
    const { data } = await axios.get('http://localhost:4000/cupcakes/bases');
    dispatch(setBases(data.bases));
  };
};

const initialState: base[] = [];

const baseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BASES:
      return action.bases;
    default:
      return state;
  }
};

export default baseReducer;
