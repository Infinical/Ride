import React, { Component, Fragment } from "react";
import { Button } from "./Button";
import iziToast from "izitoast";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Passwordc: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordc = this.onChangePasswordc.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 6 &&
      this.state.password === this.state.confirmPassword
    );
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

  onChangePasswordc(event) {
    this.setState({
      Passwordc: event.target.value
    });
  }

  onSignUp() {
    const { Email, Password, Passwordc } = this.state;

    fetch("https://tri8-api.herokuapp.com/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Email,
        password: Password,
        passwordc: Passwordc
      })
    })
      .then(res => res.json())
      .then(json => {
        let message = json;
        // console.log("json", json);
        let errors = message.errors.full_messages;
        let er1 = errors[1];
        let er2 = errors[2];
        iziToast.show({
          theme: "light",
          title: "Error",
          message: er1 || er2,
          position: "topCenter",
          color: "red",
          backgroundColor: "white",
          timeout: 5000
        });
      });
  }

  render() {
    const { Email, Password, Passwordc } = this.state;
    return (
      <React.Fragment>
        <header as="h1" textAlign="center" className="signup-h1">
          Sign Up
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
          <input
            type="password"
            label="Confirm Password"
            value={Passwordc}
            onChange={this.onChangePasswordc}
          />
          <Button label="Sign Up" onClick={this.onSignUp} />
        </form>
      </React.Fragment>
    );
  }
}
