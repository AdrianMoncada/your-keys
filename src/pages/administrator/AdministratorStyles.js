import styled from "styled-components";

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivContainerAll = styled.div`
  /* border: 1px solid red;
    margin: 0; */
  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    text-align: center;
  }
`;

export const ButtonCreate = styled.button`
  padding: 20px 35px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.red};
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
`;

export const DivCardContainer = styled.div`
  margin-top: 104px;
  /* border: 1px solid black; */
  padding: 20px 30px;
  border-radius: 10px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.75);
`;
