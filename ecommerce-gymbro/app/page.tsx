import React from 'react'

import { Product, Navbar, Footer } from '../components'
import { getServerSideProps } from '@/utils/utilities'

const page  = async () => {

  const products = await getServerSideProps()

  return (
    <>
      <div>
        <h2>Best Selling Products</h2>
        <p>Supplements of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product:any)=> <Product key={product._id} product={product} />)}
      </div>
    </>
  )
}  



export default page