import * as React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo-netflix.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />

      <ul className="header__menu">
        <li>
          <Link to="/">Series</Link>
        </li>
        <li>
          <Link to="/">Películas</Link>
        </li>
        <li>
          <Link to="/">Mi lista</Link>
        </li>
      </ul>
    </header>
  );
};
