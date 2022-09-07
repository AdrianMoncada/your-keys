import styled from "styled-components";
import { motion } from "framer-motion";

export const Img = styled.img`
  width: 322px;
  height: 180px;
  opacity: 0.7;
  transition: all 0.3s ease;
  display: flex;
  margin: 0 auto;
  padding: 50px 5px;

  @media screen and (max-width: 320px) {
    width: 222px;
    height: 100px;
    object-fit: cover;
  }
`;

export const Div = styled(motion.div)`
  margin: 0;
  border-right: 1px solid black;
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  background-color: rgb(229, 229, 229);
  transition: background-color 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    cursor: pointer;
    z-index: 100;
    background-color: #c3c0c0;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
    /* transform: translateY(-3%); */
    img {
      transition: all 0.3s ease;
      opacity: 1;
    }
  }
`;

export const DivContainers = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  @media screen and (max-width: 320px) {
  }
`;

export const DivText = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;

  .titleCar {
    margin: 0 auto;
  }

  .pCar {
    margin-top: -5px;
  }
`;
