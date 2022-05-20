import React, { useState } from "react";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import "./Chats.scss";
import Chat from "./components/Chat/Chat";

Chats.propTypes = {};

function Chats(props) {
  const [openBoxChat, setOpenBoxChat] = useState(false);

  const handleOpenBoxChat = () => {
    setOpenBoxChat(true);
  };

  return (
    <div className="admin-chats">
      <NavBars />
      <div className="admin-chats-content">
        <Header />
        <div className="admin-chats-content-body">
          <div className="admin-chats-listchat">
            <Chat openBoxChat={handleOpenBoxChat} />
          </div>

          <div className="admin-chats-boxchat">
            {openBoxChat ? (
              <>
                <div className="admin-chats-boxchat-header">
                  <div className="admin-chats-boxchat-header-image">
                    <img
                      src="https://vnn-imgs-f.vgcloud.vn/2019/11/03/17/bao-thy-moi-thong-tin-ket-hon-khong-phai-tu-toi-deu-la-tin-don.jpg"
                      alt=""
                    />
                  </div>
                  <div className="admin-chats-boxchat-header-name">
                    Trần Thị Bảo Thy
                  </div>
                </div>

                <div className="admin-chats-boxchat-body">
                  <div className="message-customer">
                    <div className="message-customer-wrap">
                      <p className="message-customer-text">haha vui qúa nè</p>
                      <p className="message-customer-time">15:20</p>
                    </div>
                  </div>
                  <div className="message-own">
                    <div className="message-own-wrap">
                      <p className="message-own-text">haha vui qúa nè</p>
                      <p className="message-own-time">15:20</p>
                    </div>
                  </div>
                </div>

                <div className="admin-chats-boxchat-footer">
                  <div className="admin-chats-boxchat-footer-input">
                    <input type="text" placeholder="Nhập tin nhắn..." />
                  </div>
                  <div className="admin-chats-boxchat-footer-icon">
                    <i className="bi bi-send"></i>
                    <i className="bi bi-camera"></i>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
