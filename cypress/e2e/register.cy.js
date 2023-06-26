 
describe('RegisterPage',()=>{

    it('register a user With valid details',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')

       // cy.get("//*[text() = \"Register\"]").click()
        cy.title().should('eq','ParaBank | Register for Free Online Account Access')
        cy.get("//input[@id='customer.firstName']").type("Ravi")
        cy.get("//input[@id='customer.lastName']").type("Sankar")
        cy.get("//input[@id='customer.address.street']").type("Delhi")
        cy.get("//input[@id='customer.address.city']").type("Dwarika")
        cy.get("//input[@id='customer.address.state']").type("Delhi")
        cy.get("//input[@id='customer.address.zipCode']").type("654334")
        cy.get("//input[@id='customer.phoneNumber']").type("9898980077")
        cy.get("//input[@id='customer.ssn']").type("56789")
        cy.get("//input[@id='customer.username']").type("Ravi@123")
        cy.get("//input[@id='customer.password']").type("Ravi@123")
        cy.get("//input[@id='repeatedPassword']").type("Ravi@123")

        cy.get("//input[@value='Register']").click()
        cy.title().should('eq','ParaBank | Customer Created')


    })
})