import { faker } from "@faker-js/faker";
import { UserApi } from "../../page-objects/tegb/user_api";
import { AccountsApi } from "../../page-objects/tegb/accounts_api";

describe("Accounts Tests via BE", () => {
  let username;
  let password;
  let email;
  beforeEach(() => {
    username = faker.internet.userName();
    password = "certifikaceCypress";
    email = faker.internet.email();
    username = username.toLowerCase();
    cy.log(username);
    cy.log(password);
    cy.log(email);
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
  });
  it("Create user and account", () => {
    let startBalance = 10000;
    let type = "Test";
    let user = new UserApi();
    let accounts = new AccountsApi();
    user.register(username, password, email).then((response) => {
      cy.wrap(response.body.userId).as("user_id");
    });

    user.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      const token = response.body.access_token;
      cy.setCookie("userToken", token);

      cy.get("@user_id").then((userId) => {
        accounts.createAccount(token, userId, startBalance, type);
      });
    });
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
  });
});
