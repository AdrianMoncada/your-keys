import React, { useState } from "react";
import Gallery from "../heroGallery/Gallery";
import {ImgGrid, DivContainerImages} from './GridGalleryStyles';

const GridGallery = ({ carInfo }) => {
  const [number, setNumber] = useState(0);
  const images = [];
  const pushArray = () => {
    carInfo?.img?.map((i) =>  i.title === "Main" ? null  : images.length < 4 ? images.push(i.url) : null);
  };

  pushArray();

  return (
    <DivContainerImages>
      {images.map((image, index) => (
        <div className={index === 0 ? "gridBig" : "gridSmall"}>
          <ImgGrid number={index} src={image} alt="carro" key={index} />
        </div>
      ))}
      <Gallery car={carInfo} />
    </DivContainerImages>
  );
};

export default GridGallery;
