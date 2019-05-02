import React, { Component } from "react";
import { foodCategories } from "./categories";

const CategoriesContext = React.createContext();

class CategoriesProvider extends Component {
  state = {
    categories: foodCategories
  };

  handleDetail = () => {
    console.log("Hello form detail");
  };

  addToCart = () => {
    console.log("Hello form cart");
  };
  render() {
    return (
      <CategoriesContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

const CategoriesConsumer = CategoriesContext.Consumer;

export { CategoriesProvider, CategoriesConsumer };
