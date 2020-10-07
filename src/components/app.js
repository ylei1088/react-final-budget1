import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/home-page";
import IncomePage from "../pages/income-page";
import CategoryPage from "../pages/category-page";

import Header from "./header";
import Footer from "./footer";

/**
 * The app is responsible for routing and loading
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/income">
          <IncomePage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/category">
          <CategoryPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
