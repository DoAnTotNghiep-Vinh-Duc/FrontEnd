import axiosClient2 from "./axiosClient2";

const userAPI = {
  signInWithWebAccount(email, password) {
    const url = "/auth/signin";
    return axiosClient2.post(url, email, password);
  },
  signUpWithWebAccount(name, email, password) {
    const url = "/auth/signup";
    return axiosClient2.post(url, name, email, password);
  },
  getInformation() {
    const url = "/information";
    return axiosClient2.get(url);
  },
  updateInformation(newInformation) {
    const url = "/information/update-information";
    return axiosClient2.put(url, newInformation);
  },
  sendOTP(phone) {
    const url = "/information/send-otp";
    return axiosClient2.post(url, phone);
  },
  verifyOTP(phone, otp) {
    const url = "/information/verify-otp";
    return axiosClient2.post(url, phone, otp);
  },
};

export default userAPI;
