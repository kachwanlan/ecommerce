import React, { useRef, useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import './Navbar.css';
import { FaBars, FaTimesCircle, FaOpencart } from 'react-icons/fa';


function Navbar() {
   const { cartItems } = useContext(StateContext);
   const navRef = useRef();

   const showNavbar = () => {
    //  navRef.current.classList.toggle('reponsive-nav');
     navRef.current.classList.toggle('responsive-nav');
   }

  return (
    <nav >

        <div className='logo-container'><a href='/'><img className="logo" src='../amazonlogo1.webp' alt='amazon logo' /></a></div>
      
      <div className='nav-form-container'> <input className='nav-form' type='text' /> </div>    

      <ul ref={navRef}>
        <a href='/'>Home</a>
        {/* <a href='/#'>About</a> */}
        <a href='/contact'>Contacts</a>
        <a href='/product'>Products</a>
        <a href='/cart' className='cart-container' >
          <span className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</span>
          <FaOpencart className='cart' />
        </a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar} > <FaTimesCircle/> </button>
      </ul>

      <button className='nav-btn' onClick={showNavbar}> <FaBars/> </button>       

    </nav>
  );
}

export default Navbar;
