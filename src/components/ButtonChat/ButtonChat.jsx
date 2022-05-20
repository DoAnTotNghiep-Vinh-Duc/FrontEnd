import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ButtonChat.css";
import "./ButtonChat.scss";

ButtonChat.propTypes = {
  socket: PropTypes.any,
};

function ButtonChat({ socket }) {
  const userLogIn = useSelector((state) => state.user.currentUser);

  const [openChat, setOpenChat] = useState(false);
  const [text, setText] = useState("");

  const handleClickOpenChat = () => {
    setOpenChat(!openChat);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClickSend = () => {
    alert(text);
    setText("");
  };

  return (
    <>
      <div className="text-box">
        <a className={`${"btn"} ${"btn-white"} ${"btn-animate"}`}>
          <img
            className="img-btnchat"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
            alt=""
            onClick={handleClickOpenChat}
          />
        </a>
        {openChat && (
          <>
            <div className="chat-container">
              <div className="chat-container-header">
                <div className="chat-container-header-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscK3NlNHkKEtrPuGzXJWKnqdj3egpQAUfn28aWTTwbBNpPR89owphmg3g1Jf34V5dJk&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="chat-container-header-name">LemonShop</div>
              </div>

              {userLogIn ? (
                <>
                  <div className="chat-container-body">
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message">
                      <div className="message-shop">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                    <div className="message-own">
                      <div className="message-customer">
                        <p className="message-shop-text">vui úa đi</p>
                        <p className="message-shop-time">19:45</p>
                      </div>
                    </div>
                  </div>

                  <div className="chat-container-footer">
                    <input
                      type="text"
                      placeholder="Nhập tin nhắn..."
                      value={text}
                      onChange={handleTextChange}
                    />
                    <i className="bi bi-send" onClick={handleClickSend}></i>
                    <i className="bi bi-card-image"></i>
                  </div>
                </>
              ) : (
                <>
                  <div className="chat-container-notauth">
                    <p>Đăng nhập để có thể nhắn tin với shop dễ dàng hơn!</p>
                    <a href="/auth">Đăng nhập ngay!</a>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ButtonChat;
