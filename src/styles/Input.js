import styled from "styled-components";


export const DivInputContainer = styled.div`
  width: 100%;
`;

export const PlaceHolderError = styled.input
`
width: 486px;
height: 73px;
border: none;
background: #E5E5E5;
border-bottom: 3px solid #14213D;
padding: 0 10px 0 20px;
box-sizing: border-box;
margin-bottom: 10px;
color: #000000 50 %;
font-size: 14px;
outline: none;

&:placeholder {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.5);
    opacity: 0.8;
}

&.inputerror {
    border: 1px solid red;
    color: red;
    background: rgb(224, 204, 204);
    width: 100%;
    height: 35px;
    border-radius: 25px;
    padding: 0 10px 0 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    font-size: 14px;    
    outline: none;

    &:placeholder {
    color: red;
    font-size: 14px;
    }
}`
