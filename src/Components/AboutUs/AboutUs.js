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
                <h1><span>About Us</span> </h1>
                {/* <p>Welcome to A KHEDAR GLOBAL, a leading player in the metal scrap import-export industry. Established with a vision to revolutionize the Copper scrap recycling sector, we pride ourselves on our unwavering commitment to sustainability, integrity, and customer satisfaction.
                </p> */}
                <p>
                Welcome to A KHEDAR GLOBAL, a leader in metal scrap import-export. We aim to revolutionize copper scrap recycling with a strong commitment to sustainability, integrity, and customer satisfaction. By delivering high-quality metal materials and maintaining ethical business practices, we ensure a reliable supply for our clients. Our focus on environmentally responsible practices and exceptional service sets us apart, driving us to create a sustainable future in the industry.
                </p>
                <br />
                <button onClick={() => handleClick()}>Read More</button>
            </div>
        </div>
    )
}

export default AboutUs
