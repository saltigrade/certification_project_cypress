import { AccountsPage } from "./accounts_page";
import { TegbLoginPage } from "./login_page";
import { createCustomElement } from "../../helpers/custom_element";

export class DashboardPage {
  constructor() {
    this.addAccountButton = createCustomElement("button.account-action");
    this.adjustProfileButton = "button.profile-action";
    this.firstNameInput = "input[data-testid='chage-name-input']";
    this.lastNameInput = "input[data-testid='chage-surname-input']";
    this.emailInput = "input[data-testid='chage-email-input']";
    this.telephoneInput = "input[data-testid='chage-phone-input']";
    this.ageInput = "input[data-testid='chage-age-input']";
    this.saveChangesButton = "button[data-testid='save-changes-button']";
    this.accountNumber = createCustomElement(
      "td[data-testid='account-number']"
    );
    this.accountBalance = createCustomElement(
      "td[data-testid='account-balance']"
    );
    this.accountType = createCustomElement("td[data-testid='account-type']");
    this.logoutButton = "button.logout-link";
    this.pageHeader = createCustomElement("span.app-title");
    this.logo = createCustomElement("img.logo");
    this.menuFirstItem = createCustomElement("li:nth-child(1)");
    this.menuSecondItem = createCustomElement("li:nth-child(2)");
    this.menuThirdItem = createCustomElement("li:nth-child(3)");
    this.menuFourthItem = createCustomElement("li:nth-child(4)");
    this.firstNameDetail = createCustomElement(
      "div.profile-detail[data-testid='name']"
    );
    this.lastNameDetail = createCustomElement(
      "div.profile-detail[data-testid='surname']"
    );
    this.emailDetail = createCustomElement(
      "div.profile-detail[data-testid='email']"
    );
    this.telephoneDetail = createCustomElement(
      "div.profile-detail[data-testid='phone']"
    );
    this.ageDetail = createCustomElement(
      "div.profile-detail[data-testid='age']"
    );
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

  accountNumberHasText(numberText) {
    this.accountNumber.get().should("have.text", numberText);
    return this;
  }
  accountBalanceHasText(numberBalance) {
    this.accountBalance.get().should("have.text", numberBalance);
    return this;
  }
  accountTypeHasText(text) {
    this.accountType.get().should("have.text", text);
    return this;
  }
  accountNumberIsVisible() {
    this.accountNumber.get().should("be.visible");
    return this;
  }
  accountBalanceIsVisible() {
    this.accountBalance.get().should("be.visible");
    return this;
  }
  accountTypeIsVisible() {
    this.accountType.get().should("be.visible");
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new TegbLoginPage();
  }

  clickAddAccount() {
    this.addAccountButton.get().click();
    return new AccountsPage();
  }
  addAccountIsVisible() {
    this.addAccountButton.get().should("be.visible");
    return new AccountsPage();
  }
  accountNumberCheck(number) {
    this.accountNumber.isExisting().isVisible().hasText(number);
  }
  accountBalanceCheck(balance) {
    this.accountBalance.isExisting().isVisible().hasText(balance);
  }
  accountTypeCheck(type) {
    this.accountType.isExisting().isVisible().hasText(type);
  }

  firstItem(firstItem) {
    this.menuFirstItem.isExisting().isVisible().hasText(firstItem);
  }
  secondItem(secondItem) {
    this.menuSecondItem.isExisting().isVisible().hasText(secondItem);
  }
  thirdItem(thirdItem) {
    this.menuThirdItem.isExisting().isVisible().hasText(thirdItem);
  }
  fourthItem(fourtItem) {
    this.menuFourthItem.isExisting().isVisible().hasText(fourtItem);
  }
  checkPageHeader(headerText) {
    this.pageHeader.isExisting().isVisible().hasText(headerText);
  }
  logoIsVisible() {
    this.logo.isVisible();
  }
  firstNameCheck(firstName) {
    this.firstNameDetail.isExisting().isVisible().containsText(firstName);
  }
  lastNameCheck(lastName) {
    this.lastNameDetail.isExisting().isVisible().containsText(lastName);
  }
  emailCheck(email) {
    this.emailDetail.isExisting().isVisible().containsText(email);
  }
  telephoneCheck(phone) {
    this.telephoneDetail.isExisting().isVisible().containsText(phone);
  }
  ageCheck(age) {
    this.ageDetail.isExisting().isVisible().containsText(age);
  }
}
