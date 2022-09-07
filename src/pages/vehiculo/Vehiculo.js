import React, { useEffect, useContext } from "react";
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
} from "../vehiculo/vehiculoStyles";
import GridGallery from "../../components/gallery/gridGallery/GridGallery";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest";
import DateVehicle from "../../components/dateVehicle/DateVehicle";
import Map from "../../components/maps/maps";
import Policies from "../../components/policies/Policies";
import Swal from "sweetalert2";

const DetailProduct = () => {
  const { state, setBookingList } = useContext(AppContext);
  const navigate = useNavigate();
  const { carId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/${carId}`,
  });

  const handleBooking = () => {
    if (state.isLogin) {
      navigate("/booking");
      axios({
        method: "get",
        url: `http://3.144.167.227:8080/vehicle/booking/${carId}`,
        /* headers: {
          'Authorization': state.user.map(user => user.token).toString(),
        } */
      })
        .then((res) => {
          console.log(res.data);
          setBookingList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
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
        </DivContainerLocation>
      </DetailDiv>

      <GridGallery response={response} />

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
        <DateVehicle />
        <DivReserve>
          <p className="textBooking">
            Agregá tus fechas de reserva para obtener precios exactos
          </p>
          <button className="buttonBooking" onClick={() => handleBooking()}>
            Inicar reserva
          </button>
        </DivReserve>
      </DivCalendar>
      <div>
        <Map car={response} />
      </div>
      <Policies />
    </React.Fragment>
  );
};

export default DetailProduct;
