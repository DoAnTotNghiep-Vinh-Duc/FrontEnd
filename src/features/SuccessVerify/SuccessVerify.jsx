import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import userAPI from "../../api/userAPI";
import check from "../../assets/images/check.png";
import fail from "../../assets/images/verifyAccountFail.png";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./SuccessVerify.scss";

SuccessVerify.propTypes = {};
function SuccessVerify(props) {
  const {
    params: { accountId },
  } = useRouteMatch();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await userAPI.verifyAccountWeb({
          verifyCode: accountId,
        });
        console.log(response);
        if (response.status === 200) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [accountId]);

  return (
    <div className="SuccessVerify">
      <Header />
      <Menu />
      {success ? (
        <>
          <div className="SuccessVerify-body">
            <div className="SuccessVerify-body-header">
              <span className="SuccessVerify-body-header-title">
                Xác thực tài khoản
              </span>
            </div>
            <div className="SuccessVerify-body-content">
              <div className="SuccessVerify-body-content-image">
                <img src={check} alt="" />
              </div>
              <div className="SuccessVerify-body-content-success">
                Bạn đã xác thực tài khoản thành công!
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="SuccessVerify-body">
            <div className="SuccessVerify-body-header">
              <span className="SuccessVerify-body-header-title">
                Xác thực tài khoản
              </span>
            </div>
            <div className="SuccessVerify-body-content">
              <div className="SuccessVerify-body-content-image">
                <img src={fail} alt="" />
              </div>
              <div className="SuccessVerify-body-content-success">
                Xác thực tài khoản thất bại!
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default SuccessVerify;
