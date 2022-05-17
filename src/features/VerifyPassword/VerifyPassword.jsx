import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import userAPI from "../../api/userAPI";
import check from "../../assets/images/check.png";
import fail from "../../assets/images/verifyAccountFail.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./VerifyPassword.scss";

VerifyPassword.propTypes = {};
function VerifyPassword(props) {
  const {
    params: { passwordId },
  } = useRouteMatch();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await userAPI.verifyPassword({
          verifyCode: passwordId,
        });
        console.log(response);
        if (response.status === 200) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [passwordId]);

  return (
    <div className="SuccessVerify">
      <Header />
      <Menu />
      {success ? (
        <>
          <div className="SuccessVerify-body">
            <div className="SuccessVerify-body-header">
              <span className="SuccessVerify-body-header-title">
                Xác thực mật khẩu mới
              </span>
            </div>
            <div className="SuccessVerify-body-content">
              <div className="SuccessVerify-body-content-image">
                <img src={check} alt="" />
              </div>
              <div className="SuccessVerify-body-content-success">
                Bạn đã xác thực mật khẩu mới thành công! <br />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="SuccessVerify-body">
            <div className="SuccessVerify-body-header">
              <span className="SuccessVerify-body-header-title">
                Xác thực mật khẩu mới
              </span>
            </div>
            <div className="SuccessVerify-body-content">
              <div className="SuccessVerify-body-content-image">
                <img src={fail} alt="" />
              </div>
              <div className="SuccessVerify-body-content-success">
                Xác thực mật khẩu mới thất bại!
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default VerifyPassword;
