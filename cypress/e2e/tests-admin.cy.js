///<reference types="cypress"/>
describe("Admin Pages", () => {
  /* it("Admin Show Page, Should display filtered artist", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[id="alias"]').type("admin");
    cy.get('input[name="password"]').type("123");
    cy.get('button[type="submit"]').click();
    cy.get("a").contains("Show").click(); // select element anchor then look for a text
    cy.get('input[type="radio"][value="artist"]').check();
    cy.get('input[name="search"]').type("pink floyd");
    cy.get("tr").should("contain", "Pink Floyd"); // select table row and check if it contains text
  }); */

  it("Admin Edit Page, Should edit an selected item", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[id="alias"]').type("admin");
    cy.get('input[name="password"]').type("123");
    cy.get('button[type="submit"]').click();
    cy.get("a").contains("Edit").click();

    cy.get("tr").contains("Bob Dylan").parent().find("button").click();
    cy.get('input[id="artist"]').clear().type("Bob Dylan Edited");
    cy.get("button").contains("Done").click(); //Confirmation Dialog
    cy.get("button").contains("Confirm").click(); //Confirmation Dialog

    cy.get("td").should("contain", "Bob Dylan Edited");
  });
});
