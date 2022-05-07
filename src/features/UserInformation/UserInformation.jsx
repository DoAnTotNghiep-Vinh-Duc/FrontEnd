import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import userAPI from "../../api/userAPI";
import "./UserInformation.scss";

toast.configure();
UserInformation.propTypes = {};

function UserInformation(props) {
  const location = useLocation();
  const History = useHistory();

  const pathname = location.pathname;
  const userLogIn = useSelector((state) => state.user.currentUser);

  const [userInformation, setUserInformation] = useState({});

  const handleClickBack = () => {
    History.push("/");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await userAPI.getInformation();
        setUserInformation(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userLogIn._id]);

  const handleName = (event) => {
    setUserInformation({
      ...userInformation,
      name: event.target.value,
    });
  };
  const handleCity = (event) => {
    setUserInformation({
      ...userInformation,
      city: event.target.value,
    });
  };
  const handleDistrict = (event) => {
    setUserInformation({
      ...userInformation,
      district: event.target.value,
    });
  };
  const handleWard = (event) => {
    setUserInformation({
      ...userInformation,
      ward: event.target.value,
    });
  };
  const handleStreet = (event) => {
    setUserInformation({
      ...userInformation,
      street: event.target.value,
    });
  };

  const handleUpdate = () => {
    (async () => {
      try {
        const response = await userAPI.updateInformation(userInformation);
        if (response.status === 204) {
          toast.success("Cập nhập thành công", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            theme: "dark",
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="userInformation">
      <div className="userInformation-container">
        <div className="userInformation-infor-back">
          <div className="userInformation-infor">
            <div className="infor-name">{userInformation.name}</div>
            <div className="infor-image">
              <div className="infor-image-circle">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                  alt=""
                />
              </div>
            </div>
            <div className="infor-button">
              <button>Tải hình mới lên</button>
            </div>
            <div className="infor-time">
              Tham gia <b>{moment(userLogIn.createdAt).format("L")}</b>
            </div>
          </div>
          <div className="userInformation-back">
            <button onClick={handleClickBack}>
              <i className="bi bi-arrow-return-left"></i>Quay trở lại
            </button>
          </div>
        </div>
        <div className="userInformation-edit">
          <div className="userInformation-edit-header">
            <p>Chỉnh sửa thông tin cá nhân</p>
            {userInformation.phone ? (
              ""
            ) : (
              <>
                <span>
                  Chưa xác thực số điện thoại!{" "}
                  <Link to={`${pathname}/phone`}>
                    <u>Xác thực</u>
                  </Link>
                </span>
              </>
            )}
          </div>
          <div className="userInformation-edit-body">
            <div className="fullname-password">
              <div className="fullname">
                <label htmlFor="">Họ và tên</label>
                <input
                  type="text"
                  value={userInformation.name}
                  onChange={handleName}
                />
              </div>
            </div>
            <div className="email-phone">
              <div className="email">
                <label htmlFor="">Email</label>
                <input type="text" value={userInformation.email} readOnly />
              </div>
              <div className="phone-number">
                <label htmlFor="">Số điện thoại</label>
                <input type="text" value={userInformation.phone} readOnly />
              </div>
            </div>
            <div className="city-district">
              <div className="city">
                <label htmlFor="">Tỉnh/ Thành phố</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={userInformation.city}
                  onChange={handleCity}
                />
              </div>
              <div className="district">
                <label htmlFor="">Quận/ Huyện</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={userInformation.district}
                  onChange={handleDistrict}
                />
              </div>
            </div>
            <div className="ward-street">
              <div className="ward">
                <label htmlFor="">Phường/ Xã</label>
                <input
                  type="text"
                  value={userInformation.ward}
                  onChange={handleWard}
                />
              </div>
              <div className="street">
                <label htmlFor="">Số nhà/ Đường</label>
                <input
                  type="text"
                  value={userInformation.street}
                  onChange={handleStreet}
                />
              </div>
            </div>
            <div className="btnUpdate">
              <button onClick={handleUpdate}>Cập nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
