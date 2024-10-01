import React from 'react';
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae maxime veritatis impedit perferendis natus cupiditate, ipsam, maiores sapiente explicabo voluptatum voluptas earum cumque quam porro exercitationem expedita voluptates consequatur nesciunt?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="social-icon" />
                        <img src={assets.twitter_icon} alt="social-icon" />
                        <img src={assets.linkedin_icon} alt="social-icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h1>Get in Touch</h1>
                    <ul>
                        <li>+91 12345-67890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024©️ Tomato.com - All Rights Reserved</p>
        </div>
    )
}

export default Footer
