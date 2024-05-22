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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veniam libero quia fuga quidem deserunt soluta voluptatibus dolorem quasi illo eum, sequi dignissimos iusto praesentium a placeat aliquid modi natus velit excepturi eos quod vero! Minima dolor sit quae corrupti aperiam temporibus, magnam fugiat iusto alias reiciendis ea aut libero quos voluptate necessitatibus iure accusantium facere voluptatibus ipsam velit non fuga animi. Quisquam aut optio obcaecati, error corrupti sed ipsum distinctio fuga, dolor non maxime sint sapiente recusandae saepe ab perspiciatis, sit consectetur accusamus? Magni, voluptatibus commodi optio architecto ex incidunt ea, facere et dignissimos officia, cum harum blanditiis maiores.</p>
                <button onClick={()=>handleClick()}>Read More</button>
            </div>
        </div>
    )
}

export default AboutUs
