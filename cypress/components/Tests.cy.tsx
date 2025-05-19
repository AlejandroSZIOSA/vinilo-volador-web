import { Greeting } from "../../src/components/TestComponent";
import { mount } from "@cypress/react";
describe("<Greeting />", () => {
  it("renders a name", () => {
    mount(<Greeting name="Alice" />);
    cy.contains("Hello, Alice!");
  });
});
