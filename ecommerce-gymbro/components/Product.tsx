import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';

interface ProductProps {
  product: {
    _rev: string;
    _updatedAt: string;
    image: any;
    price: number;
    name: string;
    _id: string;
    slug: {
      current: string;
      _type: string;
    };
    _createdAt: string;
    _type: string;
  };
}

const Product: React.FC<ProductProps> = ({ product: { image, name, slug, price } }) => {
  
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlForImage(image && image[0])} alt="" 
          width={250} height={250}
          className='product-image'/>
          <p className='product-name'>{name}</p>
          <p className='product-price'>{price} ₾</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
