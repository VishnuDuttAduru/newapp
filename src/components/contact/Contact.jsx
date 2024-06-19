import React, { useContext, useRef, useState } from 'react';
import "./Contact.css";
import phone from "../../assets/phone.jpg";
import mail from "../../assets/mail.jpg";
import address from "../../assets/address.jpg";
import emailjs from '@emailjs/browser';
import { themeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const { state } = useContext(themeContext);
    const darkMode = state?.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_6nwwkoo',
                'template_rtkzh1i',
                formRef.current, {
                publicKey: 'SDEbgR3gUj3VQBwOL',
            }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setDone(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss Your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={phone}
                                alt="contact-info" className="c-icon"
                            />
                            +91 6301093471
                        </div>
                        <div className="c-info-item">
                            <img
                                src={mail}
                                alt="contact-info" className="c-icon"
                            />
                            vishnudutt1937@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={address}
                                alt="contact-info" className="c-icon"
                            />
                            Aswath Nagar, Hindustan Business School Road, Marathalli, Bangalore - 560037
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder='Email' name='user_mail' />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows={5} placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
