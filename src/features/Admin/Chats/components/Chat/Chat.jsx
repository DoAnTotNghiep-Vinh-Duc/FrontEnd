import React from "react";

Chat.propTypes = {};

function Chat(props) {
  const handleOpenBoxChat = () => {
    props.openBoxChat(true);
  };

  return (
    <div className="admin-chats-listchat-chat" onClick={handleOpenBoxChat}>
      <div className="admin-chats-listchat-chat-image">
        <img
          src="https://vnn-imgs-f.vgcloud.vn/2019/11/03/17/bao-thy-moi-thong-tin-ket-hon-khong-phai-tu-toi-deu-la-tin-don.jpg"
          alt=""
        />
      </div>
      <div className="admin-chats-listchat-chat-infor">
        <div className="admin-chats-listchat-chat-infor-name-time">
          <div className="admin-chats-listchat-chat-infor-name">
            Trần Thị Bảo Thy
          </div>
          <div className="admin-chats-listchat-chat-infor-time">15:20</div>
        </div>
        <div className="admin-chats-listchat-chat-infor-text">
          hihi vui quá chời nè
        </div>
      </div>
    </div>
  );
}

export default Chat;
