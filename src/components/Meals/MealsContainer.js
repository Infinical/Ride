import React, { Component } from "react";
import axios from "axios";

export default class MealsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
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
  render() {
    return (
      <div>
        {this.state.meals.map(meal => {
          return (
            <div className="row">
              <div className="card" key={meal.id}>
                <h2>{meal.name}</h2>
                <p>{meal.description}</p>
                <footer>{meal.price}</footer>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
