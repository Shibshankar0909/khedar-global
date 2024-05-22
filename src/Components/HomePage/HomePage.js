import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default HomePage
