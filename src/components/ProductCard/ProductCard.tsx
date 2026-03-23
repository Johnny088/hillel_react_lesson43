import type { ProductType } from '../../types/productType';
import { Button, Image } from './ProductCard.styled';
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
        <Image src={`${item.images[0]}`} alt="photo" />
      </p>
      <p>${item.price}</p>
      <Button onClick={clickHandler}>view more</Button>
    </>
  );
};
