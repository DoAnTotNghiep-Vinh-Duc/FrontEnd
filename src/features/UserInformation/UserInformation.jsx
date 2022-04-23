import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./UserInformation.scss";

UserInformation.propTypes = {};

function UserInformation(props) {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <div className="userInformation">
      <div className="userInformation-container">
        <div className="userInformation-infor">
          <div className="infor-name">Đỗ Đạt Đức</div>
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
            Tham gia <b>22/04/2022</b>
          </div>
        </div>
        <div className="userInformation-edit">
          <div className="userInformation-edit-header">
            <p>Chỉnh sửa thông tin cá nhân</p>
            <span>
              Chưa xác thực số điện thoại?{" "}
              <Link to={`${pathname}/phone`}>
                <u>Xác thực</u>
              </Link>
            </span>
          </div>
          <div className="userInformation-edit-body">
            <div className="fullname-password">
              <div className="fullname">
                <label htmlFor="">Họ và tên</label>
                <input type="text" name="" id="" value="Đỗ Đạt Đức" />
              </div>
              <div className="password">
                <label htmlFor="">Mật khẩu</label>
                <input
                  type="password"
                  name=""
                  id=""
                  value="1123456d"
                  readOnly
                />
              </div>
            </div>
            <div className="email-phone">
              <div className="email">
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" value="12345ddduc@gmail.com" />
              </div>
              <div className="phone-number">
                <label htmlFor="">Số điện thoại</label>
                <input type="text" name="" id="" value="0359806602" readOnly />
              </div>
            </div>
            <div className="city-district">
              <div className="city">
                <label htmlFor="">Tỉnh/ Thành phố</label>
                <input type="text" name="" id="" value="TP.Hồ Chí Minh" />
              </div>
              <div className="district">
                <label htmlFor="">Quận/ Huyện</label>
                <input type="text" name="" id="" value="Gò Vấp" />
              </div>
            </div>
            <div className="ward-street">
              <div className="ward">
                <label htmlFor="">Phường/ Xã</label>
                <input type="text" name="" id="" value="Phường 4" />
              </div>
              <div className="street">
                <label htmlFor="">Số nhà/ Đường</label>
                <input type="text" name="" id="" value="12 Nguyễn Văn Bảo" />
              </div>
            </div>
            <div className="btnUpdate">
              <button>Cập nhập</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
