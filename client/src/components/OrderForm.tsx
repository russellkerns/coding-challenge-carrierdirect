import React from 'react';
import { useSelector } from 'react-redux';
import OrderDropdown from './OrderDropdown';

const OrderForm: React.FC = props => {
  const toppings = useSelector((state: any) => state.toppings);
  const frostings = useSelector((state: any) => state.frostings);
  const bases: any = useSelector((state: any) => state.bases);

  return (
    <>
      {bases ? (
        <div style={{ width: '20rem' }}>
          <OrderDropdown type="bases" bases={bases} />
          <OrderDropdown type="frostings" frostings={frostings} />
        </div>
      ) : null}
    </>
  );
};

export default OrderForm;
