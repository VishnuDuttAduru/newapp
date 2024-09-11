import React from 'react'
import "./Navbar.scss";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <motion.span 
          initial={{opacity: 0, scale: 0.5}} 
          animate={{opacity: 1, scale: 1}} 
          transition={{duration: 0.5}}
        >
          Vishnu Dutt
        </motion.span>
        <div className="social">
          <a href="#"><img src={facebook} alt="navImg" /></a>
          <a href="#"><img src={instagram} alt="navImg" /></a>
          <a href="#"><img src={linkedin} alt="navImg" /></a>
          <a href="#"><img src={youtube} alt="navImg" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
