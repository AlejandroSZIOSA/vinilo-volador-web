///<reference types="cypress"/>
describe("user page", () => {
  it("User/ should display filtered value on home page", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("SEARCH").click();
    cy.get('input[type="radio"][value="album"]').check();
    cy.get('input[name="search"]').type("al1");
    cy.get("tr").should("contain", "al1");
  });
});
