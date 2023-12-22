import { DashboardPage } from "../../../page-objects/tegb/dashboard_page";
import { TegbLoginPage } from "../../../page-objects/tegb/login_page";

describe("Atomic test for TegB Dashboard", { testIsolation: false }, () => {
  before(() => {
    new TegbLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_account_username"))
      .typePassword(Cypress.env("tegb_account_password"))
      .clickLogin();
    new DashboardPage();
  });
  context("Header", () => {
    it("Header kontrola", () => {
      new DashboardPage().checkPageHeader();
    });
  });
  context("Logo", () => {
    it("Logo is visible", () => {
      new DashboardPage().logoIsVisible();
    });
  });
  context("Menu on the left side", () => {
    it("Domů kontrola", () => {
      new DashboardPage().firstItem();
    });

    it("Účty kontrola", () => {
      new DashboardPage().secondItem();
    });

    it("Transakce kontrola", () => {
      new DashboardPage().thirdItem();
    });

    it("Podpora kontrola", () => {
      new DashboardPage().fourthItem();
    });
  });
  context("Content of dashboard - profile details", () => {
    it("Profile detail", () => {});
  });
  context("Content of Dashboard - account details", () => {
    it("Account button", () => {
      new DashboardPage().addAccountIsVisible();
    });
  });
});
