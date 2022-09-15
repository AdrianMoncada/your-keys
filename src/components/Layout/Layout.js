import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styled from 'styled-components';

const DivLayout = styled.div`
  background-color: ${({theme}) => theme.third};

  .linea {
    margin-top: 30px;
    width: 50%;
    border: 2px solid black;
  }

`

const Layout = ({children}) => {
    return (
    <DivLayout>
        <Header />
        {children}
        <hr className='linea' />
        <Footer />
    </DivLayout>
  )
}

export default Layout