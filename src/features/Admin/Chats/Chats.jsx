import React, { useContext, useEffect, useState } from "react";
import adminAPI from "../../../api/adminAPI";
import { ACTIONS } from "../../../context/actions";
import { GlobalContext } from "../../../context/context";
import Header from "../components/Header/Header";
import NavBars from "../components/NavBars/NavBars";
import "./Chats.scss";
import BoxChat from "./components/BoxChat/BoxChat";
import Chat from "./components/Chat/Chat";
import PropTypes from "prop-types";

Chats.propTypes = {
  socket: PropTypes.any,
};

function Chats({ socket }) {
  const { dispatch, state } = useContext(GlobalContext);

  const [openBoxChat, setOpenBoxChat] = useState(false);
  const [chat, setChat] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await adminAPI.getAllChat();
        dispatch({
          type: ACTIONS.dataAllChatAdmin,
          payload: response.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const handleOpenBoxChat = (value) => {
    setOpenBoxChat(true);
    setChat(value);
  };

  useEffect(() => {
    socket.current.on("addMessage", (data) => {
      if (data) {
        (async () => {
          try {
            const response = await adminAPI.getAllChat();
            dispatch({
              type: ACTIONS.dataAllChatAdmin,
              payload: response.data.data,
            });
          } catch (error) {
            console.log(error);
          }
        })();
      }
    });
  }, []);

  return (
    <div className="admin-chats">
      <NavBars />
      <div className="admin-chats-content">
        <Header />
        <div className="admin-chats-content-body">
          <div className="admin-chats-listchat">
            {state.dataAllChatAdmin.map((chat) => {
              return (
                <Chat
                  key={chat._id}
                  openBoxChat={handleOpenBoxChat}
                  chat={chat}
                />
              );
            })}
          </div>

          <div className="admin-chats-boxchat">
            {openBoxChat ? <BoxChat socket={socket} chat={chat} /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
