import React from "react";
import matrixCover from "../assets/images/covers/matrix.png";
import plusIcon from "../assets/icons/plus.svg";
import infoIcon from "../assets/icons/info.svg";
import playIcon from "../assets/icons/play.svg";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img src={matrixCover} alt="Matrix cover" />

        <ul className="hero__categories">
          <li>Surrealista</li>
          <div className="dot" />
          <li>Distópico</li>
          <div className="dot" />
          <li>Hábil</li>
          <div className="dot" />
          <li>Siniestro</li>
          <div className="dot" />
          <li>Emocionante</li>
        </ul>
      </div>

      <div className="hero__actions">
        <div className="hero__actions__item">
          <img src={plusIcon} alt="Plus icon" />
          <p>Mi lista</p>
        </div>
        <button className="button">
          <img src={playIcon} alt="Play Icon" />
          <span>Reproducir</span>
        </button>
        <div className="hero__actions__item">
          <img src={infoIcon} alt="Info icon" />
          <p>Info</p>
        </div>
      </div>
    </section>
  );
};
