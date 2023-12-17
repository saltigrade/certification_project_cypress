export class AccountsPage {
  constructor() {}

  waitForAccountsApi() {
    cy.wait("@accounts_api").its("request.method").should("eq", "GET");
    return this;
  }
}
