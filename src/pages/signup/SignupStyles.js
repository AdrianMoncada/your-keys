import styled from "styled-components";
import { motion } from "framer-motion";

export const SignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93.5vh;
  /* background-color: #000000;  */
  .hrFormik {
    display: none;

    @media screen and (min-width: 650px) {
      height: 200px;
      width: 0px;
      border: 1px solid black;
      position: absolute;
      left: 58%;
      color: black;
      background-color: black;
    }
  }
`;

export const DivFormik = styled.div`
  color: black;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (min-width: 650px) {
    /* background-color: ${({ theme }) => theme.third}; */
    color: black;
    padding: 30px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }

  .titleCreate {
    text-align: center;
  }
  .textA {
    text-align: center;
  }
`;

export const DivSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 50px;
  /* background-color: ${({ theme }) => theme.darkBlue}; */

  /*@media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 50px;
    /* background-color: ${({ theme }) => theme.darkBlue}; */
  /* width: 100%;
    
  }*/
`;

export const ButtonFormik = styled(motion.button)`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondary};
  padding: 20px 50px;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: #e5e5e5;
  border-radius: 10px;
  text-align: center;
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    background-color: #e5e5e5;
    border-radius: 10px;
    text-align: center;
  }
  @media screen and (min-width: 940px) {
    width: 38%;
    height: 76%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    background-color: #e5e5e5;
    border-radius: 30px;
    text-align: center;
  }
`;

export const SubmitButtoncContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  padding: 15px 45px;
  margin: 0 30px;
  border: none;
  font-size: 18px;
  color: white;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.secondary} 50%,
    ${({ theme }) => theme.third} 50%
  );
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: left;
  transition: background-position 0.3s ease;

  &:hover {
    cursor: pointer;
    background-position: right;
    color: black;
  }
`;

export const LabelError = styled.label`
  color: red;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  font-size: 130%;
`;

export const Login = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const ALogin = styled.div`
  color: #fca311;
  display: inline;
`;
export const SpanIcon = styled.span`
  position: absolute;
  left: 19%;
  top: 20%;
  font-size: 150%;
  color: rgba(0, 0, 0, 0.7);
  @media screen and (min-width: 320px) {
    position: absolute;
    left: 19%;
    top: 20%;
    font-size: 210%;
    color: rgba(0, 0, 0, 0.7);
  }
  @media screen and (min-width: 940px) {
    position: absolute;
    left: 19%;
    top: 20%;
    font-size: 170%;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const SpanEye = styled.span`
  position: absolute;
  left: 76%;
  top: 20%;
  font-size: 230%;
  color: rgba(0, 0, 0, 0.7);
  @media screen and (min-width: 320px) {
    position: absolute;
    left: 76%;
    top: 20%;
    font-size: 230%;
    color: rgba(0, 0, 0, 0.7);
  }
  @media screen and (min-width: 940px) {
    position: absolute;
    left: 76%;
    top: 20%;
    font-size: 220%;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const FormGroup = styled.div`
  position: relative;
  margin: auto;
`;

export const DivIconPass = styled.div`
  position: relative;
  display: flex;
`;

export const DivInputContainer = styled.div`
  width: 100%;
`;

export const PlaceHolderErrors = styled.input`
  width: 65%;
  height: 2.5em;
  border: none;
  background: #e5e5e5;
  border-bottom: solid #14213d;
  box-sizing: border-box;
  margin-bottom: 10px;
  color: #000000 50%;
  font-size: 20px;
  outline: none;
  padding-left: 8%;
  padding-top: 15px;

  &:placeholder {
    font-size: 2%;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    @media screen and (min-width: 320px) {
      font-size: 30%;
      color: rgba(0, 0, 0, 0.5);
      opacity: 0.8;
    }
    @media screen and (min-width: 320px) {
      font-size: 30%;
      color: rgba(0, 0, 0, 0.5);
      opacity: 0.8;
    }
  }

  &.inputerror {
    border: none;
    border-bottom: 3px solid #14213d;
    color: red;
    width: 65%;
    height: 4.563em;
    padding: 0 10px 0 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-size: 20px;
    outline: none;
    padding-left: 6%;

    &:placeholder {
      color: red;
      font-size: 30%;
    }
  }
`;
