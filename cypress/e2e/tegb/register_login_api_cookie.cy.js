import { faker } from "@faker-js/faker";
import { UserApi } from "../../page-objects/tegb/user_api";

describe("TegB User API Tests", () => {
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

  it("Register and login with set cookie, check status", () => {
    let user = new UserApi();
    user.register(username, password, email).then((response) => {
      expect(response.body.email).to.be.a("string");
    });
    user.login(username, password).as("login_response");
    cy.get("@login_response").then((response) => {
      expect(response.status).to.eq(201);

      cy.setCookie("userToken", response.body.access_token);
    });
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
  });
});
