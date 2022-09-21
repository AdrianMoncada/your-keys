import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { ButtonGrid, Mobile } from "./GalleryStyles";
import { useMediaQuery } from "react-responsive";
import { Slider } from "infinite-react-carousel";

const Gallery = (response) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [];
  const pushArray = () => {
    response.car.images?.map((i) => images.push(i.url));
  };

  pushArray();

  const isBigScreen = useMediaQuery({
    query: "(min-width: 970px)",
  });

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 970px)",
  });

  if (
    (typeof response.car === "object" && Array.isArray(response.car)) ||
    !response.car
  ) {
    return <h1>Loading</h1>;
  }

  return (
    <React.Fragment>
      {isBigScreen && (
        <div>
          <ButtonGrid type="button" onClick={() => setIsOpen(true)}>
            Ver Más
          </ButtonGrid>
          {isOpen && (
            <Lightbox
              mainSrc={images[index]}
              nextSrc={images[(index + 1) % images.length]}
              prevSrc={images[(index + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setIndex((index + images.length - 1) % images.length)
              }
              onMoveNextRequest={() => setIndex((index + 1) % images.length)}
            />
          )}
        </div>
      )}
      {isMobileScreen && (
        <Mobile>
          <Slider className="slider">
            {response?.car?.images.map((image, idx) => (
              <div key={idx} className="slider_content_item">
                <img src={image.url} alt={idx} />
              </div>
            ))}
          </Slider>
        </Mobile>
      )}
    </React.Fragment>
  );
};

export default Gallery;
