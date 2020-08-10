import React from "react";
import "./header.styles.scss";
//importing components
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg"; //importing the 'svg' as ReactComponent keyword which we are using as Logo keyword

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
