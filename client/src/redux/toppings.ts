import axios from 'axios';
import Topping from '../types/Topping';

const SET_TOPPINGS: string = 'SET_TOPPINGS';

export const setToppings = (toppings: Topping[]) => ({
  type: SET_TOPPINGS,
  toppings,
});

export const fetchToppings = () => {
  return async (dispatch: any) => {
    const { data } = await axios.get('http://localhost:4000/cupcakes/toppings');
    dispatch(setToppings(data.toppings));
  };
};

const initialState: Topping[] = [];

const toppingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TOPPINGS:
      return action.toppings;
    default:
      return state;
  }
};

export default toppingReducer;
