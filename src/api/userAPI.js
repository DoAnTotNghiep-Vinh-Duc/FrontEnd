import axiosClient2 from "./axiosClient2";

const userAPI = {
  signinGoogle() {
    const url = `/auth/google`;
    return axiosClient2.get(url);
  },
  signinFacebook() {
    const url = `/auth/facebook`;
    return axiosClient2.get(url);
  },
};

export default userAPI;
