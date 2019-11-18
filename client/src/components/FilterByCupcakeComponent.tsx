import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/orders';
import FilterDropdown from './FilterDropdown';
import hasKey from '../utils/hasKey';

const FilterByCupcakeComponent: React.FC = () => {
  const [filter, setFilter] = useState('');
  const bases = useSelector((state: any) => state.bases);
  const toppings = useSelector((state: any) => state.toppings);
  const frostings = useSelector((state: any) => state.frostings);
  const dispatch = useDispatch();
  const cupcakeComponents = {
    base: bases,
    topping: toppings,
    frosting: frostings,
  };
  let filterCupcakeState: any;
  if (hasKey(cupcakeComponents, filter)) {
    filterCupcakeState = cupcakeComponents[filter];
  }

  return (
    <>
      <>
        <button
          onClick={() => {
            dispatch(fetchOrders());
            setFilter('');
          }}
        >
          Reset Filters
        </button>
        {!filter && (
          <select
            defaultValue=""
            onChange={(e: any) => setFilter(e.target.value)}
          >
            <option value="" disabled hidden>
              Filter by Cupcake Component
            </option>
            <option value="base" label="bases" />
            <option value="frosting" label="frostings" />
            <option value="topping" label="toppings" />
          </select>
        )}
      </>

      <>
        {filter && (
          <FilterDropdown
            type={`${filter}`}
            filter={filterCupcakeState}
            setFilter={setFilter}
          />
        )}
        {/* <FilterDropdown
          type="frosting"
          filter={frostings}
          setFilter={setFilter}
        />
        <FilterDropdown
          type="topping"
          filter={toppings}
          setFilter={setFilter}
        /> */}
        {/* {filter === 'bases' && (
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
              return (
                <option value={base.key} key={base.key}>
                  {base.name}
                </option>
              );
            })}
          </select>
        )}
        {filter === 'frostings' && (
          <select
            defaultValue=""
            onChange={(e: any) => {
              console.log(e.target.value);
              dispatch(
                filterByCupcakeComponent({
                  name: 'FROSTING',
                  key: e.target.value,
                })
              );
              setFilter('');
            }}
          >
            <option value="" disabled hidden label="Select a frosting" />
            {frostings.map((frosting: Frosting) => {
              return (
                <option value={frosting.key} key={frosting.key}>
                  {frosting.name}
                </option>
              );
            })}
          </select>
        )}
        {filter === 'toppings' && (
          <select
            defaultValue=""
            onChange={(e: any) => {
              console.log(e.target.value);
              dispatch(
                filterByCupcakeComponent({
                  name: 'TOPPING',
                  key: e.target.value,
                })
              );
              setFilter('');
            }}
          >
            <option value="" disabled hidden label="Select a topping" />
            {toppings.map((topping: Topping) => {
              return (
                <option value={topping.key} key={topping.key}>
                  {topping.name}
                </option>
              );
            })}
          </select>
        )} */}
      </>
    </>
  );
};

export default FilterByCupcakeComponent;
