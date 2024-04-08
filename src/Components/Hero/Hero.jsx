import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education for a Better World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a quam aliquam, beatae iste quos quod voluptatum recusandae, facere animi veniam, officia minima.</p>
            <button className='btn'>Explore more <img src={arrow} alt=""/> </button>
        </div>

    </div>
  )
}

export default Hero