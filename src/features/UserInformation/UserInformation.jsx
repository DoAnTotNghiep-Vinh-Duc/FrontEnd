import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import userAPI from "../../api/userAPI";
import NavbarUser from "../../components/NavBarUser/NavbarUser";
import "./UserInformation.scss";

toast.configure();
UserInformation.propTypes = {};

function UserInformation(props) {
  const location = useLocation();
  const pathname = location.pathname;

  const [userInformation, setUserInformation] = useState({});
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await userAPI.getInformation();
        setUserInformation(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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

  const handleAddImage = (e) => {
    e.preventDefault();
    const fileSelected = e.target.files[0];

    if (fileSelected && fileSelected.type.substr(0, 5) === "image") {
      setImage(fileSelected);
      setUserInformation({
        ...userInformation,
        avatar: fileSelected,
      });
    } else {
      setImage(undefined);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(undefined);
    }
  }, [image]);

  const handleUpdate = () => {
    (async () => {
      try {
        const fd = new FormData();
        fd.append("newInformation", JSON.stringify(userInformation));
        fd.append("uploadFile", userInformation.avatar);
        const response = await userAPI.updateInformation(fd);
        if (response.status === 204) {
          toast.success("C???p nh???p th??nh c??ng", {
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
      <NavbarUser />
      <div className="userInformation-container">
        <div className="userInformation-infor-back">
          <div className="userInformation-infor">
            <div className="infor-name">{userInformation.name}</div>
            <div className="infor-image">
              <div className="infor-image-circle">
                <img src={imagePreview ?? userInformation.avatar} alt="" />
              </div>
            </div>
            <div className="infor-button">
              <button>
                <input type="file" accept="image/*" onChange={handleAddImage} />
                T???i h??nh m???i l??n
              </button>
            </div>
            <div className="infor-time">
              Tham gia <b>{moment(userInformation.createdAt).format("L")}</b>
            </div>
          </div>
        </div>
        <div className="userInformation-edit">
          <div className="userInformation-edit-header">
            <p>Ch???nh s???a th??ng tin c?? nh??n</p>
            {userInformation.phone ? (
              ""
            ) : (
              <>
                <span>
                  Ch??a x??c th???c s??? ??i???n tho???i!{" "}
                  <Link to={`${pathname}/phone`}>
                    <u>X??c th???c</u>
                  </Link>
                </span>
              </>
            )}
          </div>
          <div className="userInformation-edit-body">
            <div className="fullname-password">
              <div className="fullname">
                <label htmlFor="">H??? v?? t??n</label>
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
                <label htmlFor="">S??? ??i???n tho???i</label>
                <input type="text" value={userInformation.phone} readOnly />
              </div>
            </div>
            <div className="city-district">
              <div className="city">
                <label htmlFor="">T???nh/ Th??nh ph???</label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={userInformation.city}
                  onChange={handleCity}
                />
              </div>
              <div className="district">
                <label htmlFor="">Qu???n/ Huy???n</label>
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
                <label htmlFor="">Ph?????ng/ X??</label>
                <input
                  type="text"
                  value={userInformation.ward}
                  onChange={handleWard}
                />
              </div>
              <div className="street">
                <label htmlFor="">S??? nh??/ ???????ng</label>
                <input
                  type="text"
                  value={userInformation.street}
                  onChange={handleStreet}
                />
              </div>
            </div>
            <div className="btnUpdate">
              <button onClick={handleUpdate}>C???p nh???p</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
