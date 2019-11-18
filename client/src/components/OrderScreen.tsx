import React from 'react';
import { useSelector } from 'react-redux';
import Order from '../types/Order';
import { Layout } from './Layout';
import SortByDateDropdown from './SortByDateDropdown';
import FilterByCupcakeComponent from './FilterByCupcakeComponent';
import CupcakeOrderCard from './CupcakeOrderCard';

const OrderScreen: React.FC = () => {
  const orders = useSelector((state: any) => state.orders);

  return (
    <Layout>
      {orders ? (
        <>
          <SortByDateDropdown />
          <FilterByCupcakeComponent />
          {orders.map((order: Order) => (
            <CupcakeOrderCard key={order.id} order={order} />
          ))}
        </>
      ) : (
        <h1>loading....</h1>
      )}
    </Layout>
  );
};

export default OrderScreen;
