import React, { Component } from "react";
import { Button } from "./Button";
import iziToast from "izitoast";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.Password.length > 6;
  }

  onChangeEmail(event) {
    this.setState({
      Email: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      Password: event.target.value
    });
  }

  onSignIn() {
    const { Email, Password } = this.state;

    fetch("https://tri8-api.herokuapp.com/api/v1/auth/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })
      .then(res => res.json())
      .then(json => {
        let message = json;
        let errors = message.errors;
        errors = errors.toString();
        iziToast.show({
          theme: "light",
          title: "Error",
          message: errors,
          position: "topCenter",
          color: "red",
          backgroundColor: "white",
          timeout: 5000
        });
      });
  }
  render() {
    const { Email, Password } = this.state;
    return (
      <React.Fragment>
        <header as="h1" textAlign="center" className="signin-h1">
          Sign In
        </header>
        <form>
          <input
            type="email"
            label="Email"
            placeholder="email@email.com"
            value={Email}
            onChange={this.onChangeEmail}
          />
          <input
            type="password"
            label="Password"
            onChange={this.onChangePassword}
            value={Password}
          />
          <Button label="Sign In" onClick={this.onSignIn} />
        </form>
      </React.Fragment>
    );
  }
}
