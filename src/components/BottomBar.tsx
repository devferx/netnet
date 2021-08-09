import React from "react";

import homeIcon from "../assets/icons/home.svg";
import cinemaIcon from "../assets/icons/cinema.svg";
import searchIcon from "../assets/icons/search.svg";
import dowloadIcon from "../assets/icons/dowload.svg";

export const BottomBar = () => {
  return (
    <nav className="bottom-bar">
      <ul className="bottom-bar__menu">
        <li className="bottom-bar__menu__item active">
          <img src={homeIcon} alt="Home Icon" />
          <span>Inicio</span>
        </li>
        <li className="bottom-bar__menu__item">
          <img src={cinemaIcon} alt="cinema icon" />
          <span>Próximamente</span>
        </li>
        <li className="bottom-bar__menu__item">
          <img src={searchIcon} alt="search icon" />
          <span>Buscar</span>
        </li>
        <li className="bottom-bar__menu__item">
          <img src={dowloadIcon} alt="dowload icon" />
          <span>Descargas</span>
        </li>
      </ul>
    </nav>
  );
};
