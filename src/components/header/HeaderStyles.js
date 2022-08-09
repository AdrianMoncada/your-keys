import styled from "styled-components";

export const ContainerHeader = styled.div`
  

  .sticky {
    background-color: red !important;
  }
`;

export const Buttons = styled.button`
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
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-position: right;
    color: black;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
`;

export const DivPrueba = styled.div`
  .wrap-container {
    position: fixed;
    z-index: 2;
    width: 100%;
    transition: 0.6s;
    background-color: transparent;
    height: max-content;
  }
  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    transition: 0.6s;
    background-color: transparent;
  }

  .containerHeader.active {
    background-color: black;
  }

  .search.active {
    background-color: #FCA311;
  }

  h1 {
    margin-left: 50px;
  }
`;


export const ButtonLogOut = styled.button`
  background-color: ${({theme}) => theme.red};
  color: white;
  font-size: 20px;
  padding: 9px 15px;
  border: none;
  border-radius: 10px;
  margin: 10px 20px;
  cursor: pointer;
`

export const DivUser = styled.div`
  display: flex;

`

export const DivUserText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .userName {
    margin: 0 10px;
  }
`

