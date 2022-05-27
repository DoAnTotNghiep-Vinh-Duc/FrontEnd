import React, { useContext, useState } from "react";
import messageAPI from "../../../api/messageAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";

Input.propTypes = {};

function Input(props) {
  const { dispatch } = useContext(GlobalContext);

  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleClickSend = () => {
    (async () => {
      try {
        const response = await messageAPI.sendMessage({
          text: text,
        });
        if (response.status === 200) {
          (async () => {
            try {
              const response = await messageAPI.getAllMessage();
              dispatch({
                type: ACTIONS.dataMessage,
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
  );
}

export default Input;
