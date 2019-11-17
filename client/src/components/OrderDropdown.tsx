import React from 'react';
import Topping from '../types/Topping';
import Base from '../types/Base';
import Frosting from '../types/Frosting';
import priceConverter from '../utils/priceConverter';

interface OrderDropdownProps {
  type: string;
  bases?: Base[];
  frostings?: Frosting[];
  handleChange: (event: any) => void;
}

const OrderDropdown: React.FC<OrderDropdownProps> = (
  props: OrderDropdownProps
) => {
  if (props.type === 'bases') {
    return (
      <select
        defaultValue=""
        style={{ width: '19rem' }}
        onChange={(e: any) => {
          const newBase = props.bases!!.filter((base: Base) => {
            return base.key === e.target.value;
          });
          props.handleChange!!(newBase[0]);
        }}
      >
        <option value="" disabled hidden>
          Select a base
        </option>
        {props.bases!!.map((base: Base) => (
          <option value={base.key} key={base.key}>{`${
            base.name
          } ${priceConverter(base.price)}`}</option>
        ))}
      </select>
    );
  } else if (props.type === 'frostings') {
    return (
      <select
        style={{ width: '19rem' }}
        defaultValue=""
        onChange={(e: any) => {
          const newFrosting = props.frostings!!.filter((frosting: Frosting) => {
            return frosting.key === e.target.value;
          });
          props.handleChange!!(newFrosting[0]);
        }}
      >
        <option value="" disabled hidden>
          Select a Frosting
        </option>
        {props.frostings!!.map((frosting: Frosting) => (
          <option value={frosting.key} key={frosting.key}>
            {`${frosting.name} ${priceConverter(frosting.price)}`}
          </option>
        ))}
      </select>
    );
  }
  return null;
};

export default OrderDropdown;
