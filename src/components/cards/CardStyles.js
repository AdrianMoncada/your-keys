import styled from 'styled-components';

export const DivCard = styled.div`
    background-color: ${({theme}) =>  theme.background};
    width: 400px;
    height: 380px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    
    img {
        width: 350px;
        height: 210px;
    }
`

export const DivTitle = styled.div`
    margin-left: 5px;

    .title {
        font-size: 30px;
    }
    .category {
        margin-top: -25px;
        font-size: 18px;
    }
`

export const SpanLocation = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;

    .iconLocation {
        font-size: 20px;
        margin-right: 5px;
        color: ${({theme}) => theme.secondary};
    }
`

export const DivLocation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    margin-top: 10px;
    text-align: left;
    .description {
        margin-top: 0px;
        width: 150px;
    }
`

export const ButtonMore = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: ${({theme}) => theme.secondary};
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
`