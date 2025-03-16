import React from 'react';
import "./Hero.scss";
import { motion } from 'framer-motion';
import selfImg from "../../assets/me_bg_removed.png";
import scroll from "../../assets/scroll.png";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggeredChildern: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Vishnu Dutt</motion.h2>
                    <motion.h1 variants={textVariants}>Frontend React JS Developer</motion.h1>
                    <motion.div variants={textVariants} className="btns">
                        <motion.button variants={textVariants}>See the Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img 
                        variants={textVariants} 
                        animate="scrollButton" 
                        src={scroll} 
                        alt="scroll-down" 
                    />
                </motion.div>
            </div>
            <motion.div 
                className="slideTextContainer" 
                variants={sliderVariants} 
                initial="initial" 
                animate="animate"
            >
                ScriptWriter Photographer 
            </motion.div>
            <div className="imageContainer">
                <img src={selfImg} className='self_img' alt="self-img" />
            </div>
        </div>
    )
}

export default Hero
