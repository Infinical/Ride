import React, { Component } from "react";
import { foodCategories, mealDetail } from "./categories";

const CategoriesContext = React.createContext();

class CategoriesProvider extends Component {
  state = {
    categories: [],
    mealDetail: mealDetail,
    cart: []
  };

  componentDidMount() {
    this.setCategories();
  }
  setCategories = () => {
    let tempCategories = [];
    foodCategories.forEach(item => {
      const singleItem = { ...item };
      tempCategories = [...tempCategories, singleItem];
    });
    this.setState(() => {
      return { categories: tempCategories };
    });
  };

  getMeal = id => {
    const meal = this.state.categories.find(item => item.id === id);
    return meal;
  };
  handleDetail = id => {
    const meal = this.getMeal(id);
    this.setState(() => {
      return { mealDetail: meal };
    });
  };

  addToCart = id => {
    let tempMeal = [...this.state.categories];
    const index = tempMeal.indexOf(this.getMeal(id));
    const meal = tempMeal[index];
    meal.inCart = true;
    meal.count = 1;
    const price = meal.price;
    meal.total = price;

    this.setState(
      () => {
        return { categories: tempMeal, cart: [...this.state.cart], meal };
      },
      () => {
        console.log(this.state);
      }
    );
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
