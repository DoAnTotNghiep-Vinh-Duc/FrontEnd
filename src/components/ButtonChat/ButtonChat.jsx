import moment from "moment";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import messageAPI from "../../api/messageAPI";
import { ACTIONS } from "../../context/actions";
import { GlobalContext } from "../../context/context";
import "./ButtonChat.css";
import "./ButtonChat.scss";
import Input from "./Input/Input";

ButtonChat.propTypes = {
  socket: PropTypes.any,
};

function ButtonChat({ socket }) {
  const { dispatch, state } = useContext(GlobalContext);
  const userLogIn = useSelector((state) => state.user.currentUser);

  const [openChat, setOpenChat] = useState(false);

  const [temp_message, setTemp_message] = useState();

  useEffect(() => {
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
  }, [dispatch]);

  const handleClickOpenChat = () => {
    setOpenChat(!openChat);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("adminAddMessage", (data) => {
        setTemp_message(data.savedMessage);
      });
    }
  }, [socket.current]);

  useEffect(() => {
    dispatch({
      type: ACTIONS.dataMessage,
      payload: [...state.dataMessage, temp_message],
    });
  }, [temp_message]);

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
                    {state.dataMessage.reverse().map((message) => {
                      return message.sender === userLogIn._id ? (
                        <div className="message-own" key={message._id}>
                          <div className="message-customer">
                            <p className="message-shop-text">{message.text}</p>
                            <p className="message-shop-time">
                              {moment(message.createdAt).format("LT")}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="message" key={message._id}>
                          <div className="message-shop">
                            <p className="message-shop-text">{message.text}</p>
                            <p className="message-shop-time">
                              {moment(message.createdAt).format("LT")}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Input />
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
