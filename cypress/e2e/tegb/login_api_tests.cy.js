import { faker } from "@faker-js/faker";
import { UserApi } from "../../page-objects/tegb/user_api";

describe("TegB User Tests", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = username;
    password = "certifikaceCypress";
    //email = faker.internet.email();
    cy.log(username);
    cy.log(password);
    cy.log(email);
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
  });

  // it("POST login to tegB with objects", () => {
  //   let user = new UserApi();
  //   user.login("Jaclyn12", "certifikaceCypress").then((response) => {
  //     expect(response.status).to.eq(201);
  //   });
  // });

  it("Get token", () => {
    new UserApi()
      .login("Haskell.Denesik", "certifikaceCypress")
      .as("login_response");
    cy.get("@login_response").then((response) => {
      cy.setCookie("userToken", response.body.access_token);
    });
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/dashboard");
  });
});
