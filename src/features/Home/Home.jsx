import "bootstrap-icons/font/bootstrap-icons.css";
import { add } from "date-fns";
import React, { useEffect, useRef } from "react";
import ButtonChat from "../../components/ButtonChat/ButtonChat";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
import "../../sass/index.scss";
import Blog from "./components/Blog/Blog";
import Countdown from "./components/CountDown/Countdown";
import Intro from "./components/Intro/Intro";
import ListFavoriteProduct from "./components/ListFavoriteProduct/ListFavoriteProduct";
import ListProduct from "./components/ListProduct/ListProduct";
import Slide from "./components/Slider/Slider";
import Subscribe from "./components/Subscribe/Subscribe";
import Support from "./components/Support/Support";
import "./Home.scss";
import io from "socket.io-client";

Home.propTypes = {};

function Home(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const futureDate = add(new Date(), {
    days: 7,
    hours: 22,
    minutes: 40,
  });

  const socket = useRef();

  useEffect(() => {
    socket.current = io("localhost:5000", {
      transports: ["websocket", "polling", "flashsocket"],
    });
  }, []);

  useEffect(() => {
    socket.current.on("OKOK", (data) => {
      console.log(data);
    });
  });

  return (
    <div className="container">
      <Header />
      <Menu />
      <Slide />
      <Intro />
      <ListProduct />
      <Countdown futureDate={futureDate} />
      <ListFavoriteProduct />
      <Support />
      <Subscribe />
      <Blog />
      <Footer />
      <Scroll showBelow={250} />
      <ButtonChat socket={socket} />
    </div>
  );
}

export default Home;
