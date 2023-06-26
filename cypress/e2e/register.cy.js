 
describe('RegisterPage',()=>{

    it('register a user With valid details',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('input#customer\\.firstName.input').type('John Doe');
        cy.get('input#customer\\.lastName.input').type('Smith');
        cy.get('input#customer\\.address\\.street.input').type('123 Main St');
        cy.get('input#customer\\.address\\.city.input').type('Delhi');
        cy.get('input#customer\\.address\\.state.input').type('Delhi');
        cy.get('input#customer\\.address\\.zipCode.input').type('654334');
        cy.get('input#customer\\.phoneNumber.input').type('9898980077');
        cy.get('input#customer\\.ssn.input').type('56789');
        cy.get('input#customer\\.username.input').type('Ravi@1234');
        cy.get('input#customer\\.password.input').type('Ravi@1234');
        cy.get('input#repeatedPassword.input').type('Ravi@1234');
        cy.get('input[type="submit"].button[value="Register"]').click();
        cy.title().should('eq','ParaBank | Customer Created')


    })
})