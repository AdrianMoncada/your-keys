import styled from "styled-components";

export const DivContainerCategory = styled.div`
  width: 100%;
  background-color: #fca311;
  /* padding: 0 0.5rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    font-size: 45px;
  }
`;

export const DivName = styled.div`
  padding: 0.7rem 0.5rem;
  & > h3 {
    margin: 0 25px !important;
    font-size: 20px;
  }
  & > h1 {
    margin: 0 25px !important;
    font-size: 25px;
  }
`;
export const DivSpanIcon = styled.div`
  text-align: center;
  justify-content: center;
  color: black;
  margin-right: 35px;
`;