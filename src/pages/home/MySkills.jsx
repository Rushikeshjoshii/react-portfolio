import React, { useEffect } from 'react'
import data from '../../data/index.json';
import { motion, stagger, useAnimate } from 'framer-motion';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const MySkills = () => {
 
  return (
    <section className="skills--section" id="mySkills">
    <motion.div className="portfolio--container" initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}>
      <p className="section--title">My Skills</p>
      <h2 className="skills--section--heading">My Expertise</h2>
    </motion.div>
    <div className="skills--section--container" >
      {data?.skills?.map((item, index) => (
        <motion.div key={index} className="skills--section--card" initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.0,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}>
         
          <div className="skills--section--img">
            <img src={item.src} alt="Product Chain" style={{ width:'50px',height:'50px'}}/>
          </div>
          
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">{item.title}</h3>
            <p className="skills--section--description">{item.description}</p>
          </div>
          
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default MySkills;