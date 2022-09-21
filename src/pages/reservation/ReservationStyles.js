import styled from 'styled-components';

export const DivContainerAll = styled.div`
    margin: 0;
`

export const TitleBoking = styled.h2`
    margin-top: 100px;
` 
export const DivContainerCards = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const DivCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;

    .titleFecha {
        position: absolute;
        top: -40px;
        right: 150px;
        font-size: 18px;
    }
`