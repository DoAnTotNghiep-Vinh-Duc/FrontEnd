class Authentication {
  constructor() {}

  isAuthencation() {
    const account = localStorage.getItem("account");
    return JSON.parse(account);
  }
}

const authentication = new Authentication();
export { authentication };
