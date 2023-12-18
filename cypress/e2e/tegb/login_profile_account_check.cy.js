import { TegbLoginPage } from "../../page-objects/tegb/login_page";

describe("Login page tests", () => {
  beforeEach(() => {
    new TegbLoginPage().openTegb();
  });
  it("Login into TegB", () => {
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
      .ageHasValue(21);
  });
});
