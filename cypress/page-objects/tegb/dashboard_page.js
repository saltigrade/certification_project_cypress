import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.addAccountButton = "button.account-action";
  }
  waitForLoginApi() {
    cy.wait("@login_api").its("request.method").should("eq", "POST");
    // .its("response.statusCode")
    // .should("eq", 201);
  }
  // Snaha provézt v jedné metodě či funkci cy.wait více its nebo více should
  // haveLoginInfo() {
  //   cy.get("@login_api").should(({ request, response }) => {
  //     expect(request.method).to.eq("POST");
  //     expect(response.statusCode).to.eq(201);
  //   });
  //}
  // Z CYPRESS DOKUMENTACE
  //and we can place multiple assertions in a
  // single "should" callback
  //cy.get('@new-user').should(({ request, response }) => {
  // expect(request.url).to.match(/\/users$/)
  //expect(request.method).to.equal('POST')

  waitForProfileApi() {
    cy.wait("@profile_api").its("request.method").should("eq", "GET");
    return this;
  }

  clickAddAccount() {
    cy.get(this.addAccountButton).click();
    return new AccountsPage();
  }
}
