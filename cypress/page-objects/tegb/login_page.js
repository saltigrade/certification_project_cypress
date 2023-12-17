import { DashboardPage, HomePage } from "./dashboard_page";

export class TegbLoginPage {
  constructor() {
    this.tegbUrl = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.usernameInput = '[data-testid="username-input"]';
    this.passwordInput = '[data-testid="password-input"]';
    this.loginButton = '[data-testid="submit-button"]';
    this.registerButton = '[data-testid="register-button"]';
    this.forgetPasswordButton = '[data-testid="registration-link"]';
    this.pageHeader = "h1.title";
    this.logo = "img.logo";
    cy.intercept("/tegb/login").as("login_api");
    cy.intercept("/tegb/profile").as("profile_api");
    cy.intercept("/tegb/accounts").as("accounts_api");
  }

  openTegb() {
    cy.visit(this.tegbUrl);
    return this;
  }
  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }
  pageHeaderIsVisible() {
    cy.get(this.pageHeader).should("be.visible");
    return this;
  }
  logoIsVisible() {
    cy.get(this.logo).should("be.visible");
    return this;
  }
}
