import React from "react";
import demo10 from "../../../../assets/demo/demo10.jpg";
import demo5 from "../../../../assets/demo/demo5.jpg";
import demo6 from "../../../../assets/demo/demo6.jpg";
import demo9 from "../../../../assets/demo/demo9.jpg";
import "./Intro.scss";

Intro.propTypes = {};

function Intro(props) {
  return (
    <div className="intro">
      <div className="intro-line1">
        <div className="intro1">
          <img src={demo9} alt="" />
          <div className="intro1-content">
            <div className="content1">XUÂN HÈ</div>
            <div className="content2">Bộ sưu tập thời trang nữ</div>
            <div className="content3"></div>
          </div>
        </div>
        <div className="intro2">
          <img src={demo10} alt="" />
          <div className="intro2-content">
            <div className="content1">XUÂN HÈ</div>
            <div className="content2">Bộ sưu tập thời trang nam</div>
            <div className="content3"></div>
          </div>
        </div>
      </div>
      <div className="intro-line2">
        <div className="intro3">
          <img src={demo5} alt="" />
          <div className="intro3-content">
            <div className="content1">THỜI TRANG NỮ</div>
            <div className="content2">Xu hướng năm 2021</div>
            <div className="content3"></div>
          </div>
        </div>
        <div className="intro4">
          <img src={demo6} alt="" />
          <div className="intro4-content">
            <div className="content1">THỜI TRANG NAM</div>
            <div className="content2">Xu hướng năm 2021</div>
            <div className="content3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
