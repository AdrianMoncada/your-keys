import styled from 'styled-components';

export const DivContainerFooter = styled.div`
    background-color: ${({theme}) => theme.third};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    .iconsFooter {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 40px;
    }

    .icon {
        transition: all .4s ease;
        cursor: pointer;
        &:hover {

            color: ${({theme}) => theme.secondary}
        }
    }
`