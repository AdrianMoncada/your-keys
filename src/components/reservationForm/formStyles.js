import styled from "styled-components";

export const DivContainerBooking = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(5, auto);
`

export const DivForm = styled.div`
  display: inline-block;
  width: 500px;
  height: 250px;
  padding-bottom: 2rem;
  box-sizing: border-box;
  position: relative;
  padding: 37.5px;
  /* margin: 12px 0; */
  border-radius:6px;
  font-size:13px;
  box-shadow:10px 10px 30px -14px #000;
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  
  
`;
export const DivSelect = styled.div`
  padding: 1rem;
  width: 45%;
  
`;

export const DivBooking = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid red;
`
