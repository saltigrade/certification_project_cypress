import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.addAccountButton = "button.account-action";
    this.adjustProfileButton = "button.profile-action";
    this.firstNameInput = "input[data-testid='chage-name-input']";
    this.lastNameInput = "input[data-testid='chage-surname-input']";
    this.emailInput = "input[data-testid='chage-email-input']";
    this.telephoneInput = "input[data-testid='chage-phone-input']";
    this.ageInput = "input[data-testid='chage-age-input']";
    this.saveChangesButton = "button[data-testid='save-changes-button']";
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
  clickAdjustProfile() {
    cy.get(this.adjustProfileButton).click();
    return this;
  }
  fillFirstName(firstname) {
    cy.get(this.firstNameInput).clear().type(firstname);
    return this;
  }
  fillLastName(lastname) {
    cy.get(this.lastNameInput).clear().type(lastname);
    return this;
  }
  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
    return this;
  }
  fillTelephone(phone) {
    cy.get(this.telephoneInput).clear().type(phone);
    return this;
  }
  fillAge(age) {
    cy.get(this.ageInput).clear().type(age);
    return this;
  }
  clickSaveChanges() {
    cy.get(this.saveChangesButton).click();
    return this;
  }
  firstNameHasValue(value) {
    cy.get(this.firstNameInput).should("have.value", value);
    return this;
  }
  lastNameHasValue(value) {
    cy.get(this.lastNameInput).should("have.value", value);
    return this;
  }
  emailHasValue(value) {
    cy.get(this.emailInput).should("have.value", value);
    return this;
  }
  telephoneHasValue(value) {
    cy.get(this.telephoneInput).should("have.value", value);
    return this;
  }
  ageHasValue(value) {
    cy.get(this.ageInput).should("have.value", value);
    return this;
  }

  clickAddAccount() {
    cy.get(this.addAccountButton).click();
    return new AccountsPage();
  }
}
