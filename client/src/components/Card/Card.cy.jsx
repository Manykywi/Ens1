/// <reference types="cypress" />
import React from 'react';

import Card from './Card';

describe('Card Component', () => {
  const mockData = {
    imgSrc: 'https://via.placeholder.com/150',
    title: 'Test Title',
    price: '$10.00',
  };

  it('renders the Card component with correct data', () => {
    cy.mount(<Card imgSrc={mockData.imgSrc} title={mockData.title} price={mockData.price} />);

    cy.getByDataCy('card').should('exist');
  });
});
