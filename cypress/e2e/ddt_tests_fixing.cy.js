import accountBalance from "../fixtures/account_balance.json";
import { DashboardPage } from "../page-objects/tegb/dashboard_page";
import { TegbLoginPage } from "../page-objects/tegb/login_page";
describe("Data driven tests", () => {
  beforeEach(() => {
    new TegbLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
    new DashboardPage();
    //.clickAddAccount();
  });
  accountBalance.forEach((project) => {
    it(`DDT tests account balance: ${project.description}`, () => {
      const startBalance = project.startBalance;
      const type = project.type;
      // 1) Ověření, že když není na FE vytvořen account, nelze tedy chytit selectory na type a startBalance
      // new DashboardPage()
      //   .typeAccountBalance(project.startBalance)
      //   .typeAccountType(project.type);

      cy.log(startBalance);
      cy.log(type);

      // TODO 2) Zkusím ještě vylepšit test na BE pro DDT s type a startBalance u Account
    });
  });
});
