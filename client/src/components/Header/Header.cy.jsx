/// <reference types="cypress" />
import React from 'react';

import Header from './Header';

describe('Header Component', () => {
  it('renders the Header', () => {
    cy.mountWithProviders(<Header />);

    cy.getByDataCy('header').should('exist');
  });
});
