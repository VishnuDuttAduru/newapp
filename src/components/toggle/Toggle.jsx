import React, { useContext } from 'react';
import "./Toggle.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { themeContext } from '../../context';

const Toggle = () => {
    const { state, dispatch } = useContext(themeContext);
    const handleToggleClick = () => {
        dispatch({ type: "TOGGLE" });
    }
    return (
        <div className='t'>
            <img src={sun} alt="toggle-icon" className="t-icon" />
            <img src={moon} alt="toggle-icon" className="t-icon" />
            <div 
                className="t-button" 
                onClick={handleToggleClick} 
                style={{left: state.darkMode ? 0 : 25}
            }></div>
        </div>
    )
}

export default Toggle
