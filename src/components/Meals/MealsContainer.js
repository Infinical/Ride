import React, { Component } from "react";
import axios from "axios";

export default class MealsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      cart: [],
      cartTotal: 0,
      count: 0,
      total: 0,
      inCart: false
    };

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://tri8-api.herokuapp.com/api/v1/meals.json")
      .then(response => {
        console.log(response);
        this.setState({ meals: response.data });
      })
      .catch(error => console.log(error));
  }
  addToCart(e) {
    count;
  }

  render() {
    return (
      <div>
        {this.state.meals.map(meal => {
          return (
            <div className="py-5">
              <div className="container">
                <div className="row hidden-md-up">
                  <div className="col-md-4">
                    <div className="card" key={meal.id}>
                      <h2>{meal.name}</h2>
                      <img src={meal.image} alt="Meal" />
                      <p>{meal.description}</p>
                      <span className="mr-1">KSH{meal.price}</span>
                      <button className="card-btn" onClick={this.addToCart}>
                        <i className="fas fa-cart-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
