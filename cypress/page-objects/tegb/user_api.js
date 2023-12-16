export class UserApi {
  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
      body: {
        username: username,
        password: password,
        email: email,
      },
    });
  }

  login(username, password) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
