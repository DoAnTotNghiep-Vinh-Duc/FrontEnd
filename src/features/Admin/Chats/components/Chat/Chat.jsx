import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

Chat.propTypes = {
  chat: PropTypes.object,
};

function Chat(props) {
  const { chat } = props;

  const handleOpenBoxChat = () => {
    props.openBoxChat(chat);
  };

  return (
    <div className="admin-chats-listchat-chat" onClick={handleOpenBoxChat}>
      <div className="admin-chats-listchat-chat-image">
        <img src={chat.avatar} alt="" />
      </div>
      <div className="admin-chats-listchat-chat-infor">
        <div className="admin-chats-listchat-chat-infor-name-time">
          <div className="admin-chats-listchat-chat-infor-name">
            {chat.user.nameDisplay}
          </div>
          <div className="admin-chats-listchat-chat-infor-time">
            {chat.lastestMessage ? (
              <>{moment(chat.lastestMessage?.createdAt).format("LT")}</>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="admin-chats-listchat-chat-infor-text">
          {chat.lastestMessage?.text}
        </div>
      </div>
    </div>
  );
}

export default Chat;
