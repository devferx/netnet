import React from "react";

import matrix from "../assets/images/covers/matrix-landscape.png";
import { MovieList } from "../components/MovieList";
import imageList from "../imageList";

export const Movie = () => {
  return (
    <div>
      <img className="movie__wallpaper" src={matrix} alt="Matrix Image" />
      <div className="movie-wrapper">
        <h1>Matrix: Recargado</h1>
        <div className="movie__details">
          <p className="coincidence">99% de coincidencia</p>
          <p>2003</p>
          <p>2h 18m</p>
          <p>HD</p>
        </div>

        <div className="movie__buttons">
          <button className="movie__button">Reproducir</button>
          <button className="movie__button movie__button--transparent">
            Descargar
          </button>
        </div>

        <div className="movie__content">
          <p>
            Neo, Morpheus, Trinity y el resto de la tripulación continúan en la
            lucha contra las máquinas que han esclavizado a la raza humana.
            Ahora más humanos han sido despertados e intentan vivir en el mundo
            real. A medida que aumentan en número, la batalla se acerca a Sion,
            la última ciudad real en el mundo y centro de la resistencia humana.
            Y tiene poco tiempo, muy poco tiempo...
          </p>

          <div className="movie__credits">
            <p>Elenco: Keanu Reeves, Laurence Fishburne... más</p>
            <p>Dirigido por: Lilly Wachowski, Lana Wachowski</p>
          </div>
        </div>
      </div>

      <MovieList title="Más similares" images={imageList.trends} />
    </div>
  );
};
