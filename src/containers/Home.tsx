import React from "react";

import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";

export const Home = () => {
  return (
    <>
      <Hero />
      <MovieList title="Populares en Netnet" />
      <MovieList title="Series japonesas anime" />
      <MovieList title="Series de EE.UU. sobre crimenes" />
    </>
  );
};
