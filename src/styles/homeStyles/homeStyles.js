import styled from 'styled-components';

export const ContainerMain = styled.div`
    background-color: ${({theme}) => theme.background};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5px;

    .titleInfo {
        font-size: 30px;
        font-weight: 500;
        margin-top: 10px;
        margin-bottom: -30px;
        margin-right: 9.4rem;
    }

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
    flex-wrap: wrap;
    justify-content: center;
`

export const InputInfo = styled.input`
    background-color: ${({theme}) => theme.third};
    border: none;
    padding: 10px 32px 10px 5px;
    margin: 5px 0;
    border-radius: 0px 10px 10px 0px;
    font-size: 15px;
    outline: none;
`

export const ButtonInfo = styled.button`
    color: white;
    padding: 5px 30px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px auto;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient(to left, ${({theme}) => theme.darkBlue} 50%, ${({theme}) => theme.third} 50%);
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: right;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-position: left;
        color: black;
    }
`

export const DivInput = styled.div`
    display: flex;
    .icon {
        font-size: 30px;
        margin-top: 5px;
        padding: 3px 5px 4px 5px;
        background-color: ${({theme}) => theme.third};
        border-radius: 10px 0px 0px 10px;
    }
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

    .titleCategoras {
        position: absolute;
        text-align: center;
        bottom: -50px;
        left: 42%;
        color: white;
        font-size: 44px;
    }
`

export const DivDate = styled.div`
    margin-top: -30px;
`