import type { ProductType } from '../../types/productType';
import css from './productCard.module.css';
interface Props {
  item: ProductType;
  onModalOpen: (item: ProductType) => void;
}
export const ProductCard = ({ item, onModalOpen }: Props) => {
  const clickHandler = () => {
    onModalOpen(item);
  };
  return (
    <>
      <p>{item.title}</p>
      <p>
        <img className={css.image} src={`${item.images[0]}`} alt="photo" />
      </p>
      <p>${item.price}</p>
      <button onClick={clickHandler} className={css.viewBtn}>
        view more
      </button>
    </>
  );
};
