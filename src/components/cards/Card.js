import React, { useState, useContext } from "react";
import { MdMyLocation } from "react-icons/md";
import {
  DivCard,
  DivTitle,
  SpanLocation,
  DivLocation,
  ButtonMore,
  DivImgs,
  DivCalification,
} from "./CardStyles";
import { useNavigate } from "react-router-dom";
import { GiCarDoor, GiThermometerCold, GiBrokenHeart } from "react-icons/gi";
import { FaToolbox, FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/material.css";
import "tippy.js/themes/light-border.css";
import { animateFill } from "tippy.js";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";

const Card = ({ car }) => {
  const { state, setCarId } = useContext(AppContext);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  const favoriteIcon = document.querySelector(".iconFavorite");

  const showBrokenHearth = () => {
    if (favorite) {
      favoriteIcon.addEventListener("mouseover", (e) => {
        return <GiBrokenHeart />;
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

  tippy("#myLocation", {
    content: "Ubicación",
    placement: "left",
    arrow: true,
    theme: "light-border",
    animation: "perspective",
  });

  tippy("#myDoor", {
    content: "Puertas",
    placement: "left",
    arrow: true,
    theme: "light-border",
    animation: "perspective",
  });

  tippy("#myTransmision", {
    content: "Transmición",
    placement: "left",
    arrow: true,
    theme: "light-border",
    animation: "perspective",
  });

  tippy("#myAir", {
    content: "Aire Acondicionado",
    placement: "left",
    arrow: true,
    theme: "light-border",
    animation: "perspective",
  });

  tippy("#myCalification", {
    content: "Calificación",
    placement: "bottom",
    arrow: true,
    theme: "light-border",
    animation: "perspective",
  });

  

  return (
    <DivCard
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
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
        <img
          src={car.images.find((i) => i.title === "Main").url}
          alt={car?.images[0]?.title}
        />
      </DivImgs>
      <div>
        <DivTitle>
          <DivCalification id="myCalification">
            <span className="calificationNumber">5</span>
            <span className="calificationText">Muy bueno</span>
          </DivCalification>
          <div>
            <h2 className="title">{car.rangeName}</h2>
            <p className="category">{car.category.title}</p>
          </div>
        </DivTitle>
        <DivLocation>
          <SpanLocation id="myLocation">
            <MdMyLocation className="iconLocation" />
            <p className="textSpan">{car.city.cityName}</p>
          </SpanLocation>
          <SpanLocation id="myDoor">
            <GiCarDoor className="iconLocation" />
            {/* <p className="textSpan"> {car.descripcion.door}</p> */}
            <p className="textSpan">
              {
                car?.characteristics.find(
                  (i) => i.nameCharacteristic === "puertas"
                )?.value
              }
            </p>
          </SpanLocation>
          <SpanLocation id="myTransmision">
            <FaToolbox className="iconLocation" />
            <p className="textSpan">
              {
                car?.characteristics.find(
                  (i) => i.nameCharacteristic === "transmición"
                )?.value
              }
            </p>
          </SpanLocation>
          <SpanLocation id="myAir">
            <GiThermometerCold className="iconLocation" />
            <p className="textSpan">
              {
                car?.characteristics.find(
                  (i) => i.nameCharacteristic === "aire"
                )?.value
              }
            </p>
          </SpanLocation>
        </DivLocation>
        <ButtonMore
          onClick={() => {
            navigate(`/vehiculo/${car.idVehicle}`);
            setCarId(car.idVehicle);
          }}
        >
          Ver Más
        </ButtonMore>
      </div>
    </DivCard>
  );
};

export default Card;
