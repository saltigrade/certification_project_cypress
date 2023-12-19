import { DashboardPage } from "../../page-objects/tegb/dashboard_page";
import { TegbLoginPage } from "../../page-objects/tegb/login_page";

describe("Wait for api login,profile and accounts in Tegb", () => {
  beforeEach(() => {
    new TegbLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .waitForLoginApi();
  });
  it("Wait for accounts api", () => {
    new DashboardPage()
      .waitForProfileApi()
      .clickAddAccount()
      .waitForAccountsApi();
  });
});
