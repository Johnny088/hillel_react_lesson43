import { useEffect } from 'react';
import type { ProductType } from '../../types/productType';
import css from './modal.module.css';
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
  return (
    <div onClick={onClose} className={css.backdrop}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className={css.closeBtn}>
          close
        </button>
        <img src={product.images[0]} alt="photo" className={css.image} />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};
