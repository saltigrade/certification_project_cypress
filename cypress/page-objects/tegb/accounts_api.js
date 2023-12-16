export class AccountsApi {
  createAccount(token, balance, userId) {
    return cy.request({
      method: "POST",
      url: "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/accounts/create",
      headers: {
        authorization: "Bearer " + token,
      },
      body: {
        userId: userId,
        accountNumber: "1000008",
        accountType: "Test",
        balance: balance,
        status: "Active",
        accountId: 8,
        createdDate: "2023-11-30T13:59:18.000Z",
      },
    });
  }
}
