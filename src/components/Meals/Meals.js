import React, { Component } from "react";
import MealsContainer from "./MealsContainer";

export default class Meals extends Component {
  render() {
    return (
      <div className="text-title">
        <h1>Meals</h1>
        <MealsContainer />
      </div>
    );
  }
}
