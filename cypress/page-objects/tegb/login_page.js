export class LoginPage {
  constructor() {
    this.tegbUrl = "https://tegb-frontend-88542200c6db.herokuapp.com/";
    this.usernameInput = '[data-testid="username-input"]';
    this.passwordInput = '[data-testid="password-input"]';
    this.loginButton = '[data-testid="submit-button"]';
    this.registerButton = '[data-testid="register-button"]';
    this.forgetPasswordButton = '[data-testid="registration-link"]';
    this.pageHeader = "h1.title";
    this.logo = "img.logo";
  }
}
