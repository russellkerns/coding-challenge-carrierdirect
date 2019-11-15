import React from 'react';
import Topping from '../types/Topping';
import Base from '../types/Base';
import Frosting from '../types/Frosting';

interface OrderDropdownProps {
  type: string;
  bases?: Base[];
  frostings?: Frosting[];
}

const OrderDropdown: React.FC<OrderDropdownProps> = (
  props: OrderDropdownProps
) => {
  if (props.type === 'bases') {
    return (
      <select style={{ width: '19rem' }}>
        <option value="" selected disabled hidden>
          Select a base
        </option>
        {props.bases!!.map((base: Base) => (
          <option value={base.name} key={base.name}>
            {base.name}
          </option>
        ))}
      </select>
    );
  } else if (props.type === 'frostings') {
    return (
      <select style={{ width: '19rem' }}>
        <option value="" selected disabled hidden>
          Select a Frosting
        </option>
        {props.frostings!!.map((frosting: Frosting) => (
          <option value={frosting.name} key={frosting.name}>
            {frosting.name}
          </option>
        ))}
      </select>
    );
  }
  return null;
};

export default OrderDropdown;
