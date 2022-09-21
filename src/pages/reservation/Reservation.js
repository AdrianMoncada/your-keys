import React, { useContext, useState } from "react";
/* import axios from "../../apis/axiosRequest"; */
import AppContext from "../../context/AppContext";
import useRequest from "../../hooks/useRequest";
import axios from "axios";
import Card from "../../components/cards/Card";
import {
  TitleBoking,
  DivContainerAll,
  DivContainerCards,
  DivCard,
} from "./ReservationStyles";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import NotFound from "../../assets/NotFound";
import styled from "styled-components";

const DivDate = styled.div`
  .react-datepicker {
    @media screen and (min-width: 610px) and (max-width: 1095px) {
      margin-left: 10%;
    }
  }
  .react-datepicker__month-container {
    width: 100%;
    @media screen and (min-width: 610px) and (max-width: 1095px) {
      width: 100%;
    }
    @media screen and (min-width: 1095px) {
      width: 50%;
    }
  }
`;

const Reservation = () => {
  const { state } = useContext(AppContext);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.144.167.227:8080/booking/user/${parseInt(
        state.user.map((i) => i.idUser)
      )}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.map((user) => user.token).toString(),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
      .then((res) => {
        setBooking(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DivContainerAll>
      <div style={{ marginTop: "-100px" }}></div>
      <DivContainerCards>
        <TitleBoking>Mis Reservas</TitleBoking>
        {booking?.length === 0 ? (
          <NotFound text="No se encontraron reservas" />
        ) : (
          booking?.map((car) => (
            <DivCard>
              <div className="responsive-card">
                <Card car={car.vehicle} />
              </div>
              <div>
                <h4 className="titleFecha">Fecha de reserva</h4>
                <DivDate>
                  <DatePicker
                    selected={new Date(car.initialdate)}
                    startDate={new Date(car.initialdate)}
                    endDate={new Date(car.finalDate)}
                    monthsShown={2}
                    selectsRange
                    minDate={new Date()}
                    inline
                    readOnly
                  />
                </DivDate>
              </div>
            </DivCard>
          ))
        )}
        {}
      </DivContainerCards>
    </DivContainerAll>
  );
};

export default Reservation;
