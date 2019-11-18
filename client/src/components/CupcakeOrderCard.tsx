import React from 'react';
import styled from 'styled-components';
import Order from '../types/Order';
import Topping from '../types/Topping';
import './orderCard.scss';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
  max-width: 10rem;
  margin: auto;
  text-align: center
  border: solid black 2px
`;

interface CardProps {
  order: Order;
}
const CupcakeOrderCard: React.FC<CardProps> = (props: CardProps) => {
  const { toppings, frosting, base } = props.order.cupcakes[0];
  const { delivery_date } = props.order;
  const test = new Date(delivery_date);
  const deliveryDate = `${test.getMonth() +
    1}/${test.getDate()}/${test.getFullYear()} ${test.getHours()}:${test.getMinutes()}`;

  return (
    <div className="card">
      <div className="card-list">
        <div className="card-item">
          <div className="card-label">Delivery Date:</div>
          <div className="card-value">{deliveryDate}</div>
        </div>
        <div className="card-item">
          <div className="card-label">Cupcake Base:</div>
          <div className="card-value">{base.name}</div>
        </div>
        <div className="card-item">
          <div className="card-label">Frosting:</div>
          <div className="card-value">{frosting.name}</div>
        </div>
        <div className="card-item">
          <div className="card-label">Toppings:</div>
          <div className="card-value">{toppings[0].name}</div>
          {toppings.map((topping: Topping, idx: number) => {
            if (!idx) {
              return null;
            } else if (idx === 1) {
              return (
                <React.Fragment key={topping.key}>
                  <div className="card-item">
                    <div className="card-value" style={{ marginTop: '1rem' }}>
                      {topping.name}
                    </div>
                  </div>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={topping.key}>
                  <div className="card-item">
                    <div className="card-value" style={{ margin: 0 }}>
                      {topping.name}
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default CupcakeOrderCard;
