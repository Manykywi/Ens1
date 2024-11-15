import React from 'react';

import Card from '../../components/Card/Card';
import useGetProducts from '../../hooks/useGetProducts';
import { GridContainer, ProductsContainer } from './styles';

export default function Products() {
  const [{ products, isLoading, isError }] = useGetProducts();

  return (
    <ProductsContainer>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}
      {!isLoading && !isError && (
        <>
          <GridContainer>
            <h2 data-cy="top-sellers">Топ продажу</h2>
            <div>
              {products.map((item, index) => (
                <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} />
              ))}
            </div>
          </GridContainer>
          <GridContainer>
            <h2 data-cy="discount-section">Сьогознижка</h2>
            <div>
              {products.map((item, index) => (
                <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} />
              ))}
            </div>
          </GridContainer>
        </>
      )}
    </ProductsContainer>
  );
}
