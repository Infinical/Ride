import React, { Component } from "react";
import MealsContainer from "./MealsContainer";
import Title from "../Title";
import axios from "axios";
import styled from "styled-components";

export default class MealsWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
  }

  componentDidMount() {
    axios
      .get("https://tri8-api.herokuapp.com/api/v1/meals")
      .then(response => {
        this.setState({ meals: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Available Meals" />
            <div className="row">
              {this.state.meals.map(meal => {
                return (
                  <div className="container">
                    <Meals className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                      <div className="card">
                        <div className="img-container p-5">
                          <img
                            src={meal.image}
                            alt="Meals"
                            className="card-img-top"
                          />
                        </div>
                        <button
                          className="card-btn"
                          onClick={() => {
                            meal.addToCart(meal.id);
                          }}
                        >
                          <i className="fas fa-cart-plus" />
                        </button>
                        <div className="card-footer d-flex justify-content-between">
                          <p className="align-self-center mb-0">{meal.name}</p>
                          <h5 className="text-red font-italic mb-0">
                            <span className="mr-1">KSH{meal.price}</span>
                          </h5>
                        </div>
                      </div>
                    </Meals>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>

      // <Meals />
    );
  }
}

const Meals = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.3)
  }
  .card-img-top{
    transition: all 1s linear;
  }
  .card-btn{
    position:absolute
    bottom: 0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlack);
    color:white;
    font-size: 1.4rem;
    border-radius: 0.6rem 0 0 0;
  }
`;
