import type { ProductType } from '../../types/productType';
import { ProductCard } from '../ProductCard/ProductCard';

import { Li, Ul } from './ProductList.styled';
interface Props {
  products: ProductType[];
  onModalOpen: (product: ProductType) => void;
}
export const ProductList = ({ products, onModalOpen }: Props) => {
  const reviewHandler = () => {};
  return (
    <Ul>
      {products.map(product => (
        <Li onClick={reviewHandler} key={product.id}>
          <ProductCard item={product} onModalOpen={onModalOpen} />
        </Li>
      ))}
    </Ul>
  );
};
