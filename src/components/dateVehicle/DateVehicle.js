import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const DivDate = styled.div`
  .date_picker.full-width input {
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }

  .react-datepicker__month-container {
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 970px) {
      width:100%;
    }
    @media screen and (min-width: 970px) {
      width:50%;
    }
  }

  .dates {
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
`;

const DatePickerWrapper = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  width: 800px;
  height: 800px;
  border: 1px solid red;
`;

const Calendar = styled.div`
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16);
  overflow: hidden;
`;

const DateVehicle = ({ datesBookings }) => {
  const { state } = useContext(AppContext);
  return (
    <DivDate>
      <DatePicker
        inline
        /* selected={state.startDate}
        startDate={state.startDate}
        endDate={state.endDate} */
        monthsShown={2}
        minDate={new Date()}
        /* wrapperClassName='date_picker full-width'
        shouldCloseOnSelect={false} */
        excludeDateIntervals={datesBookings}
        readOnly
      />
      {/* <DatePickerWrapper
        calendarContainer={Calendar}
        inline
        startDate={state.startDate}
        endDate={state.endDate} 
        monthsShown={2}
        wrapperClassName='date_picker full-width' 
        className="dates"
        excludeDateIntervals={datesBookings}
      /> */}
    </DivDate>
  );
};

export default DateVehicle;
