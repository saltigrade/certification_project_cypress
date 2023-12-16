import { TegbLoginPage } from "../../page-objects/tegb/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new TegbLoginPage().openTegb();
  });
  it("Login into TegB", () => {
    new TegbLoginPage()
      .pageHeaderIsVisible()
      .logoIsVisible()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
