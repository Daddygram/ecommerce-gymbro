import { client } from '../sanity/lib/client';

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
