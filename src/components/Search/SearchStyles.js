import styled from 'styled-components';

export const DivSearch = styled.div`
    .textField {
        background-color: ${({theme}) => theme.third};
        border-radius: 0px 10px 10px 0px;
    }
    
    .icon {
        font-size: 30px;
        background-color: ${({theme}) => theme.third};
        padding: 9px 0 9px 0;
        border-radius: 10px 0px 0px 10px;
    }

    .li-Search {
        padding: 5px 5px;
    }
`