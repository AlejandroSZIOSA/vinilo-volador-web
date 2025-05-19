///<reference types="cypress"/>
describe("user page", () => {
  it("User/ should display filtered value on home page", () => {
    cy.visit("http://localhost:5173/");
  });
});
