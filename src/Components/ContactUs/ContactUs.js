import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './ContactUs.css'
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('www.google.com');
    };
    return (
        <>
            <Navbar />
            <div className="page">
                <div className="header">
                    <h2>Contact Us</h2>
                </div>
                <div className="main">
                    <p>Due to high volume of calls you might get late response on phone. In such a case please text us our assisstants will reach out to you at once.</p>
                    <div className="contacts">
                        <div className="mail">
                            <h4>Email Us</h4>
                            <p>satyendrakhedar18@gmail.com</p>
                            <p>akhedarglobal@gmail.com</p>
                        </div>
                        <div className="phn">
                            <h4>Call/Text Us</h4>
                            <p>8302013600</p>
                        </div>
                        <div className="gform">
                            <h4>Start Working With Us</h4>
                            <p style={{ cursor: 'pointer' }} onClick={() => handleClick()}>Fill Up the Form to start working with us</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
