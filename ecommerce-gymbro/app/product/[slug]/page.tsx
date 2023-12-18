import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

import { urlForImage } from '@/sanity/lib/image';
import { getProps } from '@/utils/utilities';

interface ProductQuery {
  slug: {
    current:string
  };
}

interface queryProps {
  params: {
    slug: {
      current: string;
    };
  }
}


const ProductPage = async ({params}:queryProps) => {
  const { product, notFound } = await getProps({ params });

  if (notFound) {
    return <div>Product not found</div>;
  }
  const { image, name, details, price } = product;
  
  return (
    <div>
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlForImage(image && image[0])} className="product-detail-image" loading="lazy" />
        </div>
      </div>

      <div className="product-detail-desc">
        <h1 className='text-[3em]'>{name}</h1>
        <h4 className='text-lg font-semibold'>დეტალები: </h4>
        <p>{details}</p>
        <p className="price">₾{price}</p>
        <div className="buttons">
          <a href="https://www.facebook.com/profile.php?id=100092759055862" target='_blank'><button type="button" className="buy-now">ყიდვა</button></a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductPage


