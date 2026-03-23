import type { ProductType } from '../../types/productType';
import { ProductCard } from '../ProductCard/ProductCard';
import css from './productList.module.css';
interface Props {
  products: ProductType[];
  onModalOpen: (product: ProductType) => void;
}
export const ProductList = ({ products, onModalOpen }: Props) => {
  const reviewHandler = () => {};
  return (
    <ul className={css.container}>
      {products.map(product => (
        <li onClick={reviewHandler} key={product.id} className={css.cardBox}>
          <ProductCard item={product} onModalOpen={onModalOpen} />
        </li>
      ))}
    </ul>
  );
};
