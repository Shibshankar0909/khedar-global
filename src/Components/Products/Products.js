import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductSlider from '../ProductSlider/ProductSlider'
// import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import './Products.css'

import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <ProductSlider />
      {/* <AboutUs/> */}
      <div className="text">
        <h1>Why Khedar Global?</h1>
        {/* <hr/> */}
        <p>Welcome to A Khedar Global, a prominent leader in the metal scrap import-export industry. Established with a vision to revolutionize the copper scrap recycling sector, our company is deeply committed to sustainability, integrity, and customer satisfaction. We pride ourselves on delivering top-quality metal materials, catering to diverse industry needs with unmatched reliability and efficiency.
          <br />
          <br />
          Our mission is to empower global trade in metals by providing seamless transactions that bridge international markets. Leveraging our extensive network, we ensure a streamlined supply chain that fosters strong partnerships and consistently exceeds expectations. At A Khedar Global, we specialize in copper, aluminium, and copper stripes, sourcing and processing these metals to the highest industry standards.
          <br />
          <br />
          With a focus on excellence, we strive to be the preferred choice for businesses seeking exceptional metal solutions worldwide. Our dedication to quality and sustainability ensures that our products are not only superior in performance but also environmentally friendly. Whether you're in need of raw materials for manufacturing or finished metal products, A Khedar Global is your trusted partner in driving industrial growth and innovation. Join us in our mission to create a sustainable future through responsible metal recycling and trade.


        </p>
        <h1>Copper</h1>
        {/* <hr/> */}
        <p>At A Khedar Global, we specialize in the import and export of top-quality copper, a metal renowned for its superior electrical conductivity, thermal conductivity, and resistance to corrosion. Our copper is sourced from trusted suppliers and meticulously processed to ensure it meets the highest standards of purity and performance. Copper is a cornerstone material in numerous industries due to its versatility and durability.
          <br />
          <br />
          Whether for electrical wiring, plumbing, industrial machinery, or telecommunications, our copper products deliver unmatched reliability and efficiency. We are committed to sustainability, ensuring that our copper is responsibly recycled and environmentally friendly. By choosing our copper, you invest in a product that combines excellent mechanical properties with eco-conscious production practices.</p>
        <h1>Aluminium</h1>
        <p>A Khedar Global offers premium aluminium, a metal celebrated for its lightweight, strength, and versatility. Our aluminium is ideal for applications that demand a combination of durability and low weight, making it indispensable in industries such as aerospace, automotive, and construction. We ensure that our aluminium products are processed to meet stringent industry standards, providing our clients with reliable and sustainable materials.
          <br />
          <br />
          Our aluminium's excellent corrosion resistance and high formability make it a preferred choice for a wide range of applications, from packaging and consumer goods to electrical and electronic equipment. At A Khedar Global, we prioritize sustainability, ensuring our aluminium is sourced and processed with minimal environmental impact.</p>
        <h1>Copper Stripes</h1>
        <p>Our copper stripes at A Khedar Global are engineered to meet the exacting standards of industries requiring high conductivity and durability. These copper stripes are ideal for specialized applications such as electrical components, transformers, and custom industrial uses. We ensure that each copper stripe is produced with precision, offering a smooth and uniform surface finish.
          <br />
          <br />
          With superior tensile strength and flexibility, our copper stripes are designed to withstand demanding environments while maintaining excellent performance. We are committed to providing products that not only meet but exceed industry standards, ensuring reliability and efficiency in every application. Choose our copper stripes for a high-quality, durable solution tailored to your specific needs.</p>
        <br />
        <br />
        <br />
        <div onClick={() => { navigate('/contact') }} className="btn">
          <button>
            Contact Us
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products
