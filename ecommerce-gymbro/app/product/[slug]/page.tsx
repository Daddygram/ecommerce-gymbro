import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { error } from 'console';

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
        <div className="flex-center w-[400px]">
          <img src={urlForImage(image && image[0])} className="product-detail-image" loading="lazy" />
        </div>
      </div>

      <div className="product-detail-desc">
        <h1 className='text-[3em]'>{name}</h1>
        <h4>დეტალები: </h4>
        <p>{details}</p>
        <p className="price">${price}</p>
        <div className="quantity">
          <h3 className=' text-[2em]'>რაოდენობა:</h3>
          <p className="quantity-desc flex-center">
            <span className="minus"><AiOutlineMinus /></span>
            <span className="num">0</span>
            <span className="plus"><AiOutlinePlus /></span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" >კალათაში დამატება</button>
          <button type="button" className="buy-now">ყიდვა</button>
        </div>
      </div>
    </div>
  </div>
  )
}


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product:ProductQuery) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking' 
  }
}

export const getProps = async ({ params }: queryProps) => {
  if (!params || !params.slug) {
    console.log(error);
    return {
      notFound: true,
    };
  }

  const { slug } = params;

  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

  const product = await client.fetch(query);

  return { product };
};

export default ProductPage