import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/orders';
import Select from './Select';

const SortByDateDropdown: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Select
      defaultValue=""
      onChange={(e: any) => dispatch(fetchOrders(e.target.value))}
    >
      <option value="" disabled hidden>
        Sort by:
      </option>
      <option value="ascending">Date Ascending</option>
      <option value="descending">Date Descending</option>
    </Select>
  );
};

export default SortByDateDropdown;
