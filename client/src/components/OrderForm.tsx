import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderDropdown from './OrderDropdown';
import ToppingsForm from './ToppingsForm';
import OrderCost from './OrderCost';
import DateSelector from './DateSelector';
import CupcakeButton from './CupcakeButton';
import { addDays } from 'date-fns/esm';
import { createOrder } from '../redux/orders';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Topping from '../types/Topping';
import Base from '../types/Base';
import Frosting from '../types/Frosting';
import styled from 'styled-components';

const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DatePickerDiv = styled.div`
  margin-bottom: 1rem;
`;

const OrderForm: React.FC<RouteComponentProps> = props => {
  const toppings = useSelector((state: any) => state.toppings);
  const frostings = useSelector((state: any) => state.frostings);
  const bases: any = useSelector((state: any) => state.bases);
  const initialState = {
    key: '',
    name: '',
    price: 0,
    ingredients: [],
  };
  const [base, setBase] = useState<Base>(initialState);
  const [frosting, setFrosting] = useState<Frosting>(initialState);
  const [topping, setTopping] = useState<Topping[]>([]);
  const [startDate, setStartDate] = useState(addDays(new Date(), 1));
  const dispatch = useDispatch();

  const subTotal: number =
    frosting.price +
    base.price +
    topping.reduce((accum, val) => {
      return (accum += val.price);
    }, 0);

  const total: number = (subTotal + 150) * 1.0875;
  const salesTax: number = (subTotal + 150) * 0.0875;
  const priceObject = {
    total,
    salesTax,
    subTotal,
  };

  const handleSubmit = () => {
    const submit = {
      cupcakes: [
        {
          base,
          frosting,
          toppings: topping,
        },
      ],
      delivery_date: startDate,
    };
    dispatch(createOrder(submit));

    props.history.push('/order/history');
  };

  return (
    <>
      {bases ? (
        <div style={{ width: '20rem' }}>
          <OrderDropdown type="bases" bases={bases} handleChange={setBase} />
          <OrderDropdown
            type="frostings"
            frostings={frostings}
            handleChange={setFrosting}
          />
          {frosting.key &&
            (base.key && (
              <ToppingsForm
                toppings={toppings}
                handleChange={setTopping}
                toppingState={topping}
              />
            ))}
          <CheckoutDiv>
            {!topping.length || (
              <>
                <OrderCost priceObject={priceObject} />
                <h4 style={{ margin: `0 0 0.5rem 0` }}>
                  Click to change shipping date
                </h4>
                <DatePickerDiv>
                  <DateSelector
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
                </DatePickerDiv>
                <CupcakeButton
                  text="Confirm your order"
                  clickHandler={handleSubmit}
                />
              </>
            )}
          </CheckoutDiv>
        </div>
      ) : (
        <h2>loading.....</h2>
      )}
    </>
  );
};

export default withRouter(OrderForm);
