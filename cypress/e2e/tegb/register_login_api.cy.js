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
  });

  it("Register and login via API", () => {
    let user = new UserApi();
    user.register(username, password, email);
    user.login(username, password);
  });
});
