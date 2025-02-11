import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import logo from "../../assets/foodie_logo.png";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          HOME
        </Link>
        <a
          href="#header"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          MENU
        </a>
        <a
            href="#contact-us"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            CONTACT US
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("about-us")}
            className={menu === "about-us" ? "active" : ""}
          >
            ABOUT US
          </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
