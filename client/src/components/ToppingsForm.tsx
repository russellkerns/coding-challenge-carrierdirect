import React from 'react';
import Topping from '../types/Topping';
interface ToppingsProps {
  toppings: Topping[];
  handleChange: (event: any) => void;
  toppingState: Topping[];
}
const ToppingsForm: React.FC<ToppingsProps> = props => {
  return (
    <form>
      {props.toppings.map((topping: Topping) => (
        <React.Fragment key={topping.key}>
          <input
            type="checkbox"
            name={topping.name}
            value={topping.price}
            onChange={(e: any) => {
              let newProps: Topping[] = [];
              if (!e.target.checked) {
                newProps = props.toppingState.filter(topping => {
                  return topping.name !== e.target.name;
                });
              } else {
                const newTopping = props.toppings.filter((topping: Topping) => {
                  return topping.name === e.target.name;
                })[0];
                newProps = [...props.toppingState, newTopping];
              }

              props.handleChange(newProps);
            }}
          />
          {topping.name}
          <br />
        </React.Fragment>
      ))}
    </form>
  );
};

export default ToppingsForm;
