import React from 'react';
import { useSelector } from 'react-redux';
import Order from '../types/Order';
import { Layout } from './Layout';
import SortByDateDropdown from './SortByDateDropdown';
import FilterByCupcakeComponent from './FilterByCupcakeComponent';
import CupcakeOrderCard from './CupcakeOrderCard';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const OrderScreen: React.FC = () => {
  const orders = useSelector((state: any) => state.orders);

  return (
    <Layout>
      {orders ? (
        <>
          <SortByDateDropdown />
          <FilterByCupcakeComponent />
          <StyledDiv>
            {orders.map((order: Order) => (
              <CupcakeOrderCard key={order.id} order={order} />
            ))}
          </StyledDiv>
        </>
      ) : (
        <h1>loading....</h1>
      )}
    </Layout>
  );
};

export default OrderScreen;
