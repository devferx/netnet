import React from "react";
import { BottomBar } from "./components/BottomBar";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <BottomBar />
    </div>
  );
};

export default App;
