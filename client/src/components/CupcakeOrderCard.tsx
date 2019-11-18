import React from 'react';
import styled from 'styled-components';
import Order from '../types/Order';
import Topping from '../types/Topping';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
  max-width: 10rem;
  margin: auto;
  text-align: center
`;

interface CardProps {
  order: Order;
}
const CupcakeOrderCard: React.FC<CardProps> = (props: CardProps) => {
  const { toppings, frosting, base } = props.order.cupcakes[0];
  const { delivery_date } = props.order;

  return (
    <Card>
      <h4>{delivery_date}</h4>
      <h4>{frosting.name}</h4>
      <h4>{base.name}</h4>
      {toppings.map((topping: Topping) => (
        <h4 key={topping.key}>{topping.name}</h4>
      ))}
    </Card>
  );
};

export default CupcakeOrderCard;
