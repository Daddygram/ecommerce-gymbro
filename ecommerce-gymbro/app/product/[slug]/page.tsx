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