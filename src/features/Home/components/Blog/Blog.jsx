import React from "react";
import blog1 from "../../../../assets/blog/blog1.jpg";
import blog4 from "../../../../assets/blog/blog4.png";
import blog5 from "../../../../assets/blog/blog5.jpg";
import "./Blog.scss";

Blog.propTypes = {};

function Blog(props) {
  return (
    <div className="home-blog">
      <div className="home-blog-title">Blog gần đây</div>
      <div className="home-blog-list">
        {/* https://phunutoday.vn/hong-diem-co-vo-van-cach-mix-ao-thun-tu-he-sang-dong-vua-sanh-dieu-lai-ninh-dang-d311354.html */}
        <div className="home-blog-1">
          <div className="home-blog-1-img">
            <img src={blog1} alt="" />
          </div>
          <div className="home-blog-1-location-time">
            <div className="home-blog-1-location">
              <i className="bi bi-geo-alt"></i>
              <p>Tp. Hồ Chí Minh</p>
            </div>
            <div className="home-blog-1-time">
              <i className="bi bi-calendar4-week"></i>
              <p>21 Tháng 8 2021</p>
            </div>
          </div>
          <div className="home-blog-1-title">
            Hồng Diễm có vô vàn cách mix áo thun từ hè sang đông vừa sành điệu
            lại nịnh dáng.
          </div>
        </div>
        {/* https://vnexpress.net/7-cach-phoi-mau-sac-khong-bao-gio-loi-mot-3436690.html */}
        <div className="home-blog-1">
          <div className="home-blog-1-img">
            <img src={blog5} alt="" />
          </div>
          <div className="home-blog-1-location-time">
            <div className="home-blog-1-location">
              <i className="bi bi-geo-alt"></i>
              <p>Tp. Hồ Chí Minh</p>
            </div>
            <div className="home-blog-1-time">
              <i className="bi bi-calendar4-week"></i>
              <p>15 Tháng 1 2022</p>
            </div>
          </div>
          <div className="home-blog-1-title">
            7 cách phối màu sắc không bao giờ lỗi mốt.
          </div>
        </div>
        {/* https://vnexpress.net/5-cach-phoi-ao-thun-ca-tinh-3917903.html */}
        <div className="home-blog-1">
          <div className="home-blog-1-img">
            <img src={blog4} alt="" />
          </div>
          <div className="home-blog-1-location-time">
            <div className="home-blog-1-location">
              <i className="bi bi-geo-alt"></i>
              <p>Tp. Hồ Chí Minh</p>
            </div>
            <div className="home-blog-1-time">
              <i className="bi bi-calendar4-week"></i>
              <p>3 Tháng 5 2021</p>
            </div>
          </div>
          <div className="home-blog-1-title">5 cách phối áo thun cá tính.</div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
