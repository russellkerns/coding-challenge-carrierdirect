import axios from 'axios';
import Order from '../types/Order';

const SET_ORDERS: string = 'SET_ORDERS';

export const setOrders = (orders: Order[]) => ({
  type: SET_ORDERS,
  orders,
});

export const fetchOrders = () => {
  return async (dispatch: any) => {
    const { data } = await axios.get('http://localhost:4000/cupcakes/orders');
    dispatch(setOrders(data.orders));
  };
};

export const createOrder = (order: any) => {
  return async () => {
    await axios.post('http://localhost:4000/cupcakes/orders', { order: order });
  };
};

const initialState: Order[] = [];

export default function orderReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders;

    default:
      return state;
  }
}
