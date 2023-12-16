// nemůže být URL FE !!!

export class UserApi2 {
  register(username, password, email) {
    return cy.request({
      method: "POST",
      url: "https://tegb-frontend-88542200c6db.herokuapp.com/register",
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
      url: "https://tegb-frontend-88542200c6db.herokuapp.com/",
      body: {
        username: username,
        password: password,
      },
    });
  }
}
