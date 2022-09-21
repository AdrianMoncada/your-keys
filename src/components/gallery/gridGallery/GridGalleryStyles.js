import styled from "styled-components";

export const ImgGrid = styled.img`

  @media screen and (min-width: 970px) {
  width: ${({ number }) => (number === 0 ? "100%" : "100%")};
  height: ${({ number }) => (number === 0 ? "100%" : "100%")};
  border-radius: 10px;
  object-fit: cover;
  margin: 0;
  }
`;

export const DivContainerImages = styled.div`
  margin-top: 60px;
  
  @media screen and (min-width: 970px) {
    margin: 60px 40px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row: 20vh;

    .gridBig {
     
      @media screen and (min-width: 970px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: -1;
      }
    }

    .gridSmall {
    }
  }
`;

export const DivButtonGallery = styled.div`
  position: absolute;
`
