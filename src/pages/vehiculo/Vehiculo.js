import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import HeaderCategory from "../../components/headerCategory/HeaderCategory";
import AppContext from "../../context/AppContext";
import {
  DetailDiv,
  DivLocation,
  DivContainerLocation,
  DetailContent,
  DivIcons,
  DivGoLocation,
  DivFeatures,
  DivCalendar,
  DivReserve,
  H1Calendar,
  H1TitleOffer,
  DivCalification,
  DivPrice
} from "../vehiculo/vehiculoStyles";
import GridGallery from "../../components/gallery/gridGallery/GridGallery";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest";
import DateVehicle from "../../components/dateVehicle/DateVehicle";
import Map from "../../components/maps/maps";
import Policies from "../../components/policies/Policies";
import Swal from "sweetalert2";
import StarRating from "../../components/starRating/StarRating";

const DetailProduct = () => {
  const { state, setBookingList } = useContext(AppContext);
  const navigate = useNavigate();
  const { carId } = useParams();
  const [datesBookings, setDatesBookings] = useState([]);
  const [scores, setScores] = useState();
  let datesBooking = [];

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const request = () => {
      axios({
        method: "get",
        url: `http://3.144.167.227:8080/vehicle/booking/${carId}`,
        /* headers: {
          'Authorization': state.user.map(user => user.token).toString(),
        } */
      })
        .then((res) => {
          setBookingList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    request();

    axios({
      method: "get",
      url: `http://3.144.167.227:8080/vehicle/score/${carId}`,
    })
      .then((res) => {
        setScores(res.data);
      })
      .catch((err) => console.log(err));

    const mapBooking = () => {
      state.bookingList?.map((booking) =>
        datesBooking.push({
          start: new Date(booking.initialdate),
          end: new Date(booking.finalDate),
        })
      );
      setDatesBookings(datesBooking);
    };
    mapBooking();
  }, []);

  const [response, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/${carId}`,
  });

  const handleBooking = () => {
    if (state.isLogin) {
      navigate("/booking");
    } else {
      navigate("/login");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes registrarte para hacer una reserva!",
      });
    }
  };

  return (
    <React.Fragment>
      <DetailDiv>
        <HeaderCategory url="/" />
        <DivContainerLocation>
          <DivLocation>
            <DivGoLocation>
              <MdLocationPin />
            </DivGoLocation>
            <h3>{response?.city?.cityName}</h3>
          </DivLocation>
          <DivCalification>
            <div>
              <span className="calificationNumber">{scores % 1 ? parseFloat(scores)?.toFixed(1) : scores}</span>
              <span className="calificationText">
                {scores <= 5 && scores > 4
                  ? "Muy bueno"
                  : scores <= 4 && scores > 3
                  ? "Bueno"
                  : scores <= 3 && scores > 2
                  ? "Regular"
                  : scores <= 2 && scores >= 1
                  ? "Insuficiente"
                  : "Sin calificar"}
              </span>
            </div>
            <StarRating carId={carId} />
          </DivCalification>
        </DivContainerLocation>
      </DetailDiv>

      <GridGallery response={response} />

      <DivPrice>
        <h2>Precio por día: <span>{formatter.format(response?.price)}</span></h2>
      </DivPrice>

      <DetailContent>
        <h1>Maneja Tu {response?.rangeName}</h1>
        <p>{response?.description}</p>
      </DetailContent>
      <H1TitleOffer>¿Qué ofrece este vehiculo?</H1TitleOffer>
      <DivFeatures>
        {response?.characteristics?.map((i, index) => (
          <DivIcons number={index}>
            <img
              className="iconsStyles"
              key={index}
              src={i.icon}
              alt={i.nameCharacteristic}
            />
            <p className="nameIcons">{i.value}</p>
          </DivIcons>
        ))}
      </DivFeatures>
      <H1Calendar>Fechas disponibles</H1Calendar>
      <DivCalendar>
        <DateVehicle datesBookings={datesBookings} />

        <DivReserve>
          <p className="textBooking">
            Agregá tus fechas de reserva para obtener precios exactos
          </p>
          <button className="buttonBooking" onClick={() => handleBooking()}>
            Iniciar reserva
          </button>
        </DivReserve>
      </DivCalendar>
      <div>
        <Map car={response} loading={loading} />
      </div>
      <Policies />
    </React.Fragment>
  );
};

export default DetailProduct;
