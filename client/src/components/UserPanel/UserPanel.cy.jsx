/// <reference types="cypress" />
import React from 'react';

import UserPanel from './UserPanel';

describe('UserPanel Component', () => {
  it('renders the UserPanel', () => {
    cy.mountWithProviders(<UserPanel />);

    cy.getByDataCy('user-panel').should('exist');
  });
});
