import React from "react";

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
          <img key={id} src={image} width="192px" />
        ))}
      </div>
    </section>
  );
};
