import React from "react";
import "./Header.scss";
import Navbar from "./Navbar";
import foodIcon from "./food-icon.png";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-content flex align-center justify-center flex-column text-center">
        <img src={foodIcon} alt="icon" className="foodicon" />
        <h1 className="text-white header-title ls-2">
          Welcome to Bliss Eatery
        </h1>
        <p className="text-uppercase text-white my-3 ls-1">
          Where your food never runs out of bliss
        </p>
      </div>
    </header>
  );
};

export default Header;
