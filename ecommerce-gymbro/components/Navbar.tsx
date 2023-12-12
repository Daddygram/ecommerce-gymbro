import React from 'react'
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='border-b  border-solid border-slate-200'>
      <div className='navbar-container max-w-7xl m-auto '>
        <a href='/'>
          <img src="logo.png" alt="" className='logo'/>
        </a>

        <button type='button' className="cart-icon">
          <TiShoppingCart/>
          <span className='cart-item-qty'>0</span>
        </button>
      </div>
    </div>
    
  )
}

export default Navbar