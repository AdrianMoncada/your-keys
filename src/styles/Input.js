import styled from "styled-components";

export const DivInputContainer = styled.div`
  width: 100%;
`;

export const PlaceHolderError = styled.input`
  width: 65%;
  height: 3.563em;
  border: none;
  background: #e5e5e5;
  border-bottom:solid #14213d;
  box-sizing: border-box;
  margin-bottom: 10px;
  color: #000000 50%;
  font-size: 20px;
  outline: none;
  padding-left: 8%;
  padding-top: 15px;

  &:placeholder {
    font-size: 30%;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    
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
