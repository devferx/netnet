import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  images: string[];
}

export const MovieList = ({ title, images }: Props) => {
  return (
    <section className="list-movies">
      <h3 className="list-movies__title">{title}</h3>
      <div className="list-movies__container">
        {images.map((image, id) => (
          <Link key={id} to="/movie">
            <img src={image} width="192px" />
          </Link>
        ))}
      </div>
    </section>
  );
};
