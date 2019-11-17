import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/orders';

const SortByDateDropdown: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <select
      defaultValue=""
      onChange={(e: any) => dispatch(fetchOrders(e.target.value))}
    >
      <option value="" disabled hidden>
        Sort by:
      </option>
      <option value="ascending">Date Ascending</option>
      <option value="descending">Date Descending</option>
    </select>
  );
};

export default SortByDateDropdown;
