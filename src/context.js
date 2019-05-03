import React, { Component } from "react";
import { foodCategories, mealDetail } from "./categories";

const MealsContext = React.createContext();

class MealsProvider extends Component {
  state = {
    meals: [],
    mealDetail: mealDetail,
    cart: []
  };

  componentDidMount() {
    this.setMeals();
  }
  setMeals = () => {
    let tempMeals = [];
    foodCategories.forEach(item => {
      const singleItem = { ...item };
      tempMeals = [...tempMeals, singleItem];
    });
    this.setState(() => {
      return { meals: tempMeals };
    });
  };

  getMeal = id => {
    const meal = this.state.meals.find(item => item.id === id);
    return meal;
  };
  handleDetail = id => {
    const meal = this.getMeal(id);
    this.setState(() => {
      return { mealDetail: meal };
    });
  };

  addToCart = id => {
    let tempMeal = [...this.state.meals];
    const index = tempMeal.indexOf(this.getMeal(id));
    const meal = tempMeal[index];
    meal.inCart = true;
    meal.count = 1;
    const price = meal.price;
    meal.total = price;

    this.setState(
      () => {
        return { meals: tempMeal, cart: [...this.state.cart], meal };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <MealsContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </MealsContext.Provider>
    );
  }
}

const MealsConsumer = MealsContext.Consumer;

export { MealsProvider, MealsConsumer };
