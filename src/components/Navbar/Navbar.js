import React from 'react'
import './Navbar.css';
import {Link, useLocation} from 'react-router-dom'
import logo from '../../assets/shophere.png'

function Navbar({totalItems}) {
    const location = useLocation();
  return (
    <nav>
      <Link to='/'>
      <div className='logo'>
            <img src={logo} alt='commerce.js' />
            <h3>ShopHere</h3>
        </div>
    </Link>
  {
      location.pathname === '/' && (
        <Link to='/cart'>
        <div className='nav-cart-container'>
         <i className='fas fa-shopping-cart'></i>
         <h6 className='badge'>{totalItems}</h6>
         </div></Link>
      )
  }
     
      
    </nav>
  )
}

export default Navbar
