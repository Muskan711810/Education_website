import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      <ul className={mobileMenu ? 'show-mobile-menu' : ''}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={closeMobileMenu}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to='robotics' smooth={true} offset={-150} duration={500} onClick={closeMobileMenu}>Robotics</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={closeMobileMenu}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={closeMobileMenu}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={closeMobileMenu}>Contact us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
