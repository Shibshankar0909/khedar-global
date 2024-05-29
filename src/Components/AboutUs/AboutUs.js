import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';
import pic1 from './pic1.jpg';

function AboutUs() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ourBusiness');
    };
    return (
        <div className='About'>
            <div className="imgs">
                <img src={pic1} alt="pic1" />
            </div>
            <div className="about-text">
                <h1><span>About</span> Us</h1>
                <p>Welcome to A KHEDAR GLOBAL, a leading player in the metal scrap import-export industry. Established with a vision to revolutionize the Copper scrap recycling sector, we pride ourselves on our unwavering commitment to sustainability, integrity, and customer satisfaction.
                </p>
                <button onClick={() => handleClick()}>Read More</button>
            </div>
        </div>
    )
}

export default AboutUs
