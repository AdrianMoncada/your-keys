import styled from "styled-components";

export const DivForm = styled.div`
  display: block;
  width: 50%;
  height: 10%;
  padding-bottom: 2rem;
  box-sizing: border-box;
  position: relative;
  top: 10px;
  margin-bottom:80px;
  margin-left: 50px;
 border: solid;
  

`;
export const Label = styled.label`
 
  `;

export const Input = styled.input`
 width: 50%;
  height: 3.563em;
  border: none;
  background: #e5e5e5;
  box-sizing: border-box;
  margin-bottom: 10px;
  color: #000000 50%;
  font-size: 25px;
  outline: none;
  padding-left: 2%;
  padding-top: 15px;
  display:block;
  border-bottom:solid #14213d;
  

  &:placeholder {
    font-size: 1%;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
  }
  `;  
