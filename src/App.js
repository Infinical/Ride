import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Home from "./components/Home";

import Categories from "./components/Categories/Categories";
import Meals from "./components/Meals/Meals";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/categories" component={Categories} />
        <Route path="/meals" component={Meals} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
