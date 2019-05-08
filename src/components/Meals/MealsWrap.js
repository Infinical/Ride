import React, { Component } from "react";
import Meals from "../Meals/Meals";
import Title from "../Title";

export default class MealsWrap extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Available Meals" />
            <div className="row">
              {value => {
                return value.meals.map(meals => {
                  return <Meals key={meals.id} meals={meals} />;
                });
              }}
            </div>
          </div>
        </div>
      </React.Fragment>

      // <Meals />
    );
  }
}
