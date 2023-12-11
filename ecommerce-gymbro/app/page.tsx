import React from 'react'

import { Product} from '../components'
import { getServerSideBanner, getServerSideProduct,} from '@/utils/utilities'

import HeroBanner from '@/components/HeroBanner'
import banner from '../public/banner.png'
import Image from 'next/image'

import { RiQuestionnaireFill } from "react-icons/ri";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const page  = async () => {

  const products = await getServerSideProduct()
  const banners = await getServerSideBanner()

  return (
    <>
      <div className='mb-[100px] flex-center w-full'>
        <Image src={banner} alt='banner' className='w-full' />
      </div>

      <div className='flex-center  flex-wrap gap-5'>
        {banners?.map((banner:any)=> <HeroBanner key={banner._id} banners={banner} />)}
      </div>

      <div className='mt-[100px]'>
        <h2>საუკეთესო პროდუქტები</h2>
        <p>სხვადასხვა ვარიაციის დანამატები</p>
      </div>

      <div className='products-container'>
        {products?.map((product:any)=> <Product key={product._id} product={product} />)}
      </div>

      <div className='w-[50%] m-auto mt-[100px] text-center bg-[#ebebeb]'>
        <div className='m-auto p-6'>
          <div className='w-[55px] m-auto mb-5'><RiQuestionnaireFill className='w-full h-[55px]' /></div>
          <div><h3 className='mb-3'>შეკითხვა გაქვს?</h3></div>
          <div><p className='max-w-[390px] m-auto'>ჩვენ აქ ვართ რომ დაგეხმაროთ! თუ თქვენ გაქვთ რაიმე შეკითხვა, დაგვიკავშირდით:</p></div>
          <div className='flex-center gap-3 mt-5'>
            <button className='contact-btn'><FaSquarePhoneFlip className='w-[20px] h-[20px]' /> ტელეფონი</button>
            <button className='contact-btn'><IoIosMail className='w-[23px] h-[23px]' /> მეილი</button>
          </div>
        </div>
      </div>
    </>
  )
}  



export default page