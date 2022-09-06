import { MdClose } from "react-icons/md";
import styled from "styled-components";
import {motion} from 'framer-motion'

export const SearchContainerHorizontal = styled.div`
   justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  color: white;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  position: absolute;
  top: 100px;
`;

export const ContainerButtonSvg = styled.div`
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  color: white;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  position: absolute;
`
export const Background = styled.div`
margin: -20px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalWrapper = styled(motion.div)`
  width: 400px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background-color: #fff;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 80px;
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 20px;
  color: black;
  transition: all 0.3s ease-in-out; 

  .titleInfos {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: -3px;
  }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: black;
`

export const DivDatesHorizontal = styled.div`
  display: flex;
`;

export const DivInputHorizontal = styled.div`
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

export const ButtonInfoHorizontal = styled.button`
  color: white;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.secondary} 50%,
    ${({ theme }) => theme.darkBlue} 50%
  );
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: right;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    cursor: pointer;
    background-position: left;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: black;
    }
  }
`;

export const DivSvg = styled(motion.div)`
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 2;

  .iconSearch {
    font-size: 45px;
    color: black;
  }
`;
