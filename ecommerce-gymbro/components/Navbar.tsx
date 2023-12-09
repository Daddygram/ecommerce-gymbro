import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='navbar-container'>

      <a href='/'>
        <img src="logo.png" alt="" className='logo'/>
      </a>

      <button type='button' className="cart-icon">
        <TiShoppingCart/>
        <span className='cart-item-qty'>0</span>
      </button>
      
    </div>
  )
}

export default Navbar