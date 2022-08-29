import React from "react";
import Logo from "../../assets/Logo";
import { BsTwitter } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { DivContainerFooter } from "./FooterStyles";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/signup" ||
      location.pathname === "/login" ? null : (
        <DivContainerFooter>
          <h2>©2022 Your Keys!</h2>
          <Logo />
          <div className="iconsFooter">
            <BsTwitter className="icon" />
            <AiFillLinkedin className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillFacebook className="icon" />
          </div>
        </DivContainerFooter>
      )}
    </div>
  );
};

export default Footer;
