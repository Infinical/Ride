import React, { Component } from "react";
import axios from "axios";

export default class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios
      .get("https://tri8-api.herokuapp.com/api/v1/categories.json")
      .then(response => {
        console.log(response);
        this.setState({ categories: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        {this.state.categories.map(category => {
          return (
            <div className="card" key={category.id}>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
