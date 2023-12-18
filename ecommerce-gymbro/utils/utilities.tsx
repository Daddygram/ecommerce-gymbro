import { client } from '../sanity/lib/client';
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

export const getServerSideProduct = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    
  return products
  };

export const getServerSideBanner = async () => {
    
  const query2 = '*[_type == "banner"]'
  const banner = await client.fetch(query2)

  return banner
  };

// export const getStaticPaths = async () => {
//   const query = `*[_type == "product"] {
//     slug {
//       current
//     }
//   }
//   `;

//   const products = await client.fetch(query);

//   const paths = products.map((product:ProductQuery) => ({
//     params: { 
//       slug: product.slug.current
//     }
//   }));

//   return {
//     paths,
//     fallback: 'blocking' 
//   }
// }

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