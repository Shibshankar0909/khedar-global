import React from 'react';
import './OurBusiness.css';
import pic1 from './pic1.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

function OurBusiness() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="grid-container">
                <div className="item">
                    <h1>Our Business</h1>
                    <p style={{ color: '#133c67', fontWeight: 'bold' }}>At A Khedar Global, our focus lies in the import-export of metal scrap, including copper scrap, with a strong emphasis on recycling and reuse. We serve as a vital link in the global movement of recyclable materials, connecting suppliers and buyers across borders through our extensive network. Committed to sustainability, we actively promote eco-friendly practices within the industry, driving positive environmental change. Our dedication extends to prioritizing customer satisfaction, offering personalized solutions and exceptional service to all our clients.</p>
                    <p>Our expertise lies in :</p>
                    <ul>
                        <li>
                            Importing and exporting various metal scraps, including copper.
                        </li>
                        <li>
                            Connecting scrap suppliers with buyers worldwide.
                        </li>
                        <li>
                            Efficient logistics management for timely deliveries.
                        </li>
                    </ul>
                    <p>At A Khedar Global, we excel in importing and exporting copper scrap, fostering sustainability, and ensuring superior customer service through global logistics and innovative recycling solutions.
                    </p>
                </div>
                <div className="item image" style={{ backgroundImage: `url(${pic1})` }}>

                </div>
                <div className="item points" style={{ paddingTop: "80px" }}>
                    <h1>What We Do</h1>
                    <p>We specialize in bringing metal scrap from one place to another, offering a wide range of services to suit our clients' needs worldwide. From finding top-notch scrap materials to organizing the transportation and making sure everything arrives on time, we take care of every step of the import-export journey with attention to detail and dedication.

                    </p>
                </div>
                <div className="item points" style={{ paddingTop: "80px" }}>
                    <h1>Our Mission</h1>
                    <p>At  A KHEDAR GLOBAL  is clear: we aim to help metal scrap move around the world while also caring for the environment and boosting economies. We want to be the go-to choice for businesses needing dependable, green scrap ,Copper scrap ,Aluminium metal solutions.
                    </p>
                </div>
                <div className="item points">
                    <h1>Our Valuest</h1>
                    <p>We conduct our business with honesty, transparenc. We are committed to minimizing our environmental footprint by promoting responsible recycling practices and reducing waste generation. excellence in everything we do, delivering superior quality products and services that exceed our customers' expectations.
                    </p>
                </div>
                <div className="item points">
                    <h1>Why Choose Us</h1>
                    <p>We link you up with the right resources and markets worldwide through our vast network of partners. Our strong commitment to sustainability means we're all about eco-friendly practices, making a positive impact in the industry. But most importantly, we're here for you. Our focus is on building lasting relationships and going above and beyond to meet your needs every step of the way.
                    </p>
                </div>
            </div>
            <div onClick={() => { navigate('/contact') }} className="btn">
                <button>
                    Contact Us
                </button>
            </div>
            <Footer />
        </>
    )
}

export default OurBusiness
