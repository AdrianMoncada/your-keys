import styled from "styled-components";

export const ButtonGrid = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.darkBlue};
  color: white;
  font-size: 30px;
  cursor: pointer;
`;

export const Mobile = styled.div`
  .slider {
  }
  img {
    width: 100%;
    height: 10%;
  }
`;
