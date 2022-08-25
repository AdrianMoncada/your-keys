import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

export const LoginContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: #e5e5e5;
  border-radius: 0px;
  text-align: center;
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    background-color: #e5e5e5;
    border-radius: 0px;
    text-align: center;
  }
  @media screen and (min-width: 940px) {
    width: 38%;
    height: 70%;
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

export const DivRegistry = styled.div`
  margin-top: 28px;
  text-align: center;
`;

export const ARegistry = styled.div`
  color: #fca311;
  display: inline;
`;
export const SpanIcon = styled.span`
  position: absolute;
  left: 17%;
  top: 29%;
  font-size: 180%;
  color: rgba(0, 0, 0, 0.7);
  @media screen and (min-width: 320px) {
    position: absolute;
    left: 17%;
    top: 22%;
    font-size: 200%;
    color: rgba(0, 0, 0, 0.7);
  }
  @media screen and (min-width: 940px) {
    position: absolute;
    left: 17%;
    top: 22%;
    font-size: 230%;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const SpanEye = styled.span`
  position: absolute;
  left: 76%;
  top: 20%;
  font-size: 210%;
  color: rgba(0, 0, 0, 0.7);
  @media screen and (min-width: 320px) {
    position: absolute;
    left: 76%;
    top: 20%;
    font-size: 240%;
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (min-width: 940px) {
    position: absolute;
    left: 76%;
    top: 20%;
    font-size: 260%;
    color: rgba(0, 0, 0, 0.7);
  }
`;
export const DivIcon = styled.div`
  position: relative;
  display: flex;
`;

export const DivIconPass = styled.div`
  position: relative;
  display: flex;
`;
