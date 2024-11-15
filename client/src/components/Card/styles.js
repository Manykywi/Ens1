import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ContentContainer = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin: 0 0 10px;
`;

export const Price = styled.p`
  font-size: 1.2em;
  color: #888;
  margin: 0;
`;
