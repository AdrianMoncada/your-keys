import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DivDate, DivInput } from "./DateCalendarStyles";
import { MdDateRange } from "react-icons/md";

const DateCalendar = ({position='block'}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <DivDate style={{display: `
    ${position}`}}>
      <DivInput>
        <MdDateRange className="icon" />
        <DatePicker
          className="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Fecha Recogida"
        />
      </DivInput>
      <h2 className="titleInfos">Entrega</h2>
      <DivInput>
        <MdDateRange className="icon" />
        <DatePicker
          className="date"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Fecha Entrega"
        />
      </DivInput>
    </DivDate>
  );
};

export default DateCalendar;
