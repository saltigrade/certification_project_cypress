export class AccountsPage {
  constructor() {
    this.accountNumber = "td[data-testid='account-number']";
    this.accountBalance = "td[data-testid='account-balance']";
    this.accountType = "td[data-testid='account-type']";
  }

  waitForAccountsApi() {
    cy.wait("@accounts_api").its("request.method").should("eq", "GET");
    return this;
  }
  selectAccountNumber(number) {
    cy.get(this.accountNumber).type(number);
    return this;
  }
  selectAccountBalance(startBalance) {
    cy.get(this.accountBalance).type(startBalance);
    return this;
  }
  selectAccountType(type) {
    cy.get(this.accountType).type(type);
    return this;
  }
}
