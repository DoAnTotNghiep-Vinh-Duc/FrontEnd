import "bootstrap-icons/font/bootstrap-icons.css";
import { add } from "date-fns";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
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

Home.propTypes = {
  socket: PropTypes.any,
};

function Home({ socket }) {
  const userLogIn = useSelector((state) => state.user.currentUser);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      {userLogIn ? (
        <>
          {userLogIn.role === "Admin" ? (
            ""
          ) : (
            <>
              <ButtonChat socket={socket} />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
