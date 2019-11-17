import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Base from '../types/Base';
import Topping from '../types/Topping';
import Frosting from '../types/Frosting';
import { filterByCupcakeComponent } from '../redux/orders';

const FilterByCupcakeComponent: React.FC = () => {
  const [filter, setFilter] = useState('');
  const bases = useSelector((state: any) => state.bases);
  const toppings = useSelector((state: any) => state.toppings);
  const frostings = useSelector((state: any) => state.frostings);
  const dispatch = useDispatch();
  return (
    <>
      <>
        {!filter && (
          <select
            defaultValue=""
            onChange={(e: any) => setFilter(e.target.value)}
          >
            <option value="" disabled hidden>
              Filter by Cupcake Component
            </option>
            <option value="bases" label="bases" />
            <option value="frostings" label="frostings" />
            <option value="toppings" label="toppings" />
          </select>
        )}
      </>
      <>
        {filter === 'bases' && (
          <select
            defaultValue=""
            onChange={(e: any) => {
              console.log(e.target.value);
              dispatch(
                filterByCupcakeComponent({
                  name: 'BASE',
                  key: e.target.value,
                })
              );
              setFilter('');
            }}
          >
            <option value="" disabled hidden label="Select a base" />
            {bases.map((base: Base) => {
              return <option value={base.key}>{base.name}</option>;
            })}
          </select>
        )}
        {filter === 'frostings' && (
          <select defaultValue="" onChange={(e: any) => setFilter('')}>
            <option value="" disabled hidden label="Select a frosting" />
            {frostings.map((frosting: Frosting) => {
              return <option value={frosting.key}>{frosting.name}</option>;
            })}
          </select>
        )}
        {filter === 'toppings' && (
          <select defaultValue="" onChange={(e: any) => setFilter('')}>
            <option value="" disabled hidden label="Select a topping" />
            {toppings.map((topping: Topping) => {
              return <option value={topping.key}>{topping.name}</option>;
            })}
          </select>
        )}
      </>
    </>
  );
};

export default FilterByCupcakeComponent;
