/// <reference types="Cypress" />

context('Project Planning', () => {
  beforeEach(() => {
    cy.server();
    cy.route('http://localhost:3000/api/plannedProjects', {
      projects: [
        {
          name: 'Project 1',
          owner: 'Person A',
          resourceRequirements: [],
        },
        {
          name: 'Project B',
          owner: 'Person 2',
          resourceRequirements: []
        }
      ]
    })
    cy.visit('http://localhost:3000/');
  });
  it('should list projects', () => {
    cy.get('nav').should('contain.text', 'Project 1');
    cy.get('nav').should('contain.text', 'Project B');
  });
})