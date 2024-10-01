import React, { useContext, useState } from 'react';
import "./Navbar.css";
import { assets } from "../../assets/assets.js"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("Home");

    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='nav-bar'>
            <Link to='/'>
                <img
                    src={assets.logo}
                    alt="logo"
                    className='logo'
                /></Link>
            <ul className="nav-menu">
                <Link
                    to="/"
                    onClick={() => setMenu("Home")}
                    className={menu === "Home" ? "active" : ""}
                >
                    Home
                </Link>
                <a
                    href='#explore-menu'
                    onClick={() => setMenu("Menu")}
                    className={menu === "Menu" ? "active" : ""}
                >
                    Menu
                </a>
                <a
                    href='#app-download'
                    onClick={() => setMenu("Mobile-App")}
                    className={menu === "Mobile-App" ? "active" : ""}
                >
                    Mobile-App
                </a>
                <a
                    href='#footer'
                    onClick={() => setMenu("Contact-Us")}
                    className={menu === "Contact-Us" ? "active" : ""}
                >
                    Contact Us
                </a>
            </ul>
            <div className="nav-right">
                <img
                    src={assets.search_icon}
                    alt="search-icon"
                />
                <div className="nav-search-icon">
                    <Link to='/cart'>
                        <img
                            src={assets.basket_icon}
                            alt="cart"
                        />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot" }></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar
