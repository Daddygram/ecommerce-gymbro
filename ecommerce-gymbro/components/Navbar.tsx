import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../public/Logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='border-b  border-solid border-slate-200'>
      <div className='w-[100vw] flex-between max-w-7xl relative m-auto '>
        <a href='/'>
          <Image src={logo} width={85} height={85} alt='gymbro' />
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