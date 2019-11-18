import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../redux/orders';
import FilterDropdown from './FilterDropdown';
import CupcakeButton from './CupcakeButton';
import hasKey from '../utils/hasKey';
import Select from './Select';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

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
      <StyledDiv>
        <Select
          defaultValue=""
          onChange={(e: any) => setFilter(e.target.value)}
        >
          <option value="" disabled hidden>
            Filter by Cupcake Component
          </option>
          <option value="base" label="Bases" />
          <option value="frosting" label="Frostings" />
          <option value="topping" label="Toppings" />
        </Select>
        {filter && (
          <FilterDropdown
            type={`${filter}`}
            filter={filterCupcakeState}
            setFilter={setFilter}
          />
        )}
      </StyledDiv>

      <>
        <div style={{ marginBottom: '1rem' }}>
          <CupcakeButton
            clickHandler={() => {
              dispatch(fetchOrders());
              setFilter('');
            }}
            text="Reset Filters"
          />
        </div>
      </>
    </>
  );
};

export default FilterByCupcakeComponent;
