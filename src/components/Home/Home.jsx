import "bootstrap-icons/font/bootstrap-icons.css";
import { add } from "date-fns";
import React from "react";
import Intro from "../../components/component/Intro/Intro";
import "../../sass/index.scss";
import Blog from "../component/Blog/Blog";
import Countdown from "../component/CountDown/Countdown";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import ListFavoriteProduct from "../component/ListFavoriteProduct/ListFavoriteProduct";
import ListProduct from "../component/ListProduct/ListProduct";
import Menu from "../component/Menu/Menu";
import Slide from "../component/Slider/Slider";
import Subscribe from "../component/Subscribe/Subscribe";
import Support from "../component/Support/Support";
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
    </div>
  );
}

export default Home;
