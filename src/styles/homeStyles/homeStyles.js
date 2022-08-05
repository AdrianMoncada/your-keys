import styled from 'styled-components';

export const ContainerMain = styled.div`
    background-color: ${({theme}) => theme.background};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        transform: scaleX(-1);
        width: 900px;
        height: 550px;
    }
`

export const DivContainerInfo = styled.div`
    background-color: ${({theme}) => theme.secondary};
    height: 390px;
    width: 330px;
    border-radius: 32px;
    color: black;
    margin: 0 auto;
    margin-left: 5rem;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InputInfo = styled.input`
    background-color: ${({theme}) => theme.third};
    border: none;
    padding: 10px 30px;
    margin: 5px 0;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
`

export const ButtonInfo = styled.button`
    background-color: ${({theme}) => theme.darkBlue};
    color: white;
    padding: 15px 30px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
    border: none;
    border-radius: 10px;

    &:hover {
        cursor: pointer;

    }
`

export const DivInput = styled.div`
    position: relative;
`

export const SpanIcon = styled.span`
    position: absolute;
    top: ${(props) => props.iconSize ? '10px' : '7px'};
    left: ${(props) => props.iconSize ? '5px' : '2px'};
    font-size: ${(props) => props.iconSize ? '22px' : '30px'};
`

export const ContainerCategorias = styled.div`
    svg {
        position: relative;
    }

    h2 {
        position: absolute;
        text-align: center;
        bottom: -100px;
        left: 42%;
        color: white;
        font-size: 44px;
    }
`