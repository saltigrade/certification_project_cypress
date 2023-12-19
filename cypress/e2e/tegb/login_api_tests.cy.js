import { UserApi } from "../../page-objects/tegb/user_api";

describe("TegB login API tests", () => {
  let username;
  let password;

  beforeEach(() => {
    username = Cypress.env("tegb_username");
    password = Cypress.env("tegb_password");

    cy.log(username);
    cy.log(password);
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
  });

  it("Login, check token, check status", () => {
    new UserApi().login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      expect(response.status).to.eq(201);
      cy.setCookie("userToken", response.body.access_token);
    });
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
  });
});
