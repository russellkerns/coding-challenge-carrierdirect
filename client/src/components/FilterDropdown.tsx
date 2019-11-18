import React from 'react';
import Base from '../types/Base';
import Topping from '../types/Topping';
import Frosting from '../types/Frosting';
import { useDispatch } from 'react-redux';
import { filterByCupcakeComponent } from '../redux/orders';
import Select from './Select';

interface FilterProps {
  type: string;
  filter: Base[] | Topping[] | Frosting[];
  setFilter: (arg: string) => void;
}
type Element = Base | Topping | Frosting;

const FilterDropdown: React.FC<FilterProps> = (props: FilterProps) => {
  const dispatch = useDispatch();
  return (
    <Select
      defaultValue=""
      onChange={(e: any) => {
        console.log(e.target.value);
        dispatch(
          filterByCupcakeComponent({
            name: `${props.type.toUpperCase()}`,
            key: e.target.value,
          })
        );
        props.setFilter('');
      }}
    >
      {' '}
      <option value="" disabled hidden label={`Select a ${props.type}`} />
      {props.filter.map((element: Element) => {
        return (
          <option value={element.key} key={element.key}>
            {element.name}
          </option>
        );
      })}
    </Select>
  );
};

export default FilterDropdown;
