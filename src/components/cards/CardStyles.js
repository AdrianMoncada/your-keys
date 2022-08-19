import styled from 'styled-components';

export const DivCard = styled.div`
    background-color: ${({theme}) =>  theme.background};
    width: 600px;
    height: 380px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    position: relative;
    -webkit-box-shadow: 0px 0px 17px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 17px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 17px 1px rgba(0,0,0,0.75);
    
    img {
        width: 350px;
        height: 210px;
    }
`

export const DivTitle = styled.div`
    margin-left: 5px;
    justify-content: space-between;
    margin: 0;
    .title {
        font-size: 30px;
    }
    .category {
        margin-top: -25px;
        font-size: 18px;
    }

    .calificationNumber {
        background-color: white;
        color: black;
        font-size: 18px;
        font-weight: bold;
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 20px;
    }
`

export const DivCalification = styled.div`
    position: absolute;
    left: 80px;
    top: 30px;

`

export const SpanLocation = styled.p`
    display: flex;
    margin-bottom: 0px;

    .textSpan {
        text-align: left;
        margin: 0;
    }

    .iconLocation {
        font-size: 20px;
        margin-right: 5px;
        color: ${({theme}) => theme.secondary};
    }
`

export const DivLocation = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
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
    margin-top: 10px;
`

export const DivImgs = styled.div`

    .iconFavorite {
        position: absolute;
        top: 25px;
        left: 25px;
        font-size: 30px;
        color: red;

        &:hover {
            cursor: pointer;
        }
    }
`
