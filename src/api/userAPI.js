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
  signInWithGoogle() {
    const url = "/auth/google";
    return axiosClient.get(url);
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
  updateInformation(value) {
    const url = "/information/update-information";
    return axiosClient.put(url, value);
  },
  sendOTP(phone) {
    const url = "/information/send-otp";
    return axiosClient.post(url, phone);
  },
  verifyOTP(phone, otp) {
    const url = "/information/verify-otp";
    return axiosClient.post(url, phone, otp);
  },

  changePassword(value) {
    const url = "/auth/change-password";
    return axiosClient.put(url, value);
  },
  forgotPassword(value) {
    const url = "/auth/send-mail-forgot-password";
    return axiosClient.post(url, value);
  },
  verifyPassword(value) {
    const url = "/auth/verify-forgot-password";
    return axiosClient.post(url, value);
  },
};

export default userAPI;
