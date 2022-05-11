import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.scss";

NotFound.propTypes = {};

function NotFound(props) {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="notfound">
      <div className="notfound-left">
        <div className="notfound-error">LỖI 404</div>
        <div className="notfound-page">Không tìm thấy trang cần tìm</div>
        <button onClick={handleClick}>QUAY LẠI</button>
      </div>
      <div className="notfound-right">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/404-page-not-found-456876.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default NotFound;
