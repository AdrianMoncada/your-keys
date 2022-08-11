import React from "react";
import {MdMyLocation} from "react-icons/md";
import {DivCard, DivTitle, SpanLocation, DivLocation, ButtonMore} from './CardStyles';

const Card = ({ car }) => {
  return (
    <DivCard>
      <DivTitle>
        <h2 className="title">{car.title}</h2>
        <p className="category" >{car.category}</p>
        <ButtonMore>Ver Más</ButtonMore>
      </DivTitle>
      <DivLocation>
        <SpanLocation>
          <MdMyLocation className="iconLocation" /> 
          {car.location}
        </SpanLocation>
        <p className="description">{car.descripcion}</p>
      </DivLocation>
      <img src={car.img} alt={car.title} />
    </DivCard>
  );
};

export default Card;
