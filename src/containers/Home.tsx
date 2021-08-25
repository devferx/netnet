import React from "react";

import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";

import imageList from "../imageList";

export const Home = () => {
  return (
    <>
      <Hero />
      <MovieList title="Populares en Netnet" images={imageList.popularMovies} />
      <MovieList title="Series japonesas anime" images={imageList.animes} />
      <MovieList
        title="Series de EE.UU. sobre crimenes"
        images={imageList.trends}
      />
    </>
  );
};
