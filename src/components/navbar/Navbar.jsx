import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets.js"

const Navbar = () => {

    const [menu, setMenu] = useState("Home");

    return (
        <div className='nav-bar'>
            <img 
                src={assets.logo} 
                alt="logo" 
                className='logo' 
            />
            <ul className="nav-menu">
                <li 
                    onClick={() => setMenu("Home")} 
                    className={menu === "Home" ? "active" : ""}
                >
                    Home
                </li>
                <li 
                    onClick={() => setMenu("Menu")} 
                    className={menu === "Menu" ? "active" : ""}
                >
                    Menu
                </li>
                <li 
                    onClick={() => setMenu("Mobile-App")} 
                    className={menu === "Mobile-App" ? "active" : ""}
                >
                    Mobile-App
                </li>
                <li 
                    onClick={() => setMenu("Contact-Us")} 
                    className={menu === "Contact-Us" ? "active" : ""}
                >
                    Contact Us
                </li>
            </ul>
            <div className="nav-right">
                <img 
                    src={assets.search_icon} 
                    alt="search-icon" 
                />
                <div className="nav-search-icon">
                    <img 
                        src={assets.basket_icon} 
                        alt="cart" 
                    />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
