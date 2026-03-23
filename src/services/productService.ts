import axios from 'axios';
import type { ProductType } from '../types/ProductType';

// axios queries
interface fetchProductsParams {
  search: string;
}

export const fetchProducts = async ({ search }: fetchProductsParams) => {
  const limit: number = 16;
  const { data } = await axios.get<{ products: ProductType[] }>(
    'https://dummyjson.com/products/search',
    {
      params: {
        q: search,
        limit,
      },
    },
  );
  return data;
};
