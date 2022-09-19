import styled from "styled-components";
import { motion } from "framer-motion";

export const DivCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.background};
  width: 580px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  position: relative;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  padding: 0 10px;

  @media screen and (max-width: 320px) {
    width: 250px;
    height: 450px;
  }

  img {
    width: 400px;
    height: 210px;
    object-fit: cover;

    @media screen and (max-width: 320px) {
      margin-top: 20px;
      width: 200px;
      height: 100px;
    }
  }
`;

export const DivTitle = styled.div`
  margin-left: 5px;
  justify-content: space-between;
  margin: 0;
  .title {
    font-size: 25px;
  }
  .category {
    margin-top: -25px;
    font-size: 15px;
  }

  .calificationNumber {
    background-color: white;
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 20px;
  }
`;

export const DivCalification = styled.div`
  position: absolute;
  left: 30px;
  bottom: 30px;

  @media screen and (max-width: 320px) {
    bottom: 280px;
    left: 45px;
  }
`;

export const SpanLocation = styled.p`
  display: flex;
  margin-bottom: 0px;
  cursor: default;

  .textSpan {
    text-align: left;
    margin: 0;
  }

  .iconLocation {
    font-size: 20px;
    margin-right: 5px;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const DivLocation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  .description {
    margin-top: 0px;
    width: 150px;
  }
`;

export const ButtonMore = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 10px 10px 10px 10px;
  color: white;
  display: flex;
  justify-content: center;
`;

export const DivImgs = styled.div`
  .iconFavorite {
    position: absolute;
    top: 25px;
    left: 25px;
    font-size: 30px;
    color: red;
    transition: all 0.5s ease;

    &:hover {
      cursor: pointer;
      scale: 1.2;
    }
  }
`;
