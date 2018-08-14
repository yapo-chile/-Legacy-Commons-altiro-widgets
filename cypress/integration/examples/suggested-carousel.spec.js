/// <reference types="Cypress" />

context('SuggestedAds', () => {
  const url = 'http://localhost:8089/api/v1/related/1';
  before(() => {
    cy.visit('http://localhost:8080')
  })
  // https://on.cypress.io/interacting-with-elements

  describe('Props', () => {
    it('carousel title', () => {
      const title = Cypress.$('suggested-ads-carousel')[0].title;
      cy.get('suggested-ads-carousel').then(carousel => {
        if (carousel[0].shadowRoot.querySelector('.suggested-ads__title')) {
          return carousel[0].shadowRoot.querySelector('.suggested-ads__title').textContent;
        } else {
          return '';
        }
      }).should('eq', title);
    });
    it('ad price', () => {
      cy.get('suggested-ads-carousel').then(carousel => {
        if (carousel[0].shadowRoot.querySelector('.suggested-ad__price')) {
          return carousel[0].shadowRoot.querySelector('.suggested-ad__price span').textContent;
        } else {
          return '';
        }
      }).should('eq', '$1.000,1');
    });
    it('ad title', () => {
      const title = Cypress.$('suggested-ads-carousel')[0].ads[0].title;
      cy.get('suggested-ads-carousel').then(carousel => {
        if (carousel[0].shadowRoot.querySelector('.suggested-ad__title')) {
          return carousel[0].shadowRoot.querySelector('.suggested-ad__title span').textContent;
        } else {
          return '';
        }
      }).should('eq', title);
    });
  });
  describe('@events', () => {
    it('ad click', () => {
      const url = Cypress.$('suggested-ads-carousel')[0].ads[0].url;
      cy.get('suggested-ads-carousel').then(carousel => {
        if (carousel[0].shadowRoot.querySelector('.suggested-ad')) {
          return carousel[0].shadowRoot.querySelector('.suggested-ad').click();
        } else {
          return '';
        }
      }).then(() => {
        cy.location('pathname').should('eq', url);
      });
    });
  });
});
