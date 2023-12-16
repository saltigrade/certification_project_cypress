export class AccountsPage {
  constructor() {}

  waitForAccountsApi() {
    cy.wait("@accounts_api");
    return this;
  }
}
