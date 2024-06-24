import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/Assets/logo.png";
import cart_icon from "../../components/Assets/cart_icon.png";
import "./Navbar.css";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [itemCounter, setItemCounter] = useState(0);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link className="no-text-decoration " to="/">
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li
          className={menu === "mens" ? "active" : ""}
          onClick={() => setMenu("mens")}
        >
          <Link className="no-text-decoration " to="/mens">
            Men
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li
          className={menu === "womens" ? "active" : ""}
          onClick={() => setMenu("womens")}
        >
          <Link className="no-text-decoration " to="/womens">
            Women
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => setMenu("kids")}
        >
          <Link className="no-text-decoration " to="/kids">
            Kids
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link className="no-text-decoration " to="/login">
            Login
          </Link>{" "}
        </button>
        <Link className="no-text-decoration " to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{itemCounter}</div>
      </div>
    </div>
  );
};
