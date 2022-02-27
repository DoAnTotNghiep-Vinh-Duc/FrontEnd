import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import "./Subscribe.scss";
import { makeStyles } from "@material-ui/core";

Subscribe.propTypes = {};

function Subscribe(props) {
  return (
    <div className="subscribe">
      <div className="bgr_subscribe">
        <div className="subscribe-title">
          Để nhận các thông tin mới nhất từ cừa hàng, hãy đăng kí email với
          chúng tôi!
        </div>
        <div className="subscribe-input">
          <div className="subscribe-input-container">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="medium"
              type="email"
              placeholder="Nhập email của bạn ..."
              fullWidth
            />
          </div>
          <button>Đăng kí</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
