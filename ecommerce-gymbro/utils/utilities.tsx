import { client } from '../sanity/lib/client';

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

  return products
  };
