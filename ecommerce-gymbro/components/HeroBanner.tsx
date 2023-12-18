import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'

interface bannerProps {
  banners: {
    _createdAt: string,
    _rev: string,
    _type: string,
    name: string,
    _id: string,
    _updatedAt: string,
    slug: { 
      current: string,
      _type: string },
    image: any
  }
}

const HeroBanner:React.FC<bannerProps> = ({banners: {image, slug}}) => {
  return (
    <div className='hero-banner-container flex-center w-[440px]'>
      <img src={urlForImage(image && image[0])} alt="" 
      className='cursor-pointer'/>
    </div>
  )
}

export default HeroBanner