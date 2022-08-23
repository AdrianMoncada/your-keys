import React, { useState, useCallback, useEffect } from "react";
import ImageViewer from "react-simple-image-viewer";

const Gallery = (car) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [];
  /* useEffect(() => {
    car?.img?.map(i => console.log("i.url"))
    console.log(car.characteristics)
  }, [car]) */

  const pushArray = () => {
    car.car.img?.map(i => images.push(i.url))
  }

  pushArray()

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  console.log(images)
  console.log(car.characteristics)


  return (
    <div>
        {
            pushArray()
        }
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default Gallery;
