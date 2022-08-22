import React, { useState, useEffect } from "react";
import List from "../../assets/list.json";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { GiCarDoor, GiThermometerCold } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa";
/*import { Grid } from '@mui/material-ui/core';*/

import {
  DetailDiv,
  DivName,
  DivLocation,
  DivContainerCategory,
  DivContainerLocation,
  DetailContent,
  DivPolicies,
  DivPoliciesContainer
} from "../vehiculo/vehiculoStyles";
import { SpanLocation } from "../../components/cards/CardStyles";

const DetailProduct = () => {
  const { carId } = useParams();
  console.log(carId);
  const [carInfo, setCarInfo] = useState({});
  useEffect(() => {
    const findCar = List.find((x) => x.id === carId);
    console.log(findCar);
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
            <h1>{carInfo.title}</h1>
          </DivName>
          <Link to="/">
            <span>
              <IoIosArrowBack />{" "}
            </span>
          </Link>
        </DivContainerCategory>
        <DivContainerLocation>
          <DivLocation>
            <h3>{carInfo.location}</h3>
          </DivLocation>
        </DivContainerLocation>
      </DetailDiv>
      {/* --------------------------------------------*/}


      {/* --------------------------------------------*/}
      <DetailContent>
        <h1>{carInfo.titledes}</h1>
        <p>{carInfo.descripcionUno}</p>
      </DetailContent>
      <h1>¿Qué ofrece este vehiculo?</h1>
      <SpanLocation>
        <GiCarDoor className="iconLocation" />
        <p className="textSpan"> {carInfo?.descripcion?.door}</p>
      </SpanLocation>
      <SpanLocation>
        <FaToolbox className="iconLocation" />
        <p className="textSpan">{carInfo?.descripcion?.gear}</p>
      </SpanLocation>
      <SpanLocation>
        <GiThermometerCold className="iconLocation" />
        <p className="textSpan">{carInfo?.descripcion?.air}</p>
      </SpanLocation>
      <DivPolicies>
      <DivPoliciesContainer>  
        <h1>Normas del Vehiculo</h1>
        <p>{carInfo?.rules?.delivery}</p>
        <p>{carInfo?.rules?.forbidden}</p>
      </DivPoliciesContainer>   
      <DivPoliciesContainer>  
        <h1>Salud y seguridad</h1>
        <p>{carInfo?.security?.one}</p>
        <p>{carInfo?.security?.two}</p>
        <p>{carInfo?.security?.three}</p>
        </DivPoliciesContainer>   
      <DivPoliciesContainer borderLine>  
        <h1>Política de cancelación</h1>
        <p>{carInfo.cancellation}</p>
        </DivPoliciesContainer>  
      </DivPolicies>
    </React.Fragment>
  );
};

export default DetailProduct;
