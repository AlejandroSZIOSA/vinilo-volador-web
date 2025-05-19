///<reference types="cypress"/>
describe("task page", () => {
  it("Admin/ should display filtered value on Show Page", () => {
    cy.visit("http://localhost:5173/login");
    cy.get('input[id="alias"]').type("user1");
    cy.get('input[name="password"]').type("123");
    cy.get('button[type="submit"]').click();
    cy.get("a").contains("Show").click(); // select element anchor then look for a text
    /*  cy.contains("show")  */
    cy.get('input[type="radio"][value="album"]').check();
    cy.get('input[placeholder="search title..."]').type("al1");
    cy.get("tr").should("contain", "al1"); // select table row and check if it contains text
  });
});
