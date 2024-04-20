import React from 'react'
import './Hero.css'
import  dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculm is design to empower students 
                with the knowlegde, skills and exeperiences needed to excel 
                in the dynamic field of education</p>
                <Link to='robotics' className='btn'>Explore more <img src={dark_arrow} alt="" /></Link>
        </div>
      
    </div>
  )
}

export default Hero
