import moment from "moment";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import adminAPI from "../../../../../api/adminAPI";
import { ACTIONS } from "../../../../../context/actions";
import { GlobalContext } from "../../../../../context/context";

BoxChat.propTypes = {
  socket: PropTypes.any,
  chat: PropTypes.object,
};

function BoxChat({ chat, socket }) {
  const { dispatch, state } = useContext(GlobalContext);
  const userLogIn = useSelector((state) => state.user.currentUser);

  const [text, setText] = useState("");
  const [temp_message, setTemp_message] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getMessageOfChat(chat._id);
        dispatch({
          type: ACTIONS.dataAllMessageOfChatAdmin,
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [chat._id, dispatch]);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSendMessage = () => {
    (async () => {
      try {
        const response = await adminAPI.sendMessage({
          text: text,
          roomId: chat._id,
        });
        if (response.status === 200) {
          (async () => {
            try {
              const response = await adminAPI.getMessageOfChat(chat._id);
              dispatch({
                type: ACTIONS.dataAllMessageOfChatAdmin,
                payload: response.data.data,
              });
            } catch (error) {
              console.log(error);
            }
          })();
          setText("");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    socket.current.on("addMessage", (data) => {
      if (data) {
        setTemp_message(data.savedMessage);
      }
    });
  }, []);

  useEffect(() => {
    if (temp_message) {
      dispatch({
        type: ACTIONS.dataAllMessageOfChatAdmin,
        payload: [...state.dataAllMessageOfChatAdmin, temp_message],
      });
    }
  }, [temp_message]);

  return (
    <>
      <div className="admin-chats-boxchat-header">
        <div className="admin-chats-boxchat-header-image">
          <img src={chat.avatar} alt="" />
        </div>
        <div className="admin-chats-boxchat-header-name">
          {chat.user.nameDisplay}
        </div>
      </div>

      <div className="admin-chats-boxchat-body">
        {state.dataAllMessageOfChatAdmin.reverse().map((message) => {
          return message.sender === userLogIn._id ? (
            <div className="message-own" key={message._id}>
              <div className="message-own-wrap">
                <p className="message-own-text">{message.text}</p>
                <p className="message-own-time">
                  {moment(message.createdAt).format("LT")}
                </p>
              </div>
            </div>
          ) : (
            <div className="message-customer" key={message._id}>
              <div className="message-customer-wrap">
                <p className="message-customer-text">{message.text}</p>
                <p className="message-customer-time">
                  {moment(message.createdAt).format("LT")}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="admin-chats-boxchat-footer">
        <div className="admin-chats-boxchat-footer-input">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={text}
            onChange={handleChangeText}
          />
        </div>
        <div className="admin-chats-boxchat-footer-icon">
          <i className="bi bi-send" onClick={handleSendMessage}></i>
          <i className="bi bi-camera"></i>
        </div>
      </div>
    </>
  );
}

export default BoxChat;
