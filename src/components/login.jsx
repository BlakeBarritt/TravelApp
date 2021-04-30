import * as React from "react"
import { Link, navigate } from '@reach/router'
import Button from "./button"
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../components/formContainer.css"
import "../components/submitButton.css"

function validate(email, password, passwordConfirm) {
  // true means invalid, so our conditions got reversed
  return {
    email: email.length <= 10,
    password: password.length === 0,
    passwordConfirm: passwordConfirm !== password
  };
}

export default class SecondPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",

      touched: {
        email: false,
        password: false,
        passwordConfirm: false
      }
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handlePasswordConfirmChange = evt => {
    this.setState({ passwordConfirm: evt.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    // const { email, password } = this.state;
    navigate("/services/")
    // alert(`Signed up with email: ${email} password: ${password}`);
  };

  canBeSubmitted() {
    const errors = validate(
      this.state.email,
      this.state.password,
      this.state.passwordConfirm
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(
      this.state.email,
      this.state.password,
      this.state.passwordConfirm
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
        <container className = "formContainer"> 
            <form onSubmit={this.handleSubmit}>
                <p class = "formInput"> 
                  <input
                      className={shouldMarkError("email") ? "error" : ""}
                      type="text"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.handleEmailChange}
                      onBlur={this.handleBlur("email")}
                  />
                </p>
                <p class = "formInput"> 
                  <input
                      className={shouldMarkError("password") ? "error" : ""}
                      type="password"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      onBlur={this.handleBlur("password")}
                  />
                </p>
                <p class = "formInput"> 
                  <input
                      className={shouldMarkError("passwordConfirm") ? "error" : ""}
                      type="password"
                      placeholder="Confirm password"
                      value={this.state.passwordConfirm}
                      onChange={this.handlePasswordConfirmChange}
                      onBlur={this.handleBlur("passwordConfirm")}
                  />
                </p>
                <button class = "submitButton" disabled={isDisabled}>Sign up</button>
            </form>
        </container>
    );
  }
}
