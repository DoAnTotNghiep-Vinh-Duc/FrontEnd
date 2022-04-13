import axiosClient2 from "./axiosClient2";

const userAPI = {
  signInWithWebAccount(email, password) {
    const url = "/auth/signin";
    return axiosClient2.post(url, email, password);
  },
  signUpWithWebAccount(name, email, password) {
    console.log(name, email, password);
    const url = "/auth/signup";
    return axiosClient2.post(url, name, email, password);
  },
};

export default userAPI;
