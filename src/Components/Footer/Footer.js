import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'
function Footer() {

    return (
        <div id='footer'>
            <div className="footeer-text">
                <p>Trusted across the globe.</p>
            </div>
            <div className="social">
                <p>Get in touch with us</p>
                <SocialIcon className='icon' url="https://www.instagram.com" bgColor='#133c67' />
                <SocialIcon className='icon' url="https://facebook.com" bgColor='#133c67' />
                <SocialIcon className='icon' url="https://www.linkedin.com" bgColor='#133c67' />
            </div>
        </div>
    )
}

export default Footer