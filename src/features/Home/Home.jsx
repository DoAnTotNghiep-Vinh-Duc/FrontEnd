import "bootstrap-icons/font/bootstrap-icons.css";
import { add } from "date-fns";
import React from "react";
import "../../sass/index.scss";
import Blog from "./components/Blog/Blog";
import Countdown from "./components/CountDown/Countdown";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Intro from "./components/Intro/Intro";
import ListFavoriteProduct from "./components/ListFavoriteProduct/ListFavoriteProduct";
import ListProduct from "./components/ListProduct/ListProduct";
import Menu from "../../components/Menu/Menu";
import Scroll from "../../components/Scroll/Scroll";
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
    </div>
  );
}

export default Home;
