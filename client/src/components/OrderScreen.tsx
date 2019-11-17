import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/orders';
import Order from '../types/Order';

const OrderScreen: React.FC = () => {
  const orders = useSelector((state: any) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, orders);

  return (
    <>
      {orders
        ? orders.map((order: Order) => (
            <h1 key={order.id}>{order.cupcakes[0].base}</h1>
          ))
        : null}
    </>
  );
};

export default OrderScreen;
