import { AccountsPage } from "./accounts_page";

export class DashboardPage {
  constructor() {
    this.addAccountButton = "button.account-action";
  }
  waitForLoginApi() {
    cy.wait("@profile_api");
    return this;
  }

  clickAddAccount() {
    cy.get(this.addAccountButton).click();
    return new AccountsPage();
  }
}

// export class DashboardPage {
//   constructor() {
//     this.accountsButton = '[data-testid="accounts_section_link"]';
//   }

//   waitForLoginApi() {
//     cy.wait("@login_api");
//     return this;
//   }

//   clickAccounts() {
//     cy.get(this.accountsButton).click();
//     return new AccountsPage();
//   }
// }
//     return new AccountsPage();
//   }
// }
