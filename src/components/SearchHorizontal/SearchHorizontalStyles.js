import styled from "styled-components";

export const DivSearchHorizontal = styled.div`
  display: flex;
`;
export const SearchContainerHorizontal = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 0;

  .titleInfos {
    font-size: 20px;
    font-weight: 500;
    margin: 0 10px;
  }
  .divcito {
    margin-right: 10px;
  }
  .dates {
    margin-top: 10px;
  }
`;

export const DivDatesHorizontal = styled.div``;

export const DivInputHorizontal = styled.div`
  display: flex;

  .icon {
    font-size: 30px;
    margin-top: 5px;
    padding: 3px 5px 4px 5px;
    background-color: ${({ theme }) => theme.third};
    border-radius: 10px 0px 0px 10px;
    color: black;
  }
`;

export const ButtonInfoHorizontal = styled.button`
  color: white;
  padding: 15px 20px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  background-image: linear-gradient(
    to left,
    ${({ theme }) => theme.darkBlue} 50%,
    ${({ theme }) => theme.third} 50%
  );
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: right;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-position: left;
    color: black;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: black;
    }
  }
`;
