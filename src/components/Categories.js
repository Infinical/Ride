import React, { Component } from "react";
import Meals from "./Meals";
import Title from "./Title";
import { CategoriesConsumer } from "../context";
export default class Categories extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Categories" />
            <div className="row">
              <CategoriesConsumer>
                {value => {
                  return value.categories.map(categories => {
                    return (
                      <Meals key={categories.id} categories={categories} />
                    );
                  });
                }}
              </CategoriesConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>

      // <Meals />
    );
  }
}
