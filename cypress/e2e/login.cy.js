
describe('LoginPage', () => {

    it('verify the Title on the page', () => {
        //for open url 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
        cy.get("input[name='username']").type("Masum@123")
        cy.get("input[name='password']").type("Masum@123")
        cy.get("input[value='Log In']").click()
        cy.title().should('eq','ParaBank | Accounts Overview')
    })
})