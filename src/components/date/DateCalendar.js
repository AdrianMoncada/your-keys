import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DivDate, DivInput } from "./DateCalendarStyles";
import { MdDateRange } from "react-icons/md";
import AppContext from "../../context/AppContext";


const DateCalendar = ({position='block'}) => {
  const {state, setStartDate, setEndDate} = useContext(AppContext);
  /* const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null); */
  /* console.log(state.startDate, state.endDate); */
  console.log("🚀 ~ file: DateCalendar.js ~ line 15 ~ DateCalendar ~ new Date()", new Date())

  return (
    <DivDate style={{display: `
    ${position}`}}>
      <DivInput>
        <MdDateRange className="icon" />
        <DatePicker
          className="date"
          selected={state.startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={state.startDate}
          endDate={state.endDate}
          minDate={new Date()}
          placeholderText="Fecha Recogida"
        />
      </DivInput>
      <h2 className="titleInfos">Entrega</h2>
      <DivInput>
        <MdDateRange className="icon" />
        <DatePicker
          className="date"
          selected={state.endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={state.startDate}
          endDate={state.endDate}
          minDate={state.startDate}
          placeholderText="Fecha Entrega"
        />
      </DivInput>
    </DivDate>
  );
};

export default DateCalendar;
