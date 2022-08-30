import React, { useState, useEffect, useContext} from "react";
import List from "../../assets/list.json";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
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
  DivGoLocation,
  DivFeatures,
  DivCalendar,
  DivTitlePolicies,
  DivReserve,
  H1Calendar,
  H1TitleOffer
} from "../vehiculo/vehiculoStyles";
import GridGallery from "../../components/gallery/gridGallery/GridGallery";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest"
import DateVehicle from "../../components/dateVehicle/DateVehicle";
import Map from "../../components/maps/maps";
import credentials from "../../assets/credentials";

const DetailProduct = () => {
  const { carId } = useParams();

  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/${carId}`
  })
  
  return (
    <React.Fragment>
      <DetailDiv>
        <DivContainerCategory>
          <DivName>
            <h3>{response?.category?.title}</h3>
            <h1>{response?.rangeName}</h1>
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
              alt={i.name}
            />
            <p className="nameIcons">{i.name}</p>
          </DivIcons>
        ))}
      </DivFeatures>
      <H1Calendar>Fechas disponibles</H1Calendar>
      <DivCalendar>
      <DateVehicle />
      <DivReserve>
        <p className="textBooking">Agregá tus fechas de reserva para obtener precios exactos</p>
        <button className="buttonBooking">Inicar reserva</button>
      </DivReserve>
        
      </DivCalendar>
      <div>
        <Map />
      </div>
      <DivTitlePolicies>
        <h1>Qué tenés que saber</h1>
      </DivTitlePolicies>
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
