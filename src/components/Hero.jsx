import React from 'react'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"

function Hero() {
  return (
    <div className="hero">
      <h1>Hero</h1>

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