import { TegbLoginPage } from "../../page-objects/tegb/login_page";

describe("E2E test TegB", () => {
  beforeEach(() => {
    new TegbLoginPage().openTegb();
  });
  it("Login, profile create and check, account check, logout", () => {
    new TegbLoginPage()
      .pageHeaderIsVisible()
      .logoIsVisible()
      .typeUsername(Cypress.env("tegb_account_username"))
      .typePassword(Cypress.env("tegb_account_password"))
      .clickLogin()
      .waitForProfileApi()
      .clickAdjustProfile()
      .fillFirstName("Sabina")
      .fillLastName("Parik")
      .fillEmail("sapa@example.org")
      .fillTelephone("+420601602603")
      .fillAge(21)
      .clickSaveChanges()
      .firstNameHasValue("Sabina")
      .lastNameHasValue("Parik")
      .emailHasValue("sapa@example.org")
      .telephoneHasValue("+420601602603")
      .ageHasValue(21)
      .accountNumberIsVisible()
      .accountNumberHasText(1000283)
      .accountBalanceIsVisible()
      .accountBalanceHasText("10000.00 Kč")
      .accountTypeIsVisible()
      .accountTypeHasText("Test")
      .clickLogout();
  });
});
