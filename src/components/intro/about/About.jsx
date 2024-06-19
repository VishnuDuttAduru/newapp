import React from 'react';
import "./About.css";
import photography from "../../../assets/photo_bg_two.jpg";
import award from "../../../assets/award.jpg";

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src={photography} 
                        alt="photography-icon" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>I am a front-end developer by my work and passion, I love creating interactive, cool, creative and beautiful apps</p>
                <p className='a-desc'>I have basically created apps using HTML5, CSS3, Javascript, Reactjs, Bootstrap and you can check them in the below section of my portfolio. I am basically a fun-loving, chilled person and like to hang out with friends and explore new places. I like photography, script-writing, listening to music and watching cricket apart from coding of course. If you find my portfolio interesting enough and you want to work with me, do not hesitate to drop a mail at my email id mentioned in the contact section. You can also call me on my contact number mentioned.</p>
                <div className="a-award">
                    <img src={award} alt="award" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className='a-award-title'>JavaScript (Basic)</h4>
                        <p className='a-award-desc'>
                            It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
