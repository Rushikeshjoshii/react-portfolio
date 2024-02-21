import React, { useRef, useState } from "react";
import HomeImage from "../../img/HomeImage.jpg";
import MySkills from "./MySkills";
import AboutMe from "./AboutMe";
import MyPortfolio from "./MyPortfolio";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
import Dailog from "./Dailog";
import Resume from "../../data/Resume.pdf";
import { Link } from "react-router-dom";
import { MdDownload } from "react-icons/md";

const HeroSection = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <motion.p
              className="section--title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              Hey, I'm Rushikesh
            </motion.p>
            <motion.h1
              className="hero--section--title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <span
                className="hero--section-title--color"
                style={{ color: "skyblue" }}
              >
                Web
              </span>{" "}
              <br />
              Developer
            </motion.h1>
            <TypeAnimation
              sequence={[
                "Expereinced web Developer with real hands-on experience in frontend tech-stack.Get in touch by clicking below button.",
              ]}
              wrapper="span"
              speed={40}
              style={{
                fontSize: "20px",
                display: "inline-block",
                color: "GrayText",
              }}
              repeat={3}
            />
          </div>

          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            
          >
            <Link
              to={Resume}
              download="Rushikesh's Resume"
              target="_blank"
              rel="noreferrer"
              style={{textDecoration:'none',fontWeight:'bold',display:'flex',alignItems:'center'}}
            >
              Download Resume &nbsp; <MdDownload/>
            </Link>
          </motion.button>
        </div>
        <motion.div
          className="hero--section--img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img
            src={HomeImage}
            alt="Hero Section"
            style={{ borderRadius: "10px" }}
          />
        </motion.div>
      </section>
      <MySkills />
      <MyPortfolio />
      <AboutMe />
      <Footer />

      {open && (
        <Dailog open={open} setOpen={setOpen} handleClose={handleClose} />
      )}
    </>
  );
};

export default HeroSection;
