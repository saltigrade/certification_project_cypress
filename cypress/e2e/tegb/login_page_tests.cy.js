const { LoginPage } = require("../../page-objects/tegb/login_page");

describe("Login page tests", () => {
  beforeEach(() => {
    new LoginPage().openTegb();
  });
  it("Login into tegb", () => {
    new LoginPage()
      .pageHeaderIsVisible()
      .logoIsVisible()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
