import React from "react";

import bob from "../assets/images/covers/bob.png";
import dragon from "../assets/images/covers/dragon.png";
import john from "../assets/images/covers/john.png";
import maxtrix from "../assets/images/covers/matrix.png";
import santa from "../assets/images/covers/santa.png";
import spiderMan from "../assets/images/covers/spider-man.png";

interface Props {
  title: string;
}

const images = [bob, dragon, john, maxtrix, santa, spiderMan];

export const MovieList = ({ title }: Props) => {
  return (
    <section className="list-movies">
      <h3 className="list-movies__title">{title}</h3>
      <div className="list-movies__container">
        {images.map((image, id) => (
          <img key={id} src={image} />
        ))}
      </div>
    </section>
  );
};
