describe('My first test', () => {
    it('Visits the main page', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Add task');
    })
})

describe('Add a task', () => {
    it('Adds a new morning task', () => {
        cy.get('.inputMorning')
            .type('Eat some fruit')
            .should('have.value', 'Eat some fruit')
        cy.get('.buttonMorning')
            .click()
        cy.get('.routineMorning')
            .children()
            .contains('Eat some fruit')
    })
});

describe('Delete a task', () => {
    it('Deletes task from list', () => {
        cy.get('.routineMorning')
            .contains('Eat some fruit')
                .next()
                .click()
        cy.get('.routineMorning')
            .contains('Eat some fruit')
            .should('not.exist')
    })
})