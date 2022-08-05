import styled from 'styled-components';

export const Img = styled.img`
    width: 600px;
    height: 300px;
    opacity: 0.7;
    transition: all .3s ease;

`

export const Div = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(229, 229, 229);
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #c3c0c0;
        img {
            transition: all .3s ease;
            opacity: 1;
        }
    }
`