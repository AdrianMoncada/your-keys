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
} from "../vehiculo/vehiculoStyles";
import Gallery from "../../components/gallery/Gallery";

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
        <Gallery car={carInfo} />
      {/* --------------------------------------------*/}

      <DetailContent>
        <h1>{carInfo.titledes}</h1>
        <p>{carInfo.descripcionUno}</p>
      </DetailContent>
      <h1>¿Qué ofrece este vehiculo?</h1>
      {carInfo?.characteristics?.map((i, index) => (
        <div>
          <img key={index} src={i.icon} alt={i.name} />
          <p>{i.name}</p>
        </div>
      ))}

      <DatePicker
        inline
        selected={state.startDate}
        startDate={state.startDate}
        endDate={state.endDate}
        monthsShown={2}
        shouldCloseOnSelect={false}
      />
      <div>
      </div>
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
