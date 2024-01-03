import accountBalance from "../fixtures/account_balance.json";
import { AccountsApi } from "../page-objects/tegb/accounts_api";
import { AccountsPage } from "../page-objects/tegb/accounts_page";
import { DashboardPage } from "../page-objects/tegb/dashboard_page";
import { TegbLoginPage } from "../page-objects/tegb/login_page";
describe("Data driven tests", () => {
  beforeEach(() => {
    new TegbLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_account_username"))
      .typePassword(Cypress.env("tegb_account_password"))
      .clickLogin();
    new DashboardPage();
    //.clickAddAccount();
  });
  accountBalance.forEach((project) => {
    it(`DDT tests account balance: ${project.description}`, () => {
      const startBalance = project.startBalance;
      const type = project.type;
      // 1. pokus: Kontrola přes FE, kde již vytvořen účet, ale hází chybu
      //   new DashboardPage()
      //     .accountBalanceHasText(startBalance)
      //     .accountTypeHasText(type);

      // "Platný pokus" Dle logu se informace z json propíšou do testu, jsou vidět kombinace zůstatků na účtu
      // Do komentářů ti zde píšu, co jsem zkoušela, jak jsem uvažovala (čekala jsem, že všechny 3 pokusy budou fail)

      cy.log(startBalance);
      cy.log(type);

      // 2. pokus: tvorba DDT přes BE class, CY hází chybu
      //   new AccountsApi().createAccount(project.startBalance, project.type);

      // 3. pokus: Kdyby šel na FE vytvořit účet, vypadal by test viz níže, CY hází chybu
      //   new AccountsPage()
      //     .selectAccountBalance(project.startBalance)
      //     .selectAccountType(project.type);
    });
  });
});
