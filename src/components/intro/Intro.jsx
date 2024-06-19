import React from 'react'
import "./Intro.css";
import me from "../../assets/me_bg_removed.png";

const Intro = () => {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello, My name is</h2>
                    <h1 className='i-name'>Vishnu</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">JavaScript Developer</div>
                            <div className="i-title-item">React Developer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Photographer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm a Bangalore based Front-End Developer. I am a front-end developer by my work and passion, I love creating cool, creative and beautiful apps, #duttu.
                    </p>
                </div>
                {/* <img src={scrollIcon} alt="scroll-down-icon" /> */}
                <svg 
                    width="50px" 
                    height="50px" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="i-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" 
                        stroke="#000000" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                    />
                    <path 
                        d="M12 6V14" 
                        stroke="#000000" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                    />
                    <path 
                        d="M15 11L12 14L9 11" 
                        stroke="#000000" 
                        stroke-width="1.5" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                    />
                </svg>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="rdj-pic" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
