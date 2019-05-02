import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Meals from "./components/Meals";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Categories />
      <Meals />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>
  );
}

export default App;
