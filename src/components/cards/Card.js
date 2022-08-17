import React, {useState} from "react";
import { MdMyLocation } from "react-icons/md";
import {
  DivCard,
  DivTitle,
  SpanLocation,
  DivLocation,
  ButtonMore,
} from "./CardStyles";
import { useNavigate } from "react-router-dom";
import {GiCarDoor, GiThermometerCold} from 'react-icons/gi';
import {FaToolbox, FaHeart, FaRegHeart, GiBrokenHeart} from 'react-icons/fa';


const Card = ({ car }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  return (
    <DivCard>
      <div>
        <FaHeart />
        <img src={car.img} alt={car.title} />
      </div>
      <div>
        <DivTitle>
          <h2 className="title">{car.title}</h2>
          <p className="category">{car.category}</p>
        </DivTitle>
        <DivLocation>
          <SpanLocation>
            <MdMyLocation className="iconLocation" />
            <p className="textSpan">{car.location}</p>
          </SpanLocation>
          <SpanLocation>
            <GiCarDoor className="iconLocation" />
            <p className="textSpan"> {car.descripcion.door}</p>
          </SpanLocation>
          <SpanLocation>
            <FaToolbox className="iconLocation" />
            <p className="textSpan">{car.descripcion.box}</p>
          </SpanLocation>
          <SpanLocation>
            <GiThermometerCold className="iconLocation" />
            <p className="textSpan">aire {car.descripcion.aire}</p>
          </SpanLocation>
        </DivLocation>
        <ButtonMore onClick={() => navigate(`/vehiculo/${car.title}`)}>
            Ver Más
          </ButtonMore>
      </div>
    </DivCard>
  );
};

export default Card;
