import Card from '../../components/Card/Card';
import useGetProducts from '../../hooks/useGetProducts';
import { Banner, GridContainer } from './styles';

export default function Home() {
  const [{ products, isLoading, isError }] = useGetProducts();

  return (
    <div>
      <Banner data-cy="banner" />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}
      {!isLoading && !isError && (
        <GridContainer data-cy="product-list">
          {products.map((item, index) => (
            <Card key={index} imgSrc={item.imgSrc} title={item.title} price={item.price} />
          ))}
        </GridContainer>
      )}
    </div>
  );
}
