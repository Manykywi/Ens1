import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GridContainer = styled.div`
  > div {
    display: grid;
    display: flex;
    flex-wrap: wrap;
    max-width: 580px;
    gap: 20px;
  }
  > h2 {
    font-size: 64px;
    text-align: center;
    font-weight: 700;
  }
`;
