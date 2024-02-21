import React, { Fragment, useContext, useRef } from "react";
import logo from "../../img/logo.png";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Dailog from "./Dailog";
import {SunDim,MoonStars  } from '@phosphor-icons/react';
import {Stack,IconButton} from '@mui/material';
import { ThemeContext } from "../../store/theme-context";

const Navbar = ({handleScrollClick}) => {
  const {theme,toggleTheme} = useContext(ThemeContext);

  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Pref=useRef(null);

  const scroll =()=>{
    console.log(Pref)
    handleScrollClick(Pref);
  }
  return (
    <>
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
          <img
            src={logo}
            alt="logo"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "4px",
            }}
          />
        </div>
        <a
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu && scroll}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                ref={Pref}
                className="navbar--content"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
                className="navbar--content"
              >
                About Me
              </Link>
            </li>
            
          </ul>
        </div>
        <Stack direction={'row'} alignItems={'center'} gap={'10px'}>
        <Link
          onClick={closeMenu && handleClickOpen}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-outline-primary"
        >
          Contact Me
        </Link>
        <IconButton sx={{backgroundColor:'whitesmoke'}} onClick={toggleTheme}>
        {theme === 'light'?<SunDim/>:<MoonStars/>}
        </IconButton>
        
        </Stack>
      </nav>
      {open && (
        <Dailog open={open} setOpen={setOpen} handleClose={handleClose}/>
      )}
    </>
  );
};

export default Navbar;
