import React from 'react';

import { CardContainer, ContentContainer, Image, ImageContainer, Price, Title } from './styles';

const Card = ({ imgSrc, title, price }) => {
  return (
    <CardContainer data-cy="card">
      <ImageContainer>
        <Image src={imgSrc} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </ContentContainer>
    </CardContainer>
  );
};

export default Card;
