import * as React from "react";
import logo from "/src/assets/images/logo-netflix.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />

      <ul className="header__menu">
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#">Películas</a>
        </li>
        <li>
          <a href="#">Mi lista</a>
        </li>
      </ul>
    </header>
  );
};
