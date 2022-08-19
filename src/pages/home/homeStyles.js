import styled from "styled-components";
import {motion} from "framer-motion";

export const ContainerMain = styled(motion.div)`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 7;
  top: 0;

  .titleInfo {
    font-size: 30px;
    font-weight: 500;
    margin: 10px auto;
  }

  /* img {
        transform: scaleX(-1);
        width: 900px;
        height: 550px;
    } */
`;

export const DivContainerInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 88vh;
  width: 70vh;
  .buttonI {
    text-align: center;
  }
  @media screen and (max-width: 489px) {
    width: 59vh;
  }
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputInfo = styled.input`
  background-color: ${({ theme }) => theme.third};
  border: none;
  padding: 10px 32px 10px 5px;
  margin: 5px 0;
  border-radius: 0px 10px 10px 0px;
  font-size: 15px;
  outline: none;
`;

export const ButtonInfo = styled(motion.button)`
  padding: 15px 20px;
  font-size: 20px;
  font-weight: bold;
  margin: 20px auto;
  border: none;
  border-radius: 10px;
  /* background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.secondary} 50%,
    ${({ theme }) => theme.third} 50%
  ); */
  background-image: linear-gradient(
    to left,
    black 50%,
    ${({ theme }) => theme.secondary} 50%
  );
  border: 2px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: right;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    background-position: left;
    color: black;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: white;
    }
  }
`;

export const DivInput = styled.div`
  margin: 10px auto;
  display: flex;
  .icon {
    font-size: 30px;
    margin-top: 5px;
    padding: 3px 5px 4px 5px;
    background-color: ${({ theme }) => theme.third};
    border-radius: 10px 0px 0px 10px;
    color: black;
  }
`;

export const SpanIcon = styled.span`
  position: absolute;
  top: ${(props) => (props.iconSize ? "10px" : "7px")};
  left: ${(props) => (props.iconSize ? "5px" : "2px")};
  font-size: ${(props) => (props.iconSize ? "22px" : "30px")};
`;

export const ContainerCategorias = styled.div`
  svg {
    position: relative;
  }

  .titleCategoras {
    text-align: center;
    top: 85%;
    left: 42%;
    color: black;
    font-size: 44px;
  }
`;

export const DivDate = styled.div`
  margin: 0 auto;
`;

export const DivContainerList = styled.div`
  .titleRecommendation {
    background-color: ${({ theme }) => theme.background};
    text-align: center;
    color: white;
    font-size: 35px;
    padding: 10px 0;
  }
`;
