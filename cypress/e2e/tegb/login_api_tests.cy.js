import { faker } from "@faker-js/faker";
import { UserApi } from "../../page-objects/tegb/user_api";

describe("TegB User Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.userName();
    password = "certifikaceCypress";
    email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
  });
  it("POST login to tegB with objects", () => {
    new UserApi()
      .login("Haskell.Denesik", "certifikaceCypress")
      .then((response) => {
        expect(response.status).to.eq(201);
      });
  });

  it("Get token", () => {
    new UserApi()
      .login("Haskell.Denesik", "certifikaceCypress")
      .as("login_response");
    cy.get("@login_response").then((response) => {
      cy.setCookie("access_token", response.body.access_token);
    });
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
  });
});
