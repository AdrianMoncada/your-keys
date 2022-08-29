import React, { useState, useRef, useEffect } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  NextArrow,
  PrevArrow,
  SliderButtons,
  HeroButton,
  HeroText,

} from "./HeroStyles";
import { useNavigate } from "react-router";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 15500);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
            <div>

            {index === current && (
              <HeroSlider
                key={index}
                initial={{ x: "-100%", zIndex: 10 }}
                transition={{ duration: 1, ease: "easeInOut", zIndex: 20 }}
                animate={{ x: 0, opacity: 1, zIndex: 10 }}
              >
                <HeroImage
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 15 }}
                  src={slide.images[2].url}
                  alt="carros"
                />
                <HeroContent>
                  <HeroText
                    initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 15 }}
                  src={slide.images[2].url}
                  alt="carros"
                  >
                    <h1>{slide.rangeName}</h1>
                    <p>10000</p>
                    <HeroButton
                      onClick={() => navigate(`/vehiculo/${slide.id}`)}
                    >Ver Más</HeroButton>
                  </HeroText>
                </HeroContent>
              </HeroSlider>
            )}
                    </div>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
