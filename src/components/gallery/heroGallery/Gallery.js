import React, { useState } from "react";
/* import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'; */

const Gallery = (car) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [];
  const pushArray = () => {
    car.car.img?.map((i) => images.push(i.url));
  };

  pushArray();

  return (
    <div>
     {/*  <button type="button" onClick={() => setIsOpen(true)}>
        Open Lightbox
      </button>
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
      )} */}
    </div>
  );
};

export default Gallery;
