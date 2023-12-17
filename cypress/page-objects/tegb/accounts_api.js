export class AccountsApi {
  createAccount(token, userId, startBalance, type) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
      headers: {
        authorization: "Bearer " + token,
      },
      body: {
        userId: userId,
        startBalance: startBalance,
        type: type,
      },
    });
  }
}
