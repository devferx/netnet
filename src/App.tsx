import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./containers/Home";
import { Movie } from "./containers/Movie";
import { NotFound } from "./containers/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie" component={Movie} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
