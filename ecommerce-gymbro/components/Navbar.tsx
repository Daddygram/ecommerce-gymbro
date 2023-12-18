import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../public/Logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='border-b  border-solid border-slate-200'>
      <div className='w-[100vw] flex-center max-w-7xl relative m-auto '>
        <a href='/' className='flex-center'>
          <Image src={logo} width={85} height={85} alt='gymbro' />
          <p className='text-2xl font-bold'>Gymbro-ჯიმბრო</p>
        </a>
      </div>
    </div>
    
  )
}

export default Navbar