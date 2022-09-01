import styled from "styled-components";

export const DivForm = styled.div`
  display: inline-block;
  width: 77%;
  height: 20%;
  padding-bottom: 2rem;
  box-sizing: border-box;
  position: relative;
  padding: 37.5px;
  margin: 12px 0;
  border-radius:6px;
  font-size:13px;
  box-shadow:10px 10px 40px -14px #000;
  
`;
export const Label = styled.label`
  font-size: 18px;
  
`;

export const Input = styled.input`
  display: inline-block;
  border: none;
  background: #e5e5e5;
  margin-bottom: 10px;
  color: #000000 50%;
  font-size: 16px;
  outline: none;
  padding-left: 2%;
  padding-top: 30px;
  border-bottom: solid #14213d;
  border-bottom:2px solid #bebed2;
  flex-wrap: wrap;
  margin-right: 5px;
  width: 32%;
  &:placeholder {
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
  }
`;


