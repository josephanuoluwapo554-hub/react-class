import React from 'react'
import pic1 from "../assets/pics/college.jpg"
import pic2 from "../assets/pics/tiger.jpg"
import pic3 from "../assets/hero.png"
import pic4 from "../assets/pics/product.jpg"
import pic5 from "../assets/pics/prof.jpg"
import "../styles/Hero.css"

function Hero() {
  return (
    <div className="hero">
      <h1></h1>

      <div className="image-container">
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic4} alt="pic4" />
        <img src={pic5} alt="pic5" />
      </div>
    </div>
  )
}

export default Hero