import React from "react";
import { useMediaQuery } from "react-responsive";
import Gallery from "../heroGallery/Gallery";
import {ImgGrid, DivContainerImages, DivButtonGallery} from './GridGalleryStyles';

const GridGallery = ({ response }) => {
  const images = [];
  const pushArray = () => {
    response?.images?.map((i) =>  i.title === "Main" ? null  : images.length < 4 ? images.push(i.url) : null);
  };

  pushArray();

  const isBigScreen = useMediaQuery({
    query: "(min-width: 970px)",
  });

  return (
    <DivContainerImages>

      {isBigScreen && images.map((image, index) => (
        <div className={index === 0 ? "gridBig" : "gridSmall"}>
          <ImgGrid number={index} src={image} alt="carro" key={index} />
        </div>
      ))}
        <Gallery car={response} />
    </DivContainerImages>
  );
};

export default GridGallery;

