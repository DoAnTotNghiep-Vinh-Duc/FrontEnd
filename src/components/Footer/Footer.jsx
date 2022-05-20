import React, { useEffect } from "react";
import userAPI from "../../api/userAPI";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
  useEffect(() => {
    (async () => {
      try {
        const response = await userAPI.getInformation();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer1-logo">Lemon</div>
        <div className="footer1-address">
          <i className="bi bi-house-door"></i>
          <p>12 Nguyễn Văn Bảo, phường 5, Quận Gò Vấp, Tp.HCM</p>
        </div>
        <div className="footer1-phone">
          <i className="bi bi-telephone-inbound"></i>
          <a href="tel:0359806602">(+84) 359 806 602</a>
        </div>
        <div className="footer1-email">
          <i className="bi bi-envelope"></i>
          <a href="mailto:dvFashion@gmail.com">lemonFashion@gmail.com</a>
        </div>
      </div>
      <div className="footer2">
        <div className="footer2-title">THÔNG TIN</div>
        <ul>
          <li>
            <a href="/">Về chúng tôi</a>
          </li>
          <li>
            <a href="/">Lịch sử đơn hàng</a>
          </li>
          <li>
            <a href="/">Hoàn trả</a>
          </li>
          <li>
            <a href="/">Dịch vụ khách hàng</a>
          </li>
          <li>
            <a href="/">Điều khoản & dịch vụ</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
      <div className="footer3">
        <div className="footer3-title">DỊCH VỤ</div>
        <ul>
          <li>
            <a href="/">Về chúng tôi</a>
          </li>
          <li>
            <a href="/">Lịch sử đơn hàng</a>
          </li>
          <li>
            <a href="/">Hoàn trả</a>
          </li>
          <li>
            <a href="/">Dịch vụ khách hàng</a>
          </li>
          <li>
            <a href="/">Điều khoản & dịch vụ</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
      <div className="footer4">
        <div className="footer4-title-letter">THƯ MỜI</div>
        <div className="footer4-input">
          <input type="email" placeholder="Email của bạn..." />
          <button>OK</button>
        </div>
        <div className="footer4-title-social">THEO DÕI CHÚNG TÔI</div>
        <div className="footer4-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
