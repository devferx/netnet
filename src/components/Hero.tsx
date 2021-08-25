import React, { useState, useEffect } from "react";
import matrixCover from "../assets/images/covers/matrix-cover.png";
import plusIcon from "../assets/icons/plus.svg";
import infoIcon from "../assets/icons/info.svg";
import playIcon from "../assets/icons/play.svg";

import matrixMovie from "../assets/images/matrix.mp4";

export const Hero = () => {
  const [isCoverActive, setIsCoverActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsCoverActive(false);
    }, 3000);
  }, []);

  return (
    <section className="hero">
      <div className="hero__image-container">
        {isCoverActive ? (
          <img className="cover" src={matrixCover} alt="Matrix cover" />
        ) : (
          <video
            className="video"
            src={matrixMovie}
            autoPlay
            loop
            muted
          ></video>
        )}

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
