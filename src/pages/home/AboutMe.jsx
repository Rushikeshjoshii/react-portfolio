import React from 'react'
import '../../../src/App.css';
import myImage from '../../img/aboutMe.jpg';
import { MdOutlineMail } from "react-icons/md";
const AboutMe = () => {
  return (
    <section>
      <div className='aboutme-div'>
        <img src={myImage} alt='My Photo' style={{ width:'400px'}}/>
        <div className='aboutme-paras'>
          <h2>About Me</h2>
          <p>Thanks for visiting!</p>
          <p style={{color:'gray',fontSize:'15px'}}>Hi there,myself Rushikesh Joshi.Currently working as FullStack Developer.</p>
          <p style={{ display:'flex',flexDirection:'column',gap:"5px"}}>
            You can connect with me :
            <p style={{ display:'flex',alignItems:'center',gap:'2px',color:'blue'}}>rushikeshjoshi043@gmail.com</p>
            <p  style={{color:'gray',fontSize:'15px'}}>XYZ Society,Wakad,Pune,Maharashtra</p>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe