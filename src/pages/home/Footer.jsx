import React from "react";
import Logo from "../../img/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <>
      <footer className="footer--container">
        <div className="footer--link--container">
          <div >
            <img
              src={Logo}
              alt="footer logo"
              style={{ height: "100px", width: "100px" }}
            />
          </div>

          <div className="footer--items">
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer--social--icon">
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <Divider/>
        <div className="footer--container">
        <h3>Made with 💖 by Rushi</h3>
        <p>Copyright @RJ</p>
      </div>
      </footer>
     
    </>
  );
};

export default Footer;
