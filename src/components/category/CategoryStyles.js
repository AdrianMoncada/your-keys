import styled from 'styled-components';

export const Img = styled.img`
    width: 322px;
    height: 180px;
    opacity: 0.7;
    transition: all .3s ease;
    display: flex;
    margin: 0 auto;
    padding: 50px 5px;
`

export const Div = styled.div`
    width: 100%;
    margin: 0;
    border-right: 1px solid black;
    border-left: 1px solid black;
    display: flex;
    align-items: center;
    background-color: rgb(229, 229, 229);
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #c3c0c0;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
        transform: translateY(-3%) ;
        img {
            transition: all .3s ease;
            opacity: 1;
        }
    }
`

export const DivContainers = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
`

export const DivText = styled.div`
    display: block;
    position: absolute;
    top: 10px;
    left: 10px;

    .titleCar {
        margin: 0 auto;
    }

    .pCar {
        margin-top: -5px;
    }

`