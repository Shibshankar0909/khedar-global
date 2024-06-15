import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'
function Footer() {

    return (
        <div id='footer'>
            <div className="footeer-text">
                {/* <p>Trusted across the globe.</p> */}
                <h2>A KHEDAR GLOBAL</h2>
                <h3>CONNECTING METAL WORLDS</h3>
            </div>
            <div className="social">
                <p>GET IN TOUCH WITH US</p>
                <SocialIcon className='icon' target='_blank' url="https://www.instagram.com" bgColor='#133c67' />
                <SocialIcon className='icon' target='_blank' url="https://facebook.com" bgColor='#133c67' />
                <SocialIcon className='icon' target='_blank' url="https://www.linkedin.com/company/a-khedar-global/" bgColor='#133c67' />
            </div>
        </div>
    )
}

export default Footer