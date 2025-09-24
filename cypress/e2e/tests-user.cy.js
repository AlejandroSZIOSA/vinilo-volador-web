///<reference types="cypress"/>
describe("User Pages", () => {
  it("User Page, Should display filtered artist", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Vinyls").click();
    cy.get('input[type="radio"][value="artist"]').check();
    cy.get('input[name="search"]').type("u2");
    cy.get("tr").should("contain", "U2");
  });

  /* it("User Page, Should display filtered album", () => {
    cy.visit("http://localhost:5173/");
    cy.get("button").contains("Vinyls").click();
    cy.get('input[type="radio"][value="album"]').check();
    cy.get('input[name="search"]').type("animals");
    cy.get("tr").should("contain", "Pink Floyd");
    cy.get("td").should("contain", "Animals");
  }); */
});
