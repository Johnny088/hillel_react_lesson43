import type { ProductType } from '../../types/productType';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productService';
import { ProductList } from '../ProductList/ProductList';
import { SearchForm } from '../SearchForm/SearchForm';
import { Modal } from '../Modal/Modal';
export const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<null | ProductType>(
    null,
  );

  const onModalOpen = (product: ProductType): void => {
    setSelectedProduct(product);
  };

  const onModalClose = (): void => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const getProducts = async () => {
      const { products } = await fetchProducts({ search });
      setProducts(products);
    };
    getProducts();
  }, [search]);
  const searchQuery = (newQuery: string): void => {
    setSearch(newQuery);
  };
  return (
    <>
      <SearchForm searchQuery={searchQuery} />
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={onModalClose} />
      )}
      {products.length > 0 ? (
        <ProductList products={products} onModalOpen={onModalOpen} />
      ) : (
        <h2>Nothing was found</h2>
      )}
    </>
  );
};
