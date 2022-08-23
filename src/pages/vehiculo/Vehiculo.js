import React, { useState, useEffect, useContext } from "react";
import List from "../../assets/list.json";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import DatePicker from "react-datepicker";
import AppContext from "../../context/AppContext";
import {
  DetailDiv,
  DivName,
  DivLocation,
  DivContainerCategory,
  DivContainerLocation,
  DetailContent,
  DivPolicies,
  DivPoliciesContainer,
  DivIcons,
  DivSpanIcon,
  
} from "../vehiculo/vehiculoStyles";
import Gallery from "../../components/gallery/heroGallery/Gallery";
import GridGallery from "../../components/gallery/gridGallery/GridGallery";

const DetailProduct = () => {
  const { state } = useContext(AppContext);
  const { carId } = useParams();
  const [carInfo, setCarInfo] = useState({});
  useEffect(() => {
    const findCar = List.find((x) => x.id === carId);
    setCarInfo(findCar);
  }, [carId]);

  if (carInfo === null) {
    return <h1>Cargando</h1>;
  }

  return (
    <React.Fragment>
      <DetailDiv>
        <DivContainerCategory>
          <DivName>
            <h3>{carInfo.category}</h3>
            <h1>{carInfo.range_name}</h1>
          </DivName>
          <Link to="/">
            <DivSpanIcon>
            <span>
              <IoIosArrowBack />{" "}
            </span>
            </DivSpanIcon>
          </Link>
        </DivContainerCategory>
        <DivContainerLocation>
          <DivLocation>
            <h3>{carInfo.location}</h3>
          </DivLocation>
        </DivContainerLocation>
      </DetailDiv>
      {/* --------------------------------------------*/}
      <GridGallery carInfo={carInfo} />
      {/* --------------------------------------------*/}

      <DetailContent>
        <h1>Maneja Tu {carInfo.range_name}</h1>
        <p>{carInfo.description}</p>
      </DetailContent>
      <h1>¿Qué ofrece este vehiculo?</h1>
      {carInfo?.characteristics?.map((i, index) => (
        <DivIcons>
          <img className="iconsStyles" key={index} src={i.icon} alt={i.name} />
          <p className="nameIcons">{i.name}</p>
        </DivIcons>
      ))}

      <DatePicker
        inline
        selected={state.startDate}
        startDate={state.startDate}
        endDate={state.endDate}
        monthsShown={2}
        shouldCloseOnSelect={false}
      />
      <div></div>
      <DivPolicies>
        <DivPoliciesContainer>
          <h1>Normas del Vehiculo</h1>
          <p>Entrega del auto 10:00.</p>
          <p>No se permite fumar dentro del vehiculo.</p>
        </DivPoliciesContainer>
        <DivPoliciesContainer>
          <h1>Salud y seguridad</h1>
          <p>
            Se aplican las pautas de distanciamiento social y otras normas
            relacionadas con el coronavirus.
          </p>
          <p>GPS.</p>
          <p>Deposito de seguridad.</p>
        </DivPoliciesContainer>
        <DivPoliciesContainer borderLine>
          <h1>Política de cancelación</h1>
          <p>
            Agrega la fecha de tu viaje para obtener los detalles de la
            cancelación del servicio.
          </p>
        </DivPoliciesContainer>
      </DivPolicies>
    </React.Fragment>
  );
};

export default DetailProduct;
