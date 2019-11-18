import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns/esm';
import styled from 'styled-components';

interface DateProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
}

interface InputProps {
  value?: any;
  onClick?: any;
}

const DateButton = styled.button`
  background-color: ${props => props.theme.colors.pink};
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  width: 8rem;
  height: 3rem;
  font-size: 1rem
  color: ${props => props.theme.colors.yellow};
`;
const CustomInput: React.FC<InputProps> = ({ value, onClick }) => (
  <DateButton onClick={onClick}>{value}</DateButton>
);
const DateSelector = (props: DateProps) => {
  return (
    <DatePicker
      selected={props.startDate}
      onChange={(date: any) => props.setStartDate(date)}
      minDate={addDays(new Date(), 1)}
      maxDate={addDays(new Date(), 15)}
      customInput={<CustomInput />}
      showDisabledMonthNavigation
    />
  );
};

export default DateSelector;
