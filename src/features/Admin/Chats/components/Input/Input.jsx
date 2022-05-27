import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import adminAPI from "../../../../../api/adminAPI";
import { ACTIONS } from "../../../../../context/actions";
import { GlobalContext } from "../../../../../context/context";

Input.propTypes = {
  chat: PropTypes.object,
};

function Input(props) {
  const { chat } = props;
  const { dispatch } = useContext(GlobalContext);

  const [text, setText] = useState("");

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
  return (
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
  );
}

export default Input;
