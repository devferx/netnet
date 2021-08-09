import React from "react";

import { Header } from "./Header";
import { BottomBar } from "./BottomBar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Header />
      {children}
      <BottomBar />
    </div>
  );
};
