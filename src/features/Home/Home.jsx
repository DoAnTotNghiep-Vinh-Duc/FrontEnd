import "bootstrap-icons/font/bootstrap-icons.css";
import { add } from "date-fns";
import React, { useEffect } from "react";
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

Home.propTypes = {};

function Home(props) {
  const futureDate = add(new Date(), {
    days: 7,
    hours: 22,
    minutes: 40,
  });

  console.log("aha");

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
      <ButtonChat />
    </div>
  );
}

export default Home;
