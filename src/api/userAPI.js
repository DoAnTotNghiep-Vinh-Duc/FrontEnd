import axiosClient from "./axiosClient";

const userAPI = {
  signInWithWebAccount(email, password) {
    const url = "/auth/signin";
    return axiosClient.post(url, email, password);
  },
  signUpWithWebAccount(name, email, password) {
    const url = "/auth/signup";
    return axiosClient.post(url, name, email, password);
  },
  logout(refreshToken) {
    const url = "/auth/logout";
    return axiosClient.post(url, refreshToken);
  },

  verifyAccountWeb(verifyCode) {
    const url = "/auth/verify-account-web";
    return axiosClient.post(url, verifyCode);
  },

  getInformation() {
    const url = "/information";
    return axiosClient.get(url);
  },
  updateInformation(newInformation) {
    const url = "/information/update-information";
    return axiosClient.put(url, newInformation);
  },
  sendOTP(phone) {
    const url = "/information/send-otp";
    return axiosClient.post(url, phone);
  },
  verifyOTP(phone, otp) {
    const url = "/information/verify-otp";
    return axiosClient.post(url, phone, otp);
  },
};

export default userAPI;
