import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderDropdown from './OrderDropdown';
import ToppingsForm from './ToppingsForm';
import Topping from '../types/Topping';
import Base from '../types/Base';
import Frosting from '../types/Frosting';
import priceConverter from '../utils/priceConverter';
import DateSelector from './DateSelector';
import { addDays } from 'date-fns/esm';
import { createOrder } from '../redux/orders';
import { withRouter, RouteComponentProps } from 'react-router-dom';

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
          <ToppingsForm
            toppings={toppings}
            handleChange={setTopping}
            toppingState={topping}
          />
          <div>
            {!topping.length || !base.key || !frosting.key || (
              <>
                <h1>{`Subtotal: ${priceConverter(subTotal)}`}</h1>
                <h1>Delivery fee: $1.50</h1>
                <h1>{`Sales tax (8.75%): ${priceConverter(salesTax)}`}</h1>
                <h1>{`Total: ${priceConverter(total)}`}</h1>
                <button type="submit" onClick={handleSubmit}>
                  Confirm your order
                </button>
                <DateSelector
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <h2>loading.....</h2>
      )}
    </>
  );
};

export default withRouter(OrderForm);
