import React from "react";
import { Link, useLocation } from "react-router-dom";
import slidebar from "../../../data/slidebar_route.json";
import "./NavBar.scss";

NavBars.propTypes = {};

function NavBars(props) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="admin-menu">
      <div className="admin-menu-logo">
        <p>Lemon</p>
      </div>
      <div className="admin-menu-navbars">
        {slidebar.map((item, index) => {
          return (
            <Link
              key={index}
              to={item.route}
              className={`${"admin-menu-navbars-navbar"} ${
                pathname === item.route ? "active-toggle" : ""
              }`}
            >
              <i className={item.icon}></i>
              <span>{item.displayName}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBars;
