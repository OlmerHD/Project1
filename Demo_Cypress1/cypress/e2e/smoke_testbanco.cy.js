describe("Test suite 1 - conjunto de pruebas", () => {

    it("Validar pagina de inicio", () => {

        cy.visit('https://buggy.justtestit.org/')
        cy.get('.center-block > .img-fluid').should('be.visible')
        cy.get(':nth-child(3) > .card > .card-block > h3')
    })



}) 