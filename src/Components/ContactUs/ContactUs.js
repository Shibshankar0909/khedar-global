import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './ContactUs.css'
import { useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    const handleClick = () => {
        window.open('https://workspace.google.com/intl/en_in/lp/forms/?utm_source=bing&utm_medium=cpc&utm_campaign=1707696-Workspace-APAC-IN-en-BKWS-EXA-LV&utm_content=text-ad-none-none-DEV_c-CRE_-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt-Forms-N%2FA%202-KWID_43700072096399531-kwd-75797991497009:loc-90&userloc_148702-network_o=&utm_term=KW_google%20forms&gclid=e49f3f3009a4196c40a8595d4757fb99&gclsrc=3p.ds&msclkid=e49f3f3009a4196c40a8595d4757fb99', '_blank');
    };

    // const handleClick = () => {
    //     navigate('www.google.com');
    // };
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
                            {/* <p>satyendrakhedar18@gmail.com</p> */}
                            <p>akhedarglobal@gmail.com</p>
                        </div>
                        <div className="phn">
                            <h4>Call/Text Us</h4>
                            <p>+91 8302013600</p>
                        </div>
                        <div className="gform">
                            <h4>Start Working With Us</h4>
                            <p style={{ cursor: 'pointer' }} onClick={() => handleClick()}>Fill Up the Form to start working with us</p>
                        </div>
                    </div>
                </div>
                <br />
                {/* <div>
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        <button className="button">Start Filling Form</button>
                    </a>
                </div> */}
                <div>
                    <button onClick={handleClick} className="button">Start Filling Form</button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default ContactUs
