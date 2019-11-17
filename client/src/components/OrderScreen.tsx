import React from 'react';
import { useSelector } from 'react-redux';
import Order from '../types/Order';
import { Layout } from './Layout';
import SortByDateDropdown from './SortByDateDropdown';
import FilterByCupcakeComponent from './FilterByCupcakeComponent';

const OrderScreen: React.FC = () => {
  const orders = useSelector((state: any) => state.orders);

  return (
    <Layout>
      {orders ? (
        <>
          <SortByDateDropdown />
          <FilterByCupcakeComponent />
          {orders.map((order: Order) => (
            <h1 key={order.id}>{order.delivery_date}</h1>
          ))}
        </>
      ) : (
        <h1>loading....</h1>
      )}
    </Layout>
  );
};

export default OrderScreen;
