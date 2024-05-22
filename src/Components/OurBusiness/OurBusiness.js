import React from 'react';
import './OurBusiness.css';
import pic1 from './pic1.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function OurBusiness() {
  return (
    <>
    <Navbar/>
    <div className="grid-container">
        <div className="item">
            <h1>Our Business</h1>
            <p style={{color:'#133c67', fontWeight:'bold'}}>Looking for a relaible means of transportation in metal sector? Look no further. Contact us NOW!!</p>
            <p>Our expertise lies in :</p>
            <ul>
                <li>
                    Copper
                </li>
                <li>
                    Aluminum
                </li>
                <li>
                    Copper Strip
                </li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At maxime sapiente quisquam inventore possimus est vitae veniam voluptatum illum adipisci.
            </p>
        </div>
        <div className="item image" style={{backgroundImage: `url(${pic1})`}}>
            
        </div>
        <div className="item points" style={{paddingTop:"80px"}}>
            <h1>Our Business Philosophy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque commodi similique ipsam odio repudiandae amet accusantium porro voluptates rem possimus iusto quam a, dolorem illo, nulla veritatis aut error.</p>
        </div>
        <div className="item points" style={{paddingTop:"80px"}}>
            <h1>Our Business Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque commodi similique ipsam odio repudiandae amet accusantium porro voluptates rem possimus iusto quam a, dolorem illo, nulla veritatis aut error.</p>
        </div>
        <div className="item points">
            <h1>Our Business Commitment</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque commodi similique ipsam odio repudiandae amet accusantium porro voluptates rem possimus iusto quam a, dolorem illo, nulla veritatis aut error.</p>
        </div>
        <div className="item points">
            <h1>Our Competitive Advantage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cumque commodi similique ipsam odio repudiandae amet accusantium porro voluptates rem possimus iusto quam a, dolorem illo, nulla veritatis aut error.</p>
        </div>
    </div>
    <div className="btn">
        <button>
            Contact Us
        </button>
    </div>
    <Footer/>
    </>
  )
}

export default OurBusiness
