import React from 'react'
import Logo from '../../assets/Logo';
import {BsTwitter} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillFacebook} from 'react-icons/ai';
import {DivContainerFooter} from './FooterStyles';


const Footer = () => {
  return (
    <DivContainerFooter>
        <h4>©2020 Your Keys!</h4>
        <Logo />
        <div>
            <BsTwitter />
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillFacebook />
        </div>
    </DivContainerFooter>
  )
}

export default Footer