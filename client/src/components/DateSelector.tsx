import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns/esm';

interface DateProps {
  startDate: Date;
  setStartDate: (date: Date) => void;
}

const DateSelector = (props: DateProps) => {
  return (
    <DatePicker
      selected={props.startDate}
      onChange={(date: any) => props.setStartDate(date)}
      minDate={addDays(new Date(), 1)}
      maxDate={addDays(new Date(), 15)}
      showDisabledMonthNavigation
    />
  );
};

export default DateSelector;
