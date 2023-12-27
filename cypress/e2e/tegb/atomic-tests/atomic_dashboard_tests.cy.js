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
    it("Header check", () => {
      cy.log("Header check");
      let headerText = "TEG#B Dashboard";
      new DashboardPage().checkPageHeader(headerText);
    });
  });
  context("Logo", () => {
    it("Logo is visible", () => {
      new DashboardPage().logoIsVisible();
    });
  });
  context("Menu on the left side check", () => {
    it("First item check", () => {
      let firstItem = "Domů";
      new DashboardPage().firstItem(firstItem);
    });

    it("Second item check", () => {
      let secondItem = "Účty";
      new DashboardPage().secondItem(secondItem);
    });

    it("Third item check", () => {
      let thirdItem = "Transakce";
      new DashboardPage().thirdItem(thirdItem);
    });

    it("Fourth item check", () => {
      let fourthItem = "Podpora";
      new DashboardPage().fourthItem(fourthItem);
    });
  });
  context("Content of dashboard - profile details", () => {
    it("Profile Name check", () => {
      let firstName = "Sabina";
      new DashboardPage().firstNameCheck(firstName);
    });
    it("Profile Last Name check", () => {
      let lastName = "Parik";
      new DashboardPage().lastNameCheck(lastName);
    });
    it("Profile Email check", () => {
      let email = "sapa@example.org";
      new DashboardPage().emailCheck(email);
    });
    it("Profile Telephone check", () => {
      let phone = "+420601602603";
      new DashboardPage().telephoneCheck(phone);
    });
    it("Profile Age check", () => {
      let age = 21;
      new DashboardPage().ageCheck(age);
    });
  });
  context("Content of Dashboard - account details", () => {
    it("Account button", () => {
      new DashboardPage().addAccountIsVisible();
    });
    it("Account number check", () => {
      let number = "1000283";
      new DashboardPage().accountNumberCheck(number);
    });
    it("Account balance check", () => {
      let balance = "10000.00 Kč";
      new DashboardPage().accountBalanceCheck(balance);
    });
    it("Account type check", () => {
      let type = "Test";
      new DashboardPage().accountTypeCheck(type);
    });
  });
});
