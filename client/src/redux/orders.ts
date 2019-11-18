import axios from 'axios';
import Order from '../types/Order';

const SET_ORDERS: string = 'SET_ORDERS';
const SET_ORDERS_DESCENDING: string = 'SET_ORDERS_DESCENDING';
const SET_ORDERS_ASCENDING: string = 'SET_ORDERS_ASCENDING';
const FILTER_BY_BASE: string = 'FILTER_BY_BASE';
const FILTER_BY_TOPPING: string = 'FILTER_BY_TOPPING';
const FILTER_BY_FROSTING: string = 'FILTER_BY_FROSTING';

interface FilterObject {
  name: string;
  key: string;
}
export const setOrders = (orders: Order[]) => ({
  type: SET_ORDERS,
  orders,
});
export const setOrdersDescending = () => ({
  type: SET_ORDERS_DESCENDING,
});

export const setOrdersAscending = () => ({
  type: SET_ORDERS_ASCENDING,
});

export const filterByCupcakeComponent = (
  filter: FilterObject,
  orders: any
) => ({
  type: `FILTER_BY_${filter.name}`,
  filter: filter.key,
  orders,
});

export const fetchFilteredOrders = (filter: FilterObject) => {
  return async (dispatch: any) => {
    const { data } = await axios.get('http://localhost:4000/cupcakes/orders');
    dispatch(filterByCupcakeComponent(filter, data.orders));
  };
};

export const fetchOrders = (sort?: string) => {
  return async (dispatch: any) => {
    const { data } = await axios.get('http://localhost:4000/cupcakes/orders');
    if (sort === 'ascending') {
      dispatch(setOrdersAscending());
    } else if (sort === 'descending') {
      dispatch(setOrdersDescending());
    } else {
      dispatch(setOrders(data.orders));
    }
  };
};

export const createOrder = (order: any) => {
  return async (dispatch: any) => {
    await axios.post('http://localhost:4000/cupcakes/orders', { order: order });
    dispatch(fetchOrders());
  };
};

const initialState: Order[] = [];

export default function orderReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ORDERS:
      return action.orders.sort((a: Order, b: Order) => {
        const dateA: any = new Date(a.delivery_date);
        const dateB: any = new Date(b.delivery_date);
        return dateA - dateB;
      });
    case SET_ORDERS_DESCENDING:
      const newStateDescending = [...state];
      return newStateDescending.sort((a: Order, b: Order) => {
        const dateA: any = new Date(a.delivery_date);
        const dateB: any = new Date(b.delivery_date);
        return dateA - dateB;
      });
    case SET_ORDERS_ASCENDING:
      const newStateAscending = [...state];
      return newStateAscending.sort((a: Order, b: Order) => {
        const dateA: any = new Date(a.delivery_date);
        const dateB: any = new Date(b.delivery_date);
        return dateB - dateA;
      });
    case FILTER_BY_BASE:
      return action.orders.filter(
        (order: Order) => order.cupcakes[0].base.key === action.filter
      );
    case FILTER_BY_FROSTING:
      return action.orders.filter(
        (order: Order) => order.cupcakes[0].frosting.key === action.filter
      );
    case FILTER_BY_TOPPING:
      return action.orders.filter((order: Order) =>
        order.cupcakes[0].toppings.some((topping: any) => {
          return topping.key === action.filter;
        })
      );
    default:
      return state;
  }
}
