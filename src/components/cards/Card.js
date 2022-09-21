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
import { useEffect } from "react";
import axios from "axios";

const Card = ({ car }) => {
  const { state, setCarId } = useContext(AppContext);
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const [scores, setScores] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://3.144.167.227:8080/vehicle/score/${car?.idVehicle}`,
    })
      .then((res) => {
        setScores(res.data);
      })
      .catch((err) => console.log(err));
  }, [car]);

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
    content: "Climatización",
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
          src={car?.images?.find((i) => i.title === "Main")?.url}
          alt={car?.images[0]?.title}
        />
      </DivImgs>
      <div>
        <DivTitle>
          <DivCalification id="myCalification">
            <span className="calificationNumber">{scores % 1 ? parseFloat(scores)?.toFixed(1) : scores }</span>
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
