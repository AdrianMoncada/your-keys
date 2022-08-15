import styled from "styled-components";

export const DivSearch = styled.div`
  display: flex;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 0;

  .titleInfos {
    font-size: 30px;
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

export const DivDates = styled.div``;

export const DivInput = styled.div`
    display: flex;

    .icon {
        font-size: 30px;
        margin-top: 5px;
        padding: 3px 5px 4px 5px;
        background-color: ${({theme}) => theme.third};
        border-radius: 10px 0px 0px 10px;
        color: black;
    }
`
