import React, { useState } from "react";
import { MdMyLocation } from "react-icons/md";
import {
  DivCard,
  DivTitle,
  SpanLocation,
  DivLocation,
  ButtonMore,
  DivImgs,
  DivCalification
} from "./CardStyles";
import { useNavigate } from "react-router-dom";
import { GiCarDoor, GiThermometerCold, GiBrokenHeart } from "react-icons/gi";
import { FaToolbox, FaHeart, FaRegHeart,  } from "react-icons/fa";

const Card = ({ car }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  const favoriteIcon = document.querySelector(".iconFavorite");

  const showBrokenHearth = () => {
    if (favorite) {
      favoriteIcon.addEventListener("mouseover", (e) => {
        return <GiBrokenHeart />
      });
    } else {
      return (
        <FaHeart
          onClick={() => setFavorite(!favorite)}
          className="iconFavorite"
        />
      );
    }
  };

  return (
    <DivCard>
      <DivImgs>
        {favorite ? (
          <FaHeart
            onClick={() => setFavorite(!favorite)}
            className="iconFavorite"
          />
        ) : (
          <FaRegHeart
            onClick={() => setFavorite(!favorite)}
            className="iconFavorite"
          />
        )}
        <img src={car.img} alt={car.title} />
      </DivImgs>
      <div>
        <DivTitle>
          <DivCalification>
            <span className="calificationNumber" >8</span>
            <span className="calificationText">Muy bueno</span>
          </DivCalification>
          <div>
            <h2 className="title">{car.title}</h2>
            <p className="category">{car.category}</p>
          </div>
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
            <p className="textSpan">{car.descripcion.aire}</p>
          </SpanLocation>
        </DivLocation>
        <ButtonMore onClick={() => navigate(`/vehiculo/${car.id}`)}>
          Ver Más
        </ButtonMore>
      </div>
    </DivCard>
  );
};

export default Card;
