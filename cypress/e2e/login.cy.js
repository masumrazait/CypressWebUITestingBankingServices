
describe('LoginPage', () => {

    it('verify the Title on the page', () => {
        //for open url 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
        cy.get("input[name='username']").type("Masum@123")
        cy.get("input[name='password']").type("Masum@123")
        cy.get("input[value='Log In']").click()
        cy.title().should('eq','ParaBank | Accounts Overview')
        cy.get("a[href='/parabank/logout.htm']").click()
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
    })

    it('Bill Payment', () => {
        //for open url 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
        cy.get("input[name='username']").type("Masum@123")
        cy.get("input[name='password']").type("Masum@123")
        cy.get("input[value='Log In']").click()
        cy.title().should('eq','ParaBank | Accounts Overview')
        cy.get("a[href='/parabank/billpay.htm']").click()
        cy.title().should('eq','ParaBank | Bill Pay')
        cy.get("input[name='payee.name']").type("Ashish")
        cy.get("input[name='payee.address.street']").type("Delhi")
        cy.get("input[name='payee.address.city']").type("Dwarika")
        cy.get("input[name='payee.address.state']").type("Delhi")
        cy.get("input[name='payee.address.zipCode']").type("100010")
        cy.get("input[name='payee.phoneNumber']").type("9833222233")
        cy.get("input[name='payee.accountNumber']").type("121")
        cy.get("input[name='verifyAccount']").type("121")
        cy.get("input[name='amount']").type("1")
        cy.get("input[value='Send Payment']").click()

        cy.title().should('eq','ParaBank | Bill Payment Complete')
        cy.get("a[href='/parabank/logout.htm']").click()
        cy.title().should('eq','ParaBank | Welcome | Online Banking')
        
    })

    

    it('verify the Title on the page', () => {
        //for open url 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.title().should('eq','ParaBank | Welcome | Online Banking')

        cy.get("//*[text() = \"About Us\"]").click()
        cy.title().should('eq','ParaBank | About Us')
    })
})