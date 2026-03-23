import { useEffect } from 'react';
import type { ProductType } from '../../types/productType';
import { ContainerDiv, ModalDiv, Button, Image } from './Modal.styled';
interface Props {
  product: ProductType;
  onClose: () => void;
}
export const Modal = ({ product, onClose }: Props) => {
  useEffect(() => {
    const handlerKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handlerKeyDown);
    return () => {
      removeEventListener('keydown', handlerKeyDown);
    };
  }, [onClose]);
  const onCloseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ContainerDiv onClick={onCloseHandler}>
      <ModalDiv>
        <Button onClick={onClose}>close</Button>
        <Image src={product.images[0]} alt="photo" />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </ModalDiv>
    </ContainerDiv>
  );
};
