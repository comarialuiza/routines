describe('My first test', () => {
    it('Visits the kitchen sink', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Add task');
    })
})