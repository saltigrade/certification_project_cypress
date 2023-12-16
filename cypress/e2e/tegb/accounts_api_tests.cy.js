import { DashboardPage } from "../../page-objects/tegb/dashboard_page";
import { TegbLoginPage } from "../../page-objects/tegb/login_page";

describe("Accounts tests in Tegb", () => {
  beforeEach(() => {
    new TegbLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .waitForLoginApi();
  });
  it("Accounts", () => {
    new DashboardPage().clickAddAccount().waitForAccountsApi();
  });
});
