describe("my first test", () => {
  it("Visits the kitchen sink app", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Finds an element", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
  });

  it("Assert URL", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");
  });

  it("Type into email field", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
