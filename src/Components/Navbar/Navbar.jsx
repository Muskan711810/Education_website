import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from  '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo}  alt=""  className='logo' />
      <ul>
        <li><link to='hero' smooth={true} offset={0} duration={500}>Home</link></li>
        <li><link to='program' smooth={true} offset={-260} duration={500}>Program</link></li>
        <li><link to='about' smooth={true} offset={-150} duration={500}>About Us</link></li>
        <li><link to='campus' smooth={true} offset={-260} duration={500}>Campus</link></li>
        <li><link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</link></li>
        <li><link to='contact' smooth={true} offset={-260} duration={500}
         className='btn'>Contact us</link></li>
      </ul>
    </nav>
  )
}

export default Navbar
