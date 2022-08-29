import styled, { css } from "styled-components/macro";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import {motion} from "framer-motion";

export const HeroSection = styled.section`
  /* height: 88vh; */
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background-color: black;
  z-index: 1;
`;

export const HeroSlide = styled(motion.div)`
  z-index: 1;
  width: 100%;
  height: 100%;
  /* background-color: black; */
`;


export const HeroSlider = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: black; */

  /* &::before {
    transition: all 1s ease;
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  } */
`;
export const HeroImage = styled(motion.img)`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 65%;
  height: 100vh;
  object-fit: cover;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  float: right;
  /* max-width: 1600px;
  width: calc(100% - 100px); */
  width: 100%;
  height: 100%;
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: -2.8rem;
  }

  p {
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    color: ${({theme}) => theme.secondary};
    margin-bottom: -1.5rem;
  }

  button {
    /* margin: 0 85%; */
  }
`;

export const HeroText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 0px;
  gap: 30px;
  width: 500px;
  height: 100px;
  margin: 0;

  @media screen and (max-width: 960px) {
    width: 300px;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const HeroButton = styled.button`
  width: 200px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.darkBlue};
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 30px;
  /* display: flex; */
  display: none;
  z-index: 10;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const arrowButton = css`
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

export const PrevArrow = styled(IoArrowBack)`

  ${arrowButton}
`;

export const NextArrow = styled(IoArrowForward)`

  ${arrowButton}
`;
