import React, { Component } from "react";
import CategoriesContainer from "./CategoriesContainer";

export default class Categories extends Component {
  render() {
    return (
      <div className="text-title">
        <h1>Categories</h1>
        <CategoriesContainer />
      </div>
    );
  }
}
