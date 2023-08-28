 
describe('RegisterPage',()=>{

    it('register a user With valid details',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/register.htm')
        cy.get('input#customer\\.firstName.input').type('Ranii');
        cy.get('input#customer\\.lastName.input').type('Razaa');
        cy.get('input#customer\\.address\\.street.input').type('1534 Rani Main St');
        cy.get('input#customer\\.address\\.city.input').type('USAA');
        cy.get('input#customer\\.address\\.state.input').type('Bengalore');
        cy.get('input#customer\\.address\\.zipCode.input').type('160075');
        cy.get('input#customer\\.phoneNumber.input').type('1894532311');
        cy.get('input#customer\\.ssn.input').type('3224514');
        cy.get('input#customer\\.username.input').type('Ravaa@12345');
        cy.get('input#customer\\.password.input').type('Ravaa@12345');
        cy.get('input#repeatedPassword.input').type('Ravaa@12345');
        cy.get('input[type="submit"].button[value="Register"]').click();
        cy.title().should('eq','ParaBank | Customer Created')


    })
})